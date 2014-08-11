#!/usr/local/bin/node

var io = require('socket.io-client');
socket = io.connect('ws://localhost:8080');


socket.on('connect', function(){
        console.log('0 Websocket up=0 OK');
        socket.disconnect();
  });
socket.on('error', function(err){
        console.log("2 Websocket up=2 CRITICAL");
  });
