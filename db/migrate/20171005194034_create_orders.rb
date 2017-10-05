class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.string :name_of_buyer
      t.string :email_of_buyer
      t.string :phone_of_buyer
      t.integer :quantity
      t.boolean :confirmed
      t.string :date
      t.references :item, foreign_key: true

      t.timestamps
    end
  end
end
