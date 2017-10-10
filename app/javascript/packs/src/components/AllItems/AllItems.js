import React, {Component} from 'react';
import mockItems from '../../testData/mockItems.json';

import './AllItems.css';

export default class AllItems extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    let items, filteredItems;

    switch (this.props.filter) {
      case "All":
        items = mockItems.map((item, index) => {
          return (
            <li key={index}>
              <div className="card" style={{width: "20rem"}}>
                <div className="card-body">
                  <h4 className="card-title">{item.item.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{item.item.category}</h6>
                  <p className="card-text">{item.item.description}</p>
                </div>
              </div>
            </li>
          );
        })
        break;
      case "Furniture":
        filteredItems = mockItems.filter(item => {
          return item.item.category === "Furniture";
        });

        items = filteredItems.map((item, index) => {
          return (
            <li key={index}>
              <div className="card" style={{width: "20rem"}}>
                <div className="card-body">
                  <h4 className="card-title">{item.item.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{item.item.category}</h6>
                  <p className="card-text">{item.item.description}</p>
                </div>
              </div>
            </li>
          );
        })
        break;
      case "Art & Decor":
        filteredItems = mockItems.filter(item => {
          return item.item.category === "Art & Decor";
        });

        items = filteredItems.map((item, index) => {
          return (
            <li key={index}>
              <div className="card" style={{width: "20rem"}}>
                <div className="card-body">
                  <h4 className="card-title">{item.item.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{item.item.category}</h6>
                  <p className="card-text">{item.item.description}</p>
                </div>
              </div>
            </li>
          );
        })
        break;
      case "Lighting":
        filteredItems = mockItems.filter(item => {
          return item.item.category === "Lighting";
        });

        items = filteredItems.map((item, index) => {
          return (
            <li key={index}>
              <div className="card" style={{width: "20rem"}}>
                <div className="card-body">
                  <h4 className="card-title">{item.item.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{item.item.category}</h6>
                  <p className="card-text">{item.item.description}</p>
                </div>
              </div>
            </li>
          );
        })
        break;
      case "Kitchen":
        filteredItems = mockItems.filter(item => {
          return item.item.category === "Kitchen";
        });

        items = filteredItems.map((item, index) => {
          return (
            <li key={index}>
              <div className="card" style={{width: "20rem"}}>
                <div className="card-body">
                  <h4 className="card-title">{item.item.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{item.item.category}</h6>
                  <p className="card-text">{item.item.description}</p>
                </div>
              </div>
            </li>
          );
        })
        break;
      case "Media/Electronics":
        filteredItems = mockItems.filter(item => {
          return item.item.category === "Media/Electronics";
        });

        items = filteredItems.map((item, index) => {
          return (
            <li key={index}>
              <div className="card" style={{width: "20rem"}}>
                <div className="card-body">
                  <h4 className="card-title">{item.item.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{item.item.category}</h6>
                  <p className="card-text">{item.item.description}</p>
                </div>
              </div>
            </li>
          );
        })
        break;
      case "Office Supplies":
        filteredItems = mockItems.filter(item => {
          return item.item.category === "Office Supplies";
        });

        items = filteredItems.map((item, index) => {
          return (
            <li key={index}>
              <div className="card" style={{width: "20rem"}}>
                <div className="card-body">
                  <h4 className="card-title">{item.item.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{item.item.category}</h6>
                  <p className="card-text">{item.item.description}</p>
                </div>
              </div>
            </li>
          );
        })
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
