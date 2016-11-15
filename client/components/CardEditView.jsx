import React from 'react'

const cardEditView = ({ defaults, props, card, addCard }) => {

  return (
    <form onSubmit={addCard} id="credit-card-form" className="col-sm-12">
      <div className="row">
        <img src="" className="img-responsive col-sm-4"/>
        <ul className="col-sm-8">
          <div className="topFormItem" >
            <input id="name" type="text" className="creditInputForm col-md-4" defaultValue={card.name} placeholder="Card Name"></input>
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
              <input type="text" id="last4digits" className="creditInputForm col-md-4" defaultValue={card.last4digits || ""} placeholder="Last Four Digits"></input>
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
          <div className="bottomFormItem">
            <input id="submit" type="submit" className="creditInputForm col-md-4"/>
          </div> 
        </ul>
      </div>
    </form>
  )
}


export default cardEditView