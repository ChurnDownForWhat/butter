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
    .then(defaults => 
      dispatch({
        type: 'GET_DEFAULTS',
        payload: defaults
      })
    )
}

export function addCard(cardData){
  return dispatch => 
    $.post('/api/cards', cardData)
    .then($.get('/api/cards'))
    .then(cards =>
      dispatch({
        type: 'VIEW_ALL_CARDS',
        payload: cards
      })
    )
} 

export function deleteCard(id){
  return dispatch => 
    $.ajax(`/api/cards/${id}`, {
      type: 'DELETE'
    })
    .then($.get('/api/cards'))
    .then(cards =>
      dispatch({
        type: 'VIEW_ALL_CARDS',
        payload: cards
      })
    )
}

export function viewAllCards() {
  return dispatch => 
    $.get('/api/cards')
    .then(cards =>
      dispatch({
        type: 'VIEW_ALL_CARDS',
        payload: cards
      })
    )
}

export function viewAllRewards() {
  return dispatch => 
    $.get('/api/cards')
    .then(rewards => {
      return rewards.cards
    }).then((rewards) => {
      // var noRepeats = rewards
      // for(var i = 0; i < noRepeats.length; i++){
      //   for(var k = 0; k < noRepeats.length; k++){
      //     if(noRepeats[i].program === noRepeats[k].program && k !== i){
      //       noRepeats[i].rewardsAmt += noRepeats[k].rewardsAmt
      //       noRepeats.splice(k, 1)
      //     }
      //   }
      // }
      // return noRepeats
      const rewardAmt = rewards.reduce((acc,card) =>(
          acc[card.program] ? 
          acc[card.program][rewardsAmt] += card.rewardsAmt : 
          acc[card.program] = {rewardsAmt:card.rewardsAmt,program:card.program,category:card.category}
        ,acc),{})
      return Object.keys(rewardAmt).map((it) => rewardAmt[it])
    })
    .then(rewards => 
      dispatch({
        type: 'VIEW_ALL_REWARDS',
        payload: rewards
      })
    )

}

export function viewCard(id) {
  return dispatch => 
    $.get(`/api/cards/${id}`)
    .then(card => 
      dispatch({
        type: 'VIEW_CARD',
        payload: card
      })
    )
}

export function updateCard(id, data){
  return dispatch => 
    $.ajax(`/api/cards/${id}`,{
      type: 'PUT',
      data: data
    })
    .then($.get('/api/cards'))
    .then(cards =>
      dispatch({
        type: 'VIEW_ALL_CARDS',
        payload: cards
      })
    )
}

