import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AllItems from '../../components/AllItems/AllItems';
import {connect} from 'react-redux';
import {fetchInventory} from '../../actions/index';

class App extends Component{
  constructor() {
    super()

    this.state = {
      filter: "",
      viewingList: false
    }
  }

  updateFilter = (filter) => {
    this.setState({
      filter: filter,
      viewingList: true
    })
  }

  componentDidMount() {
    this.props.fetchInventory();
  }

  render(){
    let intro =
    <div>
      <h1 className="display-2">It All Has To Go!</h1>
      <p className="lead">Help out the Atlanta Campus and yourself by looking through and purchasing the pieces that surrounded you during a life-changing time.</p>
      <hr className="my-4"></hr>
      <p>Remember the desk you sat at while learning to code? It can be yours!</p>
    </div>;

    if (this.state.viewingList) {
      intro = '';
    }

    return(
      <div className="d-flex flex-row">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="#" onClick={() => this.updateFilter("All")}>All Items</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#" onClick={() => this.updateFilter("Furniture")}>Furniture</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#" onClick={() => this.updateFilter("Kitchen")}>Kitchen</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#" onClick={() => this.updateFilter("Lighting")}>Lighting</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#" onClick={() => this.updateFilter("Art & Decor")}>Art & Decor</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#" onClick={() => this.updateFilter("Media/Electronics")}>Media/Electronics</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#" onClick={() => this.updateFilter("Games")}>Games</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#" onClick={() => this.updateFilter("Office Supplies")}>Office Supplies</Link>
          </li>
        </ul>
      <div className="jumbotron ml-3">
        {intro}

        <AllItems user={this.props.user} inventoryItems={this.props.inventory} filter={this.state.filter}/>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    inventory: state.inventory
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInventory: () => dispatch(fetchInventory())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
