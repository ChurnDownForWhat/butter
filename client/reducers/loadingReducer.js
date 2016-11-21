const loadingReducer = function (state = {loading: true}, action) {

  switch (action.type) {
  case 'LOADING':
    console.log('HIT',action.payload)
    return {
      ...state,
      loading: true
    }
  case 'LOADING_COMPLETE':
    console.log('Hit',action.payload)
    return {
      ...state,
      loading: false
    }
  default:
    return state
  }
}

export default loadingReducer