class Item < ApplicationRecord
  has_many :orders
  mount_uploader :image, ImageUploader

end
