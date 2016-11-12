import React from 'react'

const cardEditView = ({ defaults }) => {
  
  return (
    <form className="col-sm-12">
      <div className="row">
        <img src="" className="img-responsive col-sm-4"/>
        <ul className="col-sm-8">
          <div className="topFormItem" >
            <input type="text" className="creditInputForm col-md-4" placeholder="Card Name"></input>
            <span className="col-md-3"> Card Name </span>
          </div>
          <br/>
            <div className="topFormItem">
              <select name="Card Type" className="col-md-4">
                <option value="Visa">Visa</option> 
                <option value="MasterCard" >MasterCard</option>
                <option value="American Express">American Express</option>
                <option value="Discover">Discover</option>
              </select>
              <span className="col-md-3"> Card Type </span>
            </div>
            <br/>
            <div className="topFormItem">
              <input type="text" className="creditInputForm col-md-4" placeholder="Last Four Digits"></input>
              <span className="col-md-3"> Last Four Digits </span>
            </div>
          <br/></ul>
      </div>
      <div className="row">
        <ul className="col-sm-6">
          <div className="bottomFormItem">
            <input type="text" className="creditInputForm col-md-4" placeholder="Spend This Month"></input>
            <span className="col-md-3"> Spend This Month </span>
          </div>
          <br/>
          <div className="bottomFormItem">
            <input type="text" className="creditInputForm col-md-4" placeholder="Spend Total"></input>
            <span className="col-md-3"> Spend Total </span>
          </div>
          <br/>
          <div className="bottomFormItem">
            <input type="text" className="creditInputForm col-md-4" placeholder="Sign-up Bonus"></input>
            <span className="col-md-3"> Sign-up Bonus </span>
          </div>
          <br/>
          <div className="bottomFormItem">
            <input type="text" className="creditInputForm col-md-4" placeholder="Minimum Spend"></input>
            <span className="col-md-3"> Minimum Spend </span>
          </div>
          <br/>
          <div className="bottomFormItem">
            <input id="spendDate" className="creditInputForm col-md-4" placeholder="Spend Deadline"/>
            <span className="col-md-3"> Spend Deadline </span>
          </div> 
          <br/>
          <div className="bottomFormItem">
            <input type="text" className="creditInputForm col-md-4" placeholder="Bonus Currency"></input>
            <span className="col-md-3"> Reward Type </span>
          </div>
          <br/>
          <div className="bottomFormItem">
            <input type="text" className="creditInputForm col-md-4" placeholder="Bill Due Date"></input>
            <span className="col-md-3"> Monthly Bill Due Date </span>
          </div>
          <br/>
        </ul>
        <ul className="col-sm-6">
          <div className="bottomFormItem">
            <input id="appDate" className="creditInputForm col-md-4" placeholder="Application Date"/>
            <span className="col-md-3"> Application Date </span>
          </div>
          <br/>
          <div className="bottomFormItem">
            <input type="text" className="creditInputForm col-md-4" placeholder="Annual Benefit"></input>
            <span className="col-md-3"> Annual Benefit </span>
          </div>
          <br/>
          <div className="bottomFormItem">
            <input type="text" className="creditInputForm col-md-4" placeholder="Annual Fee"></input>
            <span className="col-md-3"> Annual Fee </span>
          </div>
          <br/>
          <div className="bottomFormItem">
            <input type="checkbox"></input>
            <span className="col-md-3"> Annual Fee Waived First Year? </span>
          </div>
          <br/>
           <div className="bottomFormItem">
            <input id="feeDate" className="creditInputForm col-md-4" placeholder="Annual Fee Date"/>
            <span className="col-md-3"> Annual Fee Date </span>
          </div> 
          <br/>
          <div className="bottomFormItem">
            <input id="cancelDate" className="creditInputForm col-md-4" placeholder="Planned Cancellation Date"/>
            <span className="col-md-3"> Planned Cancellation Date </span>
          </div> 
          <br/>
        </ul>
      </div>
    </form>
  )
}


export default cardEditView