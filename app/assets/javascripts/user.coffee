window.app.user = {
  connect : function(){
    window.app.socket = io.connect("http://0.0.0.0:3000");

    window.app.socket.on("user-data", function(message){
      window.app.trigger(message.resource, message);
    });
  }
}
