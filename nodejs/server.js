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
});
