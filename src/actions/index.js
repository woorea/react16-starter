import { push } from 'react-router-redux'

import { uiModalOpen, uiModalClose } from './modal'

export const LOCATION_CHANGE = "@@router/LOCATION_CHANGE"

export const UI_CLEAR = "UI/CLEAR"

const uiClear = () => {
    return {
        type: UI_CLEAR
    }
}

export {
    push,
    uiClear,
    uiModalOpen,
    uiModalClose
}