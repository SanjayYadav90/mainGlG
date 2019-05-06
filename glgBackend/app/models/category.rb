class Category < ApplicationRecord

	belongs_to :user, optional: true

	validates :title, presence: true, length: { minimum: 4, maximum: 35}
	validates :description, length: { maximum: 1500}
	validates :cream_level, presence: true, length: { minimum: 4, maximum: 25}

end
