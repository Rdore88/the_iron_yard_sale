class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

  helper_method :current_user
  helper_method :authorize!

  def current_user
    @current_user ||= User.find_by(id: params[:user_id])
  end

  def authorize!
    unless current_user
      render json: {status: :unauthorized, message: "Please log in"}
    end
  end
end
