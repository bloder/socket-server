var app = require('http').createServer();
var redis = require('redis').createClient();
var io = require('socket.io')(app);

app.listen(5001);

redis.subscribe('rt-change');

redis.on('message', function(channel, message){
   var info = JSON.parse(message);
   io.sockets.emit(channel, info);
   console.log('emit '+ channel);
});

io.sockets.on('connection', function(socket){
 console.log('connected socket')

 socket.on('rt-change', function(data){
   console.log('hueheu       '+data)
 });

 socket.on('disconnect', function(){
 console.log('disconnected from socket')
 socket.disconnect();
 });
});
