import React from 'react'
import { Button, ButtonGroup} from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'
import Autosuggest from 'react-autosuggest'

class DetailedNewCard extends React.Component {
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
    finalCard.name = this.state.value
    finalCard.last4digits = document.getElementById("last4digits").value
    finalCard.annFeeAmt = document.getElementById("annFeeAmt").value
    finalCard.annFeeDate = document.getElementById("annFeeDate").value
    finalCard.waivedFees = document.getElementById("waivedFees").value
    finalCard.signupBonus = document.getElementById("signupBonus").value
    finalCard.spendDeadline = document.getElementById("spendDeadline").value
    finalCard.monthlyBillDate = document.getElementById("monthlyBillDate").value
    finalCard.applicationDate = document.getElementById("applicationDate").value
    finalCard.benefit = document.getElementById("benefit").value
    finalCard.expCancelDate = document.getElementById("expCancelDate").value
    // finalCard.expDate = document.getElementById("expDate").value
    finalCard.spendTotal = Number(document.getElementById("spendTotal").value)
    finalCard.minSpend = Number(document.getElementById("minSpend").value)
    finalCard.id = null

    // console.log(finalCard)

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
      <div className='col-lg-12'>
        <div className="">
          <div className='row'>
            <form onSubmit={this.createCard.bind(this)} id="credit-card-form" className="col-sm-12">
              <div className="row">
                <img src="" className="img-responsive col-sm-4"/>
                <ul className="col-sm-8">
                  <div className="topFormItem" >
                    <Autosuggest className="col-xs-4" 
                      suggestions={suggestions}
                      onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
                      onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
                      getSuggestionValue={this.getSuggestionValue.bind(this)}
                      renderSuggestion={this.renderSuggestion.bind(this)}
                      inputProps={inputProps} />
                    <span className="col-md-3"> Card Name </span>
                  </div>
                  <br/>
                    <div className="topFormItem">
                      <select id="cardType" className="col-md-4">
                        <option value="Visa">Visa</option> 
                        <option value="MasterCard" >MasterCard</option>
                        <option value="American Express">American Express</option>
                        <option value="Discover">Discover</option>
                      </select>
                      <span className="col-md-3"> Card Type </span>
                    </div>
                    <br/>
                    <div className="topFormItem">
                      <input type="text" id="last4digits" className="creditInputForm col-md-4" placeholder="Last Four Digits"></input>
                      <span className="col-md-3"> Last Four Digits </span>
                    </div>
                  <br/></ul>
              </div>
              <div className="row">
                <ul className="col-sm-6">
                  <div className="bottomFormItem">
                    <input type="text" id="spendTotal" className="creditInputForm col-md-4" placeholder="Spend Total"></input>
                    <span className="col-md-3"> Spend Total </span>
                  </div>
                  <br/>
                  <div className="bottomFormItem">
                    <input type="text" id="signupBonus" className="creditInputForm col-md-4" placeholder="Sign-up Bonus"></input>
                    <span className="col-md-3"> Sign-up Bonus </span>
                  </div>
                  <br/>
                  <div className="bottomFormItem">
                    <input type="text" id="minSpend" className="creditInputForm col-md-4" placeholder="Minimum Spend"></input>
                    <span className="col-md-3"> Minimum Spend </span>
                  </div>
                  <br/>
                  <div className="bottomFormItem">
                    <input id="spendDeadline" type="date" className="creditInputForm col-md-4" placeholder="Spend Deadline"/>
                    <span className="col-md-3"> Spend Deadline </span>
                  </div> 
                  <br/>
                  <div className="bottomFormItem">
                    <input type="text" id="monthlyBillDate" className="creditInputForm col-md-4" placeholder="Bill Due Date"></input>
                    <span className="col-md-3"> Monthly Bill Due Date </span>
                  </div>
                  <br/>
                </ul>
                <ul className="col-sm-6">
                  <div className="bottomFormItem">
                    <input id="applicationDate" className="creditInputForm col-md-4" placeholder="Application Date"/>
                    <span className="col-md-3"> Application Date </span>
                  </div>
                  <br/>
                  <div className="bottomFormItem">
                    <input type="text" id="benefit" className="creditInputForm col-md-4" placeholder="Annual Benefit"></input>
                    <span className="col-md-3"> Annual Benefit </span>
                  </div>
                  <br/>
                  <div className="bottomFormItem">
                    <input type="text" id="annFeeAmt" className="creditInputForm col-md-4" placeholder="Annual Fee"></input>
                    <span className="col-md-3"> Annual Fee </span>
                  </div>
                  <br/>
                  <div className="bottomFormItem">
                    <input id="waivedFees" type="checkbox"></input>
                    <span className="col-md-3"> Annual Fee Waived First Year? </span>
                  </div>
                  <br/>
                   <div className="bottomFormItem">
                    <input id="annFeeDate" className="creditInputForm col-md-4" placeholder="Annual Fee Date"/>
                    <span className="col-md-3"> Annual Fee Date </span>
                  </div> 
                  <br/>
                  <div className="bottomFormItem">
                    <input id="expCancelDate" className="creditInputForm col-md-4" placeholder="Planned Cancellation Date"/>
                    <span className="col-md-3"> Planned Cancellation Date </span>
                  </div> 
                  <br/>
                </ul>
              </div>
            </form>
            <ButtonGroup className="buttonGroup">
              <Button onClick={this.createCard.bind(this)} > Create Card </Button>
              <Button> Edit Details </Button>
              <Button> Cancel </Button>
            </ButtonGroup>
          </div>
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

export default connect(mapStateToProps, matchDispatchToProps)(DetailedNewCard)