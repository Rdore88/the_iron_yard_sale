import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/index.js';

import BaseLayout from './components/BaseLayout/BaseLayout';
import Home from './containers/Home/index';
import Admin from './containers/Admin/index';
import CompletedOrders from './containers/CompletedOrders/index';
import SingleItem from './containers/SingleItem/index';
import AdminLogin from './components/AdminLogin/AdminLogin';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={AdminLogin} />
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/item/:id' component={SingleItem} />
          <Route exact path='/admin/confirmed' component={CompletedOrders} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
