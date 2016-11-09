const cardReducer = function (state = {}, action) {
  console.log('cardReducer was called with state', state, 'and action', action)

  switch (action.type) {
  case 'ADD_CARD':
    return {
      ...state,
      card: action.payload
    }
  case 'DELETE_CARD':
    return {
      ...state,
      card: action.payload
    }
  case 'UPDATE_CARD':
    return {
      ...state,
      card: action.payload
    }
  case 'VIEW_CARD':
    return {
      ...state,
      card: action.payload
    }
  case 'VIEW_ALL_CARDS':
    return {
      ...state,
      user: action.payload
    }
  case 'GET_DEFAULTS':
    return {
      ...state,
      card: action.payload
    }
  default:
    return state
  }
}

export default cardReducer