import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchInventory, createOrder} from '../../actions/index';
import {NavLink} from 'react-router-dom';

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
    let alertMessage = '';

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
          <div className="row w-100" key={item.id}>
            <div className="card m-2 p-3 w-50 col h-50" style={{minWidth: '350px'}}>
              <img className="bg-dark rounded text-white p-3 card-img-top" src="https://ak.picdn.net/assets/cms/89a342bc2cb8831391f7feb79d0a8ed22265f892-stock-photo-lonely-boat-on-a-beach-with-aerial-view-280774472.jpg" width="100%" height="100%" alt="Card image cap"></img>
              <div className="card-body">
                <h4 className="card-title">{item.title}</h4>
                <h6 className="card-subtitle text-muted mb-2 mt-4">About:</h6>
                <p className="card-text">{item.description}</p>
                <h6 className="card-subtitle text-muted mb-2 mt-2">Price:</h6>
                <p className="card-text">${item.price}</p>
                <h6 className="card-subtitle text-muted mb-2 mt-2">Quantity:</h6>
                <p className="card-text">{item.quantity}</p>
              </div>
            </div>

            <div className="col m-2 p-3 card w-50 h-50" style={{minWidth: '350px'}}>
              {alertMessage}
              <h3 className="card-title">Order Form</h3>
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
      <div className="container w-75 mx-auto">
        <NavLink className="nav-item nav-link w-50 mt-2 mx-auto text-center" to="/">Back To Store</NavLink>
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
