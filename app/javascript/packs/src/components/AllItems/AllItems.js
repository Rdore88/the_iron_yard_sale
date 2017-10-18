import React, {Component} from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {deleteInventoryItem} from '../../actions/index';
import { Tooltip } from 'reactstrap';

class AllItems extends Component{
  constructor(props) {
    super(props)

    this.state = {
      currentTooltip: '',
      isToolTipOpen: false
    }
  }

  toggle = (id) => {
    this.setState({
      currentTooltip: String(id),
      isToolTipOpen: !this.state.isToolTipOpen
    })
  }
  generateInventoryList = (filter) => {
    let filteredItems = this.props.inventoryItems.inventory.filter(item => {
      return item.category === filter;
    });

    let listedItems = filteredItems.map((item, index) => {
      return (
        <li key={index} className="ml-4">
          <div className="d-flex justify-content-center">
            <h5 id={"tooltip-" + index} className="card-title mr-5">{item.title.length > 20 ? item.title.substring(0, 20) + '...' : item.title}</h5>
            <Tooltip
              placement="top"
              isOpen={this.state.isToolTipOpen && this.state.currentTooltip === String(index) ? true : false}
              target={"tooltip-" + index}
              toggle={() => this.toggle(index)}>
              {item.title}
            </Tooltip>
            <h4 className="card-title text-primary">${item.price}</h4>
          </div>
          <div className="item-card card bg-dark rounded-top" style={{width: "20rem", height: "20rem"}}>
            <img className="card-img-top" src="..." alt=""></img>
            <div className="card-img-overlay">
              <h6 className="card-subtitle mb-2 text-muted">{item.category}</h6>
              <p className="card-text text-white">{item.description}</p>
              {item.quantity > 0 ? (
                <h4 className="text-success card-title">Only {item.quantity} left in stock.</h4>
              ) : (
                <h4 className="text-danger card-title">OUT OF STOCK</h4>
              )}
            </div>
          </div>
          <NavLink
            style={{borderRadius: this.props.user.user_id ? '0' : '0 0 .25rem .25rem'}}
            className="order-btn btn btn-success btn-block"
            to={"/item/" + item.id}>Order Item</NavLink>
          {this.props.user.user_id &&
            <button
              type="button"
              className="delete-btn btn btn-danger btn-block"
              onClick={() => this.props.deleteInventoryItem({
                user_id: this.props.user.user_id,
                id: item.id
              })}>Delete</button>
            }
        </li>
      );
    })

    return listedItems;
  }

  render(){
    let items;
    switch (this.props.filter) {
      case "All":
        items = this.props.inventoryItems.inventory.map((item, index) => {
          return (
            <li key={index} className="ml-4">
              <div className="d-flex justify-content-center">
                <h5 id={"tooltip-" + index} className="card-title mr-5">{item.title.length > 20 ? item.title.substring(0, 20) + '...' : item.title}</h5>
                <Tooltip
                  placement="top"
                  isOpen={this.state.isToolTipOpen && this.state.currentTooltip === String(index) ? true : false}
                  target={"tooltip-" + index}
                  toggle={() => this.toggle(index)}>
                  {item.title}
                </Tooltip>
                <h6 className="card-title text-primary">${item.price}</h6>
              </div>
              <div className="item-card card bg-dark rounded-top" style={{width: "20rem", height: "20rem"}}>
                <img className="card-img-top" src="..." alt=""></img>
                <div className="card-img-overlay">
                  <h6 className="card-subtitle mb-2 text-muted">{item.category}</h6>
                  <p className="card-text text-white">{item.description}</p>
                  {item.quantity > 0 ? (
                    <h4 className="text-success card-title">Only {item.quantity} left in stock.</h4>
                  ) : (
                    <h4 className="text-danger card-title">OUT OF STOCK</h4>
                  )}
                </div>
              </div>
              <NavLink
                style={{borderRadius: this.props.user.user_id ? '0' : '0 0 .25rem .25rem'}}
                className="order-btn btn btn-success btn-block"
                to={"/item/" + item.id}>Order Item</NavLink>
              {this.props.user.user_id &&
                <button
                  type="button"
                  className="delete-btn btn btn-danger btn-block"
                  onClick={() => this.props.deleteInventoryItem({
                    user_id: this.props.user.user_id,
                    id: item.id
                  })}>Delete</button>
                }
            </li>
          );
        })
        break;
      case "Furniture":
        items = this.generateInventoryList("Furniture");
        break;
      case "Art & Decor":
        items = this.generateInventoryList("Art & Decor");
        break;
      case "Lighting":
        items = this.generateInventoryList("Lighting");
        break;
      case "Kitchen":
        items = this.generateInventoryList("Kitchen");
        break;
      case "Media/Electronics":
        items = this.generateInventoryList("Media/Electronics");
        break;
      case "Games":
        items = this.generateInventoryList("Games");
        break;
      case "Office Supplies":
        items = this.generateInventoryList("Office Supplies");
        break;
      default:
        items = ""
    }

    return(
      <div className="list-container">
        {items}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteInventoryItem: (obj) => dispatch(deleteInventoryItem(obj))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(AllItems);
