import React from 'react'
import { Button, ButtonGroup} from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'
import Autosuggest from 'react-autosuggest'

class NewCard extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      value: '',
      suggestions: []
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

  onChange(event, { newValue, method }){
    this.setState({ value: newValue })
  }
  
  onSuggestionsFetchRequested({ value }){
    this.setState({ suggestions: this.getSuggestions(value) })
  }

  onSuggestionsClearRequested(){
    this.setState({ suggestions: [] })
  }

  getSuggestions(value) {
    const escapedValue = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    if (escapedValue === '') return []
    const regex = new RegExp('\\b' + escapedValue, 'i')
    return this.props.defaults.filter(defaultCard => regex.test(this.getSuggestionValue(defaultCard)))
  }

  getSuggestionValue(suggestion) { return `${suggestion.name}` }

  renderSuggestion(suggestion) {
    return (
      <div>
        {suggestion.name}
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
          </div>
          <div className='row'>
            <input placeholder="exp date" className="col-xs-1" />
            <input placeholder="spendTotal" className="col-xs-1" />
            <input placeholder="minSpend" className="col-xs-1" /> 
          </div>
          <ButtonGroup>
            <Button> Create Card </Button>
            <Button> Edit Details </Button>
            <Button> Cancel </Button>
          </ButtonGroup>
        </div>
        <div className='progress row'>
          <div id='progressBar'className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="600" aria-valuemin="0" aria-valuemax="3000">
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps, matchDispatchToProps)(NewCard)