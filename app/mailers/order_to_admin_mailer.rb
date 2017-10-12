class OrderToAdminMailer < ApplicationMailer

  def new_order(order)
    @order = order
    @item = @order.item
    mail(to: "robby.dore@theironyard.com", subject: "New order created for #{@item.title}")
  end
end
