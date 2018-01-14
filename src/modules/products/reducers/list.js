import { UI_CLEAR } from 'root/constants'

import * as constants from '../constants'

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
        case constants.PRODUCT_LIST: {
            return {
                ...state,
                loading: true
            }
        }
        case constants.PRODUCT_LIST_SUCCESS: {
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