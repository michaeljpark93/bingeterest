json.extract! binge, :id, :description, :url, :link_url, :author_id
json.photoUrl url_for(binge.photo) if binge.photo.attached?
json.set! :author_username, binge.author.username
json.set! :author_photo, url_for(binge.author.photo) if binge.author.photo.attached?