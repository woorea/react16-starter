export const PRODUCT_LIST = "UI/PRODUCT/LIST"
export const PRODUCT_LIST_SUCCESS = "UI/PRODUCT/LIST/SUCCESS"

export const PRODUCT_CREATE = "UI/PRODUCT/CREATE"
export const PRODUCT_CREATE_SUCCESS = "UI/PRODUCT/CREATE/SUCCESS"

export const PRODUCT_SAVE = "UI/PRODUCT/SAVE"
export const PRODUCT_SAVE_SUCCESS = "UI/PRODUCT/SAVE/SUCCESS"

export const PRODUCT_SHOW = "UI/PRODUCT/SHOW"
export const PRODUCT_SHOW_SUCCESS = "UI/PRODUCT/SHOW/SUCCESS"

export const PRODUCT_EDIT = "UI/PRODUCT/EDIT"
export const PRODUCT_EDIT_SUCCESS = "UI/PRODUCT/EDIT/SUCCESS"

export const PRODUCT_UPDATE = "UI/PRODUCT/UPDATE"
export const PRODUCT_UPDATE_SUCCESS = "UI/PRODUCT/UPDATE/SUCCESS"

export const PRODUCT_DELETE = "UI/PRODUCT/DELETE"
export const PRODUCT_DELETE_SUCCESS = "UI/PRODUCT/DELETE/SUCCESS"

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

export const productEdit = () => {
    return {
        type: PRODUCT_EDIT
    }
}

export const productEditSuccess = () => {
    return {
        type: PRODUCT_EDIT_SUCCESS
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