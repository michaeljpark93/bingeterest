json.extract! user, :id, :username
json.photoUrl url_for(user.photo) if user.photo

json.user_binges do
  user.binges.each do |binge|
    json.set! binge.id do
      json.partial! 'api/binges/binge.json.jbuilder', binge: binge
    end
  end
end

json.user_boards do
  user.boards.each do |board|
    json.set! board.id do
      json.partial! 'api/boards/board.json.jbuilder', board: board
    end
  end
end

json.followers do
  user.followers.each do |follower|
    json.set! follower.id do
      json.extract! follower, :id
    end
  end
end

json.followees do
  user.followees.each do |followee|
    json.set! followee.id do
      json.extract! followee, :id
    end
  end
end

if current_user
  if user.followers.exists?(id: current_user.id)
    json.followed true
  else
    json.followed false
  end
end