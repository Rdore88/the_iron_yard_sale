import React, {Component} from 'react';

export default class AdminPendingItem extends Component{
  render(){
    // Sample item; formatting may change when data is fetched from backend
    let item = {
      name: 'Light gray chair',
      quantity: 10,
      price: '$10.00',
      buyer: {
        name: 'Jane Doe',
        email: 'jane@doeindustries.com',
        phone: '(678) 555-5555'
      }
    }
    return(
      <form className="p-3 row">
        <p className="col-3">{item.name}</p>
        <p className="col-2 text-center">{item.price}</p>
        <p className="col-2 text-center">{item.quantity}</p>
        <div className="col-3">
          <p className="mb-0">{item.buyer.name}</p>
          <p className="mb-0">{item.buyer.phone}</p>
          <p className="">{item.buyer.email}</p>
        </div>
        <div className="col-2 d-flex justify-content-between align-items-start">
          <button className="btn btn-primary" type="button">Yes</button>
          <button className="btn btn-danger" type="button">No!</button>
        </div>
      </form>
    )
  }
}
