import React from 'react'
import { Modal, Button, Col, Row, Grid, ControlLabel, FormControl, Checkbox, FormGroup } from 'react-bootstrap'

const cardEditView = ({ defaults, props, card, addCard, FieldGroup }) => {

  return (
    <Grid>
      <Row>
      <Col md={12}>
        <Modal.Header>
          <Modal.Title>Edit {card.name}</Modal.Title>
        </Modal.Header>
      </Col>
      </Row>
      <Row>
        <form>
        <Row>
          <Col md={5}>
            <FieldGroup 
              id='name'
              type='text'
              label='Card Name'
              placeholder='Insert Card Name'
              defaultValue={card.name}
            />
          </Col>
          <Col md={4}>
            <FormGroup controlId="cardType">
              <ControlLabel>Card Type</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="MasterCard">MasterCard</option>
                <option value="Visa">Visa</option>
                <option value="American Express">American Express</option>
                <option value="Discover">Discover</option>
              </FormControl>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FieldGroup 
              id='last4digits'
              type='number'
              label='Last 4 Digits'
              placeholder='XXXX'
              defaultValue={card.last4digits || ''}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FieldGroup 
              id='expiration'
              type='date'
              label='Expiration Date'
              placeholder='XX/XX/XXXX'
              defaultValue={card.expiration || ''}
            />
          </Col>
          <Col md={6}>
            <FieldGroup 
              id='monthlyBilldate'
              type='date'
              label='Monthly Bill Date'
              placeholder='XX/XX/XXXX'
              defaultValue={card.monthlyBilldate || ''}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FieldGroup 
              id='signupBonus'
              type='text'
              label='Sign Up Bonus'
              placeholder='Sign up bonus'
              defaultValue={card.signupBonus || ''}
            />
          </Col>
          <Col md={6}>
            <FieldGroup 
              id='spendTotal'
              type='number'
              label='Spent so far'
              placeholder='XXXX.XX'
              defaultValue={card.spendTotal || ''}
            />
          </Col>                    
        </Row>
        <Row>
          <Col md={6}>
            <FieldGroup 
              id='minSpend'
              type='number'
              label='Minimum Spend'
              placeholder='XXXX.XX'
              defaultValue={card.minSpend || ''}
            />
          </Col>
          <Col md={6}>
            <FieldGroup 
              id='spendDeadline'
              type='date'
              label='Spend Deadline'
              placeholder='XX/XX/XXXX'
              defaultValue={card.spendDeadline || ''}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FieldGroup 
              id='annFeeAmt'
              type='number'
              label='Annual Fee'
              placeholder='XXXX.XX'
              defaultValue={card.annFeeAmt || ''}
            />
          </Col>
          <Col md={5}>
            <FieldGroup 
              id='annFeeDate'
              type='date'
              label='Annual Fee Date'
              placeholder='XX/XX/XXXX'
              defaultValue={card.annFeeDate || ''}
            />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Checkbox>Annual Fee Waived?</Checkbox>
            </FormGroup>
          </Col>
        </Row>        
        </form>
      </Row>
    </Grid>
    //       <div className="bottomFormItem">
    //         <input type="text" id="minSpend" className="creditInputForm col-md-4" placeholder="Minimum Spend"></input>
    //         <span className="col-md-3"> Minimum Spend </span>
    //       </div>
    //       <br/>
    //       <div className="bottomFormItem">
    //         <input id="spendDeadline" type="date" className="creditInputForm col-md-4" placeholder="Spend Deadline"/>
    //         <span className="col-md-3"> Spend Deadline </span>
    //       </div> 
    //       <br/>
    //       <div className="bottomFormItem">
    //         <input type="text" id="monthlyBillDate" className="creditInputForm col-md-4" placeholder="Bill Due Date"></input>
    //         <span className="col-md-3"> Monthly Bill Due Date </span>
    //       </div>
    //       <br/>
    //     </ul>
    //     <ul className="col-sm-6">
    //       <div className="bottomFormItem">
    //         <input id="applicationDate" className="creditInputForm col-md-4" placeholder="Application Date"/>
    //         <span className="col-md-3"> Application Date </span>
    //       </div>
    //       <br/>
    //       <div className="bottomFormItem">
    //         <input type="text" id="benefit" className="creditInputForm col-md-4" placeholder="Annual Benefit"></input>
    //         <span className="col-md-3"> Annual Benefit </span>
    //       </div>
    //       <br/>
    //       <div className="bottomFormItem">
    //         <input type="text" id="annFeeAmt" className="creditInputForm col-md-4" placeholder="Annual Fee"></input>
    //         <span className="col-md-3"> Annual Fee </span>
    //       </div>
    //       <br/>
    //       <div className="bottomFormItem">
    //         <input id="waivedFees" type="checkbox"></input>
    //         <span className="col-md-3"> Annual Fee Waived First Year? </span>
    //       </div>
    //       <br/>
    //     </ul>
    //     </div>
    //        <div className="bottomFormItem">
    //         <input id="annFeeDate" className="creditInputForm col-md-4" placeholder="Annual Fee Date"/>
    //         <span className="col-md-6"> Annual Fee Date </span>
    //       </div> 
    //       <br/>
    //       <div className="bottomFormItem">
    //         <input id="expCancelDate" className="creditInputForm col-md-4" placeholder="Planned Cancellation Date"/>
    //         <span className="col-md-6"> Planned Cancellation Date </span>
    //       </div> 
    //       <br/>
    //       <div className="bottomFormItem">
    //         <input id="submit" type="submit" className="creditInputForm col-md-4"/>
    //       </div> 
    //   </div>
    // </form>
    // </div>
  )
}


export default cardEditView