import { UI_CLEAR } from 'root/constants'

import * as constants from '../constants'

export default (state = {}, action) => {
    switch(action.type) {
        case UI_CLEAR: {
            return {}
        }
        case constants.PRODUCT_SHOW: {
            return {
                loading: true
            }
        }
        case constants.PRODUCT_SHOW_SUCCESS: {
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