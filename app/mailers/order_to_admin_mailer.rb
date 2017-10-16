class OrderToAdminMailer < ApplicationMailer

  def new_order(order)
    @order = order
    @item = @order.item
    mail(to: ENV["ADMIN_EMAIL"], subject: "New order created for #{@item.title}")
  end
end
