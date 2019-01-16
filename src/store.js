import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

let middleware = [thunk]

export const store = createStore(rootReducer, applyMiddleware(...middleware))




