import * as actions from 'root/actions/modal'

export default (state = null, action) => {
    switch(action.type) {
        case actions.UI_MODAL_OPEN: {
            return action.payload
        }
        case actions.UI_MODAL_CLOSE: {
            return null
        }
        default:
            return state
    }
}