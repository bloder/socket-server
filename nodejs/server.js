var
    app         = require('http').createServer(handler),
    io 	        = require('socket.io')(app),
    redis       = require('redis'),
    fs          = require('fs'),
    redisClient = redis.createClient();

app.listen(3000);

io.on('connection', function(socket) {
    socket.emit('welcome',  { message: 'Realtime Server!'} );
