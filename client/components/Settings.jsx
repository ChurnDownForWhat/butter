import React from 'react'
import * as Action from '../actions/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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
    deleteUser: Action.deleteUser

  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Settings)