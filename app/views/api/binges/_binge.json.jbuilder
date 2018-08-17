json.extract! binge, :id, :description, :url, :link_url, :author_id
json.photoUrl url_for(binge.photo)

json.author do
  json.extract! binge.author, :username, :id
  json.photoUrl url_for(binge.author.photo)
end
