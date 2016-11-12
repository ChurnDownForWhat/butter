import CardView from './CardView'
import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'
import Sidebar from './Sidebar'
import CardEditView from './CardEditView'

class CardsPage extends React.Component {
  constructor(props){
    super(props)
  }  

  componentDidMount(){
     //async stuff


    // var newCard = {
    //   name: 'Citi DoubleCash',
    //   user_id: "21274577-2e7c-40cf-b2c0-6b56f4ceeda9",
    //   cardType: 'Citi',
    //   benefit: '2% cash back',
    //   annFeeAmt: 0,
    //   waivedFees: false,
    //   category: 'Cash Back',
    //   program: 'Citi Rewards',
    //   signupBonus: 0,
    //   minSpend: 0
    // }

    this.props.viewAllCards()

    // new Promise((res, rej) => res(this.props.addCard(newCard)))
    // .then(res => console.log("addCard", res))

    // new Promise((res, rej) => res(this.props.viewCard(4)))
    // .then((res) => console.log("viewCard", this.props.card))

    // new Promise((res, rej) => res(this.props.updateCard(4, {category: 'LIFE'})))
    // .then(res => console.log("updateCard", res))

    // new Promise((res, rej) => res(this.props.getDefaults()))
    // .then(console.log("deleteCard", res))

    // new Promise((res, rej) => res(this.props.viewAllCards()))
    // .then((res) => console.log("viewAllCards", this.props.cards))

    // new Promise((res, rej) => res(this.props.getDefaults()))
    // .then((res) => console.log("defaults", this.props.defaults))

  }
  
  render(){
    return (
      <div>
        <CardEditView />  
      </div>
    )
  }
}


function mapStateToProps(store){
  return {
    //object w/ one card data
    card: store.cardStates.card,
    //object w/ all user cards data
    cards: store.cardStates.cards,
    //object w/ default cards data
    defaults: store.cardStates.defaults
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    getDefaults: Action.getDefaults,
    addCard: Action.addCard,
    deleteCard: Action.deleteCard,
    viewAllCards: Action.viewAllCards,
    viewCard: Action.viewCard,
    updateCard: Action.updateCard
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CardsPage)