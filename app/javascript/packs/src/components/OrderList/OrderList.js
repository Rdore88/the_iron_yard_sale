import React, {Component} from 'react';
import Order from '../Order/Order';
import {connect} from 'react-redux';

export default class OrderList extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    let orderList = this.props.orderList.map((order) => {
      if (!order.order.confirmed) {
        return (
          <Order
            key={order.order.id}
            orderData={order}
            confirmOrder={(id) => this.props.confirmOrder(id)}
            rejectOrder={(id) => this.props.rejectOrder(id)}/>
        );
      }
    });

    return(
      <div className="card m-3 p-3 card w-50 mx-auto" style={{width: "20rem"}}>
        <div className="card-body">
          <h4 className="card-title">Pending Orders</h4>
          {orderList.length > 1 ? orderList : (<p>There are no pending orders to confirm...</p>)}
        </div>
      </div>
    )
  }
}
