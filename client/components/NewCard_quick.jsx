import React from 'react'
import * as Bs from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'
import Autosuggest from 'react-autosuggest'

class QuickNewCard extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      value: '',
      suggestions: [],
      newCard: {}
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

  createCard(e){
    e.preventDefault()
    const cardName = this.state.value
    let finalCard = this.state.newCard || {}
    finalCard.expiration = document.getElementById("expDate").value
    finalCard.spendTotal = Number(document.getElementById("spendTotal").value)
    finalCard.minSpend = Number(document.getElementById("minSpend").value)
    finalCard.id = null
    this.props.addCard(finalCard)
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
    this.setState({newCard: suggestion})
    return `${suggestion.name}` 
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

    const { value, suggestions } = this.state
    const inputProps = {
      placeholder: "Add A Card",
      value,
      onChange: this.onChange.bind(this)
    }
    const FieldGroup = ({ id, label, help, ...props }) => {
      return (
        <Bs.FormGroup controlId={id}>
          <Bs.ControlLabel>{label}</Bs.ControlLabel>
          <Bs.FormControl {...props} />
          {help && <Bs.HelpBlock>{help}</Bs.HelpBlock>}
        </Bs.FormGroup>
      )
    }
    return (
      <Bs.Modal show={this.props.show} onHide={this.props.onHide} >
        <Bs.Modal.Header>
          <Bs.Col md={12}>
            <h3>Create A New Card</h3>
          </Bs.Col>
        </Bs.Modal.Header>
        <Bs.Grid>
        <Bs.Col lg={12}>
          <Bs.Row>
            <Bs.Col lg={12}>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
              getSuggestionValue={this.getSuggestionValue.bind(this)}
              renderSuggestion={this.renderSuggestion.bind(this)}
              inputProps={inputProps} />
            </Bs.Col>
            <Bs.Col md={4}>
            <FieldGroup 
            id='expDate'
            type='date'
            label='Expiration Date'
            placeholder='XX/XX/XXXX'
            />
            </Bs.Col>
            <Bs.Col md={4}>
            <FieldGroup 
            id='spendTotal'
            type='number'
            label='Spend Total'
            placeholder='XXXX.XX'
            />
            </Bs.Col>
            <Bs.Col md={4}>
            <FieldGroup 
            id='minSpend'
            type='number'
            label='Minumum Spend'
            placeholder='XXXX.XX'
            />
            </Bs.Col>
          </Bs.Row>
        </Bs.Col>
      </Bs.Grid>
      <Bs.Modal.Footer>
        <Bs.Col md={4}>
          <Bs.Button onClick={this.createCard.bind(this)} > Create Card </Bs.Button>
          </Bs.Col>
          <Bs.Col md={4}>
          <Bs.Button onClick={(e) => this.props.switch(e) } > More Details </Bs.Button>
          </Bs.Col>
          <Bs.Col md={4}>
          <Bs.Button onClick={this.props.onHide}> Cancel </Bs.Button>
        </Bs.Col>
      </Bs.Modal.Footer>
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
    addCard: Action.addCard
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(QuickNewCard)