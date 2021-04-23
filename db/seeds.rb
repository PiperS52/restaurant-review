# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
restaurants = Restaurant.create([
  {
    name: "Pizza Express",
    image_url: "https://www.pizzaexpress.com/assets/img/pelogo.png"
  },
  {
    name: "Dominos Pizza",
    image_url: "https://www.dominos.co.uk/Content/Images/Site/dominos_logo.png"
  },
  {
    name: "Cafe Rouge",
    image_url: "https://d2qesexwrn9cjq.cloudfront.net/images/cafe-rouge-e19dcfe1f7fc6e418f9b22a34616b468.png"
  }
])

reviews = Review.create([
  {
    title: 'Lovely restaurant',
    description: 'The food was great. Absoloutely loved it!',
    score: 5,
    restaurant: restaurants.first 
  },
  {
    title: 'Terrible',
    description: 'The food took ages to arrive. Service was awful!',
    score: 1,
    restaurant: restaurants.first 
  }
])
