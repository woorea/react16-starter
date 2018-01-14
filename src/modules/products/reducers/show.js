import { UI_CLEAR } from 'root/constants'

import * as constants from '../constants'

const initialState = {
    loading: true,
    product: null,
    editing: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case constants.PRODUCT_SHOW: {
            return {
                ...state,
                loading: true
            }
        }
        case constants.PRODUCT_SHOW_SUCCESS: {
            return {
                ...state,
                loading: false,
                product: action.payload.result
            }
        }
        default:
            return state
    }
}