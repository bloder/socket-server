var redis = require('redis').createClient();
var io = require('socket.io').listen(5001);

redis.subscribe('rt-change');

io.on('connection', function(socket){
 console.log('connected socket')
 socket.on('disconnect', function(){
 console.log('client disconnected')
 socket.disconnect();
 });
});

redis.on('message', function(channel, message){
   io.sockets.emit(channel, message);
   console.log('emit '+ message);
});
