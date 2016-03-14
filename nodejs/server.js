var io = require('socket.io').listen(4000),
    redis = require('redis').createClient();

redis.subscribe('rt-change');

io.on('connection', function(socket){
  console.log('In socket');
  redis.on('user', function(channel, user){
    console.log('In redis');
    socket.emit('rt-change', JSON.parse(user));
  });
});
