json.binges do
  json.array!(@search_results[:binges]) do |binge|
    json.id binge.id
    json.description binge.description
    json.link_url binge.link_url
    json.author_id binge.author_id
    json.photoUrl url_for(binge.photo) if binge.photo.attached?
  end
end

json.boards do
  json.array!(@search_results[:boards]) do |board|
    json.id board.id
    json.name board.name
    json.description board.description
    json.category board.category
    json.secret board.secret
    json.user_id board.user_id
  end
end

json.users do
  json.array!(@search_results[:users]) do |user|
    json.id user.id
    json.username user.username
    json.description user.description
    json.photoUrl url_for(user.photo) if user.photo.attached?
  end
end