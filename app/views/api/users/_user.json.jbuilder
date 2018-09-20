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
