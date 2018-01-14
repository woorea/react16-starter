import * as constants from '../constants'

export const batch = (payload) => {
    return {
        type: constants.BATCH_ACTIONS,
        payload
    }
}