import { UI_CLEAR } from 'root/constants'

import * as constants from '../constants'

export default (state = {}, action) => {
    switch(action.type) {
        case UI_CLEAR: {
            return {}
        }
        case constants.PRODUCT_CREATE_SUCCESS: {
            return state
        }
        default:
            return state
    }
}