import { push } from 'react-router-redux'

import { uiModalOpen, uiModalClose } from './modal'

import * as constants from '../constants'

const uiClear = () => {
    return {
        type: constants.UI_CLEAR
    }
}

const uiSetSection = (payload) => {
    return {
        type: constants.UI_SET_SECTION,
        payload
    }
}

const uiToggleSidebar = () => {
    return {
        type: constants.UI_TOGGLE_SIDEBAR
    }
}

export {
    push,
    uiClear,
    uiSetSection,
    uiToggleSidebar,
    uiModalOpen,
    uiModalClose
}