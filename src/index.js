import './styles.scss';

import 'rxjs'
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import { store } from './objects'

import Application from './containers/Application'

ReactDOM.render((
  <Provider store={store}>
    <Application />
  </Provider>
), document.getElementById('root'));