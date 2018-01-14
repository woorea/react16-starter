import * as constants from '../constants'

export const uiModalOpen = (payload) => {
    return {
        type: constants.UI_MODAL_OPEN,
        payload
    }
}

export const uiModalClose = () => {
    return {
        type: constants.UI_MODAL_CLOSE
    }
}