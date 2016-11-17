import React from 'react'
import { Modal, Button, Col, Row, Grid, ControlLabel, FormControl, Checkbox, FormGroup } from 'react-bootstrap'

const cardEditView = ({ defaults, props, card, addCard, FieldGroup, cancel }) => {

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
        <form onSubmit={addCard} id="credit-card-form">
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
              id='Cate'
              type='text'
              label='Last 4 Digits'
              placeholder='XXXX'
              defaultValue={card.last4digits || ''}
            />
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <FormGroup controlId="cardType">
              <ControlLabel>Reward Category</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="Cash Back">Cash Back</option>
                <option value="General Points">General Points</option>
                <option value="Miles">Miles</option>
                <option value="Hotel">Hotel</option>
              </FormControl>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FieldGroup 
              id='program'
              type='text'
              label='Program'
              placeholder='Program Title'
              defaultValue={card.program || ''}
            />
          </Col>
          <Col md={3}>
            <FieldGroup 
              id='rewardsAmt'
              type='number'
              label='Rewards Amount'
              placeholder='XXXX.XX'
              defaultValue={card.rewardsAmt || ''}
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
              id='applicationDate'
              type='date'
              label='Application Date'
              placeholder='XX/XX/XXXX'
              defaultValue={card.applicationDate || ''}
            />
          </Col>
          <Col md={6}>
            <FieldGroup 
              id='expCancelDate'
              type='date'
              label='Expected Cancel Date'
              placeholder='XX/XX/XXXX'
              defaultValue={card.expCancelDate || ''}
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
        <Row>
        <Modal.Footer>
          <Col md={12}>
            <Col md={6} className="left-button">
            <Button onClick={cancel}>
              Cancel
            </Button>
            </Col>
            <Col md={6} className="right-button">
            <Button type="submit">
              Submit
            </Button>
            </Col>
          </Col>
        </Modal.Footer>
        </Row>
        </form>
      </Row>
    </Grid>
  )
}


export default cardEditView