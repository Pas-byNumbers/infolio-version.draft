# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


  # 4.times do
    User.create(
      username: Faker::Internet.username,
      password: 'pwtest',
      email: Faker::Internet.safe_email,
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      country: Faker::Address.country
    )
  # end



  5.times do
  Note.create(title: Faker::Book.title, content: Faker::Quote.famous_last_words, user_id: 1)
  end

  20.times do
    Comment.create(text: Faker::ChuckNorris.fact, user_id: 1, note_id: rand(1..5))
  end
  

  puts '+++++++++++++++++'
  puts 'End of Initial Seed'
  puts '+++++++++++++++++'







