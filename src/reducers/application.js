import * as constants from 'root/constants'

const key = window.location.pathname.split('/')[1]

const initialState = {
    section: key.length ? key : 'dashboard',
    isSidebarOpen: true
}

export default (state = initialState, action) => {
    switch(action.type) {
        case constants.UI_TOGGLE_SIDEBAR: {
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen
            }
        }
        case constants.UI_SET_SECTION: {
            return {
                ...state,
                section: action.payload.section
            }
        }
        default:
            return state
    }
}