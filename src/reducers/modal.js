import * as constants from 'root/constants'

export default (state = null, action) => {
    switch(action.type) {
        case constants.UI_MODAL_OPEN: {
            return action.payload
        }
        case constants.UI_MODAL_CLOSE: {
            return null
        }
        default:
            return state
    }
}