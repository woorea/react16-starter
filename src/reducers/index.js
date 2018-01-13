import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import * as actions from '../actions'

export const entities = (state = {}, action) => {
    switch(action.type) {
        case actions.PRODUCT_LIST_SUCCESS:
        case actions.PRODUCT_SHOW_SUCCESS: {
            return {
                ...state,
                ...action.payload.entities
            }
        }
        default:
            return state
    }
}

export const ui = (state = null, action) => {
    switch(action.type) {
        case actions.LOCATION_CHANGE:
        case actions.UI_CLEAR: {
            return null
        }
        case actions.UI_MODAL_OPEN: {
            return {
                ...state,
                modal: action.payload
            }
        }
        case actions.UI_MODAL_CLOSE: {
            const {modal: undefined, ...rest} = state
            return rest
        }
        case actions.PRODUCT_LIST: {
            return {
                loading: true,
                items: []
            }
        }
        case actions.PRODUCT_LIST_SUCCESS: {
            return {
                loading: false,
                items: action.payload.result
            }
        }
        case actions.PRODUCT_SHOW: {
            return {
                loading: true
            }
        }
        case actions.PRODUCT_SHOW_SUCCESS: {
            return {
                loading: false,
                item: action.payload.result
            }
        }
        default:
            return state
    }
}

export default combineReducers({
    entities,
    ui,
    router,
    form
})