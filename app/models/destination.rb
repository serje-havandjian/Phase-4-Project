class Destination < ApplicationRecord
    belongs_to :state
    belongs_to :user

    has_many :reviews
end
