json.users do
  json.set! @user.id do
    json.partial! 'api/users/user', user: @user
  end
end

json.following do
  @user.following.each do |followed_person|
    json.set! followed_person.id do
      json.partial! 'api/users/user', user: follower
    end
  end
end

json.users do
  @user.following.each do |follower|
    json.set! follower.id do
      json.partial! 'api/users/user', user: follower
    end
  end
end
