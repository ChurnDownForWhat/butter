export function getUser() {
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

export function deleteUser(){
  return dispatch =>
    $.ajax({
      type: 'DELETE',
      url: `/api/user`
    })
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
  return dispatch => {
    return $.post('/api/cards', cardData)
  }
}

export function deleteCard(id, i){
  return dispatch =>
    $.ajax({
      type: 'DELETE',
      url: `/api/cards/${id}`
    })
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
    .then(dis =>
      dispatch({
        type: 'LOADING_COMPLETE',
        payload: false
      })
    )
}

export function viewAllRewards() {
  return dispatch => {
    dispatch({
      type: 'LOADING'
    })
    $.get('/api/cards')
    .then((rewards) => {
      let rewardAmount = rewards.reduce((acc, card) => {
        if(acc[card.program]){
          acc[card.program]['rewardsAmt'] += card.rewardsAmt
          acc[card.program]['count'] += 1
        }else{
          acc[card.program] = {rewardsAmt:card.rewardsAmt,program:card.program,category:card.category, count: 1 }
        }

        return acc
      },{})

      return Object.keys(rewardAmount).map((it) => rewardAmount[it])
    })
    .then(rewards =>
      dispatch({
        type: 'VIEW_ALL_REWARDS',
        payload: rewards
      })
    )
    .then(dis =>
      dispatch({
        type: 'LOADING_COMPLETE',
        payload: false
      })
    )
  }
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
}

export function getAmazonDefault() {
  return dispatch => {
    dispatch({
      type: 'LOADING'
    })
    $.get('/api/amazonSearch/')
    .then(items =>
      dispatch({
        type: 'GET_AMAZON_DEFAULTS',
        payload: items
      })
    )
    .then(dis =>
      dispatch({
        type: 'LOADING_COMPLETE',
        payload: false
      })
    )
  }
}

export function getAmazonSearch(searchTerm) {
  return dispatch =>
    $.post('/api/amazonSearch/',{searchTerm:searchTerm})
    .then(items =>
      dispatch({
        type: 'GET_AMAZON_SEARCH',
        payload: items
      })
    )
}
export function getPieData() {
  return dispatch =>
    $.get('/api/cards')
    .then(res => res.map(card => {
      if (card.category && card.rewardsAmt) {
        return [card.category.toLowerCase(), card.rewardsAmt]
      }
    }))
    .then(cards => {
      return cards.reduce((acc, curr) => {
        if (curr) {
          let data = [curr[0].toLowerCase(), curr[1]]
          if (acc[data[0]]) { acc[data[0]][1] += data[1] }
          else { acc[data[0]] = data }
        }
        return acc
      }, {} )
    })
    .then(data => {
      let pieData = []
      for (var k in data) {
        pieData.push(data[k])
      }
      return pieData
    })
    .then(data =>
      dispatch({
        type: 'GET_PIE_DATA',
        payload: data
      })
    )
}

export function sendEmail (data) {
  return dispatch =>
    $.ajax('/api/contactUs',{
      type: 'POST',
      data: {text: data}
    })
}
