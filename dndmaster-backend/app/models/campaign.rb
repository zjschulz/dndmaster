class Campaign < ApplicationRecord
    belongs_to :user
    has_many :characters
    validates_presence_of :name
    validates_uniqueness_of :name
end
