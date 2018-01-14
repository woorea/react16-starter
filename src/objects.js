import createHistory from 'history/createBrowserHistory'

import { createStore, applyMiddleware , combineReducers} from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import { createLogger as createLoggerMiddleware } from 'redux-logger'

import { createEpicMiddleware, combineEpics } from 'redux-observable'

import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'

import { routerReducer as router } from 'react-router-redux'

import { reducer as form } from 'redux-form'

import entities from './reducers/entities'
import modal from './reducers/modal'

import * as productReducers from 'root/modules/products/reducers'

import productsEpics from 'root/modules/products/epics'

import * as  constants from 'root/constants'

const withBatchActions = (reducer) => {
    return (state, action) => {
        switch(action.type) {
            case constants.BATCH_ACTIONS: {
                return action.payload.reduce(reducer, state)
            }
            default: {
                return reducer(state, action)
            }
        } 
    }
}

export const history = createHistory()

const loggerMiddleware = createLoggerMiddleware()
const epicMiddleware = createEpicMiddleware(combineEpics(
    ...productsEpics
))
const routerMiddleware = createRouterMiddleware(history)

export const store = createStore(
    withBatchActions(combineReducers({
        entities,
        ui: combineReducers({
            products: combineReducers({
                list: productReducers.list,
                create: productReducers.create,
                show: productReducers.show,
                edit: productReducers.edit
            })
        }),
        modal,
        router,
        form    
    })),
    composeWithDevTools(
        applyMiddleware(
            loggerMiddleware,
            epicMiddleware,
            routerMiddleware
        )
    )
)