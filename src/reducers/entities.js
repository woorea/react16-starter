import * as actions from '../modules/products/actions'

export default (state = {}, action) => {
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