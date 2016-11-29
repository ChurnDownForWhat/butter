const cardReducer = function (state = {}, action) {
  switch (action.type) {
  case 'VIEW_CARD':
    return {
      ...state,
      card: action.payload
    }
  case 'VIEW_ALL_CARDS':
    return {
      ...state,
      cards: action.payload
    }
  case 'GET_DEFAULTS':
    return {
      ...state,
      defaults: action.payload
    }
  case 'VIEW_ALL_REWARDS':
    return {
      ...state,
      rewards: action.payload
    }
  case 'GET_PIE_DATA':
    return {
      ...state,
      data: action.payload
    }
  case 'DELETE':
    return {
      ...state,
      cards: action.payload
    }
  default:
    return state
  }
}

export default cardReducer
