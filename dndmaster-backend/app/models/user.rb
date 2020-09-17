class User < ApplicationRecord
    has_secure_password
    validates_presence_of :email
    validates_uniqueness_of :email
    has_many :campaigns
    has_many :characters, through: :campaigns
end
