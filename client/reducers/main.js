//This file will combine all reducers into one big object
import { combineReducers, createStore, applyMiddleware } from 'redux'
import cardReducer from './cardReducer'
import userReducer from './userReducer'
import amazonReducer from './amazonReducer'
import loadingReducer from "./loadingReducer"

const logMiddleware = ({ dispatch, getState }) => {
  return function(next) {
    return function(action) {
      return next(action)
    }
  }
}

const thunkMiddleware = ({ dispatch, getState }) => {
  return function(next) {
    return function (action) {
      return typeof action === 'function' ?
        action(dispatch, getState) :
        next(action)
    }
  }
}

const finalCreateStore = applyMiddleware(logMiddleware, thunkMiddleware)(createStore)
// const finalCreateStore = applyMiddleware(Thunk)(createStore)

const allReducers = combineReducers({
  userStates: userReducer,
  cardStates: cardReducer,
  amazonItems: amazonReducer,
  loading: loadingReducer
})

export const store = finalCreateStore(allReducers)
