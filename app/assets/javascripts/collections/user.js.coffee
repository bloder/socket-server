app.collections.User = Backbone.Collection.extend
  model : app.models.User
  url : '/user.json'

  initialize : () ->
    app.on 'user', @handle_change, @

  handle_change : (user) ->
    switch user.action
      when 'create'
        @add user.obj
      when 'update'
        model = @get user.id
        model.set user.obj
      when 'destroy'
        @remove user.obj
