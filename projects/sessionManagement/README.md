# Session Authentication Fundamentals

The goal is to understand what a session is, why we use it, how the
browser and server communicate using a session ID, and what happens
during login, authenticated requests, logout, expiration, and
multiple-device sessions.

------------------------------------------------------------------------

## 1. The Core Idea

The most important concept to remember is:

> **The server stores the session. The browser usually stores only a
> session identifier.**

The browser does not need to store the complete authentication state.

Instead:

``` text
Browser
   │
   │ sessionId
   ↓
Server
   │
   │ lookup session
   ↓
MongoDB
   │
   │ userId
   ↓
User
```

The browser sends a session ID, and the server uses that ID to find the
corresponding session in MongoDB.

------------------------------------------------------------------------

# 2. User vs Session

A **user** is a database entity.

For example:

``` javascript
User
{
    _id: "64abc...",
    name: "Sudheer",
    email: "sudheer@example.com"
}
```

A **session** is temporary authentication state.

For example:

``` javascript
Session
{
    _id: "xyz123",
    userId: "64abc...",
    createdAt: "...",
    expiresAt: "..."
}
```

The relationship is:

``` text
Session
   │
   │ userId
   ↓
User
```

The session tells the server:

> "This session belongs to this user."

------------------------------------------------------------------------

# 3. One User Can Have Multiple Sessions

A single user can log in from multiple devices.

For example:

``` text
Sudheer's laptop
        ↓
     Session A


Sudheer's phone
        ↓
     Session B


Sudheer's tablet
        ↓
     Session C
```

All three sessions can belong to the same user.

For example:

``` text
Session A
sessionId: abc123
userId: user001

Session B
sessionId: xyz789
userId: user001

Session C
sessionId: qwe456
userId: user001
```

So:

``` text
                 ┌── Session A
                 │
User ────────────┼── Session B
                 │
                 └── Session C
```

This is useful because each device/browser can have its own session.

------------------------------------------------------------------------

# 4. Where Is the Session Stored?

In our implementation, the session is stored in MongoDB.

For example, the `sessions` collection might contain:

``` text
sessions
─────────────────────────────────────────────

sessionId: abc123
userId: 64abc123
expiresAt: ...

sessionId: xyz789
userId: 64abc123
expiresAt: ...

sessionId: qwe456
userId: 987xyz456
expiresAt: ...
```

The browser only needs something like:

``` text
sessionId=abc123
```

Therefore:

``` text
Browser
   │
   │ sessionId=abc123
   ↓
Server
   │
   │ find session
   ↓
MongoDB
   │
   │ abc123 → userId
   ↓
User
```

------------------------------------------------------------------------

# 5. What Exactly Happens During Login?

Let's go through the complete lifecycle.

Suppose the user is:

``` text
User:
Sudheer

User ID:
64abc123
```

The user sends:

``` http
POST /login
```

with:

``` json
{
    "email": "sudheer@example.com",
    "password": "password"
}
```

------------------------------------------------------------------------

## Step 1 --- Find the User

Express searches MongoDB:

``` javascript
users.findOne({
    email: "sudheer@example.com"
})
```

MongoDB returns something like:

``` javascript
User
{
    _id: "64abc123",
    email: "sudheer@example.com",
    ...
}
```

At this point, the server knows which user is attempting to log in.

------------------------------------------------------------------------

## Step 2 --- Verify the Password

The server compares the submitted password with the stored password
hash.

If the password is correct:

``` text
Authentication successful
```

If the password is incorrect:

``` text
Authentication failed
```

No session should be created when authentication fails.

------------------------------------------------------------------------

## Step 3 --- Generate a Random Session ID

After successful authentication, the server generates a random session
ID.

For example:

``` text
f4a8c7e91b2d...
```

The session ID should be:

-   Random
-   Unpredictable
-   Sufficiently long
-   Generated using a cryptographically secure random generator

For example, Node.js provides:

``` javascript
import crypto from "crypto";

const sessionId = crypto
    .randomBytes(32)
    .toString("hex");
```

The important point is that users should not be able to guess another
user's session ID.

------------------------------------------------------------------------

## Step 4 --- Store the Session in MongoDB

The server creates a session:

``` text
sessions
─────────────────────────────
sessionId: f4a8c7e91b2d...
userId: 64abc123
expiresAt: ...
```

MongoDB now knows:

``` text
f4a8c7e91b2d... → 64abc123
```

This is the key relationship.

The session ID identifies the session, and the session points to the
user.

------------------------------------------------------------------------

## Step 5 --- Send the Session ID to the Browser

The server sends a cookie:

``` http
Set-Cookie: sessionId=f4a8c7e91b2d...
```

The browser stores the cookie.

The browser does not need to know the user's database ID.

It simply stores:

``` text
sessionId=f4a8c7e91b2d...
```

------------------------------------------------------------------------

# 6. What Happens on the Next Request?

The user now requests:

``` http
GET /profile
```

The browser automatically sends the cookie:

``` http
Cookie: sessionId=f4a8c7e91b2d...
```

Express receives the request.

Our authentication middleware extracts:

``` text
f4a8c7e91b2d...
```

Then it searches MongoDB:

``` javascript
sessions.findOne({
    sessionId: "f4a8c7e91b2d..."
})
```

MongoDB returns:

``` javascript
{
    sessionId: "f4a8c7e91b2d...",
    userId: "64abc123"
}
```

Now we know:

``` text
session → user
```

The server can then find the user:

``` javascript
users.findById("64abc123")
```

Then attach the user to the request:

``` javascript
req.user = user;
```

The request flow becomes:

``` text
GET /profile
        ↓
authentication middleware
        ↓
session ID
        ↓
session lookup
        ↓
user ID
        ↓
user lookup
        ↓
req.user
        ↓
controller
        ↓
response
```

This is the fundamental mechanism behind server-side session
authentication.

------------------------------------------------------------------------

# 7. The Entire Login System

Here is the complete login flow:

``` text
                    LOGIN

Browser
   │
   │ email + password
   ↓
Express
   │
   │ find user
   ↓
MongoDB
   │
   │ user found
   ↓
Express
   │
   │ verify password
   │
   │ generate sessionId
   │
   │ save session
   ↓
MongoDB
   │
   │ sessionId → userId
   ↓
Express
   │
   │ Set-Cookie
   ↓
Browser
```

After login, the browser has the session ID and the server has the
session data.

------------------------------------------------------------------------

# 8. Authenticated Request

After login, the user requests:

``` http
GET /profile
```

The complete flow is:

``` text
                 GET /profile

Browser
   │
   │ Cookie: sessionId=abc123
   ↓
Express
   │
   │ sessionId
   ↓
MongoDB
   │
   │ abc123 → userId
   ↓
Express
   │
   │ userId
   ↓
MongoDB
   │
   │ user
   ↓
Express
   │
   │ req.user = user
   ↓
Controller
   │
   ↓
Response
```

That's the basic session authentication cycle.

------------------------------------------------------------------------

# 9. What Happens When the User Logs Out?

This is another major advantage of server-side sessions.

Suppose the browser contains:

``` text
sessionId=abc123
```

And MongoDB contains:

``` text
abc123 → user001
```

The user sends:

``` http
POST /logout
```

The server can delete the session:

``` javascript
await Session.deleteOne({
    sessionId
});
```

And clear the cookie:

``` javascript
res.clearCookie("sessionId");
```

Now:

``` text
Browser
sessionId = removed
```

and:

``` text
MongoDB
abc123 = removed
```

The session is gone.

------------------------------------------------------------------------

# 10. Why Is Deleting the Server Session Powerful?

Suppose someone somehow gets an existing session ID.

Before logout:

``` text
abc123 → user001
```

The session is valid.

After logout:

``` text
abc123 → nothing
```

So even if a request contains:

``` http
Cookie: sessionId=abc123
```

the server looks for the session and finds nothing.

The result is:

``` text
Session not found
```

Authentication fails.

This is one of the important advantages of server-side sessions:

> The server can invalidate a session by deleting the server-side
> session data.

------------------------------------------------------------------------

# 11. Session Expiration

Sessions should not live forever.

For example, a session can have:

``` javascript
expiresAt: new Date(
    Date.now() + 1000 * 60 * 60
)
```

This represents a one-hour expiration period.

The session looks like:

``` javascript
{
    sessionId: "abc123",
    userId: "64abc123",
    expiresAt: "..."
}
```

When the authentication middleware receives a request, it can check:

``` javascript
if (session.expiresAt < new Date()) {
    // Session has expired
}
```

If expired, the server rejects the request.

------------------------------------------------------------------------

# 12. MongoDB TTL Index

MongoDB supports **TTL indexes**.

We can define:

``` javascript
expiresAt: {
    type: Date,
    required: true,
    index: {
        expires: 0
    }
}
```

MongoDB can then automatically remove the session document after
`expiresAt` is reached.

Without automatic cleanup, the database could accumulate:

``` text
sessions
────────────────
expired session
expired session
expired session
expired session
expired session
...
```

With a TTL index, MongoDB can automatically clean up expired session
documents.

This is very useful in real applications.

------------------------------------------------------------------------

# 13. One User Can Have Many Sessions

Suppose Sudheer logs in from his laptop:

``` text
Laptop

Session:
abc123 → user001
```

Then he logs in from his phone:

``` text
Phone

Session:
xyz789 → user001
```

MongoDB might contain:

``` text
sessions

abc123 → user001
xyz789 → user001
```

Both sessions belong to the same user.

The relationship is:

``` text
                  ┌── abc123
                  │
user001 ──────────┤
                  │
                  └── xyz789
```

This allows the application to support multiple active devices.

------------------------------------------------------------------------

# 14. Active Sessions

Because each login can create a separate session, we can eventually
build an interface such as:

``` text
Active Sessions

Chrome - Linux
Firefox - Windows
Mobile
```

The user could then choose:

``` text
Logout this device
```

or:

``` text
Logout all devices
```

------------------------------------------------------------------------

# 15. Logout One Device

If we know the current session ID:

``` javascript
await Session.deleteOne({
    sessionId
});
```

Only that session is deleted.

Other devices remain logged in.

For example:

``` text
Before:

abc123 → user001   ← Laptop
xyz789 → user001   ← Phone
qwe456 → user001   ← Tablet
```

Logout laptop:

``` text
After:

abc123 → deleted
xyz789 → user001   ← Phone
qwe456 → user001   ← Tablet
```

------------------------------------------------------------------------

# 16. Logout All Devices

To log out every session belonging to a user:

``` javascript
await Session.deleteMany({
    userId: user._id
});
```

Before:

``` text
abc123 → user001
xyz789 → user001
qwe456 → user001
```

After:

``` text
No sessions for user001
```

The user is effectively logged out from all devices.

This is a very practical feature for real applications.

------------------------------------------------------------------------

# 17. The Most Important Mental Model

Remember this diagram:

``` text
              ┌───────────────────┐
              │      Browser      │
              │                   │
              │ Cookie            │
              │ sessionId=ABC123  │
              └─────────┬─────────┘
                        │
                        │ HTTP request
                        ↓
              ┌───────────────────┐
              │      Express      │
              │                   │
              │ Read cookie       │
              │      ↓            │
              │ sessionId=ABC123  │
              └─────────┬─────────┘
                        │
                        │ lookup
                        ↓
              ┌───────────────────┐
              │     MongoDB       │
              │                   │
              │ Sessions          │
              │                   │
              │ ABC123            │
              │    ↓              │
              │ userId=USER001    │
              └─────────┬─────────┘
                        │
                        │ find user
                        ↓
              ┌───────────────────┐
              │      Users        │
              │                   │
              │ USER001           │
              │ name: Sudheer     │
              └───────────────────┘
```

------------------------------------------------------------------------

# 18. Cookie vs Session

Do not confuse these two concepts.

### Cookie

The browser stores something like:

``` text
sessionId=ABC123
```

### Session

The server stores something like:

``` text
{
    sessionId: "ABC123",
    userId: "USER001",
    expiresAt: "..."
}
```

Therefore:

``` text
Cookie = identifier
Session = server-side authentication state
```

The cookie helps the server find the session.

------------------------------------------------------------------------

# 19. Fundamental Request Flow

Every authenticated request follows roughly this process:

``` text
1. Browser sends request
        ↓
2. Browser automatically sends session cookie
        ↓
3. Express reads sessionId
        ↓
4. Server searches for the session
        ↓
5. Server gets userId
        ↓
6. Server finds the user
        ↓
7. Server attaches user to req.user
        ↓
8. Controller executes
        ↓
9. Response is returned
```

In code, the important idea is:

``` javascript
const sessionId = req.cookies.sessionId;

const session = await Session.findOne({
    sessionId
});

const user = await User.findById(
    session.userId
);

req.user = user;

next();
```

This is the heart of the system.

------------------------------------------------------------------------

# 20. Complete Mental Model

Think of sessions like a cloakroom.

You give the cloakroom your bag:

``` text
Login
   ↓
Server creates session
```

The cloakroom gives you a ticket:

``` text
sessionId = ABC123
```

You keep the ticket:

``` text
Browser cookie
```

The cloakroom keeps your bag:

``` text
Server / Database
```

Later, you return with the ticket:

``` text
ABC123
```

The staff uses the ticket to find your bag:

``` text
ABC123 → your session → your user
```

That is essentially what session authentication does.

------------------------------------------------------------------------

# 21. Session Authentication in One Sentence

> **A session allows the server to remember an authenticated client
> across otherwise stateless HTTP requests by storing authentication
> state on the server and giving the client a session identifier to send
> with subsequent requests.**

------------------------------------------------------------------------

# 22. What We Will Build

A practical implementation can be built in this order:

``` text
1. User model
2. Session model
3. Register
4. Login
5. Generate secure session ID
6. Store session in MongoDB
7. Send session ID as HTTP-only cookie
8. Authentication middleware
9. GET /me
10. Protected routes
11. Logout
12. Session expiration
13. MongoDB TTL index
14. Multiple sessions
15. Logout one device
16. Logout all devices
17. Session security
18. Session fixation
19. CSRF protection
20. express-session
21. Redis session store
22. Session vs JWT
```

The most important concepts to understand first are:

``` text
Browser
   │
   │ sessionId
   ↓
Express
   │
   │ find session
   ↓
MongoDB
   │
   │ userId
   ↓
User
```

