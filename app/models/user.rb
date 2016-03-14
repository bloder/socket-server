class User < ActiveRecord::Base
  after_create {|user| user.user 'create' }
  after_update {|user| user.user 'update' }
  after_destroy {|user| user.user 'destroy' }

  def user action
  msg = { resource: 'user',
          action: action,
          id: self.id,
          obj: self }

  $redis.publish 'rt-change', msg.to_json
  end
end
