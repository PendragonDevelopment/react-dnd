# == Schema Information
#
# Table name: feats
#
#  id         :integer          not null, primary key
#  name       :string
#  effect     :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Feat < ActiveRecord::Base
end
