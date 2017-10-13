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
          <div className="m-3 p-3 card w-50 mx-auto" key={order.order.id}>
            {order.order.email_of_buyer}
          </div>
        )
      }
    })

    return(
      <div className="card m-3 p-3 card w-50 mx-auto" style={{width: "20rem"}}>
        <div className="card-body">
          <h4 className="card-title">Confirmed Orders</h4>
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
