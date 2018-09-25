require 'net/http'

def dustin_money(url)
  html_response = Net::HTTP.get_response(URI.parse(url))
  file = StringIO.new(html_response.body)
end

User.delete_all
puts 'creating users'

demo_user = User.new(username: 'Guest', description: 'Demo Login', password: 'password', age: 100)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/demo-user.jpg')
demo_user.photo.attach(io: file, filename: 'demo-user.jpg')
demo_user.save!

user2 = User.create!(username: 'Michaeljpark', description: 'Binge Masta', password: 'password', age: 24)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/michaeljpark.jpg')
user2.photo.attach(io: file, filename: 'michaeljpark.jpg')
user2.save!

user3 = User.new(username: 'Olivia Culpo', description: 'Miss Universe 2012', password: 'password', age: 26)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/olivia-culpo.jpg')
user3.photo.attach(io: file, filename: 'olivia-culpo.jpg')
user3.save!

user4 = User.new(username: 'Gordon Ramsay', description: 'cooking is not for everyone', password: 'password', age: 51)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/Gordon-Ramsay.jpg')
user4.photo.attach(io: file, filename: 'gordon-ramsay.jpg')
user4.save!

user5 = User.new(username: 'Eddie Huang', description: 'BASED FOB', password: 'password', age: 36)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/eddie-huang.jpg')
user5.photo.attach(io: file, filename: 'eddie-huang.jpg')
user5.save!

user6 = User.new(username: 'Chance The Rapper', description: 'chanceraps', password: 'password', age: 25)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/chance-the-rapper.jpg')
user6.photo.attach(io: file, filename: 'chance-the-rapper.jpg')
user6.save!

user7 = User.new(username: 'Dwayne Johnson', description: 'the rock', password: 'password', age: 46)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/dwyane-johnson.jpg')
user7.photo.attach(io: file, filename: 'dwanye-johnson.jpg')
user7.save!

user8 = User.new(username: 'Terry Crews', description: 'My muscles have muscles', password: 'password', age: 50)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/terry-crews.jpeg')
user8.photo.attach(io: file, filename: 'terry-crews.jpg')
user8.save!

user9 = User.new(username: 'Kim Kardashian', description: "I have to be in a relationship in order to be intimate. I\'m not the one-night-stand kind of girl. Despite the rumors.", password: 'password', age: 37)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/kim-kardashian.jpg')
user9.photo.attach(io: file, filename: 'kim-kardashian.jpg')
user9.save!

user10 = User.new(username: 'David Beckham', description: "Nothing amazes me anymore", password: 'password', age: 43)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/david-beckham.jpg')
user10.photo.attach(io: file, filename: 'david-beckham.jpg')
user10.save!

user11 = User.new(username: 'Angelina Jolie', description: "Brad sucks", password: 'password', age: 43)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/angelina-jolie.jpg')
user11.photo.attach(io: file, filename: 'angelina-jolie.jpg')
user11.save!

user12 = User.new(username: 'Barack Obama', description: "Good luck America", password: 'password', age: 57)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/barack-obama.jpg')
user12.photo.attach(io: file, filename: 'barack-obama.jpg')
user12.save!

user13 = User.new(username: 'Justin Bieber', description: "I\'m 5\'9\"", password: 'password', age: 24)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/justin-bieber.jpg')
user13.photo.attach(io: file, filename: 'justin-bieber.jpg')
user13.save!

user14 = User.new(username: 'Beyoncé', description: "Queen", password: 'password', age: 36)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/beyonce1.jpg')
user14.photo.attach(io: file, filename: 'beyonce.jpg')
user14.save!

user15 = User.new(username: 'Will Smith', description: "Binge on", password: 'password', age: 37)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/will-smith.jpg')
user15.photo.attach(io: file, filename: 'will-smith.jpg')
user15.save!

user16 = User.new(username: 'Arnold Schwarzenegger', description: "I\'ll be back...to binge", password: 'password', age: 71)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/arnold-schwarz.jpeg')
user16.photo.attach(io: file, filename: 'arnold-schwarz.jpg')
user16.save!

user17 = User.new(username: 'Elon Musk', description: "I binge my problems away", password: 'password', age: 47)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/elon-musk.jpg')
user17.photo.attach(io: file, filename: 'justin-bieber.jpg')
user17.save!

user18 = User.new(username: 'Ariana Grande', description: "", password: 'password', age: 25)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/ariana-grande.jpg')
user18.photo.attach(io: file, filename: 'ariana-grande.jpg')
user18.save!

user19 = User.new(username: 'Jeff Bezos', description: "World domination.", password: 'password', age: 54)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/jeff-bezos.jpg')
user19.photo.attach(io: file, filename: 'jeff-bezos.jpg')
user19.save!

user20 = User.new(username: 'Cardi B', description: "BACARDIVENOM", password: 'password', age: 25)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/cardi-b.jpg')
user20.photo.attach(io: file, filename: 'cardi-b.jpg')
user20.save!

user21 = User.new(username: 'Serena Williams', description: "Tennis just a game, family is forever", password: 'password', age: 36)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/serena-williams.jpg')
user21.photo.attach(io: file, filename: 'justin-serena-williams.jpg')
user21.save!

user22 = User.new(username: 'Chloe Kim', description: "Binge for GOLD", password: 'password', age: 18)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/Chloe-Kim.jpg')
user22.photo.attach(io: file, filename: 'chloe-kim.jpg')
user22.save!

user23 = User.new(username: 'Daniel Caesar', description: "Golden Child", password: 'password', age: 23)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/Daniel-Caesar.jpg')
user23.photo.attach(io: file, filename: 'daniel-caesar.jpg')
user23.save!

user24 = User.new(username: 'Jimmy Kimmel', description: "", password: 'password', age: 50)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/jimmy-kimmel.jpeg')
user24.photo.attach(io: file, filename: 'jimmy-kimmel.jpg')
user24.save!

user25 = User.new(username: 'Kanye West', description: "Yeezy yeezy yeezy", password: 'password', age: 41)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/kanye-west.jpg')
user25.photo.attach(io: file, filename: 'kanye-west.jpg')
user25.save!

user26 = User.new(username: 'Kim Jong Un', description: "FUD", password: 'password', age: 100)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/kim-jung-un.jpg')
user26.photo.attach(io: file, filename: 'kim-jung-un.jpg')
user26.save!

user27 = User.new(username: 'Masaharu Morimoto', description: "Master chef amateur binger", password: 'password', age: 63)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/morimoto.jpeg')
user27.photo.attach(io: file, filename: 'morimoto.jpg')
user27.save!

user28 = User.new(username: 'Prince Harry', description: "I love Meghan", password: 'password', age: 33)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/prince-harry.com%252fhss%252fstorage%252fmidas%252fd4810b30af0d03c647c5192f3b756bb3%252f206524164%252fprince-harry-duke-of-sussex-visits-croke-park-home-of-irelands-the-picture-id996288038')
user28.photo.attach(io: file, filename: 'prince-harry.jpg')
user28.save!

user29 = User.new(username: 'Meghan Markle', description: "I love binging... I mean Harry", password: 'password', age: 37)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/meghan-markle.jpg')
user29.photo.attach(io: file, filename: 'meghan-markle.jpg')
user29.save!

user30 = User.new(username: 'Stephen Curry', description: 'GOAT', password: 'password', age: 30)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/steph-curry.jpeg')
user30.photo.attach(io: file, filename: 'steph-curry.jpg')
user30.save!

user31 = User.new(username: 'Wolfgang Puck', description: "Good food must be binged", password: 'password', age: 69)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/wolfgang-puck.jpg')
user31.photo.attach(io: file, filename: 'wolfgang-puck.jpg')
user31.save!

user32 = User.new(username: 'JJ Watt', description: "Binge lyfe", password: 'password', age: 29)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/jj-watt.jpg')
user32.photo.attach(io: file, filename: 'jj-watt.jpg')
user32.save!

user33 = User.new(username: 'Moon Jae-in', description: "FUD", password: 'password', age: 65)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/profile/moon-jae-in.jpg')
user33.photo.attach(io: file, filename: 'moon-jae-in.jpg')
user33.save!

Follow.delete_all
puts 'creating follows'

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

Binge.delete_all
puts 'creating binges'

binge1 = Binge.new(
  description: 'yummm',
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/Fq54FqucgCE',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge1.jpg')
binge1.photo.attach(io: file, filename: 'binge1.jpg')
binge1.save!

binge2 = Binge.new(
  description: 'i scream for ice cream',
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/TLD6iCOlyb0',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge2.jpg')
binge2.photo.attach(io: file, filename: 'binge2.jpg')
binge2.save!

binge3 = Binge.new(
  description: 'bingey',
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/uL73uBFjz7o',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge3.jpg')
binge3.photo.attach(io: file, filename: 'binge3.jpg')
binge3.save!

binge4 = Binge.new(
  description: 'weekend vibes',
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/t7wg7BJU2-s',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge4.jpg')
binge4.photo.attach(io: file, filename: 'binge4.jpg')
binge4.save!

binge5 = Binge.new(
  description: 'hot cheeto love',
  url: 'tumblr.com',
  link_url: 'https://letslovefood.tumblr.com/image/176539977358',
  author_id: 1)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge55.jpg')
binge5.photo.attach(io: file, filename: 'binge55.gif')
binge5.save!

binge6 = Binge.new(
  description: 'alcoholic heaven',
  url: 'giphy.com',
  link_url: 'https://giphy.com/gifs/loop-epic-drink-DRAIHiTMMsgww',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge6.gif')
binge6.photo.attach(io: file, filename: 'binge6.gif')
binge6.save!

binge7 = Binge.new(
  description: 'ohhhh snap',
  url: 'giphy.com',
  link_url: 'https://giphy.com/gifs/politics-donald-trump-2016-elections-cBIooxvKerol2',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge7.gif')
binge7.photo.attach(io: file, filename: 'binge7.gif')
binge7.save!

binge8 = Binge.new(
  description: 'stacks',
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/ot1luip6jbk',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge8.jpg')
binge8.photo.attach(io: file, filename: 'binge8.jpg')
binge8.save!

binge10 = Binge.new(
  description: 'donut you want one?',
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/j5DeBxBUwHw',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge10.jpg')
binge10.photo.attach(io: file, filename: 'binge10.jpg')
binge10.save!

binge11 = Binge.new(
  description: 'b.i.n.g.e.',
  url: 'giphy.com',
  link_url: 'https://giphy.com/gifs/chocolate-funny-pOztBRgMDL3XO',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge11.gif')
binge11.photo.attach(io: file, filename: 'binge11.jpg')
binge11.save!

binge12 = Binge.new(
  description: '',
  url: 'bromabakery.com',
  link_url: 'https://bromabakery.com/2016/12/frosted-sugar-cookie-donuts.html',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge12.jpg')
binge12.photo.attach(io: file, filename: 'binge12.jpg')
binge12.save!

binge13 = Binge.new(
  description: 'pandonut',
  url: 'tumblr.com',
  link_url: 'http://japancandybox.tumblr.com/post/141482435688',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge13.jpg')
binge13.photo.attach(io: file, filename: 'binge13.jpg')
binge13.save!

binge14 = Binge.new(
  description: 'key to my heart',
  url: 'bestofzululand.co',
  link_url: 'https://bestofzululand.co.za/whatshot/5444/5-pizza-toppings-thats-a-must/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge14.png')
binge14.photo.attach(io: file, filename: 'binge14.jpg')
binge14.save!

binge15 = Binge.new(
  description: 'not enough puff for my binging',
  url: 'pinterest.com',
  link_url: 'https://www.pinterest.com/pin/88101736441585869/?lp=true',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge15.jpg')
binge15.photo.attach(io: file, filename: 'binge15.jpg')
binge15.save!

binge16 = Binge.new(
  description: 'notcho nachos... get your own',
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/7sStoaxfJh0',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge16.jpeg')
binge16.photo.attach(io: file, filename: 'binge16.jpg')
binge16.save!

binge17 = Binge.new(
  description: 'sizzzle sizzle',
  url: 'ny.eater.com',
  link_url: 'https://ny.eater.com/2017/6/12/15782548/cote-korean-steakhouse-menu-photos-nyc',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge17.jpg')
binge17.photo.attach(io: file, filename: 'binge17.jpg')
binge17.save!

binge19 = Binge.new(
  description: 'rolls of love',
  url: 'pinterest.com',
  link_url: 'https://www.pinterest.ru/pin/749708669191852437/?lp=true',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge19.jpg')
binge19.photo.attach(io: file, filename: 'binge19.jpg')
binge19.save!

binge20 = Binge.new(
  description: 'black nom nom mirror',
  url: 'giphy.com',
  link_url: 'https://giphy.com/gifs/jon-hamm-white-christmas-black-mirror-10xYprgFoZBprG',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge20.gif')
binge20.photo.attach(io: file, filename: 'binge20.gif')
binge20.save!

binge21 = Binge.new(
  description: 'heaven on earth',
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/AmzKuEnr1VY',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge21.jpg')
binge21.photo.attach(io: file, filename: 'binge21.jpg')
binge21.save!

binge22 = Binge.new(
  description: 'the most beautiful fish is a binging one',
  url: 'taiyakinyc.com',
  link_url: 'https://taiyakinyc.com/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge22.jpg')
binge22.photo.attach(io: file, filename: 'binge22.jpg')
binge22.save!

binge23 = Binge.new(
  description: 'mouth drop',
  url: 'pinchofyum.com',
  link_url: 'https://pinchofyum.com/the-best-chicken-tinga-tacos',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge23.jpg')
binge23.photo.attach(io: file, filename: 'binge23.jpg')
binge23.save!

binge24 = Binge.new(
  description: 'chocolate drizzleeee',
  url: 'giphy.com',
  link_url: 'https://giphy.com/gifs/chocolate-food-n-yI11lszt786eQ',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge24.gif')
binge24.photo.attach(io: file, filename: 'binge24.gif')
binge24.save!

binge25 = Binge.new(
  description: 'double trouble',
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/cff_w0ADWIA',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge25.jpg')
binge25.photo.attach(io: file, filename: 'binge25.jpg')
binge25.save!

binge26 = Binge.new(
  description: "finger lickin good",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/GG1FJwV67PA',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge6.jpg')
binge26.photo.attach(io: file, filename: 'binge6.jpg')
binge26.save!

binge27 = Binge.new(
  description: "wow",
  url: 'unsplash.com',
  link_url: 'https://giphy.com/gifs/beer-man-7aDpWVUmIWFI4',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge27.gif')
binge27.photo.attach(io: file, filename: 'binge27.jpg')
binge27.save!

binge28 = Binge.new(
  description: 'yummm',
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/Fq54FqucgCE',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge1.jpg')
binge1.photo.attach(io: file, filename: 'binge1.jpg')
binge1.save!

binge29 = Binge.new(
  description: 'double trouble',
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/fXkmfjaowOw',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge29.jpg')
binge29.photo.attach(io: file, filename: 'binge29.jpg')
binge29.save!

binge31 = Binge.new(
  description: "bread",
  url: 'giphy.com',
  link_url: 'https://giphy.com/gifs/bread-VWYtDQMcYLRuw',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge31.gif')
binge31.photo.attach(io: file, filename: 'binge31.gif')
binge31.save!

binge32 = Binge.new(
  description: "oj",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/x2byGrIsQYg',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge32.jpg')
binge32.photo.attach(io: file, filename: 'binge32.jpg')
binge32.save!

binge33 = Binge.new(
  description: "eleven",
  url: 'giphy.com',
  link_url: 'https://giphy.com/gifs/mrw-eggo-leggo-BpZ6GCgB5WJCU',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge33.gif')
binge33.photo.attach(io: file, filename: 'binge33.jpg')
binge33.save!

binge34 = Binge.new(
  description: "rose",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/0VLn5nrp6hE',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge34.jpg')
binge34.photo.attach(io: file, filename: 'binge34.jpg')
binge34.save!

binge35 = Binge.new(
  description: "pasta",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/R18ecx07b3c',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge35.jpg')
binge35.photo.attach(io: file, filename: 'binge35.jpg')
binge35.save!

binge36 = Binge.new(
  description: "floats",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/9hsVC4Wwsec',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge36.jpg')
binge36.photo.attach(io: file, filename: 'binge36.jpg')
binge36.save!

binge37 = Binge.new(
  description: "underwater",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/qoFQxxuk3QY',
  author_id: 1)
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge37.jpg')
binge37.photo.attach(io: file, filename: 'binge37.jpg')
binge37.save!

binge38 = Binge.new(
  description: "the perfect dessert",
  url: 'the11best.com',
  link_url: 'https://www.the11best.com/party-food-recipes/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge38.jpg')
binge38.photo.attach(io: file, filename: 'binge38.jpg')
binge38.save!

binge39 = Binge.new(
  description: "the perfect dessert",
  url: 'the11best.com',
  link_url: 'https://www.the11best.com/party-food-recipes/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge39.jpg')
binge39.photo.attach(io: file, filename: 'binge39.jpg')
binge39.save!

binge40 = Binge.new(
  description: "Pizza Waffle Fries Are a Glorious Sight to Behold",
  url: 'thekitchn.com',
  link_url: 'https://www.thekitchn.com/pizza-waffle-fries-are-a-glorious-sight-to-behold-236986?utm_source=pinterest&utm_medium=tracking&utm_campaign=article-share',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge40.jpg')
binge40.photo.attach(io: file, filename: 'binge40.jpg')
binge40.save!

binge41 = Binge.new(
  description: "unicorn magic",
  url: 'popsugar.com',
  link_url: 'https://www.popsugar.com/food/Unicorn-Macaron-Recipe-42935733',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge41.jpg')
binge41.photo.attach(io: file, filename: 'binge41.jpg')
binge41.save!

binge42 = Binge.new(
  description: "french fries",
  url: 'lazycatkitchen.com',
  link_url: 'https://www.lazycatkitchen.com/rosemary-fries-with-roasted-garlic-dip/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge42.jpg')
binge42.photo.attach(io: file, filename: 'binge42.jpg')
binge42.save!

binge43 = Binge.new(
  description: "frozen lemonade",
  url: 'easygoodideas.com',
  link_url: 'https://easygoodideas.com/boozy-frozen-lemonade-recipe/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge43.jpg')
binge43.photo.attach(io: file, filename: 'binge43.jpg')
binge43.save!

binge44 = Binge.new(
  description: "cannolis dessert",
  url: 'bakerbynature.com',
  link_url: 'https://bakerbynature.com/5-ingredient-cannolis/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge44.jpg')
binge44.photo.attach(io: file, filename: 'binge44.jpg')
binge44.save!

binge45 = Binge.new(
  description: "you didnt bring a tent",
  url: 'giphy.com',
  link_url: 'https://giphy.com/gifs/fave-tv-shows-qGcEL1AW6GjTi',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge45.gif')
binge45.photo.attach(io: file, filename: 'binge45.gif')
binge45.save!

binge46 = Binge.new(
  description: "pork cutlet",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/R1_0gSXks5Y',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge46.jpeg')
binge46.photo.attach(io: file, filename: 'binge46.jpeg')
binge46.save!

binge47 = Binge.new(
  description: "sweet poison cocktail",
  url: 'delish.com',
  link_url: 'https://www.delish.com/cooking/recipe-ideas/recipes/a43892/sweet-poison-cocktail/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge47.jpg')
binge47.photo.attach(io: file, filename: 'binge47.jpg')
binge47.save!

binge48 = Binge.new(
  description: "steak",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/qZLk7dQuEPQ',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge48.jpeg')
binge48.photo.attach(io: file, filename: 'binge48.jpeg')
binge48.save!

binge49 = Binge.new(
  description: "scallops",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/19Ft3QfakMo',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge49.jpeg')
binge49.photo.attach(io: file, filename: 'binge49.jpeg')
binge49.save!

binge50 = Binge.new(
  description: "slutty cheesecake bars",
  url: 'delish.com',
  link_url: 'https://www.delish.com/cooking/recipe-ideas/recipes/a49102/slutty-cheesecake-bars-recipe/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge50.jpg')
binge50.photo.attach(io: file, filename: 'binge50.jpg')
binge50.save!

binge51 = Binge.new(
  description: "chocolate chip cookie smores",
  url: 'buzzfeed.com',
  link_url: 'https://www.buzzfeed.com/jamiejones/spherical-food-that-make-the-world-a-little-brighter?utm_term=.atXgv1BBB&sub=3788093_5813006',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge51.jpg')
binge51.photo.attach(io: file, filename: 'binge51.jpg')
binge51.save!

binge52 = Binge.new(
  description: "atlanta",
  url: 'giphy.com',
  link_url: 'https://giphy.com/gifs/fave-tv-shows-12SteVUcxAQ4ec',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge52.gif')
binge52.photo.attach(io: file, filename: 'binge52.gif')
binge52.save!

binge53 = Binge.new(
  description: "chocolate cheese cake",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/JBIK4QZOFfc',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge53.jpeg')
binge53.photo.attach(io: file, filename: 'binge53.jpeg')
binge53.save!

binge54 = Binge.new(
  description: "pasta",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/R18ecx07b3c',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge54.jpeg')
binge54.photo.attach(io: file, filename: 'binge54.jpeg')
binge54.save!

binge55 = Binge.new(
  description: "popsicles",
  url: 'the11best.com',
  link_url: 'https://www.the11best.com/homemade-popsicle-recipes/2/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge55.jpg')
binge55.photo.attach(io: file, filename: 'binge55.jpg')
binge55.save!

binge56 = Binge.new(
  description: "strawberry cheesecake smoothie",
  url: 'thesuburbansoapbox.com',
  link_url: 'https://thesuburbansoapbox.com/strawberry-cheesecake-smoothie/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge56.jpg')
binge56.photo.attach(io: file, filename: 'binge56.jpg')
binge56.save!

binge57 = Binge.new(
  description: "cookie shot",
  url: 'elle.be',
  link_url: 'https://www.elle.be/fr/86353-le-dessert-qui-tue-le-cookie-shot.html',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge57.jpg')
binge57.photo.attach(io: file, filename: 'binge57.jpg')
binge57.save!

binge58 = Binge.new(
  description: "cream puff",
  url: 'bakerbettie.com',
  link_url: 'https://bakerbettie.com/classic-cream-puffs/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge58.jpg')
binge58.photo.attach(io: file, filename: 'binge58.jpg')
binge58.save!

binge59 = Binge.new(
  description: "nutella hot chocolate",
  url: 'gimmesomeoven.com',
  link_url: 'https://www.gimmesomeoven.com/nutella-hot-chocolate/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge59.jpg')
binge59.photo.attach(io: file, filename: 'binge59.jpg')
binge59.save!

binge60 = Binge.new(
  description: "poutine",
  url: 'seasonsandsuppers.ca',
  link_url: 'https://www.seasonsandsuppers.ca/authentic-canadian-poutine-recipe/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge60.jpg')
binge60.photo.attach(io: file, filename: 'binge60.jpg')
binge60.save!

binge61 = Binge.new(
  description: "booty drank",
  url: 'giphy.com',
  link_url: 'https://giphy.com/gifs/13qOfZCVyjDirS',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge61.gif')
binge61.photo.attach(io: file, filename: 'binge61.gif')
binge61.save!

binge62 = Binge.new(
  description: "bailey cookies n cream",
  url: 'womansday.com',
  link_url: 'https://www.womansday.com/food-recipes/food-drinks/g95/10-spoil-mom-dessert-recipes-72419/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge62.jpg')
binge62.photo.attach(io: file, filename: 'binge62.jpg')
binge62.save!

binge63 = Binge.new(
  description: "bailey cookies n cream",
  url: 'regal.fr',
  link_url: 'https://www.regal.fr/recettes/desserts/millefeuille-framboise-et-vanille-8704',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge63.jpg')
binge63.photo.attach(io: file, filename: 'binge63.jpg')
binge63.save!

binge64 = Binge.new(
  description: "hot dogs",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/UgolPhUcu9g',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge64.jpeg')
binge64.photo.attach(io: file, filename: 'binge64.jpeg')
binge64.save!

binge65 = Binge.new(
  description: "rasberry vanilla yogurt popsicle",
  url: 'hungrygirlporvida.com',
  link_url: 'http://www.hungrygirlporvida.com/blog/2018/06/21/raspberry-vanilla-yogurt-popsicles/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge65.jpg')
binge65.photo.attach(io: file, filename: 'binge65.jpg')
binge65.save!

binge66 = Binge.new(
  description: "Ginger Watermelon Italian Ice",
  url: 'ohmyveggies.com',
  link_url: 'https://ohmyveggies.com/recipe-ginger-watermelon-italian-ice/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge66.jpg')
binge66.photo.attach(io: file, filename: 'binge66.jpg')
binge66.save!

binge67 = Binge.new(
  description: "beyonce guinness",
  url: 'giphy.com',
  link_url: 'https://giphy.com/gifs/beyonce-beer-gif-BMmGFrBWH5I1a',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge67.gif')
binge67.photo.attach(io: file, filename: 'binge67.gif')
binge67.save!

binge68 = Binge.new(
  description: "beef wellingtons",
  url: 'olivemagazine.com',
  link_url: 'https://www.olivemagazine.com/recipes/meat-and-poultry/beef-wellingtons/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge68.jpg')
binge68.photo.attach(io: file, filename: 'binge68.jpg')
binge68.save!

binge69 = Binge.new(
  description: "fluffy japanese pancake",
  url: 'tasty.co',
  link_url: 'https://www.tasty.co/recipe/fluffy-japanese-pancakes#.kiaxaALMq',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge69.jpg')
binge69.photo.attach(io: file, filename: 'binge69.jpg')
binge69.save!

binge70 = Binge.new(
  description: "chicken and waffles",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/UU8sNutRppQ',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge70.jpeg')
binge70.photo.attach(io: file, filename: 'binge70.jpeg')
binge70.save!

binge71 = Binge.new(
  description: "burger and fries",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/6fHRzS9yMj0',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge71.jpeg')
binge71.photo.attach(io: file, filename: 'binge71.jpeg')
binge71.save!

binge72 = Binge.new(
  description: "salted caramel white russian",
  url: 'bloglovin.com',
  link_url: 'https://www.bloglovin.com/blogs/kate-la-vie-4532619/salted-caramel-white-russians-4679305242',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge72.jpg')
binge72.photo.attach(io: file, filename: 'binge72.jpg')
binge72.save!

binge73 = Binge.new(
  description: "panna cotta",
  url: 'cutoutandkeep.net',
  link_url: 'https://www.cutoutandkeep.net/projects/pomegranate-and-greek-yoghurt-panna-cotta',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge73.jpg')
binge73.photo.attach(io: file, filename: 'binge73.jpg')
binge73.save!

binge74 = Binge.new(
  description: "Solero-Dessert",
  url: 'deeskueche.de',
  link_url: 'https://deeskueche.de/2017/03/26/solero-dessert/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge74.jpg')
binge74.photo.attach(io: file, filename: 'binge74.jpg')
binge74.save!

binge75 = Binge.new(
  description: "onigiri with tuna filling",
  url: 'wordpress.com',
  link_url: 'https://nadelundgabel.wordpress.com/2015/11/29/wholesome-onigiri/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge75.jpg')
binge75.photo.attach(io: file, filename: 'binge75.jpg')
binge75.save!

binge76 = Binge.new(
  description: "Pink Lemonade",
  url: 'marthastewart.com',
  link_url: 'https://www.marthastewart.com/332457/pink-lemonade',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge76.jpg')
binge76.photo.attach(io: file, filename: 'binge76.jpg')
binge76.save!

binge77 = Binge.new(
  description: "Cinnamon Apple Crumb Cake",
  url: 'omgchocolatedesserts.com',
  link_url: 'https://omgchocolatedesserts.com/cinnamon-apple-crumb-cake/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge77.jpg')
binge77.photo.attach(io: file, filename: 'binge77.jpg')
binge77.save!

binge78 = Binge.new(
  description: "chicken",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/J5ZivsKiu9c',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge78.jpeg')
binge78.photo.attach(io: file, filename: 'binge78.jpeg')
binge78.save!

binge79 = Binge.new(
  description: "black berry waffles",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/N7buN8Lv7uQ',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge79.jpeg')
binge79.photo.attach(io: file, filename: 'binge79.jpeg')
binge79.save!

binge80 = Binge.new(
  description: "vodka",
  url: 'giphy.com',
  link_url: 'https://giphy.com/gifs/absolutvodka-drink-roulette-vodka-breeze-3oriObQfEBGIn9qlIA',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge80.gif')
binge80.photo.attach(io: file, filename: 'binge80.gif')
binge80.save!

binge81 = Binge.new(
  description: "plum and thyme prosecco smash",
  url: 'mydiaryofus.com',
  link_url: 'https://www.mydiaryofus.com/blog/2015/5/14/plum-and-thyme-prosecco-smash',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge81.jpg')
binge81.photo.attach(io: file, filename: 'binge81.jpg')
binge81.save!

binge82 = Binge.new(
  description: "creme brulee",
  url: 'elle.fr',
  link_url: 'http://www.elle.fr/Elle-a-Table/Recettes-de-cuisine/Creme-brulee-facile-2894406',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge82.jpg')
binge82.photo.attach(io: file, filename: 'binge82.jpg')
binge82.save!

binge84 = Binge.new(
  description: "pancakes",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/-F55sPph-eo',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge84.jpeg')
binge84.photo.attach(io: file, filename: 'binge84.jpeg')
binge84.save!

binge85 = Binge.new(
  description: "pie",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/Uw0umuQnkpk',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge85.jpeg')
binge85.photo.attach(io: file, filename: 'binge85.jpeg')
binge85.save!

binge83 = Binge.new(
  description: "breaking bad",
  url: 'giphy.com',
  link_url: 'https://giphy.com/gifs/super-mr-glue-unFLKoAV3TkXe',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge83.gif')
binge83.photo.attach(io: file, filename: 'binge83.gif')
binge83.save!

binge86 = Binge.new(
  description: "cake",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/yHcZ62f7c_E',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge86.jpeg')
binge86.photo.attach(io: file, filename: 'binge86.jpeg')
binge86.save!

binge87 = Binge.new(
  description: "pancakes",
  url: 'pinchofyum.com',
  link_url: 'https://pinchofyum.com/our-first-ever-tasty-food-photography-workshop',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge87.jpg')
binge87.photo.attach(io: file, filename: 'binge87.jpg')
binge87.save!

binge88 = Binge.new(
  description: "watermelon drink",
  url: 'flavorite.net',
  link_url: 'https://flavorite.net/watermelon-breeze/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge88.jpg')
binge88.photo.attach(io: file, filename: 'binge88.jpg')
binge88.save!

binge89 = Binge.new(
  description: "gummy worms",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/XVYz_QeiEBw',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge89.jpeg')
binge89.photo.attach(io: file, filename: 'binge89.jpeg')
binge89.save!

binge90 = Binge.new(
  description: "candy girl",
  url: 'giphy.com',
  link_url: 'https://giphy.com/gifs/range-of-emotions-cotton-candy-girl-safeco-field-foodie-3o6Ztg2MgUkcXyCgtG',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge90.gif')
binge90.photo.attach(io: file, filename: 'binge90.gif')
binge90.save!

binge91 = Binge.new(
  description: "dumplings",
  url: 'koreanbapsang.com',
  link_url: 'https://www.koreanbapsang.com/mandu-korean-dumplings_20#.UOQ-a2hYa90.pinterest',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge91.jpg')
binge91.photo.attach(io: file, filename: 'binge91.jpg')
binge91.save!

binge92 = Binge.new(
  description: "rainbow grilled cheese",
  url: 'popsugar.com',
  link_url: 'https://www.popsugar.com/food/Grilled-Cheese-Hacks-41467049?crlt.pid=camp.WOJWMHZX8ZBq',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge92.jpg')
binge92.photo.attach(io: file, filename: 'binge92.jpg')
binge92.save!

binge93 = Binge.new(
  description: "shakes",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/CrK843Pl9a4',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge93.jpeg')
binge93.photo.attach(io: file, filename: 'binge93.jpeg')
binge93.save!

binge94 = Binge.new(
  description: "pomegranate ginger paloma",
  url: 'halfbakedharvest.com',
  link_url: 'https://www.halfbakedharvest.com/pomegranate-ginger-paloma/#_a5y_p=5960441',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge94.jpg')
binge94.photo.attach(io: file, filename: 'binge94.jpg')
binge94.save!

binge95 = Binge.new(
  description: "adventure time",
  url: 'giphy.com',
  link_url: 'https://giphy.com/gifs/friends-come-grab-GuEyvLPXMLhT2',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge95.gif')
binge95.photo.attach(io: file, filename: 'binge95.gif')
binge95.save!

binge96 = Binge.new(
  description: "banana split milkshake",
  url: 'wishesndishes.com',
  link_url: 'https://wishesndishes.com/banana-split-milkshake/?m=',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge96.jpg')
binge96.photo.attach(io: file, filename: 'binge96.jpg')
binge96.save!

binge97 = Binge.new(
  description: "Strawberry Gin Smash",
  url: 'thekitchn.com',
  link_url: 'https://www.thekitchn.com/15-sparkling-drinks-for-spring-entertaining-recipes-from-the-kitchn-203387?utm_medium=email&utm_campaign=Kitchn+51214++15+Sparkling+Drinks+for+Spring+Parties&utm_content=Kitchn+51214++15+Sparkling+Drinks+for+Spring+Parties+CID_9baeeb1e3e2c97177dec8c4783f2097e&utm_source=email_newsletter&utm_term=Get+15+sparkling+drinks+for+springtime',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge97.jpg')
binge97.photo.attach(io: file, filename: 'binge97.jpg')
binge97.save!

binge98 = Binge.new(
  description: "french toast",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/zcUgjyqEwe8',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge98.jpeg')
binge98.photo.attach(io: file, filename: 'binge98.jpeg')
binge98.save!

binge99 = Binge.new(
  description: "cheesy",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/xsfX3AqLDKo',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge99.jpeg')
binge99.photo.attach(io: file, filename: 'binge99.jpeg')
binge99.save!

binge100 = Binge.new(
  description: "harry potter",
  url: 'giphy.com',
  link_url: 'https://giphy.com/gifs/sad-harry-potter-crying-YFMhFB8jWvfZS',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge100.gif')
binge100.photo.attach(io: file, filename: 'binge100.gif')
binge100.save!

binge101 = Binge.new(
  description: "strawberry something",
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/nkHBFwVBzkg',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge101.jpeg')
binge101.photo.attach(io: file, filename: 'binge101.jpeg')
binge101.save!

binge30 = Binge.new(
  description: "wow",
  url: 'damndelicious.net',
  link_url: 'https://damndelicious.net/2016/08/10/freezer-breakfast-burritos/',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge30.jpg')
binge30.photo.attach(io: file, filename: 'binge30.jpg')
binge30.save!

binge9 = Binge.new(
  description: 'after work binge',
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/3etN9PY6iNw',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge9.jpg')
binge9.photo.attach(io: file, filename: 'binge9.jpg')
binge9.save!

binge18 = Binge.new(
  description: 'healthy binge',
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/MXovqM130UI',
  author_id: rand(0..33))
file = dustin_money('https://s3-us-west-1.amazonaws.com/bingeterest-dev/binges/binge18.jpg')
binge18.photo.attach(io: file, filename: 'binge18.jpg')
binge18.save!


Board.delete_all
puts 'creating boards'

demoBoard = Board.create!(
  name: 'Desserts',
  description: "Sweet binge treats",
  category: "Dessert",
  user_id: rand(0..33)
)

board1 = Board.create!(
  name: 'Drinks',
  description: "Binge drinking",
  category: "Drink",
  user_id: rand(0..33)
)

board2 = Board.create!(
  name: 'Dranks',
  description: "Binge drinking",
  category: "Drink",
  user_id: rand(0..33)
)

board3 = Board.create!(
  name: 'Savory',
  description: 'Savory',
  category: 'Savory',
  user_id: rand(0..33)
)

board4 = Board.create!(
  name: 'Yums',
  description: 'Misc',
  category: 'Sweet tooth',
  user_id: rand(0..33)
)

board5 = Board.create!(
  name: 'Junk food',
  description: 'Misc',
  category: 'Binge',
  user_id: rand(0..33)
)

board6 = Board.create!(
  name: 'Weekend',
  description: 'weekend netflix n chill',
  category: 'Media',
  user_id: rand(0..33)
)

board7 = Board.create!(
  name: 'Weekday',
  description: 'my favorites',
  category: 'Media',
  user_id: rand(0..33)
)

board8 = Board.create!(
  name: 'binge shows',
  description: 'bingeworthy',
  category: 'Media',
  user_id: 1
)

board9 = Board.create!(
  name: 'Tasty',
  description: 'mouthwatering treats',
  category: 'Food',
  user_id: rand(0..33)
)

board10 = Board.create!(
  name: 'Yums',
  description: 'ugh binging is so good',
  category: 'Food',
  user_id: rand(0..33)
)

board11 = Board.create!(
  name: 'mouthwater',
  description: 'favorite binges',
  category: 'Food',
  user_id: rand(0..33)
)

board12 = Board.create!(
  name: 'Diet stoppers',
  description: 'things I want to eat',
  category: 'Food',
  user_id: 1
)

board13 = Board.create!(
  name: 'anti-diet',
  description: 'to eat list',
  category: 'Food',
  user_id: rand(0..33)
)

board14 = Board.create!(
  name: 'wows',
  description: 'sweetness',
  category: 'Dessert',
  user_id: rand(0..33)
)

board15 = Board.create!(
  name: 'sweet tooth',
  description: 'cravings',
  category: 'Dessert',
  user_id: 1
)

board16 = Board.create!(
  name: 'weekend binges',
  description: 'i love food',
  category: 'Food',
  user_id: rand(0..33)
)

board17 = Board.create!(
  name: 'what is moderation',
  description: 'fat lyfe',
  category: 'Food',
  user_id: 1
)

board18 = Board.create!(
  name: 'favorites',
  description: 'movies you have to watch',
  category: 'Movies',
  user_id: rand(0..33)
)

board19 = Board.create!(
  name: 'favorites',
  description: 'tv shows you have to watch',
  category: 'tv shows',
  user_id: rand(0..33)
)

board20 = Board.create!(
  name: 'Misc',
  description: 'Misc',
  category: 'Misc',
  user_id: rand(0..33)
)

board21 = Board.create!(
  name: 'Midnight treats',
  description: "Binge drinking",
  category: "Drink",
  user_id: rand(0..33)
)

Binging.delete_all
puts 'creating bingings'
binging1 = Binging.create!(
  board_id: 3,
  binge_id: 5
)

binging2 = Binging.create!(
  board_id: 3,
  binge_id: 26
)

binging3 = Binging.create!(
  board_id: 3,
  binge_id: 31
)

binging7 = Binging.create!(
  board_id: 9,
  binge_id: 7
)

binging8 = Binging.create!(
  board_id: 9,
  binge_id: 20
)

binging9 = Binging.create!(
  board_id: 9,
  binge_id: 11
)

binging10 = Binging.create!(
  board_id: 13,
  binge_id: 4
)

binging11 = Binging.create!(
  board_id: 13,
  binge_id: 2
)

binging12 = Binging.create!(
  board_id: 13,
  binge_id: 33
)

binging13 = Binging.create!(
  board_id: 13,
  binge_id: 1
)

binging14 = Binging.create!(
  board_id: 16,
  binge_id: 2
)

binging15 = Binging.create!(
  board_id: 16,
  binge_id: 19
)

binging16 = Binging.create!(
  board_id: 16,
  binge_id: 22
)

binging21 = Binging.create!(
  board_id: 18,
  binge_id: 15
)

binging22 = Binging.create!(
  board_id: 18,
  binge_id: 16
)

binging23 = Binging.create!(
  board_id: 18,
  binge_id: 3
)
