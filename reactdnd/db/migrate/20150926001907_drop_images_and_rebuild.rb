class DropImagesAndRebuild < ActiveRecord::Migration
  def change
    drop_table :images

    create_table :images do |t|
      t.references :imageable, polymorphic: true, index: true
      t.attachment :image

      t.timestamps null: false
    end
  end
end
