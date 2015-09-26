# == Schema Information
#
# Table name: characters
#
#  id         :integer          not null, primary key
#  name       :string
#  bio        :text
#  traits     :text
#  race       :integer
#  charclass  :integer
#  gender     :integer
#  alignment  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Character < ActiveRecord::Base

  has_many :feats
  has_many :images, as: :imageable

  enum race:      [:human, :dwarf, :elf, :orc]
  enum charclass: [:archer, :cleric, :warrior, :mage, :thief]
  enum gender:    [:other, :female, :male]
  enum alignment: [:lawfulgood, :neutralgood, :chaoticgood, :lawfulneutral, :trueneutral, :chaoticneutral, :lawfulevil, :neutralevil, :chaoticevil]

end
