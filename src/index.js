import './styles.scss'

import 'rxjs'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { Provider } from 'react-redux'
import { createLogger as createLoggerMiddleware } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'

import reducer from './reducers'

import epic from './epics'

import { Welcome } from './containers/Welcome'

const loggerMiddleware = createLoggerMiddleware()
const epicMiddleware = createEpicMiddleware(epic)

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            loggerMiddleware,
            epicMiddleware
        )
    )
)

store.dispatch({type: 'PING'})

const history = createBrowserHistory()

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={Welcome} />
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'));