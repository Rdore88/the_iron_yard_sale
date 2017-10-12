import React, {Component} from 'react';
import Order from '../Order/Order';

export default class OrderList extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    let orderList = this.props.orderList.map((order) => {
      return (
        <Order key={order.order.id} orderData={order}/>
      );
    });

    return(
      <div className="card m-3 p-3 card w-50 mx-auto" style={{width: "20rem"}}>
        <div className="card-body">
          <h4 className="card-title">Pending Orders</h4>
          {orderList}
        </div>
      </div>
    )
  }
}
