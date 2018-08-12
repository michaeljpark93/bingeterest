json.set! :owner_username, board.owner.username
json.extract! board, :id, :title, :description, :user_id

json.binges do
  board.binges.each do |pin|
    json.set! binge.id do
      json.partial! 'api/binges/binge.json.jbuilder', binge: binge
    end
  end
end
