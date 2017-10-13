class Item < ApplicationRecord
  has_many :orders
  mount_base64_uploader :image, ImageUploader
  mount_uploader :image, ImageUploader


end
