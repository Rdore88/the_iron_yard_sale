require 'rails_helper'

RSpec.describe OrdersController, type: :controller do
  let(:robby) {User.create!(name: "Robby", password: "robby", password_confirmation: "robby")}
  let(:item) {Item.create!(title: "desk", description: "The best desk ever", price: 20.99, category: "furniture", quantity: 50)}
  let(:params) {{order: {name_of_buyer: "imani", email_of_buyer: "imani@olivegrove.com", phone_of_buyer: "404-555-5555", quantity: 10, item_id: item.id}}}
  let(:too_many_params) {{order: {name_of_buyer: "imani", email_of_buyer: "imani@olivegrove.com", phone_of_buyer: "404-555-5555", quantity: 60, item_id: item.id}}}

  it "creates an order" do
    post :create, params: params
    assert response.ok?
    expect(Order.find_by(name_of_buyer: "imani")).to be_present
  end

  it "won't create an order if there isn't enough in stock" do
    post :create, params: too_many_params
    assert response.ok?
    expect(JSON.parse(response.body)["message"]).to eq("Not enough in stock to complete order")
  end

  it "confirms an order" do
    post :create, params: params
    order = Order.find_by(name_of_buyer: "imani")
    order.update(date: "thursday")
    get :confirm_order, params: {id: order.id, user_id: robby.id}
    assert response.ok?
    expect(Order.find_by(name_of_buyer: "imani").confirmed).to be(true)
  end

it "won't return orders if not authorized" do
  post :create, params: params
  assert response.ok?
  get :index
  assert response.ok?
  expect(JSON.parse(response.body)["message"]).to eq("Please log in")
end

it "will return orders if authorized" do
  post :create, params: params
  assert response.ok?
  get :index, params: {user_id: robby.id}
  assert response.ok?
  expect(JSON.parse(response.body).length).to be > 0
  expect(JSON.parse(response.body)[0].keys).to eq(["order", "item"])
end

it "won't destroy an order if not authorized" do
  post :create, params: params
  assert response.ok?
  expect(Order.all.length).to be > 0
  order = Order.find_by(name_of_buyer: "imani")
  delete :destroy, params: {id: order.id}
  assert response.ok?
  expect(JSON.parse(response.body)["message"]).to eq("Please log in")
end

it "will destroy an order if authorized" do
  post :create, params: params
  assert response.ok?
  expect(Order.all.length).to be > 0
  order = Order.find_by(name_of_buyer: "imani")
  delete :destroy, params: {id: order.id, user_id: robby.id}
  assert response.ok?
  expect(JSON.parse(response.body)["message"]).to eq("Destroyed order")
  expect(Order.all.length).to be(0)
end

it "updates an order" do
  post :create, params: params
  assert response.ok?
  order = Order.find_by(name_of_buyer: "imani")
  put :update, params: {user_id: robby.id, id: order.id, order: {date: "November 3rd at 10AM"}}
  assert response.ok?
  expect(JSON.parse(response.body)["message"]).to eq("Updated order")
end

end
