import { push, uiModalClose } from 'root/actions'

import * as actions from '../actions'

import { normalize } from 'normalizr'
import { productSchema } from 'root/schema'

export default [
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
            return actions.productListSuccess({
                entities,
                result
            })
        }),
    action$ => action$.ofType(actions.PRODUCT_SAVE)
        .delay(1000)
        .mapTo(actions.productSaveSuccess()),
    action$ => action$.ofType(actions.PRODUCT_SAVE_SUCCESS)
        .mapTo(push('/products')),
    action$ => action$.ofType(actions.PRODUCT_SHOW)
        .delay(1000)
        .mapTo(actions.productShowSuccess()),
    action$ => action$.ofType(actions.PRODUCT_UPDATE)
        .delay(1000)
        .mapTo(actions.productUpdateSuccess()),
    action$ => action$.ofType(actions.PRODUCT_UPDATE_SUCCESS)
        .mapTo(push('/products')),
    action$ => action$.ofType(actions.PRODUCT_DELETE)
        .delay(1000)
        .mapTo(actions.productDeleteSuccess()),
    action$ => action$.ofType(actions.PRODUCT_DELETE_SUCCESS)
        .mergeMap(() => {
            return [
                uiModalClose(),
                actions.productList()
            ]
        })
    ]