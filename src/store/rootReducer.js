import { combineReducers } from 'redux'
import layoutReducer from '../connectors/dragcontext/reducer'

export default combineReducers({
  layoutContext: layoutReducer
})