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
    this.props.deleteUser()
  }

  deleteCard(e){
    this.props.deleteCard(e.target.parentElement.id)
    e.target.parentElement.remove()
  }

  render(){
    return (
      <div>
        <Bs.Row>
          <div className='page-header'>Settings</div>
        </Bs.Row>
        <Bs.Row>  
          { this.props.cards.map((card, i) => 
              <div key={i} id={card.id} >
                <div>{card.name}</div>
                <Bs.Button bsStyle='danger' onClick={this.deleteCard.bind(this)}>Remove</Bs.Button>
              </div>
            )
          }
        </Bs.Row>
        <Bs.Row>
          <Bs.Button bsStyle='danger' bsSize='large' onClick={this.deleteUser.bind(this)}>Cancel Account</Bs.Button>
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