import React, {Component} from 'react';
import ItemForm from '../../components/ItemForm/ItemForm';
import OrderList from '../../components/OrderList/OrderList';
import {connect} from 'react-redux';
import {fetchOrders} from '../../actions/index';

class Admin extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    if (this.props.user.user_id) {
      this.props.fetchOrders(this.props.user.user_id);
    }
  }
  render() {
    return (
      <div>
        <OrderList userId={this.props.user.user_id} orderList={this.props.orderList}/>
        <ItemForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("STATE: ", state);
  return {
    user: state.user,
    orderList: state.orders.orderList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: (id) => dispatch(fetchOrders(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
