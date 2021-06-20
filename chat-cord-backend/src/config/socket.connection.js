const express = require('express');
const http = require('http').Server(express);
const io = require('socket.io')(http);

io.on('connection', () => {
    console.log('Socket connection Successfull');
});



module.exports = io;
