class OrdersController < ApplicationController
  before_action :get_order, except: [:index, :create]
  before_action :authroize!, only: [:confirm_order]

  def index
    @orders = Order.all
    render json: @orders
  end

  def create
    @order = Order.new(order_params)
    @order.confirmed = false
    item = Item.find(order_params.item_id)
    @order.title = item.title
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
    @order.update(confirmed: true)
  end

  def update
    @order.update(order_params)
  end

  private

  def order_params
    params.require(:order).permit(:name_of_buyer, :email_of_buyer, :phone_of_buyer, :quantity, :date, :item_id)
  end

  def get_order
    @order = Order.find(params[:id])
  end
end
