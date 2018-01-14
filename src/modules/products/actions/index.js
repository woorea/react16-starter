import * as constants from '../constants'

export const productList = (payload) => {
    return {
        type: constants.PRODUCT_LIST,
        payload
    }
}

export const productListSuccess = (payload) => {
    return {
        type: constants.PRODUCT_LIST_SUCCESS,
        payload
    }
}

export const productListError = (payload) => {
    return {
        type: constants.PRODUCT_LIST_ERROR,
        payload
    }
}

export const productSave = (payload) => {
    return {
        type: constants.PRODUCT_SAVE,
        payload
    }
}

export const productSaveSuccess = (payload) => {
    return {
        type: constants.PRODUCT_SAVE_SUCCESS,
        payload
    }
}

export const productSaveError = (payload) => {
    return {
        type: constants.PRODUCT_SAVE_ERROR,
        payload
    }
}

export const productShow = (payload) => {
    return {
        type: constants.PRODUCT_SHOW,
        payload
    }
}

export const productShowSuccess = (payload) => {
    return {
        type: constants.PRODUCT_SHOW_SUCCESS,
        payload
    }
}

export const productShowError = (payload) => {
    return {
        type: constants.PRODUCT_SHOW_ERROR,
        payload
    }
}

export const productEdit = (payload) => {
    return {
        type: constants.PRODUCT_EDIT,
        payload
    }
}

export const productEditSuccess = (payload) => {
    return {
        type: constants.PRODUCT_EDIT_SUCCESS,
        payload
    }
}

export const productEditError = (payload) => {
    return {
        type: constants.PRODUCT_EDIT_ERROR,
        payload
    }
}

export const productUpdate = (payload) => {
    return {
        type: constants.PRODUCT_UPDATE,
        payload
    }
}

export const productUpdateSuccess = (payload) => {
    return {
        type: constants.PRODUCT_UPDATE_SUCCESS,
        payload
    }
}

export const productUpdateError = (payload) => {
    return {
        type: constants.PRODUCT_UPDATE_ERROR,
        payload
    }
}

export const productDelete = (payload) => {
    return {
        type: constants.PRODUCT_DELETE,
        payload
    }
}

export const productDeleteSuccess = (payload) => {
    return {
        type: constants.PRODUCT_DELETE_SUCCESS,
        payload
    }
}

export const productDeleteError = (payload) => {
    return {
        type: constants.PRODUCT_DELETE_ERROR,
        payload
    }
}