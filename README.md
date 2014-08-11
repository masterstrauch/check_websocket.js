check_websocket.js
==================

simple Nagios Check - checks if a websocket is running

only tested against socket.io!

Installation

1. create a directory for the check, e.g. "mkdir websocket_check"
2. install socket.io-client in this directory, e.g. "npm instal socket.io-client"<br>
    <b>old socket.io Version ?!</b>: you need to install an older client! for example a server which run socket.io 0.9.14:<br>
    "npm install socket.io-client@0.9.14"
3. copy "check_websocket.js"-File into the directory
4. done (maybe you need to change the port)
 

For performance-monitoring I suggest to integrate https://github.com/lorenwest/node-monitor . Maybe I will add performance in the next version.

