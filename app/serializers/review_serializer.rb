class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :destination_id, :user_id

  belongs_to :destination
  belongs_to :user
end
