require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  let(:params) {{name: "Robby", password: "robby"}}

  it "logs a user in" do
    robby = User.create!(name: "Robby", password: "robby", password_confirmation: "robby")
    post :create, params: params
    assert response.ok?
    expect(JSON.parse(response.body)["user_id"]).to eq(robby.id)
  end

  it "wont log a user in with the wrong info" do
    User.create!(name: "Robby", password: "hello", password_confirmation: "hello")
    post :create, params: params
    assert response.ok?
    expect(JSON.parse(response.body)["message"]).to eq("Name or password not correct")
  end
end
