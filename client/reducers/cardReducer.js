var cardReducer = function (state = {}, action) {
  console.log('cardReducer was called with state', state, 'and action', action)

  switch (action.type) {
    case 'ADD_CARD':
      return {
        ...state,
        card: action.value
      }
    case 'DELETE_CARD':
      return {
        ...state,
        card: action.value
      }
    case 'UPDATE_CARD':
      return {
        ...state,
        card: action.value
      }
    case 'VIEW_CARD':
      return {
        ...state,
        card: action.value
      }
    case 'VIEW_ALL_CARDS':
      return {
        ...state,
        card: action.value
      }
    case 'GET_DEFAULTS':
      return {
        ...state,
        card: action.value
      }
    default:
      return state;
  }
}

export default cardReducer