json.extract! binge, :id, :description, :url, :link_url, :author_id
json.photoUrl url_for(binge.photo)
# json.board_id binge.board.id
# json.board_binges binge.board.binges

json.author do
  json.extract! binge.author, :username, :id
  json.photoUrl url_for(binge.author.photo)
end
#
# json.board do
#   json.extract! binge.board, :name, :id
# end
