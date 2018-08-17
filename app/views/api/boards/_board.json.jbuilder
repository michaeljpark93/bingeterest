json.extract! board, :id, :name, :description, :category, :user_id, :secret

json.set! :user, board.user.username

json.binges do
  board.binges.each do |binge|
    json.set! binge.id do
      json.partial! 'api/binges/binge.json.jbuilder', binge: binge
    end
  end
end
