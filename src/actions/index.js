import { push } from 'react-router-redux'

export const LOCATION_CHANGE = "@@router/LOCATION_CHANGE"

export const UI_CLEAR = "UI/CLEAR"
export const UI_MODAL_OPEN = "UI/MODAL/OPEN"
export const UI_MODAL_CLOSE = "UI/MODAL/CLOSE"

export const PRODUCT_LIST = "PRODUCT/LIST"
export const PRODUCT_LIST_SUCCESS = "PRODUCT/LIST/SUCCESS"

export const PRODUCT_SAVE = "PRODUCT/SAVE"
export const PRODUCT_SAVE_SUCCESS = "PRODUCT/SAVE/SUCCESS"

export const PRODUCT_SHOW = "PRODUCT/SHOW"
export const PRODUCT_SHOW_SUCCESS = "PRODUCT/SHOW/SUCCESS"

export const PRODUCT_UPDATE = "PRODUCT/UPDATE"
export const PRODUCT_UPDATE_SUCCESS = "PRODUCT/UPDATE/SUCCESS"

export const PRODUCT_DELETE = "PRODUCT/DELETE"
export const PRODUCT_DELETE_SUCCESS = "PRODUCT/DELETE/SUCCESS"

export const uiClear = () => {
    return {
        type: UI_CLEAR
    }
}

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

export const productList = () => {
    return {
        type: PRODUCT_LIST
    }
}

export const productListSuccess = (payload) => {
    return {
        type: PRODUCT_LIST_SUCCESS,
        payload
    }
}

export const productSave = () => {
    return {
        type: PRODUCT_SAVE
    }
}

export const productSaveSuccess = () => {
    return {
        type: PRODUCT_SAVE_SUCCESS
    }
}

export const productShow = () => {
    return {
        type: PRODUCT_SHOW
    }
}

export const productShowSuccess = () => {
    return {
        type: PRODUCT_SHOW_SUCCESS,
        payload: {
            entities: {
                products: {
                    'product.1': { code: 'product.1', name: 'product.1'}
                }
            },
            result: 'product.1'
        }
    }
}

export const productUpdate = () => {
    return {
        type: PRODUCT_UPDATE
    }
}

export const productUpdateSuccess = () => {
    return {
        type: PRODUCT_UPDATE_SUCCESS
    }
}

export const productDelete = () => {
    return {
        type: PRODUCT_DELETE
    }
}

export const productDeleteSuccess = () => {
    return {
        type: PRODUCT_DELETE_SUCCESS
    }
}

export {
    push
}