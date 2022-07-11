class Tourist < ApplicationRecord
    has_many :destinations
    has_many :states, through: :destinations
end
