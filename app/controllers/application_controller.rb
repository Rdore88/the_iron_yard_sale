class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_toekn

  helper_method :current_user
  helper_method :authorize!

  def current_user
    @current_user ||= User.find_by(params[:id])
  end

  def authorize!
    unless current_user
      render json: {message: "Please log in"}
    end
  end
end
