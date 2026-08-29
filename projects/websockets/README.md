HTTP vs WebSocket

This distinction is extremely important.

Feature	HTTP	WebSocket
Communication	Request/response	Full-duplex
Connection	Usually short-lived/logical requests	Persistent
Server can initiate messages?	Not normally	Yes
Real-time	Not inherently	Yes
Typical use	REST APIs, websites	Chat, games, live updates
Protocol	HTTP/HTTPS	WS/WSS
Overhead per message	HTTP headers etc.	Small WebSocket frames

The terms you'll encounter are:

ws://
wss://

Similar to:

http://
https://

wss:// is the encrypted version of WebSocket, analogous to HTTPS.


But how does a WebSocket connection actually start?

This is where things get interesting.

A WebSocket connection typically starts as an HTTP request.

The client sends something like:

GET /socket HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: abc123...
Sec-WebSocket-Version: 13

Notice:

Upgrade: websocket

The client is effectively saying:

"I'd like to upgrade this HTTP connection into a WebSocket connection."

The server responds:

HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: ...

The important status code is:

101 Switching Protocols

After that, communication switches from HTTP messages to WebSocket frames.

Conceptually:

HTTP
 │
 │ Upgrade request
 ↓
HTTP server
 │
 │ 101 Switching Protocols
 ↓
WebSocket connection
 │
 ├── frame
 ├── frame
 ├── frame
 └── frame

This initial process is called the WebSocket handshake.

WebSocket is not the same thing as TCP

This distinction matters.

TCP gives you:

A reliable ordered byte stream.

WebSocket gives you:

A message-oriented protocol built on top of TCP.

For example, your application might send:

Hello

WebSocket provides framing so the receiver knows where that message belongs.

TCP itself doesn't understand:

"Hello"
"How are you?"
"Bye"

TCP just sees a stream of bytes.

WebSocket adds structure on top.


Binary messages

WebSockets aren't limited to strings.

They can transmit binary data.

For example:

Client
  |
  | binary audio
  ↓
Server

Possible uses:

Audio
Video
Images
Game state
Sensor data
Binary protocols
Files

For many ordinary applications, however, JSON text messages are simpler.


Full-duplex communication

This is one of the defining characteristics of WebSockets.

Full-duplex means both sides can send simultaneously.

For example:

Client                         Server
  |                              |
  | -------- message ----------> |
  |                              |
  | <------- message ----------- |
  |                              |
  | -------- message ----------> |
  | <------- message ----------- |

The server doesn't have to wait for a client request before sending something.

This is fundamentally different from the normal HTTP request/response model.


Heartbeats

In production systems you'll frequently hear about a heartbeat.

A heartbeat essentially means:

Periodically verify that the connection is still alive.

For example:

Every 30 seconds:

Server → Ping
Client → Pong

If the client stops responding:

Server
  |
  | Ping
  X

the server may eventually terminate the connection.

This helps prevent stale connections.