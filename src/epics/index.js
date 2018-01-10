import { combineEpics } from 'redux-observable'

export default combineEpics(
    action$ => action$.ofType('PING')
        .mapTo({ type: 'PONG' })
)