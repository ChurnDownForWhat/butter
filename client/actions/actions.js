
export function getUser(id) {
  return dispatch => {
    $.get(`/api/user/${id}`)
    .then(res => res.body)
    .then(user => {
      dispatch({
        type: 'GET_USER',
        payload: user
      })
    })
  }
}