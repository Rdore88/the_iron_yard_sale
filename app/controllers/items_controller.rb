class ItemsController < ApplicationController
  before_action :get_item, only: [:destroy, :update, :change_quantity]
  before_action :authorize!, except: [:index]

  def index
    @items = Item.all
    render json: @items
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
    @item.update(quantity: @item.quantity - item_params.quantity)
  end

  def add_quantity
    @item.update(quantity: @item.quantity + item_params.quantity)
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
