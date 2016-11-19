import { deleteUser } from '../actions/actions'
import React from 'react'

class Settings extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.viewAllCards()
  }

  deleteUser(){
    console.log('deleteUser')
  }

  deleteCard(){
    console.log('deleteCard')
  }

  render(){
    return (<div>SETTINGS</div>)
  }
}

function mapStateToProps(store){
  return {
    //object w/ all user cards data
    cards: store.cardStates.cards
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    deleteCard: Action.deleteCard,
    viewAllCards: Action.viewAllCards,
    deleteUser: deleteUser

  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Settings)