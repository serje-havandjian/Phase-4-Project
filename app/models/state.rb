class State < ApplicationRecord
    has_many :destinations
    has_many :tourists, through: :destinations
end
