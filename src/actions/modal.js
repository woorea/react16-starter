export const UI_MODAL_OPEN = "UI/MODAL/OPEN"
export const UI_MODAL_CLOSE = "UI/MODAL/CLOSE"

export const uiModalOpen = (payload) => {
    return {
        type: UI_MODAL_OPEN,
        payload
    }
}

export const uiModalClose = () => {
    return {
        type: UI_MODAL_CLOSE
    }
}