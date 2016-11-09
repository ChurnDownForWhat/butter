var userReducer = function (state = {}, action) {
  console.log('userReducer was called with state', state, 'and action', action)

  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        user: action.value
      }
    default:
      return state;
  }
}

export default userReducer