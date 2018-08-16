json.followed do
  json.partial! 'api/follows/follow', follow: @follow
end
