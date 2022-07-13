# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

State.destroy_all
User.destroy_all
Destination.destroy_all
Review.destroy_all

alabama = State.create(name: "Alabama")
alaska = State.create(name: "Alaska")
arizona = State.create(name: "Arizona")
arkansas = State.create(name: "Arkansas")
california = State.create(name: "California")
colorado = State.create(name: "Colorado")
connecticut = State.create(name: "Connecticut")
delaware = State.create(name: "Delaware")
florida = State.create(name: "Florida")
georgia = State.create(name: "Georgia")
hawaii = State.create(name: "Hawaii")
idaho = State.create(name: "Idaho")
illinois = State.create(name: "Illinois")
indiana = State.create(name: "Indiana")
iowa = State.create(name: "Iowa")
kansas = State.create(name: "Kansas")
kentucky = State.create(name: "Kentucky")
louisiana = State.create(name: "Louisiana")
maine = State.create(name: "Maine")
maryland = State.create(name: "Maryland")
massachusetts = State.create(name: "Massachusetts")
michigan = State.create(name: "Michigan")
minnesota = State.create(name: "Minnesota")
mississippi = State.create(name: "Mississippi")
missouri = State.create(name: "Missouri")
montana = State.create(name: "Montana")
nebraska = State.create(name: "Nebraska")
nevada = State.create(name: "Nevada")
new_hampshire = State.create(name: "New Hampshire")
new_jersey = State.create(name: "New Jersey")
new_mexico = State.create(name: "New Mexico")
new_york = State.create(name: "New York")
north_carolina = State.create(name: "North Carolina")
north_dakota = State.create(name: "North Dakota")
ohio = State.create(name: "Ohio")
oklahoma = State.create(name: "Oklahoma")
oregon = State.create(name: "Oregon")
pennsylvania = State.create(name: "Pennsylvania")
rhode_island = State.create(name: "Rhode Island")
south_carolina = State.create(name: "South Carolina")
south_dakota = State.create(name: "South Dakota")
tennessee = State.create(name: "Tennessee")
texas = State.create(name: "Texas")
utah = State.create(name: "Utah")
vermont = State.create(name: "Vermont")
virginia = State.create(name: "Virginia")
washington = State.create(name: "Washington")
west_virginia = State.create(name: "West Virginia")
wisconsin = State.create(name: "Wisconsin")
wyoming = State.create(name: "Wyoming")

barbara = User.create(username: "Barbara", password: "barb123", password_confirmation: "barb123")
beverly = User.create(username: "Beverly", password: "bev123", password_confirmation: "bev123")
mike = User.create(username: "Mike", password: "mike123", password_confirmation: "mike123")

yosemite = Destination.create(location: "Yosemite", state_id: california.id, user_id: barbara.id)
lake_tahoe = Destination.create(location: "Lake Tahoe", state_id: california.id, user_id: beverly.id)
vegas = Destination.create(location: "Las Vegas", state_id: nevada.id, user_id: mike.id)
phoenix = Destination.create(location: "Phoenix", state_id: arizona.id, user_id: barbara.id)

review1 = Review.create(review: "I like dis", rating: 5, destination_id: yosemite.id, user_id: barbara.id)
review2 = Review.create(review: "I don't like dis", rating: 1, destination_id: yosemite.id, user_id:barbara.id)


puts "Done Seeding!"