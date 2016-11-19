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
      edit: false
    }
  }

  collectForm(e,el) {
    e.preventDefault()
    const domForm = el.elements
    const submitItem = Object.keys(domForm).slice(18)
    .reduce((acc,id) =>{
      if(id != 'submit' && domForm[id].value != "") acc[id] = domForm[id].value
      return acc
    },{})
    console.log(submitItem)
    submitItem.id = this.props.card.id
    this.props.addCard(submitItem)
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
          <Bs.Col md={12}>
            <h3>{this.props.card.name}</h3>
          </Bs.Col>
          <Bs.Col md={1}>
            {this.props.card.spendTotal}/{this.props.card.minSpend}
          </Bs.Col>
        </Bs.Row>
        <Bs.Row>
          <Bs.Col md={6}>
            Sign Up bonus:{this.props.card.signupBonus}
          </Bs.Col>
          <Bs.Col md={6}>
            Deadline:{new Intl.DateTimeFormat('en',
              {
                month: 'long',
                year:'numeric',
                day:'numeric'
              }).format(new Date(this.props.card.spendDeadline))}
          </Bs.Col>
        </Bs.Row>
        <Bs.Row>
          <Bs.Col md={8}>
            {this.props.card.cardType}/{this.props.card.category}
          </Bs.Col>
          <Bs.Col md={4}>
            {this.props.card.program}
          </Bs.Col>
        </Bs.Row>
        <Bs.Row>
          <Bs.Col md={4}>
            Points:{this.props.card.rewardsAmt}
          </Bs.Col>
          <Bs.Col md={4}>
            Application Date:{new Intl.DateTimeFormat('en',
              {
                month: 'long',
                year:'numeric',
                day:'numeric'
              }).format(new Date(this.props.card.applicationDate))}
          </Bs.Col>
          <Bs.Col md={4}>
            Cancel Date:{new Intl.DateTimeFormat('en',
              {
                month: 'long',
                year:'numeric',
                day:'numeric'
              }).format(new Date(this.props.card.expCancelDate))}
          </Bs.Col>
        </Bs.Row>
        <Bs.Row>
          <Bs.Col md={12}>
            Expiration:{new Intl.DateTimeFormat('en',
              {
                month: 'long',
                year:'numeric',
                day:'numeric'
              }).format(new Date(this.props.card.expiration))}
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
    if(this.state.edit) cardCompView = (<CardEdit addCard={this.collectForm.bind(this)} show={this.props.show} onHide={this.closeEdit.bind(this)} FieldGroup={this.FieldGroup} dateIt={this.dateIt} card={this.props.card} cancel={this.cancel.bind(this)}/>)
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
    updateCard: Action.updateCard
  }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(CardView)
