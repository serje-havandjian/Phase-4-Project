class User < ApplicationRecord
    has_many :destinations
    has_many :states, through: :destinations

    has_many :reviews
    has_secure_password
end
