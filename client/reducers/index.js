//This file will combine all reducers into one big object
import { combineReducers, createStore } from 'redux' 
import cardReducer from './cardReducer'
import userReducer from './userReducer'

const allReducers = combineReducers({
  user: userReducer,
  card: cardReducer
})

var store = createStore(allReducers)

console.log('store state after initialization:', store.getState())

