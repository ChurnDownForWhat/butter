import React from 'react'
import * as Bs from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'
import Autosuggest from 'react-autosuggest'
import SweetAlert from 'sweetalert-react'


class QuickNewCard extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      value: '',
      suggestions: [],
      newCard: {},
      showAlert: false,
      showError: false
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
    const submitItem = Object.keys(domForm).slice(6)
    .reduce((acc,id) =>{
      if(id != 'submit' && domForm[id].value != "") acc[id] = domForm[id].value
      return acc
    },{})
    if(!submitItem.expiration || !submitItem.spendTotal || !submitItem.minSpend){
      return this.setState({showError: true})
    }
    submitItem.name = name
    submitItem.applicationDate = this.dateIt(new Date())
    submitItem.spendDeadline = this.dateIt(new Date())
    submitItem.annFeeDate = this.dateIt(new Date())
    submitItem.expCancelDate = this.dateIt(new Date())
    this.props.addCard(submitItem)
    .then(() => {
      this.props.viewAllCards()
      this.setState({showAlert: true})
    })
  }
  hideError(){
    this.setState({showError: false})
  }
  hideAlerts(){
    this.setState({showAlert: false})
    this.props.onHide()
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
    this.setState({newCard: suggestion, cardType:suggestion.cardType, category:suggestion.category})
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
      placeholder: "Add A Card",
      value,
      onChange: this.onChange.bind(this)
    }
    return (
      <Bs.Modal show={this.props.show} onHide={this.props.onHide}>
        <Bs.Grid>
        <Bs.Row>
        <Bs.Modal.Header>
          <Bs.Col md={12}>
            <h3>Create a new Card</h3>
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
                      <Bs.Col md={12}>
                        <Bs.FormGroup controlId="name">
                          <Bs.ControlLabel>Card Name</Bs.ControlLabel>
                          <Autosuggest
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
                            getSuggestionValue={this.getSuggestionValue.bind(this)}
                            renderSuggestion={this.renderSuggestion.bind(this)}
                            inputProps={inputProps} />
                          </Bs.FormGroup>
                      </Bs.Col>
                    </Bs.Row>
                    <Bs.Row>
                      <Bs.Col md={4}>
                        <FieldGroup
                          id='expiration'
                          type='date'
                          label='Expiration Date'
                          placeholder='XX/XX/XXXX'
                        />
                      </Bs.Col>
                      <Bs.Col md={4}>
                        <FieldGroup
                          id='spendTotal'
                          type='number'

                          label='Spend so far'
                          placeholder='XXXX.XX'
                          />
                      </Bs.Col>
                      <Bs.Col md={4}>
                        <FieldGroup
                          id='minSpend'
                          type='number'
                          label='Minimum Spend'
                          placeholder='XXXX.XX'
                          defaultValue={this.state.newCard.minSpend || ''}
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
          <Bs.Button onClick={(e) => this.props.switch(e) } > More Details </Bs.Button>
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

export default connect(mapStateToProps, matchDispatchToProps)(QuickNewCard)
