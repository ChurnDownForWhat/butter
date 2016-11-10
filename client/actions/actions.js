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

export function getDefaults() {
  return dispatch => {
    $.get('/api/defaults')
    .then(res => res.body)
    .then(defaults => {
      dispatch({
        type: 'GET_DEFAULTS',
        payload: defaults
      })
    })
  }
}

export function addCard(cardData){
  return dispatch => {
    $ajax
    .post('/api/cards',cardData)
    .then(function(data){
      // viewAllCards(data)
    })
  }
} 

export function deleteCard(cardData){
  return dispatch => {
    $ajax
    .delete('/api/cards/:id', cardData)
    .then(function(data){
      // viewAllCards(data)
    })
  }
}

export function viewAllCards(id) {
  return dispatch => {
    $.get(`/api/user/${id}/cards`)
    .then(res => res.body)
    .then(cards => {
      dispatch({
        type: 'VIEW_ALL_CARDS',
        payload: cards
      })
    })
  }
}

export function viewCard(id) {
  return dispatch => {
    $.get(`/api/cards/${id}`)
    .then(res = res.body)
    .then(card => {
      dispatch({
        type: 'VIEW_CARD',
        payload: card
      })
    })
  }
}

export function updateCard(cardData){
  $ajax
  .put('/api/cards/:id',cardData)
  .then(function(){
    // viewAllCards(data)
  })
}

