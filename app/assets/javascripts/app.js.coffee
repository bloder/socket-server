$ () ->
  start = () ->
    app.server.connect();
    booksRouter = new app.routers.User();
    Backbone.history.start({pushState: true});

  start();
