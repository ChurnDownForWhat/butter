const userReducer = function (state = {}, action) {
  // console.log('userReducer was called with state', state, 'and action', action)

  switch (action.type) {
  case 'GET_USER':
    return {
      ...state,
      user: action.payload
    }
  default:
    return state
  }
}

export default userReducer