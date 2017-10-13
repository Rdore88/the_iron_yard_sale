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
        <p className="card-subtitle mb-2 text-muted">{order.name_of_buyer}</p>
        <p className="card-subtitle mb-2 text-muted">{order.phone_of_buyer}</p>
        <p className="card-subtitle mb-2 text-muted">{order.email_of_buyer}</p>
        <h6 className="card-text">Item: {item.title} Quantity: {item.quantity} Price: {item.price}</h6>
        <div className="d-flex">
          <button className="w-100 btn btn-success" onClick={() => this.props.confirmOrder(order.id)}>Confirm Order</button>
          <button className="ml-4 w-100 btn btn-danger" onClick={() => this.props.rejectOrder(order.id)}>Reject Order</button>
        </div>
      </div>
    )
  }
}