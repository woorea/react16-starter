import * as constants from '../constants'

export default (state = {}, action) => {
    switch(action.type) {
        case constants.MERGE_ENTITIES: {
            return {
                ...state,
                ...action.payload.entities
            }
        }
        default:
            return state
    }
}