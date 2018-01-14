import * as PRODUCT_CONSTANTS from 'root/modules/products/constants'

export default (state = {}, action) => {
    switch(action.type) {
        case PRODUCT_CONSTANTS.PRODUCT_LIST_SUCCESS:
        case PRODUCT_CONSTANTS.PRODUCT_SHOW_SUCCESS: {
            return {
                ...state,
                ...action.payload.entities
            }
        }
        default:
            return state
    }
}