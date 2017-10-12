import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteInventoryItem} from '../../actions/index';

class AllItems extends Component{
  constructor(props) {
    super(props)
  }
  generateInventoryList = (filter) => {
    let filteredItems = this.props.inventoryItems.inventory.filter(item => {
      return item.category === filter;
    });

    let listedItems = filteredItems.map((item, index) => {
      return (
        <li key={index}>
          <div className="card" style={{width: "20rem"}}>
            <div className="card-body">
              <h4 className="card-title">{item.title}</h4>
              <h6 className="card-subtitle mb-2 text-muted">{item.category}</h6>
              <p className="card-text">{item.description}</p>
            </div>
          </div>
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
            <li key={index}>
              <div className="card" style={{width: "20rem"}}>
                <div className="card-body">
                  <h4 className="card-title">{item.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{item.category}</h6>
                  <p className="card-text">{item.description}</p>
                  <h4 className="card-title">${item.price}</h4>
                  <h4 className="card-title"># In Stock: {item.quantity}</h4>
                </div>
                {this.props.user.user_id &&
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.props.deleteInventoryItem({
                      user_id: this.props.user.user_id,
                      id: item.id
                    })}>Delete</button>
                }
              </div>
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
