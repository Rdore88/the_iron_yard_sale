class Order < ApplicationRecord
  belongs_to :item

  def self.organize(orders)
    output = []
    orders.forEach do |order|
      output.push({order: order, item: order.item})
    end
    output
  end
end
