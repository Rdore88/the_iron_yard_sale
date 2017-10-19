class OrderCreatedMailer < ApplicationMailer

  def order_created(order)
    @order = order
    mail(to: @order.email_of_buyer, subject: "Thank you #{@order.name_of_buyer} for your order")
  end
end
