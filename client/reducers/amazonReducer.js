const amazonReducer = function (state = {}, action) {
  console.log('amazonReducer was called with state', state, 'and action', action)

  switch (action.type) {
  case 'GET_AMAZON_DEFAULTS':
    return {
      ...state,
      name: action.payload
    }
  default:
    return state
  }
}

export default amazonReducer