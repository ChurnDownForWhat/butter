import React from 'react'
import * as Bs from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'
import Sidebar from './Sidebar'
import CardEdit from "./CardEditView"

class CardView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false,
      showAlert: false
    }
  }

  collectForm(e,el) {
    e.preventDefault()
    const domForm = el.elements
    const name = domForm[0].value
    const submitItem = Object.keys(domForm).slice(18)
    .reduce((acc,id) =>{
      if(id != 'submit' && domForm[id].value != "") acc[id] = domForm[id].value
      return acc
    },{})
    submitItem.id = this.props.card.id
    submitItem.name = name
    this.props.addCard(submitItem)
    .then(() => {
      this.setState({showAlert: true})
    })
  }

  hideAlerts(){
    this.setState({showAlert: false})
    this.props.viewAllCards().then(() =>
      this.props.updateCards()
    )
    this.closeEdit()
  }

  edit(){
    this.setState({edit: true})
  }
  closeEdit(){
    this.setState({edit: false})
    this.props.close()
  }
  cancel(){
    this.setState({edit: false})
  }
  dateIt(date) {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
  }
  componentDidMount() {
  }

  FieldGroup({ id, label, help, ...props }) {
    return (
      <Bs.FormGroup controlId={id}>
        <Bs.ControlLabel>{label}</Bs.ControlLabel>
        <Bs.FormControl {...props} />
        {help && <Bs.HelpBlock>{help}</Bs.HelpBlock>}
      </Bs.FormGroup>
    )
  }
  render() {
    let cardCompView = (<div></div>)
    if(this.props.card) cardCompView = (
    <Bs.Modal show={this.props.show} onHide={this.closeEdit.bind(this)}>
      <Bs.Grid>
        <Bs.Row>
        <Bs.Row>
          <Bs.Col md={6} className="viewCardName cardView">
            {this.props.card.name}
          </Bs.Col>
        </Bs.Row>
        <Bs.Row>
          <Bs.Col md={3} className= "viewCardType ">
            Card Type: {this.props.card.cardType}
          </Bs.Col> 
          <Bs.Col md={3} className= "viewCardDigits">
            Last Four Digits: {this.props.card.last4digits}
          </Bs.Col>
        </Bs.Row>
        <Bs.Row>
          <Bs.Col md={4} className= "cardView">
            Minimum Spend: {this.props.card.minSpend}
          </Bs.Col>
          <Bs.Col md={4} className= "cardView">
            Spend Total:  {this.props.card.spendTotal}
          </Bs.Col>
        </Bs.Row>
        <Bs.Row>
          <Bs.Col md={4} className= "cardView">
            Sign-Up Bonus:    {this.props.card.signupBonus}  {this.props.card.program}
          </Bs.Col>
          <Bs.Col md={4} className= "cardView">
            Sign-Up Bonus Deadline:   {new Intl.DateTimeFormat('en',
              {
                month: 'long',
                year:'numeric',
                day:'numeric'
              }).format(new Date(this.props.card.spendDeadline))}
          </Bs.Col>
        </Bs.Row>
        <Bs.Row>
          <Bs.Col md={4} className= "cardView">
            Rewards Program:  {this.props.card.program}
          </Bs.Col>
          <Bs.Col md={4} className= "cardView">
            Reward Points Earned:  {this.props.card.rewardsAmt}
          </Bs.Col>
        </Bs.Row>
        <Bs.Row>
          <Bs.Col md={4} className= "cardView">
            Reward Category: {this.props.card.category}
          </Bs.Col>
          <Bs.Col md={4} className= "cardView">
            Application Date:  {new Intl.DateTimeFormat('en',
              {
                month: 'long',
                year:'numeric',
                day:'numeric'
              }).format(new Date(this.props.card.applicationDate))}
          </Bs.Col>
        </Bs.Row>
        <Bs.Row>
          <Bs.Col md={4} className= "cardView">
            Cancel Date:  {new Intl.DateTimeFormat('en',
              {
                month: 'long',
                year:'numeric',
                day:'numeric'
              }).format(new Date(this.props.card.expCancelDate))}
          </Bs.Col>
          <Bs.Col md={4} className= "cardView">
            Expiration:  {new Intl.DateTimeFormat('en',
              {
                month: 'long',
                year:'numeric',
                day:'numeric'
              }).format(new Date(this.props.card.expiration))}
          </Bs.Col>
        </Bs.Row>
        <Bs.Row>
          <Bs.Col md={4} className= "cardView">
            Annual Fee Amount: {this.props.card.annFeeAmt}
          </Bs.Col>
          <Bs.Col md={4} className= "cardView">
            Monthly Bill Date: {this.props.card.monthlyBilldate}
          </Bs.Col>
        </Bs.Row>
        <Bs.Row>
          <Bs.Col md={4} className= "cardView">
            Annual Fee Date:  {new Intl.DateTimeFormat('en',
              {
                month: 'long',
                year:'numeric',
                day:'numeric'
              }).format(new Date(this.props.card.annFeeDate))}
          </Bs.Col>
          <Bs.Col md={4} className= "cardView">
            Annual Fee Waived First Year? {this.props.card.waivedFees}
          </Bs.Col>
        </Bs.Row>
        <Bs.Row>
          <Bs.Col md={12} className= "cardView">
            Card Benefits: {this.props.card.benefit}
          </Bs.Col>
        </Bs.Row>
        <Bs.Col md={12}>
        <Bs.Modal.Footer>
          <Bs.Col md={6} className="left-button">
          <Bs.Button onClick={this.edit.bind(this)}>
            edit
          </Bs.Button>
          </Bs.Col>
          <Bs.Col md={6} className="right-button">
          <Bs.Button onClick={this.closeEdit.bind(this)}>
           close
           </Bs.Button>
           </Bs.Col>
         </Bs.Modal.Footer>
         </Bs.Col>
         </Bs.Row>
      </Bs.Grid>
    </Bs.Modal>
    )
    if(this.state.edit) cardCompView = (<CardEdit addCard={this.collectForm.bind(this)} showAlert={this.state.showAlert} show={this.props.show} onHide={this.closeEdit.bind(this)} FieldGroup={this.FieldGroup} hideAlerts={this.hideAlerts.bind(this)} dateIt={this.dateIt} card={this.props.card} cancel={this.cancel.bind(this)}/>)
    return (
        cardCompView
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
    viewAllCards: Action.viewAllCards,
    updateCard: Action.updateCard
  }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(CardView)
