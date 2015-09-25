class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.string :name
      t.text :bio
      t.text :traits
      t.integer :race
      t.integer :charclass
      t.integer :gender
      t.integer :alignment

      t.timestamps null: false
    end
  end
end
