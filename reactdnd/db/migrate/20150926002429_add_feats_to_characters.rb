class AddFeatsToCharacters < ActiveRecord::Migration
  def change
    add_reference :feats, :character, index: true, foreign_key: true
  end
end
