import './styles.scss'

import 'rxjs'
import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router'

import { Provider } from 'react-redux'

import { ConnectedRouter as Router } from 'react-router-redux'

import { Welcome } from 'root/components/Welcome'

import productRoutes from 'root/modules/products/routes'

import { store, history } from './objects'

store.dispatch({type: 'PING'})

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={ Welcome } />
        {productRoutes}
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'));