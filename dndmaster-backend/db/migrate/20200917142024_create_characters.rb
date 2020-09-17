class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :race
      t.string :character_class
      t.integer :background
      t.integer: level
      t.integer :armor_class
      t.integer :perception
      t.integer :investigation
      t.integer :insight
      t.integer :spell_save_dc
      t.timestamps
    end
  end
end
