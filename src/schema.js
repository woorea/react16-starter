import { schema } from 'normalizr'

const productSchema = new schema.Entity('products', {}, {
    idAttribute: 'code'
})

export {
    productSchema
}