class CreateFeats < ActiveRecord::Migration
  def change
    create_table :feats do |t|
      t.string :name
      t.text :effect

      t.timestamps null: false
    end
  end
end
