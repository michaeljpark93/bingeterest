json.board do
  json.set! :user_photo_url, @board.user.photoUrl
  json.set! :username, @board.user.username
  json.extract! @board, :id, :name, :description, :category, :user_id

  json.binges do
    @board.binges.each do |binge|
      json.set! binge.id do
        json.partial! 'api/binges/binge', binge: binge
      end
    end
  end
end

json.binge do
  json.set! :author_photo_url, @binge.author.photoUrl 
  json.set! :username, @binge.author.username
  json.extract! @binge, :id, :description, :url, :link_url, :author_id

  json.bingings do
    @binge.boards.each do |board|
      json.set! board.id, board.id
    end
  end
end
