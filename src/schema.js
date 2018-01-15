import { schema } from 'normalizr'

const productSchema = new schema.Entity('products', {}, {
    idAttribute: 'code'
})

const planSchema = new schema.Entity('plans', {}, {
    idAttribute: 'code'
})

const chargeSchema = new schema.Entity('charges', {}, {
    idAttribute: 'code'
})

productSchema.define({
    plans: []
})

planSchema.define({
    charges: []
})

export {
    productSchema,
    planSchema,
    chargeSchema
}