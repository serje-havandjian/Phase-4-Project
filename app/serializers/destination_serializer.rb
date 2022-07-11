class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :name, :review, :rating, :state_id, :tourist_id
end
