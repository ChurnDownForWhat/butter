import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'
import Sidebar from './Sidebar'

class CardView extends React.Component {
  constructor(props) {
    super(props)
  }  

  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div className="container card-view">
        <div className="col-md-12">
          <h3>{this.props.card.name}</h3>
        </div>
        <div className ="col-md-12">
          {this.props.card.balance}/{this.props.card.minSpend}
        </div>
        <div className ="col-md-6">
          Sign Up bonus:{this.props.card.signupBonus}
        </div>
        <div className ="col-md-6">
          Deadline:{this.props.card.spendDeadline}
        </div>
        <div className ="col-md-8">
          {this.props.card.cardType}/{this.props.card.category}
        </div>
        <div className ="col-md-4">
          {this.props.card.program}
        </div>
        <div className ="col-md-4">
          Points:{this.props.card.rewardsAmt}
        </div>
        <div className ="col-md-4">
          Application Date:{this.props.card.applicationDate}
        </div>
        <div className ="col-md-4">
          Cancel Date:{this.props.card.expCancelDate}
        </div>
        <div className ="col-md-4">
          Expiration:{this.props.card.expiration}
        </div>
      </div>
    )
  }
}
function mapStateToProps(store){
  return {
    //object w/ one card data
    card: store.cardStates.card,
    //object w/ default cards data
    defaults: store.cardStates.defaults
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    addCard: Action.addCard,
    deleteCard: Action.deleteCard,
    viewCard: Action.viewCard,
    updateCard: Action.updateCard
  }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(CardView)