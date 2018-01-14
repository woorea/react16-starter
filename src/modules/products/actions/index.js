import * as constants from '../constants'

export const productList = () => {
    return {
        type: constants.PRODUCT_LIST
    }
}

export const productListSuccess = (payload) => {
    return {
        type: constants.PRODUCT_LIST_SUCCESS,
        payload
    }
}

export const productSave = () => {
    return {
        type: constants.PRODUCT_SAVE
    }
}

export const productSaveSuccess = () => {
    return {
        type: constants.PRODUCT_SAVE_SUCCESS
    }
}

export const productShow = () => {
    return {
        type: constants.PRODUCT_SHOW
    }
}

export const productShowSuccess = (payload) => {
    return {
        type: constants.PRODUCT_SHOW_SUCCESS,
        payload
    }
}

export const productEdit = () => {
    return {
        type: constants.PRODUCT_EDIT
    }
}

export const productEditSuccess = () => {
    return {
        type: constants.PRODUCT_EDIT_SUCCESS
    }
}

export const productUpdate = () => {
    return {
        type: constants.PRODUCT_UPDATE
    }
}

export const productUpdateSuccess = () => {
    return {
        type: constants.PRODUCT_UPDATE_SUCCESS
    }
}

export const productDelete = () => {
    return {
        type: constants.PRODUCT_DELETE
    }
}

export const productDeleteSuccess = () => {
    return {
        type: constants.PRODUCT_DELETE_SUCCESS
    }
}