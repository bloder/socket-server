var app = require('http').createServer();
var port = process.env.PORT || 8000;
var redis = require('redis').createClient();
var io  = require('socket.io').listen(app, {
    "transports": ['websocket',
                   'flashsocket',
                   'htmlfile',
                   'xhr-polling',
                   'jsonp-polling',
                   'polling'],
    "polling duration": 10
});

redis.subscribe('user-created');

app.listen(port);

redis.on('message', function(channel, message){
   var info = JSON.parse(message);
   io.sockets.emit('user-created', info);
   console.log('emit '+ channel);
});

io.sockets.on('user-created', function(data){
  console.log('hueheu       '+data)
});

io.sockets.on('connection', function(socket){
 console.log('connected socket')

 socket.on('disconnect', function(){
 console.log('disconnected from socket')
 socket.disconnect();
 });
});
