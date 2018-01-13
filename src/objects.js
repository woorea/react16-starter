import createHistory from 'history/createBrowserHistory'

import { createStore, applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import { createLogger as createLoggerMiddleware } from 'redux-logger'

import { createEpicMiddleware } from 'redux-observable'

import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'

import reducer from './reducers'

import epic from './epics'

export const history = createHistory()

const loggerMiddleware = createLoggerMiddleware()
const epicMiddleware = createEpicMiddleware(epic)
const routerMiddleware = createRouterMiddleware(history)

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            loggerMiddleware,
            epicMiddleware,
            routerMiddleware
        )
    )
)