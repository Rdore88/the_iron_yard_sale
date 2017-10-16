class UsersController < ApplicationController
  before_action :authorize!, only: [:destroy]

  def create
    @user = User.find_by(name: params[:name])
    if @user && @user.authenticate(params[:password])
      render json: {status: "success", user_id: @user.id}
    else
      render json: {message: "Name or password not correct", status: "failed"}
    end
  end
end
