

const amazonReducer = function (state = {}, action) {
  switch (action.type) {
  case 'GET_AMAZON_DEFAULTS':
    return {
      ...state,
      name: action.payload
    }
  case 'GET_AMAZON_SEARCH':
    return {
      ...state,
      name: action.payload
    }

  default:
    return state
  }
}

export default amazonReducer
