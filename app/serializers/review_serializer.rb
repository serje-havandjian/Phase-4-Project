class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :destination_id
end
