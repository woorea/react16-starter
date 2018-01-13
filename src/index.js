import './styles.scss'

import 'rxjs'
import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router'

import { Provider } from 'react-redux'

import { ConnectedRouter as Router } from 'react-router-redux'

import { Welcome } from './components/Welcome'
import ProductList from './containers/products/ProductList'
import ProductCreate from './containers/products/ProductCreate'
import ProductShow from './containers/products/ProductShow'
import ProductEdit from './containers/products/ProductEdit'

import { store, history } from './objects'

store.dispatch({type: 'PING'})

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={ Welcome } />
        <Route exact path="/products" component={ ProductList } />
        <Route exact path="/products/create" component={ ProductCreate } />
        <Route exact path="/products/:product" component={ ProductShow } />
        <Route exact path="/products/:product/edit" component={ ProductEdit } />
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'));