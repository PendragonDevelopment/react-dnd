# == Schema Information
#
# Table name: images
#
#  id                 :integer          not null, primary key
#  imageable_id       :integer
#  imageable_type     :string
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Image < ActiveRecord::Base

  belongs_to :imageable, polymorphic: true

  has_attached_file :image,  styles: {  medium: "300x300>", 
                                        thumb: "100x100>" }, 
                              default_url: "/images/:style/missing.png"
  
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  # This is here simply because I'm too lazy to rename the table
  def avatar
    image
  end
end
