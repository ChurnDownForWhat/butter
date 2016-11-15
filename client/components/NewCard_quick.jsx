import React from 'react'
import { Button, ButtonGroup, Modal } from 'react-bootstrap'
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
    finalCard.expDate = document.getElementById("expDate").value
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

    return (
      <Modal show={this.props.show} onHide={this.props.onHide} >
        <div className='col-lg-12'>
          <div className="">
            <div className='row'>
              <Autosuggest className="col-xs-4" 
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
                getSuggestionValue={this.getSuggestionValue.bind(this)}
                renderSuggestion={this.renderSuggestion.bind(this)}
                inputProps={inputProps} />
              <input type="date" id="expDate" className="col-xs-2" placeholder="exp date"/>
              <input type="number" id="spendTotal" placeholder="spendTotal" className="col-xs-1" />

              <input type="number" id="minSpend" placeholder="minSpend" className="col-xs-1" /> 
              <ButtonGroup className="buttonGroup">
                <Button onClick={this.createCard.bind(this)} > Create Card </Button>
                <Button onClick={(e) => this.props.switch(e) } > More Details </Button>
                <Button onClick={this.props.onHide}> Cancel </Button>
              </ButtonGroup>
            </div>
          </div>
          <div className='progress row'>
            <div id='progressBar'className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="600" aria-valuemin="0" aria-valuemax="3000">
            </div>
          </div>
        </div>
      </Modal>
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