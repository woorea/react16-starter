import { UI_CLEAR } from 'root/actions'

import * as actions from '../actions'

const initialState = {
    items: [],
    offset: 0,
    max: 10,
    total: 0,
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case UI_CLEAR: {
            return initialState
        }
        case actions.PRODUCT_LIST: {
            return {
                ...state,
                loading: true
            }
        }
        case actions.PRODUCT_LIST_SUCCESS: {
            return {
                ...state,
                items: action.payload.result,
                loading: false
            }
        }
        default:
            return state
    }
}