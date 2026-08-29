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