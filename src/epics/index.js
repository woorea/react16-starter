import { combineEpics } from 'redux-observable'

import * as actions from '../actions'
import { push, productList, productListSuccess, productDeleteSuccess, productSaveSuccess, productShowSuccess, productUpdateSuccess } from '../actions';

import { normalize } from 'normalizr'
import { productSchema } from '../schema';

export default combineEpics(
    action$ => action$.ofType(actions.PRODUCT_LIST)
        .delay(1000)
        .map(({payload}) => {
            const fake = {
                content: [
                    { code: 'product.1', name: 'product.1'},
                    { code: 'product.2', name: 'product.2'}
                ],
                offset: 0,
                max: 10,
                total: 2
            }
            const { content, ...pagination} = fake
            const { entities, result } = normalize(content, [productSchema])
            return productListSuccess({
                entities,
                result
            })
        }),
    action$ => action$.ofType(actions.PRODUCT_SAVE)
        .delay(1000)
        .mapTo(productSaveSuccess()),
    action$ => action$.ofType(actions.PRODUCT_SAVE_SUCCESS)
        .mapTo(push('/products')),
    action$ => action$.ofType(actions.PRODUCT_SHOW)
        .delay(1000)
        .mapTo(productShowSuccess()),
    action$ => action$.ofType(actions.PRODUCT_UPDATE)
        .delay(1000)
        .mapTo(productUpdateSuccess()),
    action$ => action$.ofType(actions.PRODUCT_UPDATE_SUCCESS)
        .mapTo(push('/products')),
    action$ => action$.ofType(actions.PRODUCT_DELETE)
        .delay(1000)
        .mapTo(productDeleteSuccess()),
    action$ => action$.ofType(actions.PRODUCT_DELETE_SUCCESS)
        .mapTo(productList())
)