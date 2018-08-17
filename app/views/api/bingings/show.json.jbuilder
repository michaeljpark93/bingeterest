json.board do
  json.set! :user_image_url, @board.user.image_url
  json.set! :user_username, @board.user.username
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
  json.set! :author_image_url, @binge.author.image_url
  json.set! :author_username, @binge.author.username
  json.extract! @binge, :id, :description, :url, :link_url, :author_id

  json.bingings do
    @binge.boards.each do |board|
      json.set! board.id, board.id
    end
  end
end
