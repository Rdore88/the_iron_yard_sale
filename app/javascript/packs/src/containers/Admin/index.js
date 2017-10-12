import React, {Component} from 'react';
import ItemForm from '../../components/ItemForm/ItemForm';
import OrderList from '../../components/OrderList/OrderList';
import {connect} from 'react-redux';
import {fetchOrders, confirmOrder, rejectOrder} from '../../actions/index';

class Admin extends Component {
  componentDidMount() {
    if (this.props.user.user_id) {
      this.props.fetchOrders(this.props.user.user_id);
    }
  }
  confirmOrder = (id) => {
    this.props.confirmOrder(id, this.props.user.user_id);
  }
  rejectOrder = (id) => {
    this.props.rejectOrder(id, this.props.user.user_id);
  }
  render() {
    return (
      <div>
        <OrderList
          userId={this.props.user.user_id}
          orderList={this.props.orderList}
          confirmOrder={(id) => this.confirmOrder(id)}
          rejectOrder={(id) => this.rejectOrder(id)}/>
        <ItemForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    orderList: state.orders.orderList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: (id) => dispatch(fetchOrders(id)),
    confirmOrder: (id, user_id) => dispatch(confirmOrder(id, user_id)),
    rejectOrder: (id, user_id) => dispatch(rejectOrder(id, user_id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
