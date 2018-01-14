import * as constants from '../constants'

export const mergeEntities = (payload) => {
    return {
        type: constants.MERGE_ENTITIES,
        payload
    }
}