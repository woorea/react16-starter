import { push } from 'react-router-redux'

import { uiModalOpen, uiModalClose } from './modal'

import { mergeEntities } from './entities'

import * as constants from '../constants'

const uiClear = () => {
    return {
        type: constants.UI_CLEAR
    }
}

export {
    push,
    uiClear,
    uiModalOpen,
    uiModalClose,
    mergeEntities
}