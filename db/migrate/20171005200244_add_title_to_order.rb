class AddTitleToOrder < ActiveRecord::Migration[5.1]
  def change
    add_column :orders, :title, :string
  end
end
