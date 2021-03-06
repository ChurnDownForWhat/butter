import React from 'react'
import * as Bs from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'
import Autosuggest from 'react-autosuggest'
import SweetAlert from 'sweetalert-react'

class DetailedNewCard extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      value: '',
      suggestions: [],
      newCard: {},
      cardType: '',
      category: '',
      showAlert: false,
      cardSub: {}
    }
  }

  componentDidMount(){
    this.props.getDefaults()
    .then(res =>
      this.setState({
        suggestions: this.props.defaults
      })
    )
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

  createCard(e,el){
    e.preventDefault()
    const domForm = el.elements
    const name = domForm[0].value
    const submitItem = Object.keys(domForm).slice(18)
    .reduce((acc,id) =>{
      if(id != 'submit' && domForm[id].value != "") acc[id] = domForm[id].value
      return acc
    },{})
    submitItem.name = name
    submitItem.applicationDate = submitItem.applicationDate || this.dateIt(new Date())
    submitItem.spendDeadline = submitItem.spendDeadline || this.dateIt(new Date())
    submitItem.annFeeDate = submitItem.annFeeDate || this.dateIt(new Date())
    submitItem.expCancelDate = submitItem.expCancelDate || this.dateIt(new Date())

    this.props.defaults.map((defaults, i) => {
      if(defaults.name === submitItem.name){
        submitItem.cardImg = defaults.cardImg
      }
    })

    if(!submitItem.expiration || !submitItem.spendTotal || !submitItem.minSpend){
      return this.setState({showError: true,cardSub: submitItem})
    }
    this.props.addCard(submitItem)
    .then(() => {
      this.props.viewAllCards()
      this.setState({showAlert: true})
    })
  }

  hideAlerts(){
    this.setState({showAlert: false})
    this.props.onHide()
  }

  hideError(){
    this.setState({showError: false})
  }

  onChange(event, { newValue, method }){
    this.setState({ value: newValue })
  }

  onSuggestionsFetchRequested({ value }){
    this.setState({ suggestions: this.getSuggestions(value) })
  }

  onSuggestionsClearRequested(){
    this.setState({ suggestions: []})
  }

  getSuggestions(value) {
    const escapedValue = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    if (escapedValue === '') return []
    const regex = new RegExp('\\b' + escapedValue, 'i')
    return this.props.defaults.filter(defaultCard => regex.test(this.getSuggestionValue(defaultCard)))
  }

  getSuggestionValue(suggestion) {
    let cardNew = {...this.state.cardSub}
    for(let key in suggestion) {cardNew[key] = suggestion[key]}
    this.setState({newCard: suggestion, cardSub: cardNew, cardType:suggestion.cardType, category:suggestion.category})
    return `${suggestion.name}`
  }
  typeChange(event) {
    this.setState({cardType: event.target.value})
  }
  catChange(event) {
    this.setState({category: event.target.value})
  }
  renderSuggestion(suggestion) {
    return (
      <div className="suggestion">
        <img src={suggestion.cardImg} />
        <div className="name"> {suggestion.name} </div>
      </div>
    )
  }
  render(){
    const FieldGroup = ({ id, label, help, ...props }) => {
      return (
        <Bs.FormGroup controlId={id}>
          <Bs.ControlLabel>{label}</Bs.ControlLabel>
          <Bs.FormControl {...props} />
          {help && <Bs.HelpBlock>{help}</Bs.HelpBlock>}
        </Bs.FormGroup>
      )
    }
    let form
    const { value, suggestions } = this.state
    const inputProps = {
      placeholder: "Card Name",
      value,
      onChange: this.onChange.bind(this)
    }
    return (
      <Bs.Modal show={this.props.show} onHide={this.props.onHide}>
        <Bs.Grid>
        <Bs.Row>
        <Bs.Modal.Header>
          <Bs.Col md={6}>
            <h3>Create a new Card</h3>
          </Bs.Col>
          <Bs.Col md={6} className='require'>
          <span> * = Required Field </span>
          </Bs.Col>
        </Bs.Modal.Header>
        </Bs.Row>
        <form onSubmit={(e) => this.createCard(e,form)}id="credit-card-form" ref={(el)=> form = el}>
        <Bs.Row>
        <Bs.Col md={12}>
          <Bs.Modal.Body>
              <Bs.Row>
                <Bs.Col md={12}>
                    <Bs.Row>
                      <Bs.Col md={5}>
                        <Bs.FormGroup controlId="name">
                          <Bs.ControlLabel>Card Name*</Bs.ControlLabel>
                          <Autosuggest
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
                            getSuggestionValue={this.getSuggestionValue.bind(this)}
                            renderSuggestion={this.renderSuggestion.bind(this)}
                            inputProps={inputProps} />
                          </Bs.FormGroup>
                      </Bs.Col>
                      <Bs.Col md={4}>
                        <Bs.FormGroup controlId="cardType">
                          <Bs.ControlLabel>Card Type*</Bs.ControlLabel>
                          <Bs.FormControl componentClass="select" value={this.state.cardSub.cardType || this.state.cardType} onChange={this.typeChange.bind(this)}>
                            <option value="MasterCard">MasterCard</option>
                            <option value="Visa">Visa</option>
                            <option value="American Express">American Express</option>
                            <option value="Discover">Discover</option>
                          </Bs.FormControl>
                        </Bs.FormGroup>
                      </Bs.Col>
                      <Bs.Col md={3}>
                        <FieldGroup
                          id='last4digits'
                          type='text'
                          label='Last 4 Digits'
                          placeholder='XXXX'
                          defaultValue={this.state.cardSub.last4digits}
                          maxLength="4"
                        />
                      </Bs.Col>
                    </Bs.Row>
                    <Bs.Row>
                      <Bs.Col md={4}>
                        <Bs.FormGroup controlId="category">
                          <Bs.ControlLabel>Reward Category*</Bs.ControlLabel>
                          <Bs.FormControl componentClass="select" value={this.state.cardSub.category || this.state.category} onChange={this.catChange.bind(this)}>
                            <option value="Cash Back">Cash Back</option>
                            <option value="General Points">General Points</option>
                            <option value="Miles">Miles</option>
                            <option value="Hotel">Hotel</option>
                          </Bs.FormControl>
                        </Bs.FormGroup>
                      </Bs.Col>
                      <Bs.Col md={4}>
                        <FieldGroup
                          id='program'
                          type='text'
                          label='Program'
                          placeholder='Program Title'
                          defaultValue={this.state.cardSub.program || this.state.newCard.program || ''}
                        />
                      </Bs.Col>
                      <Bs.Col md={4}>
                        <FieldGroup
                          id='rewardsAmt'
                          type='number'
                          label='Rewards Amount'
                          placeholder='XXXX.XX'
                          defaultValue={this.state.cardSub.rewardsAmt}
                        />
                      </Bs.Col>
                    </Bs.Row>
                    <Bs.Row>
                      <Bs.Col md={6}>
                        <FieldGroup
                          id='expiration'
                          type='date'
                          label='Expiration Date*'
                          placeholder='XX/XX/XXXX'
                        />
                      </Bs.Col>
                      <Bs.Col md={6}>
                        <FieldGroup
                          id='monthlyBilldate'
                          type='number'
                          label='Monthly Bill Date'
                          placeholder='XX'
                          defaultValue={this.state.cardSub.monthlyBilldate}
                          />
                      </Bs.Col>
                    </Bs.Row>
                    <Bs.Row>
                      <Bs.Col md={6}>
                        <FieldGroup
                          id='applicationDate'
                          type='date'
                          label='Application Date'
                          placeholder='XX/XX/XXXX'
                          defaultValue={this.state.cardSub.applicationDate}
                        />
                      </Bs.Col>
                      <Bs.Col md={6}>
                        <FieldGroup
                          id='expCancelDate'
                          type='date'
                          label='Expected Cancel Date'
                          placeholder='XX/XX/XXXX'
                          defaultValue={this.state.cardSub.expCancelDate}
                        />
                      </Bs.Col>
                    </Bs.Row>
                    <Bs.Row>
                      <Bs.Col md={6}>
                        <FieldGroup
                          id='signupBonus'
                          type='text'
                          label='Sign Up Bonus'
                          placeholder='Sign-Up Bonus'
                          defaultValue={this.state.cardSub.signupBonus || this.state.newCard.signupBonus}
                          />
                      </Bs.Col>
                      <Bs.Col md={6}>
                        <FieldGroup
                          id='spendTotal'
                          type='number'
                          label='Spent so far*'
                          placeholder='XXXX.XX'
                          defaultValue={this.state.cardSub.spendTotal}
                          />
                      </Bs.Col>
                    </Bs.Row>
                    <Bs.Row>
                      <Bs.Col md={6}>
                        <FieldGroup
                          id='minSpend'
                          type='number'
                          label='Minimum Spend'
                          placeholder='XXXX.XX'
                          defaultValue={this.state.cardSub.minSpend || this.state.newCard.minSpend}
                          />
                      </Bs.Col>
                      <Bs.Col md={6}>
                        <FieldGroup
                          id='spendDeadline'
                          type='date'
                          label='Spend Deadline'
                          placeholder='XX/XX/XXXX'
                          defaultValue={this.state.cardSub.spendDeadline }
                        />
                      </Bs.Col>
                    </Bs.Row>
                    <Bs.Row>
                      <Bs.Col md={4}>
                        <FieldGroup
                          id='annFeeAmt'
                          type='number'
                          label='Annual Fee'
                          placeholder='XXXX.XX'
                          defaultValue={this.state.cardSub.annFeeAmt || this.state.newCard.annFeeAmt }
                          />
                      </Bs.Col>
                      <Bs.Col md={5}>
                        <FieldGroup
                          id='annFeeDate'
                          type='date'
                          label='Annual Fee Date'
                          placeholder='XX/XX/XXXX'
                          defaultValue={this.state.cardSub.annFeeDate}
                        />
                      </Bs.Col>
                      <Bs.Col md={3}>
                        <Bs.FormGroup>
                          <Bs.Checkbox>Annual Fee Waived?</Bs.Checkbox>
                        </Bs.FormGroup>
                      </Bs.Col>
                    </Bs.Row>
                    <Bs.Row>
                      <Bs.Col md={10} >
                        <FieldGroup
                          id='benefit'
                          type='text'
                          label='Benefits of card'
                          placeholder="Describe this card's benefits"
                          defaultValue={this.state.cardSub.benefit || this.state.newCard.benefit}
                        />
                      </Bs.Col>
                    </Bs.Row>
                </Bs.Col>
              </Bs.Row>
          </Bs.Modal.Body>
        </Bs.Col>
        </Bs.Row>
        <Bs.Row>
        <Bs.Modal.Footer>
          <Bs.Col md={4}>
          <Bs.Button type="submit" > Create Card </Bs.Button>
          <SweetAlert
             show={this.state.showAlert}
             title="Card Added!"
             text="Click on the card for more edit options"
             type="success"
             onConfirm={() => this.hideAlerts()}
          />
          <SweetAlert
             show={this.state.showError}
             title="Submit Failed!"
             text="Please fill in all necessary fields!"
             type="warning"
             onConfirm={() => this.hideError()}
          />
          </Bs.Col>
          <Bs.Col md={4}>
          <Bs.Button onClick={(e) => this.props.switch(e) } > Less Details </Bs.Button>
          </Bs.Col>
          <Bs.Col md={4}>
          <Bs.Button onClick={this.props.onHide} > Cancel </Bs.Button>
          </Bs.Col>
        </Bs.Modal.Footer>
        </Bs.Row>
        </form>
        </Bs.Grid>
      </Bs.Modal>
    )
  }
}

function mapStateToProps(store){
  return {
    defaults: store.cardStates.defaults
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    getDefaults: Action.getDefaults,
    addCard: Action.addCard,
    viewAllCards: Action.viewAllCards
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(DetailedNewCard)
