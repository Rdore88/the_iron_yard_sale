class RemoveTitleFromOrder < ActiveRecord::Migration[5.1]
  def change
    remove_column :orders, :title, :string

  end
end
