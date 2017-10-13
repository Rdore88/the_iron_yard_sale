import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchOrders} from '../../actions/index';

class CompletedOrders extends Component {
  componentDidMount() {
    this.props.fetchOrders(this.props.user.user_id);
  }

  render(){
    let completedOrders = this.props.orderList.map((order) => {
      if (order.order.confirmed) {
        return (
          <div key={order.order.id} className="card p-4 w-100" style={{width: "20rem"}}>
            <p className="card-subtitle mb-2 text-muted">{order.order.name_of_buyer}</p>
            <p className="card-subtitle mb-2 text-muted">{order.order.phone_of_buyer}</p>
            <p className="card-subtitle mb-2 text-muted">{order.order.email_of_buyer}</p>
            <h6 className="card-text">Item: {order.item.title} Quantity: {order.item.quantity} Price: {order.item.price}</h6>
          </div>
        )
      }
    })

    return(
      <div className="card m-3 p-3 card w-50 mx-auto" style={{width: "20rem"}}>
        <div className="card-body">
          <h4 className="card-title">Completed Orders</h4>
          {completedOrders}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    orderList: state.orders.orderList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: (id) => dispatch(fetchOrders(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompletedOrders);
