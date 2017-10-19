import React, {Component} from 'react';
import {connect} from 'react-redux';

export default class Order extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    let order = this.props.orderData.order;
    let item = this.props.orderData.item;

    return(
      <div className="card p-4 w-100" style={{width: "20rem"}}>
        <h3 className="card-title">Order # - {order.id}</h3>
        <hr></hr>
        <div className="d-flex justify-content-between">
          <div>
            <p className="card-subtitle mb-2">Name of Buyer</p>
            <p className="card-subtitle mb-2">Phone Number of Buyer</p>
            <p className="card-subtitle mb-2">Email of Buyer</p>
            <hr></hr>
            <p className="card-subtitle mb-2">Item To Purchase</p>
            <p className="card-subtitle mb-2">Current Inventory of Item</p>
            <p className="card-subtitle mb-2">Amount Ordered by Buyer</p>
            <p className="card-subtitle mb-2">Price</p>
          </div>
          <div className="text-right">
            <p className="card-subtitle mb-2 text-muted">{order.name_of_buyer}</p>
            <p className="card-subtitle mb-2 text-muted">{order.phone_of_buyer}</p>
            <p className="card-subtitle mb-2 text-muted">{order.email_of_buyer}</p>
            <hr></hr>
            <p className="card-subtitle mb-2 text-muted">{item.title}</p>
            <p className="card-subtitle mb-2 text-muted">{item.quantity}</p>
            <p className="card-subtitle mb-2 text-muted">{order.quantity}</p>
            <p className="card-subtitle mb-2 text-muted">${item.price}</p>
          </div>
        </div>
        { this.props.confirmOrder &&
          <div className="d-flex">
            <button className="w-100 btn btn-success"
              onClick={() => this.props.confirmOrder({
                order_id: order.id,
                item_id: item.id,
                amountChanged: order.quantity
              })}>Confirm Order</button>
            <button className="ml-4 w-100 btn btn-danger" onClick={() => this.props.rejectOrder(order.id)}>Reject Order</button>
          </div>
        }
      </div>
    )
  }
}
