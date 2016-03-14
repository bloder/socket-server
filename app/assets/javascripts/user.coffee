window.app.nodejs = {
  connect : function(){
    window.app.socket = io.connect("http://localhost:4000");

    window.app.socket.on("rt-change", function(user){
      window.app.trigger(user.resource, user);
    });
  }
}
