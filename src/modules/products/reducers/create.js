import { UI_CLEAR } from 'root/actions'

import * as actions from '../actions'

export default (state = {}, action) => {
    switch(action.type) {
        case UI_CLEAR: {
            return {}
        }
        case actions.PRODUCT_CREATE_SUCCESS: {
            return state
        }
        default:
            return state
    }
}