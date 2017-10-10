import React, {Component} from 'react';

import AdminNav from '../AdminNav/AdminNav';
import AdminPendingItem from '../AdminPendingItem/AdminPendingItem';

export default class AdminPending extends Component{
  render(){
    return(
      <div className="m-3 card">
        <AdminNav />
        <div className="card-body p-3">
          <h1 className="">Pending approval</h1>
          <div className="p-3 row pb-0">
            <h6 className="col-3">Name</h6>
            <h6 className="col-2 text-center">Price</h6>
            <h6 className="col-2 text-center">Quantity</h6>
            <h6 className="col-3">Buyer</h6>
            <h6 className="col-2 text-center">Action</h6>
          </div>
          <AdminPendingItem />
        </div>
      </div>
    )
  }
}
