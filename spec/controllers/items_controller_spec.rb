require 'rails_helper'

RSpec.describe ItemsController, type: :controller do
  let(:robby) {User.create!(name: "Robby", password: "robby", password_confirmation: "robby")}
  let(:image) {Rails.root.join('app', 'spec', 'fixtures', 'images', 'test_cat.png')}

  let(:params) {{user_id: robby.id, item: {title: "desk", description: "The best desk ever", price: 20.99, category: "furniture", quantity: 50, image: image}}}

  let(:noauth_params) {{item: {title: "desk", description: "The best desk ever", price: 20.99, category: "furniture", quantity: 50}}}

  it "creates an item" do
    post :create, params: params
    assert response.ok?
    expect(Item.find_by(title: "desk")).to be_present
  end

  it "won't create an item if not authorized" do
    post :create, params: noauth_params
    assert response.ok?
    expect(Item.all.length).to be(0)
  end

  it "destroys an item" do
    post :create, params: params
    assert response.ok?
    expect(Item.all.length).to be(1)
    item = Item.find_by(title: "desk")
    delete :destroy, params: {id: item.id}
    assert response.ok?
    expect(Item.all.length).to be(0)
  end

  it "shows just the items for unauthorized user" do
    item = Item.create!(title: "desk", description: "The best desk ever", price: 20.99, category: "furniture", quantity: 50)
    get :show, params: {id: item.id}
    expect(JSON.parse(response.body)["price"]).to eq(20.99)
    expect(JSON.parse(response.body).length).to be > 2
  end

  it "shows the items and orders for authorized user" do
    item = Item.create!(title: "desk", description: "The best desk ever", price: 20.99, category: "furniture", quantity: 50)
    get :show, params: {id: item.id, user_id: robby.id}
    assert response.ok?
    # always have two keys coming back, the item and all orders associated with it
    expect(JSON.parse(response.body).length).to eq(2)
  end

  it "adds quantity to item" do
    item = Item.create!(title: "desk", description: "The best desk ever", price: 20.99, category: "furniture", quantity: 50)
    get :add_quantity, params: {id: item.id, user_id: robby.id, item: {quantity: 10}}
    assert response.ok?
    expect(Item.find_by(title: "desk").quantity).to be(60)
  end

  it "subtracts quantity to item" do
    item = Item.create!(title: "desk", description: "The best desk ever", price: 20.99, category: "furniture", quantity: 50)
    get :subtract_quantity, params: {id: item.id, user_id: robby.id, item: {quantity: 10}}
    assert response.ok?
    expect(Item.find_by(title: "desk").quantity).to be(40)
  end

  it "returns all items" do
    Item.create!(title: "desk", description: "The best desk ever", price: 20.99, category: "furniture", quantity: 50)
    get :index
    assert response.ok?
    expect(JSON.parse(response.body).length).to be >=1
  end
end
