import { push } from 'react-router-redux'

import { uiModalOpen, uiModalClose } from './modal'

import * as constants from '../constants'

const uiClear = () => {
    return {
        type: constants.UI_CLEAR
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
    uiToggleSidebar,
    uiModalOpen,
    uiModalClose
}