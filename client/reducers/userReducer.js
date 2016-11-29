const userReducer = function (state = {}, action) {

  switch (action.type) {
  case 'GET_USER':
    return {
      ...state,
      user: action.payload
    }
  case 'DELETE_USER':
    return {
      ...state,
      success: action.payload
    }
  default:
    return state
  }
}

export default userReducer
