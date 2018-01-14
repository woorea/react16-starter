import * as constants from 'root/constants'

export default (state = true, action) => {
    switch(action.type) {
        case constants.UI_TOGGLE_SIDEBAR: {
            return !state
        }
        default:
            return state
    }
}