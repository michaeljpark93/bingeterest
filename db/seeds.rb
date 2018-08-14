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
user3 = User.create!(username: 'Oliviaculpo', description: '', password: 'password', age: 26)
user4 = User.create!(username: 'G-Ramsay', description: 'cooking is not for everyone', password: 'password', age: 51)
user5 = User.create!(username: 'Eddie Huang', description: 'BASED FOB', password: 'password', age: 36)
user6 = User.create!(username: 'Chance The Rapper', description: 'chanceraps', password: 'password', age: 25)
user7 = User.create!(username: 'Therock', description: 'Dwayne the rock Johnson', password: 'password', age: 46)
user30 = User.create!(username: 'Wardell Curry', description: 'GOAT', password: 'password', age: 30)


Binge.delete_all

demo_binge = Binge.create!(
  url: 'https://s.pinimg.com/webapp/style/images/bg_multi_case_grid_no_text-adb7650b.jpg',
  link_url: 'hi@hi.com2',
  author_id: 1
)

binge2 = Binge.create!(
  description: 'ice cream',
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/TLD6iCOlyb0',
  author_id: 6)

binge3 = Binge.create!(
  description: 'dessert',
  url: 'unsplash.com',
  link_url: 'https://unsplash.com/photos/j5DeBxBUwHw',
  author_id: 2)

Board.delete_all

board1 = Board.create!(
  name: 'Dessert',
  description: 'Sweet binge treats',
  user_id: 3
)
