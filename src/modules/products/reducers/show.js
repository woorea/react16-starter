import { UI_CLEAR } from 'root/actions'

import * as actions from '../actions'

const initialState = {
    loading: true,
    product: null,
    editing: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actions.PRODUCT_SHOW: {
            return {
                ...state,
                loading: true
            }
        }
        case actions.PRODUCT_SHOW_SUCCESS: {
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