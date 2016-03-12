var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var redis = require('redis');
var redisClient = redis.createClient();

    http.listen(4000);

redisClient.subscribe('user-data');

app.get('/', function(req, res){
  console.log('connected');
});

io.on('connection', function(socket){
  console.log('a user connected');
  redisClient.on('user', function(channel, user){
     socket.emit('user-data', JSON.parse(user));
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
