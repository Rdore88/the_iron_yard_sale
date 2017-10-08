class OrdersController < ApplicationController
  before_action :get_order, except: [:index, :create]
  before_action :authorize!, except: [:create]

  def index
    @orders = Order.all
    output = Order.organize(@orders)
    render json: output
  end

  def create
    @order = Order.new(order_params)
    @order.confirmed = false
    if @order.save
      render json: {message: "Created order"}
    else
      render json: {message: "Order Not Created!"}
    end
  end

  def destroy
    if @order.destroy
      render json: {message: "Destroyed order"}
    else
      render json: {message: "not destroyed"}
    end
  end

  def confirm_order
    if @order.update(confirmed: true)
      render json: {message: "Order confirmed"}
    else
      render json: {message: "Couldn't confirm order"}
    end
  end

  def update
    if @order.update(order_params)
      render json: {message: "Updated order"}
    else
      render json: {message: "Didn't update order"}
    end
  end

  private

  def order_params
    params.require(:order).permit(:name_of_buyer, :email_of_buyer, :phone_of_buyer, :quantity, :date, :item_id)
  end

  def get_order
    @order = Order.find(params[:id])
  end
end
