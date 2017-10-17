import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchInventory, createOrder} from '../../actions/index';

class SingleItem extends Component{
  constructor() {
    super()

    this.state = {
      name_of_buyer: "",
      email_of_buyer: "",
      phone_of_buyer: "",
      quantity: "",
      item_id: ""
    }
  }
  componentDidMount() {
    this.props.fetchInventory();
    this.setState({item_id: Number(this.props.match.params.id)})
  }

  handleName = (e) => {
    this.setState({name_of_buyer: e.target.value});
  }

  handlePhone = (e) => {
    this.setState({phone_of_buyer: e.target.value});
  }

  handleEmail = (e) => {
    this.setState({email_of_buyer: e.target.value});
  }

  handleQuantity = (e) => {
    this.setState({quantity: e.target.value});
  }

  handleSubmit = () => {
    this.props.createOrder({order: this.state})

    this.setState({
      name_of_buyer: "",
      email_of_buyer: "",
      phone_of_buyer: "",
      quantity: "",
      item_id: ""
    });
  }
  render(){
    let alertMessage;

    if (this.props.orderErrorMessages) {
      alertMessage =
      <div className="alert alert-danger" role="alert">
        {this.props.orderErrorMessages}
      </div>
    } else if (this.props.successOrderMessages) {
      alertMessage =
      <div className="alert alert-success" role="alert">
        {this.props.successOrderMessages}
      </div>
    }

    const id = this.props.match.params.id;
    let item = this.props.inventory.map((item) => {
      if (item.id === Number(id)) {
        return (
          <div  className="m-3 p-3 card w-50 mx-auto" key={item.id}>
            <div>{item.title}</div>
            <div>{item.description}</div>
            <div>{item.price}</div>
            <div>{item.quantity}</div>

            <div>
              {alertMessage}
              <div className="form-group">
                <label htmlFor="orderName">Name</label>
                <input type="text" className="form-control" id="orderName" placeholder="Enter Name" value={ this.state.name_of_buyer } onChange={ this.handleName }/>
              </div>
              <div className="form-group">
                <label htmlFor="orderEmail">Email</label>
                <input type="email" className="form-control" id="orderEmail" placeholder="Enter Email" value={ this.state.email_of_buyer } onChange={ this.handleEmail }/>
              </div>
              <div className="form-group">
                <label htmlFor="orderPhone">Phone Number</label>
                <input type="tel" className="form-control" id="orderPhone" placeholder="Enter Phone Number (No dashes or parentheses)" value={ this.state.phone_of_buyer } onChange={ this.handlePhone }/>
              </div>
              <div className="form-group">
                <label htmlFor="orderQuantity">How Many?</label>
                <input type="text" className="form-control" id="orderQuantity" placeholder="Enter Quantity" value={ this.state.quantity } onChange={ this.handleQuantity }/>
              </div>
              <button type="button" onClick={this.handleSubmit} className="btn btn-secondary mx-auto">Order</button>
            </div>
          </div>

        )
      }
    })

    return(
      <div className="card m-3 p-3 card w-75 mx-auto" style={{width: "20rem"}}>
        {item}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    inventory: state.inventory.inventory,
    orderErrorMessages: state.orders.orderErrorMessages,
    successOrderMessages: state.orders.successOrderMessages
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInventory: () => dispatch(fetchInventory()),
    createOrder: (obj) => dispatch(createOrder(obj))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
