require "rails_helper"

RSpec.describe ConfirmOrderToUserMailer, type: :mailer do
  let(:item) {Item.create!(title: "desk", description: "The best desk ever", price: 20.99, category: "furniture", quantity: 50)}
  let(:order) {Order.create!(name_of_buyer: "imani", email_of_buyer: "imani@olivegrove.com", phone_of_buyer: "404-555-5555", quantity: 10, item_id: item.id)}
  let(:mail) {ConfirmOrderToUserMailer.confirm_order(order)}

  it "exists" do
    assert ConfirmOrderToUserMailer
  end

  it "renders the subject with correct item title" do
    expect(mail.subject).to eq("Your order for desk has been confirmed")
  end

end
