import { UI_CLEAR } from 'root/actions'

import * as actions from '../actions'

export default (state = {}, action) => {
    switch(action.type) {
        case UI_CLEAR: {
            return {}
        }
        case actions.PRODUCT_SHOW: {
            return {
                loading: true
            }
        }
        case actions.PRODUCT_SHOW_SUCCESS: {
            return {
                view: 'products/show',
                loading: false,
                item: action.payload.result
            }
        }
        default:
            return state
    }
}