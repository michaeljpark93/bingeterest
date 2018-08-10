json.extract! binge, :id, :title, :description, :url, :link_url, :author_id

json.author binge.author, :id, :username
