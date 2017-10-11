import React, {Component} from 'react';
import {createInventoryItem} from '../../actions/index';
import {connect} from 'react-redux';

class ItemForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      description: '',
      price: '',
      quantity: '',
      category: ''
    }
  }

  handleTitle = (e) => {
    this.setState({title: e.target.value});
  }
  handleDescription = (e) => {
    this.setState({description: e.target.value});
  }
  handlePrice = (e) => {
    this.setState({price: Number(e.target.value)});
  }
  handleQuantity = (e) => {
    this.setState({quantity: Number(e.target.value)});
  }
  handleCategory = (e) => {
    this.setState({category: e.target.value});
  }

  handleSubmit = () => {
    let itemObj = {
      user_id: this.props.user.user_id ? this.props.user.user_id : undefined,
      item: this.state
    }

    this.props.createInventoryItem(itemObj);
  }

  render() {
    return (
      <div className="m-3 p-3 card w-50 mx-auto">
        <div className="form-group">
          <label htmlFor="orderTitle">Title</label>
          <input type="text" className="form-control" id="orderTitle" placeholder="Enter Title" value={ this.state.title } onChange={ this.handleTitle }/>
        </div>
        <div className="form-group">
          <label htmlFor="orderDescription">Description</label>
          <input type="text" className="form-control" id="orderDescription" placeholder="Enter Description" value={ this.state.description } onChange={ this.handleDescription }/>
        </div>
        <div className="form-group">
          <label htmlFor="orderPrice">Price</label>
          <input type="text" className="form-control" id="orderPrice" placeholder="Enter Price" value={ this.state.price } onChange={ this.handlePrice }/>
        </div>
        <div className="form-group">
          <label htmlFor="orderQuantity">Quantity</label>
          <input type="text" className="form-control" id="orderQuantity" placeholder="Enter Quantity" value={ this.state.quantity } onChange={ this.handleQuantity }/>
        </div>
        <div className="form-group">
          <label htmlFor="orderCategory">Category</label>
          <input type="text" className="form-control" id="orderCategory" placeholder="Enter Category" value={ this.state.category } onChange={ this.handleCategory }/>
        </div>
        <button type="button" onClick={this.handleSubmit} className="btn btn-secondary mx-auto">Submit</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createInventoryItem: (obj) => dispatch(createInventoryItem(obj))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
