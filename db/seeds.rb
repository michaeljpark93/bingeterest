require 'net/http'
  User.delete_all
  puts 'creating users'

  demo_user = User.new(username: 'Guest', description: 'Demo Login', password: 'password', age: 100)
  html_response = Net::HTTP.get_response(URI.parse('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/demo-user.jpg'))
  file = StringIO.new(html_response.body)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/demo-user.jpg')
  demo_user.photo.attach(io: file, filename: 'demo-user.jpg')
  demo_user.save!

  # user2 = User.create!(username: 'Michaeljpark', description: 'Binge Masta', password: 'password', age: 24)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/michaeljpark.jpg')
  # user2.photo.attach(io: file, filename: 'michaeljpark.jpg')
  # user2.save!
  #
  # user3 = User.new(username: 'Olivia Culpo', description: 'Miss Universe 2012', password: 'password', age: 26)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/olivia-culpo.jpg')
  # user3.photo.attach(io: file, filename: 'olivia-culpo.jpg')
  # user3.save!
  #
  # user4 = User.new(username: 'Gordon Ramsay', description: 'cooking is not for everyone', password: 'password', age: 51)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/Gordon-Ramsay.jpg')
  # user4.photo.attach(io: file, filename: 'gordon-ramsay.jpg')
  # user4.save!
  #
  # user5 = User.new(username: 'Eddie Huang', description: 'BASED FOB', password: 'password', age: 36)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/eddie-huang.jpg')
  # user5.photo.attach(io: file, filename: 'eddie-huang.jpg')
  # user5.save!
  #
  # user6 = User.new(username: 'Chance The Rapper', description: 'chanceraps', password: 'password', age: 25)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/chance-the-rapper.jpg')
  # user6.photo.attach(io: file, filename: 'chance-the-rapper.jpg')
  # user6.save!
  #
  # user7 = User.new(username: 'Dwayne Johnson', description: 'the rock', password: 'password', age: 46)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/dwyane-johnson.jpg')
  # user7.photo.attach(io: file, filename: 'dwanye-johnson.jpg')
  # user7.save!
  #
  # user8 = User.new(username: 'Terry Crews', description: 'My muscles have muscles', password: 'password', age: 50)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/terry-crews.jpeg')
  # user8.photo.attach(io: file, filename: 'terry-crews.jpg')
  # user8.save!
  #
  # user9 = User.new(username: 'Kim Kardashian', description: "I have to be in a relationship in order to be intimate. I\'m not the one-night-stand kind of girl. Despite the rumors.", password: 'password', age: 37)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/kim-kardashian.jpg')
  # user9.photo.attach(io: file, filename: 'kim-kardashian.jpg')
  # user9.save!
  #
  # user10 = User.new(username: 'David Beckham', description: "Nothing amazes me anymore", password: 'password', age: 43)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/david-beckham.jpg')
  # user10.photo.attach(io: file, filename: 'david-beckham.jpg')
  # user10.save!
  #
  # user11 = User.new(username: 'Angelina Jolie', description: "Brad sucks", password: 'password', age: 43)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/angelina-jolie.jpg')
  # user11.photo.attach(io: file, filename: 'angelina-jolie.jpg')
  # user11.save!
  #
  # user12 = User.new(username: 'Barack Obama', description: "Good luck America", password: 'password', age: 57)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/barack-obama.jpg')
  # user12.photo.attach(io: file, filename: 'barack-obama.jpg')
  # user12.save!
  #
  # user13 = User.new(username: 'Justin Bieber', description: "I\'m 5\'9\"", password: 'password', age: 24)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/justin-bieber.jpg')
  # user13.photo.attach(io: file, filename: 'justin-bieber.jpg')
  # user13.save!
  #
  # user14 = User.new(username: 'Beyoncé', description: "Queen", password: 'password', age: 36)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/beyonce1.jpg')
  # user14.photo.attach(io: file, filename: 'beyonce.jpg')
  # user14.save!
  #
  # user15 = User.new(username: 'Will Smith', description: "Binge on", password: 'password', age: 37)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/will-smith.jpg')
  # user15.photo.attach(io: file, filename: 'will-smith.jpg')
  # user15.save!
  #
  # user16 = User.new(username: 'Arnold Schwarzenegger', description: "I\'ll be back...to binge", password: 'password', age: 71)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/arnold-schwarz.jpeg')
  # user16.photo.attach(io: file, filename: 'arnold-schwarz.jpg')
  # user16.save!
  #
  # user17 = User.new(username: 'Elon Musk', description: "I binge my problems away", password: 'password', age: 47)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/elon-musk.jpg')
  # user17.photo.attach(io: file, filename: 'justin-bieber.jpg')
  # user17.save!
  #
  # user18 = User.new(username: 'Ariana Grande', description: "", password: 'password', age: 25)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/ariana-grande.jpg')
  # user18.photo.attach(io: file, filename: 'ariana-grande.jpg')
  # user18.save!
  #
  # user19 = User.new(username: 'Jeff Bezos', description: "World domination.", password: 'password', age: 54)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/jeff-bezos.jpg')
  # user19.photo.attach(io: file, filename: 'jeff-bezos.jpg')
  # user19.save!
  #
  # user20 = User.new(username: 'Cardi B', description: "BACARDIVENOM", password: 'password', age: 25)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/cardi-b.jpg')
  # user20.photo.attach(io: file, filename: 'cardi-b.jpg')
  # user20.save!
  #
  # user21 = User.new(username: 'Serena Williams', description: "Tennis just a game, family is forever", password: 'password', age: 36)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/serena-williams.jpg')
  # user21.photo.attach(io: file, filename: 'justin-serena-williams.jpg')
  # user21.save!
  #
  # user22 = User.new(username: 'Chloe Kim', description: "Binge for GOLD", password: 'password', age: 18)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/Chloe-Kim.jpg')
  # user22.photo.attach(io: file, filename: 'chloe-kim.jpg')
  # user22.save!
  #
  # user23 = User.new(username: 'Daniel Caesar', description: "Golden Child", password: 'password', age: 23)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/Daniel-Caesar.jpg')
  # user23.photo.attach(io: file, filename: 'daniel-caesar.jpg')
  # user23.save!
  #
  # user24 = User.new(username: 'Jimmy Kimmel', description: "", password: 'password', age: 50)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/jimmy-kimmel.jpeg')
  # user24.photo.attach(io: file, filename: 'jimmy-kimmel.jpg')
  # user24.save!
  #
  # user25 = User.new(username: 'Kanye West', description: "Yeezy yeezy yeezy", password: 'password', age: 41)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/kanye-west.jpg')
  # user25.photo.attach(io: file, filename: 'kanye-west.jpg')
  # user25.save!
  #
  # user26 = User.new(username: 'Kim Jong Un', description: "FUD", password: 'password', age: 100)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/kim-jung-un.jpg')
  # user26.photo.attach(io: file, filename: 'kim-jung-un.jpg')
  # user26.save!
  #
  # user27 = User.new(username: 'Masaharu Morimoto', description: "Master chef amateur binger", password: 'password', age: 63)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/morimoto.jpeg')
  # user27.photo.attach(io: file, filename: 'morimoto.jpg')
  # user27.save!
  #
  # user28 = User.new(username: 'Prince Harry', description: "I love Meghan", password: 'password', age: 33)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/prince-harry.com%252fhss%252fstorage%252fmidas%252fd4810b30af0d03c647c5192f3b756bb3%252f206524164%252fprince-harry-duke-of-sussex-visits-croke-park-home-of-irelands-the-picture-id996288038')
  # user28.photo.attach(io: file, filename: 'prince-harry.jpg')
  # user28.save!
  #
  # user29 = User.new(username: 'Meghan Markle', description: "I love binging... I mean Harry", password: 'password', age: 37)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/meghan-markle.jpg')
  # user29.photo.attach(io: file, filename: 'meghan-markle.jpg')
  # user29.save!
  #
  # user30 = User.new(username: 'Stephen Curry', description: 'GOAT', password: 'password', age: 30)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/steph-curry.jpeg')
  # user30.photo.attach(io: file, filename: 'steph-curry.jpg')
  # user30.save!

  # user31 = User.new(username: 'Wolfgang Puck', description: "Good food must be binged", password: 'password', age: 69)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/wolfgang-puck.jpg')
  # user31.photo.attach(io: file, filename: 'wolfgang-puck.jpg')
  # user31.save!

  # user32 = User.new(username: 'JJ Watt', description: "Binge lyfe", password: 'password', age: 29)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/jj-watt.jpg')
  # user32.photo.attach(io: file, filename: 'jj-watt.jpg')
  # user32.save!

  # user33 = User.new(username: 'Moon Jae-in', description: "FUD", password: 'password', age: 65)
  # file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/moon-jae-in.jpg')
  # user33.photo.attach(io: file, filename: 'moon-jae-in.jpg')
  # user33.save!
  #
  # Follow.delete_all
  # puts 'creating follows'

  # follow1 = Follow.create!(user_id: 1, follower_id: 26)
  # follow2 = Follow.create!(user_id: 1, follower_id: 1)
  # follow3 = Follow.create!(user_id: 1, follower_id: 1)
  # follow4 = Follow.create!(user_id: 1, follower_id: 1)
  # follow5 = Follow.create!(user_id: 1, follower_id: 1)
  # follow6 = Follow.create!(user_id: 1, follower_id: 1)
  # follow7 = Follow.create!(user_id: 1, follower_id: 1)
  # follow8 = Follow.create!(user_id: 1, follower_id: 1)
  # follow9 = Follow.create!(user_id: 1, follower_id: 1)
  # follow10 = Follow.create!(user_id: 1, follower_id: 1)
  # follow11 = Follow.create!(user_id: 1, follower_id: 1)
  # follow12 = Follow.create!(user_id: 1, follower_id: 1)
  # follow13 = Follow.create!(user_id: 1, follower_id: 1)
  # follow14 = Follow.create!(user_id: 1, follower_id: 1)
  # follow15 = Follow.create!(user_id: 1, follower_id: 1)
#
#   Binge.delete_all
#   puts 'creating binges'
#
#   binge1 = Binge.new(
#     description: 'yummm',
#     url: 'unsplash.com',
#     link_url: 'https://unsplash.com/photos/Fq54FqucgCE',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge1.jpg')
#   binge1.photo.attach(io: file, filename: 'binge1.jpg')
#   binge1.save!
#
#   binge2 = Binge.new(
#     description: 'i scream for ice cream',
#     url: 'unsplash.com',
#     link_url: 'https://unsplash.com/photos/TLD6iCOlyb0',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge2.jpg')
#   binge2.photo.attach(io: file, filename: 'binge2.jpg')
#   binge2.save!
#
#   binge3 = Binge.new(
#     description: 'bingey',
#     url: 'unsplash.com',
#     link_url: 'https://unsplash.com/photos/uL73uBFjz7o',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge3.jpg')
#   binge3.photo.attach(io: file, filename: 'binge3.jpg')
#   binge3.save!
#
#   binge4 = Binge.new(
#     description: 'weekend vibes',
#     url: 'unsplash.com',
#     link_url: 'https://unsplash.com/photos/t7wg7BJU2-s',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge4.jpg')
#   binge4.photo.attach(io: file, filename: 'binge4.jpg')
#   binge4.save!
#
#   binge5 = Binge.new(
#     description: 'rolls on rolls on rolls',
#     url: 'scotscoop.com',
#     link_url: 'https://scotscoop.com/icicles-rolls-into-downtown-san-mateo/',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge5.gif')
#   binge5.photo.attach(io: file, filename: 'binge5.gif')
#   binge5.save!
#
#   binge6 = Binge.new(
#     description: "finger lickin good",
#     url: 'unsplash.com',
#     link_url: 'https://unsplash.com/photos/GG1FJwV67PA',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge6.jpg')
#   binge6.photo.attach(io: file, filename: 'binge6.jpg')
#   binge6.save!
#
#   binge7 = Binge.new(
#     description: 'ohhhh snap',
#     url: 'giphy.com',
#     link_url: 'https://giphy.com/gifs/politics-donald-trump-2016-elections-cBIooxvKerol2',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge7.gif')
#   binge7.photo.attach(io: file, filename: 'binge7.gif')
#   binge7.save!
#
#   binge8 = Binge.new(
#     description: 'stacks',
#     url: 'unsplash.com',
#     link_url: 'https://unsplash.com/photos/ot1luip6jbk',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge8.jpg')
#   binge8.photo.attach(io: file, filename: 'binge8.jpg')
#   binge8.save!
#
#   binge9 = Binge.new(
#     description: 'after work binge',
#     url: 'unsplash.com',
#     link_url: 'https://unsplash.com/photos/dmkmrNptMpw',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge9.jpg')
#   binge9.photo.attach(io: file, filename: 'binge9.jpg')
#   binge9.save!
#
#   binge10 = Binge.new(
#     description: 'donut you want one?',
#     url: 'unsplash.com',
#     link_url: 'https://unsplash.com/photos/j5DeBxBUwHw',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge10.jpg')
#   binge10.photo.attach(io: file, filename: 'binge10.jpg')
#   binge10.save!
#
#   binge11 = Binge.new(
#     description: 'b.i.n.g.e.',
#     url: 'jesspryles.com',
#     link_url: 'https://jesspryles.com/recipe/spicy-korean-fried-chicken-wings/',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge11.jpg')
#   binge11.photo.attach(io: file, filename: 'binge11.jpg')
#   binge11.save!
#
#   binge12 = Binge.new(
#     description: 'creamy goodness',
#     url: 'nytimes.com',
#     link_url: 'https://cooking.nytimes.com/recipes/1017355-cold-brewed-iced-coffee ',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge12.jpg')
#   binge12.photo.attach(io: file, filename: 'binge12.jpg')
#   binge12.save!
#
#   binge13 = Binge.new(
#     description: 'pandonut',
#     url: 'tumblr.com',
#     link_url: 'http://japancandybox.tumblr.com/post/141482435688',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge13.jpg')
#   binge13.photo.attach(io: file, filename: 'binge13.jpg')
#   binge13.save!
#
#   binge14 = Binge.new(
#     description: 'key to my heart',
#     url: 'bestofzululand.co',
#     link_url: 'https://bestofzululand.co.za/whatshot/5444/5-pizza-toppings-thats-a-must/',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge14.png')
#   binge14.photo.attach(io: file, filename: 'binge14.jpg')
#   binge14.save!
#
#   binge15 = Binge.new(
#     description: 'not enough puff for my binging',
#     url: 'pinterest.com',
#     link_url: 'https://www.pinterest.com/pin/88101736441585869/?lp=true',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge15.jpg')
#   binge15.photo.attach(io: file, filename: 'binge15.jpg')
#   binge15.save!
#
#   binge16 = Binge.new(
#     description: 'notcho nachos... get your own',
#     url: 'unsplash.com',
#     link_url: 'https://unsplash.com/photos/7sStoaxfJh0',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge16.jpeg')
#   binge16.photo.attach(io: file, filename: 'binge16.jpg')
#   binge16.save!
#
#   binge17 = Binge.new(
#     description: 'sizzzle sizzle',
#     url: 'ny.eater.com',
#     link_url: 'https://ny.eater.com/2017/6/12/15782548/cote-korean-steakhouse-menu-photos-nyc',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge17.jpg')
#   binge17.photo.attach(io: file, filename: 'binge17.jpg')
#   binge17.save!
#
#   binge18 = Binge.new(
#     description: 'healthy binge',
#     url: 'unsplash.com',
#     link_url: 'https://unsplash.com/photos/MXovqM130UI',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge18.jpg')
#   binge18.photo.attach(io: file, filename: 'binge18.jpg')
#   binge18.save!
#
#   binge19 = Binge.new(
#     description: 'rolls of love',
#     url: 'pinterest.com',
#     link_url: 'https://www.pinterest.ru/pin/749708669191852437/?lp=true',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge19.jpg')
#   binge19.photo.attach(io: file, filename: 'binge19.jpg')
#   binge19.save!
#
#   binge20 = Binge.new(
#     description: 'black nom nom mirror',
#     url: 'giphy.com',
#     link_url: 'https://giphy.com/gifs/jon-hamm-white-christmas-black-mirror-10xYprgFoZBprG',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge20.gif')
#   binge20.photo.attach(io: file, filename: 'binge20.gif')
#   binge20.save!
#
#   binge21 = Binge.new(
#     description: 'heaven on earth',
#     url: 'unsplash.com',
#     link_url: 'https://unsplash.com/photos/AmzKuEnr1VY',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge21.jpg')
#   binge21.photo.attach(io: file, filename: 'binge21.jpg')
#   binge21.save!
#
#   binge22 = Binge.new(
#     description: 'the most beautiful fish is a binging one',
#     url: 'taiyakinyc.com',
#     link_url: 'https://taiyakinyc.com/',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge22.jpg')
#   binge22.photo.attach(io: file, filename: 'binge22.jpg')
#   binge22.save!
#
#   binge23 = Binge.new(
#     description: 'mouth drop',
#     url: 'pinchofyum.com',
#     link_url: 'https://pinchofyum.com/the-best-chicken-tinga-tacos',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge23.jpg')
#   binge23.photo.attach(io: file, filename: 'binge23.jpg')
#   binge23.save!
#
#   binge24 = Binge.new(
#     description: 'chocolate drizzleeee',
#     url: 'unsplash.com',
#     link_url: 'https://unsplash.com/photos/X2gM-SIufpU',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge24.jpg')
#   binge24.photo.attach(io: file, filename: 'binge24.jpg')
#   binge24.save!
#
#   binge25 = Binge.new(
#     description: 'double trouble',
#     url: 'unsplash.com',
#     link_url: 'https://unsplash.com/photos/cff_w0ADWIA',
#     author_id: 1)
#   file = EzDownload.open('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge25.jpg')
#   binge25.photo.attach(io: file, filename: 'binge25.jpg')
#   binge25.save!
#
#   Board.delete_all
#   puts 'creating boards'
#
#   demoBoard = Board.create!(
#     name: 'Desserts',
#     description: "Sweet binge treats",
#     category: "Dessert",
#     user_id: 1
#   )
#
#   board1 = Board.create!(
#     name: 'Drinks',
#     description: "Binge drinking",
#     category: "Drink",
#     user_id: 1
#   )
#
#   board2 = Board.create!(
#     name: 'Dranks',
#     description: "Binge drinking",
#     category: "Drink",
#     user_id: 1
#   )
#
#   board3 = Board.create!(
#     name: 'Savory',
#     description: 'Savory',
#     category: 'Savory',
#     user_id: 1
#   )
#
#   board4 = Board.create!(
#     name: 'Yums',
#     description: 'Misc',
#     category: 'Sweet tooth',
#     user_id: 1
#   )
#
#   board5 = Board.create!(
#     name: 'Junk food',
#     description: 'Misc',
#     category: 'Binge',
#     user_id: 1
#   )
#
#   board6 = Board.create!(
#     name: 'Weekend',
#     description: 'weekend netflix n chill',
#     category: 'Media',
#     user_id: 1
#   )
#
#   board7 = Board.create!(
#     name: 'Weekday',
#     description: 'my favorites',
#     category: 'Media',
#     user_id: 1
#   )
#
#   board8 = Board.create!(
#     name: 'binge shows',
#     description: 'bingeworthy',
#     category: 'Media',
#     user_id: 1
#   )
#
#   board9 = Board.create!(
#     name: 'Tasty',
#     description: 'mouthwatering treats',
#     category: 'Food',
#     user_id: 1
#   )
#
#   board10 = Board.create!(
#     name: 'Yums',
#     description: 'ugh binging is so good',
#     category: 'Food',
#     user_id: 1
#   )
#
#   board11 = Board.create!(
#     name: 'mouthwater',
#     description: 'favorite binges',
#     category: 'Food',
#     user_id: 1
#   )
#
#   board12 = Board.create!(
#     name: 'Diet stoppers',
#     description: 'things I want to eat',
#     category: 'Food',
#     user_id: 1
#   )
#
#   board13 = Board.create!(
#     name: 'anti-diet',
#     description: 'to eat list',
#     category: 'Food',
#     user_id: 1
#   )
#
#   board14 = Board.create!(
#     name: 'wows',
#     description: 'sweetness',
#     category: 'Dessert',
#     user_id: 1
#   )
#
#   board15 = Board.create!(
#     name: 'sweet tooth',
#     description: 'cravings',
#     category: 'Dessert',
#     user_id: 1
#   )
#
#   board16 = Board.create!(
#     name: 'weekend binges',
#     description: 'i love food',
#     category: 'Food',
#     user_id: 1
#   )
#
#   board17 = Board.create!(
#     name: 'what is moderation',
#     description: 'fat lyfe',
#     category: 'Food',
#     user_id: 1
#   )
#
#   board18 = Board.create!(
#     name: 'favorites',
#     description: 'movies you have to watch',
#     category: 'Movies',
#     user_id: 1
#   )
#
#   board19 = Board.create!(
#     name: 'favorites',
#     description: 'tv shows you have to watch',
#     category: 'tv shows',
#     user_id: 1
#   )
#
#   board20 = Board.create!(
#     name: 'Misc',
#     description: 'Misc',
#     category: 'Misc',
#     user_id: 1
#   )
#
#   board21 = Board.create!(
#     name: 'Midnight treats',
#     description: "Binge drinking",
#     category: "Drink",
#     user_id: 1
#   )
