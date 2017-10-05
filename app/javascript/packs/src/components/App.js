import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component{
  render(){
    return(
      <div className="d-flex flex-row">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="#">All Items</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Furniture</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Kitchen</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Decor</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Games</Link>
          </li>
      </ul>

      <div className="jumbotron ml-3">
        <h1 className="display-2">It All Has To Go!</h1>
        <p className="lead">Help out the Atlanta Campus and yourself by looking through and purchasing the pieces that surrounded you during a life-changing time.</p>
        <hr className="my-4"></hr>
        <p>Remember the desk you sat at while learning to code? It can be yours!</p>
        <p className="lead">
          <Link className="btn btn-primary btn-lg" to="#" role="button">See All Items</Link>
        </p>
      </div>
    </div>
    )
  }
}
