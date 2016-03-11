var
    app         = require('express')(),
    http        = require('http').Server(app);
    io 	        = require('socket.io')(http),
    redis       = require('redis'),
    fs          = require('fs'),
    redisClient = redis.createClient();

http.listen(3000);

io.on('connection', function(socket){
  console.log('a user connected');
});
