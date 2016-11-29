const loadingReducer = function (state = {loading: true}, action) {

  switch (action.type) {
  case 'LOADING':
    return {
      ...state,
      loading: true
    }
  case 'LOADING_COMPLETE':
    return {
      ...state,
      loading: false
    }
  default:
    return state
  }
}

export default loadingReducer
