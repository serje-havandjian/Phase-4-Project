class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :location, :state_id, :user_id

  has_many :reviews
end
