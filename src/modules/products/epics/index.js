import { push, uiModalClose } from 'root/actions'

import * as constants from '../constants'
import * as actions from '../actions'
import { mergeEntities } from 'root/actions'

import { normalize } from 'normalizr'
import { productSchema } from 'root/schema'

export default [
    action$ => action$.ofType(constants.PRODUCT_LIST)
        .delay(1000)
        .mergeMap(({payload}) => {
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
            return [
                mergeEntities({ entities }),
                actions.productListSuccess({
                    result
                })
            ]
        }),
    action$ => action$.ofType(constants.PRODUCT_SAVE)
        .delay(1000)
        .mapTo(actions.productSaveSuccess()),
    action$ => action$.ofType(constants.PRODUCT_SAVE_SUCCESS)
        .mapTo(push('/products')),
    action$ => action$.ofType(constants.PRODUCT_SHOW)
        .delay(1000)
        .mergeMap(() => {

            const fake = {
                entities: {
                    products: {
                        'product.1': { code: 'product.1', name: 'product.1'}
                    }
                },
                result: 'product.1'
            }

            const { entities, result } = fake

            return [
                mergeEntities({ entities }),
                actions.productShowSuccess({
                    result
                })
            ]
        }),
    action$ => action$.ofType(constants.PRODUCT_UPDATE)
        .delay(1000)
        .mapTo(actions.productUpdateSuccess()),
    action$ => action$.ofType(constants.PRODUCT_UPDATE_SUCCESS)
        .mapTo(push('/products')),
    action$ => action$.ofType(constants.PRODUCT_DELETE)
        .delay(1000)
        .mapTo(actions.productDeleteSuccess()),
    action$ => action$.ofType(constants.PRODUCT_DELETE_SUCCESS)
        .mergeMap(() => {
            return [
                uiModalClose(),
                actions.productList()
            ]
        })
    ]