class UsersController < ApplicationController

  def create
    @user = User.find_by(name: params[:name])
    if @user && user.authenticate([:password])
      render json: {user: @user}
    else
      render json: {message: "Name or password not correct", status: :bad_request}
    end
  end
end
