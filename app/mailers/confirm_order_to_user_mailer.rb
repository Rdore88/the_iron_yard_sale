class ConfirmOrderToUserMailer < ApplicationMailer

  def confirm_order(order)
    @order = order
    @item = @order.item
    mail(to: @order.email_of_buyer, subject: "Your order for #{@item.title} has been confirmed")
  end
end
