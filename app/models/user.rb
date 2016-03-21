class User < ActiveRecord::Base

  after_create {
    $redis.publish 'rt-change', user: User.new(@user).to_json
  }
end
