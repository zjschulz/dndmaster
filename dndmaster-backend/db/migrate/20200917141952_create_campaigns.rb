class CreateCampaigns < ActiveRecord::Migration[6.0]
  def change
    create_table :campaigns do |t|
      t.integer :user_id
      t.integer :character_id
      t.string :name

      t.timestamps
    end
  end
end
