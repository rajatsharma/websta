import { createStore, compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './rootReducer'

const middleWares = [logger]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleWares)))

export default store