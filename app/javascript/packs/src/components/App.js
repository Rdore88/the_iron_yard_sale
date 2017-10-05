import React, {Component} from 'react';

export default class App extends Component{
  render(){
    return(
      <div className="d-flex flex-row">
      <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link" href="#">All Items</a>
      </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Furniture</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Kitchen</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Decor</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Games</a>
        </li>
    </ul>

    <div className="jumbotron ml-3">
      <h2 className="display-2">It All Has To Go!</h2>
      <p className="lead">Help out the Atlanta Campus and yourself by looking through and purchasing the pieces that surrounded you during a life-changing time.</p>
      <hr className="my-4"></hr>
      <p>Remember the desk you sat at while learning to code? It can be yours!</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">See All Items</a>
      </p>
    </div>
    </div>
    )
  }
}
