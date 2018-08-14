json.extract! binge, :id, :description, :url, :link_url, :author_id
json.photoUrl url_for(binge.photo)
json.author binge.author, :id, :username
