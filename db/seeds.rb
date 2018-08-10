# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_user = User.create(
  id: 1,
  username: 'Guest',
  description: 'Demo login user',
  password: 'password',
  age: 100
)

demo_binge = Binge.create(
  id: 1,
  url: 'https://s.pinimg.com/webapp/style/images/bg_multi_case_grid_no_text-adb7650b.jpg',
  link_url: 'hi@hi.com2',
  author_id: 1
)
