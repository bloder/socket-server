class User < ActiveRecord::Base

  def user action
  msg = { resource: 'user',
          action: action,
          id: self.id,
          obj: self }

  $redisClient.publish 'user-data', msg.to_json
  end
end
