class Destination < ApplicationRecord
    belongs_to :state
    belongs_to :tourist
end
