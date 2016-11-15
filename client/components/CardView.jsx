import React from 'react'
import { ProgressBar, Modal } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'
import Sidebar from './Sidebar'
import CardEdit from "./CardEditView"

class CardView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false
    }
  }  
  collectForm() {
    const domForm = document.getElementById("credit-card-form").elements
    const submitItem = Object.keys(domForm).slice(15)
    .reduce((acc,e) =>{
      if(e != 'submit' && domForm[e].value != "") acc[e] = domForm[e].value
      return acc
    },{})

    submitItem.id = this.props.card.id
    console.log(submitItem)
    this.props.addCard(submitItem)
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    let cardCompView = (<div></div>)
    if(this.props.card) cardCompView = (      
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
        <div onClick={this.props.close}>
         close
         </div>
      </div>
    )
    if(this.state.edit) cardCompView = (<CardEdit addCard={this.collectForm.bind(this)} card={this.props.card} />)
    return (
      <Modal show={this.props.show} onHide={this.props.close}>
        {cardCompView}
      </Modal>
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