class Character < ApplicationRecord
    belongs_to :campaign
    belongs_to :user, through :campaign
end
