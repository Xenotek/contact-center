import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

let middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
    const {logger} = require('redux-logger')

    middleware = [...middleware, logger]
}
export const store = createStore(rootReducer, applyMiddleware(...middleware))




