class User < ActiveRecord::Base

  after_create {
    $redis.publish 'rt-change', user: User.new(
    id: self.id,
    name: self.name,
    age: self.age,
    created_at: self.created_at,
    updated_at: self.updated_at).to_json
  }
end
