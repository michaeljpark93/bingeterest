json.extract! user, :id, :username, :age

# json.photoUrl url_for(user.photo)
#
# json.user_binges do
#   user.user_binges.each do |pin|
#     json.set! binge.id do
#       json.partial! 'api/binges/binge.json.jbuilder', binge: binge
#     end
#   end
# end
