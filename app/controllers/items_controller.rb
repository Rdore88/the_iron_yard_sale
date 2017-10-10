class ItemsController < ApplicationController
  before_action :get_item, except: [:index, :create]
  before_action :authorize!, except: [:index, :show]

  def index
    @items = Item.all
    render json: @items
  end

  def show
    if current_user
      render json: {item: @item, orders: @item.orders}
      return
    else
      render json: @item
    end
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      render json: {message: "Created item"}
    else
      render json: {message: "Not Created!"}
    end
  end

  def destroy
    if @item.destroy
      render json: {message: "Removed item from inventory"}
    else
      render json: {message: "Couldn't remove item"}
    end
  end

  def subtract_quantity
    if @item.update(quantity: @item.quantity - item_params["quantity"].to_i)
      render json: {message: "Reduced amount of item"}
    else
      render json: {message: "couldnt reduce amount"}
    end
  end

  def add_quantity
    if @item.update(quantity: @item.quantity + item_params["quantity"].to_i)
      render json: {message: "Added amount of item"}
    else
      render json: {message: "couldnt add amount"}
    end
  end

  def update
    @item.update(item_params)
  end

  private

  def item_params
    params.require(:item).permit(:title, :description, :price, :category, :quantity)
  end

  def get_item
    @item = Item.find(params[:id])
  end
end
