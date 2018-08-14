# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

demo_user = User.create!(
  username: 'Guest',
  description: 'Demo Login',
  password: 'password',
  age: 100
)

user2 = User.create!(username: 'Michaeljpark', description: 'Binge Masta', password: 'password', age: 24)
user3 = User.create!(username: 'Oliviaculpo', description: 'Miss Universe 2012', password: 'password', age: 26)
user4 = User.create!(username: 'Gordon Ramsay', description: 'cooking is not for everyone', password: 'password', age: 51)
user5 = User.create!(username: 'Eddie Huang', description: 'BASED FOB', password: 'password', age: 36)
user6 = User.create!(username: 'Chance The Rapper', description: 'chanceraps', password: 'password', age: 25)
user7 = User.create!(username: 'Dwayne Johnson', description: 'the rock', password: 'password', age: 46)
user8 = User.create!(username: 'Terry Crews', description: 'My muscles have muscles', password: 'password', age: 50)
user9 = User.create!(username: 'Kim Kardashian', description: "I have to be in a relationship in order to be intimate. I\'m not the one-night-stand kind of girl. Despite the rumors.", password: 'password', age: 37)
user10 = User.create!(username: 'David Beckham', description: "Nothing amazes me anymore", password: 'password', age: 43)
user11 = User.create!(username: 'Angelina Jolie', description: "Brad sucks", password: 'password', age: 43)
user12 = User.create!(username: 'Barack Obama', description: "Good luck America", password: 'password', age: 57)
user13 = User.create!(username: 'Justin Bieber', description: "I\'m 5\'9\"", password: 'password', age: 24)
user14 = User.create!(username: 'Beyoncé', description: "Queen", password: 'password', age: 36)
user15 = User.create!(username: 'Will Smith', description: "Binge on", password: 'password', age: 37)
user16 = User.create!(username: 'Arnold Schwarzenegger', description: "I\'ll be back...to binge", password: 'password', age: 71)
user17 = User.create!(username: 'Elon Musk', description: "I binge my problems away", password: 'password', age: 47)
user18 = User.create!(username: 'Ariana Grande', description: "", password: 'password', age: 25)
user19 = User.create!(username: 'Jeff Bezos', description: "World domination.", password: 'password', age: 54)
user20 = User.create!(username: 'Cardi B', description: "BACARDIVENOM", password: 'password', age: 25)
user21 = User.create!(username: 'Serena Williams', description: "Tennis just a game, family is forever", password: 'password', age: 36)
user22 = User.create!(username: 'Chloe Kim', description: "Binge for GOLD", password: 'password', age: 18)
user23 = User.create!(username: 'Daniel Caesar', description: "Golden Child", password: 'password', age: 23)
user24 = User.create!(username: 'Jimmy Kimmel', description: "", password: 'password', age: 50)
user25 = User.create!(username: 'Kanye West', description: "Yeezy yeezy yeezy", password: 'password', age: 41)
user26 = User.create!(username: 'Wolfgang Puck', description: "Good food must be binged", password: 'password', age: 69)
user27 = User.create!(username: 'Masaharu Morimoto', description: "Master chef amateur binger", password: 'password', age: 63)
user28 = User.create!(username: 'Prince Harry', description: "I love Meghan", password: 'password', age: 33)
user29 = User.create!(username: 'Meghan Markle', description: "I love binging... I mean Harry", password: 'password', age: 37)
user30 = User.create!(username: 'Wardell Curry', description: 'GOAT', password: 'password', age: 30)
user31 = User.create!(username: 'JJ Watt', description: "Binge lyfe", password: 'password', age: 29)
user32 = User.create!(username: 'Kim Jong Un', description: "FUD", password: 'password', age: 100)
user33 = User.create!(username: 'Moon Jae-in', description: "FUD", password: 'password', age: 65)

Binge.delete_all

binge1 = Binge.create!(
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/Fq54FqucgCE',
  author_id: rand(1...34))

binge2 = Binge.create!(
  description: 'i scream for ice cream',
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/TLD6iCOlyb0',
  author_id: rand(1...34))

binge3 = Binge.create!(
  description: 'bingey',
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/uL73uBFjz7o',
  author_id: rand(1...34))

binge4 = Binge.create!(
  description: 'weekend vibes',
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/t7wg7BJU2-s',
  author_id: rand(1...34))

binge5 = Binge.create!(
  description: 'fud',
  url: 'unsplash.com',
  link_url: '',
  author_id: rand(1...34))

binge6 = Binge.create!(
  description: "fries that\'ll cross your eyes",
  url: 'tubmlr.com',
  link_url: 'http://foodpoorn.tumblr.com/post/171888122221',
  author_id: rand(1...34))

binge7 = Binge.create!(
  description: 'healthy binge',
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/MXovqM130UI',
  author_id: rand(1...34))

binge8 = Binge.create!(
  description: 'chocolate drizzleeee',
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/X2gM-SIufpU',
  author_id: rand(1...34))

binge9 = Binge.create!(
  description: 'after work binge',
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/dmkmrNptMpw',
  author_id: rand(1...34))

binge10 = Binge.create!(
  description: 'donut you want one?',
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/j5DeBxBUwHw',
  author_id: rand(1...34))

Board.delete_all

board1 = Board.create!(
  name: 'Dessert',
  description: 'Sweet binge treats',
  user_id: rand(1...34)
)
