export function getUser(id) {
  return dispatch => 
    $.get('/api/user')
    .then(res => res)
    .then(user => 
      dispatch({
        type: 'GET_USER',
        payload: user
      })
    )
}

export function getDefaults() {
  return dispatch => 
    $.get('/api/defaults')
    .then(res => res)
    .then(defaults => 
      dispatch({
        type: 'GET_DEFAULTS',
        payload: defaults
      })
    )
}

export function addCard(cardData){
  return dispatch => 
    $.post('/api/cards',cardData)
    .then(data => viewAllCards(data))
} 

export function deleteCard(cardData){
  return dispatch => 
    $ajax
    .delete('/api/cards/:id', cardData)
    .then(data => viewAllCards(data))
}

export function viewAllCards() {
  return dispatch => 
    $.get('/api/cards')
    .then(res => res)
    .then(cards =>
      dispatch({
        type: 'VIEW_ALL_CARDS',
        payload: cards
      })
    )
}

export function viewCard(id) {
  return dispatch => 
    $.get(`/api/cards/${id}`)
    .then(res => res)
    .then(card => 
      dispatch({
        type: 'VIEW_CARD',
        payload: card
      })
    )
}

export function updateCard(cardData){
  return dispatch => 
    $ajax
    .put('/api/cards/:id',cardData)
    .then(data => viewAllCards(data))
}

