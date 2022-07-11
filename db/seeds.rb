# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

california = State.create(name: "California")
barbara = Tourist.create(name: "Barbara")
yosemite = Destination.create(name: "Yosemite", review: "I like dis", rating: 5, state_id: california.id, tourist_id: barbara.id)
