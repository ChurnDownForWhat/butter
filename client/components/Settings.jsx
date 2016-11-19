import React from 'react'
import * as Action from '../actions/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Bs from 'react-bootstrap'

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
    return (
      <div>
        <Bs.Row>
          <div className='page-header'>Settings</div>
        </Bs.Row>
        <Bs.Row>  
          { this.props.cards.map(card => 
              <div>
                <div>{card.name}</div>
                <button onClick={this.deleteCard}>Remove</button>
              </div>
            )
          }
        </Bs.Row>
        <Bs.Row>
          <button onClick={this.deleteUser}>Cancel Account</button>
        </Bs.Row>
      </div>

    )
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