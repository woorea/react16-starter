import { push, uiModalClose } from 'root/actions'

import * as constants from '../constants'
import * as actions from '../actions'
import { mergeEntities } from 'root/actions'

import { normalize } from 'normalizr'
import { productSchema } from 'root/schema'

import { Observable } from 'rxjs/Observable'
import { ajax } from 'rxjs/observable/dom/ajax'

export default [
    action$ => action$.ofType(constants.PRODUCT_LIST)
        .switchMap(({payload}) => ajax.getJSON('http://localhost:4000/api/products'))
        .mergeMap(json => {
            const fake = {
                content: json,
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
        })
        .catch((e) => Observable.of(actions.productListError(e))),
    action$ => action$.ofType(constants.PRODUCT_SAVE)
        .switchMap(({payload}) => ajax.post('http://localhost:4000/api/products', payload))
        .mapTo(actions.productSaveSuccess())
        .catch((e) => Observable.of(actions.productSaveError(e))),
    action$ => action$.ofType(constants.PRODUCT_SAVE_SUCCESS)
        .mapTo(push('/products')),
    action$ => action$.ofType(constants.PRODUCT_SHOW)
        .switchMap(({payload}) => ajax.getJSON(`http://localhost:4000/api/products/${payload.code}`))
        .mergeMap((json) => {

            const fake = {
                entities: {
                    products: {
                        [json.code]: json
                    }
                },
                result: json.code
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
        .switchMap(({payload}) => ajax.put(`http://localhost:4000/api/products/${payload.code}`, payload))
        .mapTo(actions.productUpdateSuccess())
        .catch((e) => Observable.of(actions.productUpdateError(e))),
    action$ => action$.ofType(constants.PRODUCT_UPDATE_SUCCESS)
        .mapTo(push('/products')),
    action$ => action$.ofType(constants.PRODUCT_DELETE)
        .switchMap(({payload}) => ajax.delete(`http://localhost:4000/api/products/${payload.code}`))
        .mapTo(actions.productDeleteSuccess())
        .catch((e) => Observable.of(actions.productDeleteError(e))),
    action$ => action$.ofType(constants.PRODUCT_DELETE_SUCCESS)
        .mergeMap(() => {
            return [
                uiModalClose(),
                actions.productList()
            ]
        })
    ]