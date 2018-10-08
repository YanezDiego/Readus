import { createStore, combineReducers, applyMiddleware} from 'redux'
import  thunk  from 'redux-thunk'
import savedStories from '../reducers/savedStories'

const rootReducer = combineReducers({
  savedStories: savedStories
})

export default createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk))
