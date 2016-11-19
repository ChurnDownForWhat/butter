import React from 'react'
import * as Bs from 'react-bootstrap'

const cardEditView = ({ dateIt, defaults, props, card, addCard, FieldGroup, cancel, show, onHide }) => {
  let form = {}
  console.log(show,onHide)
  return (
    <Bs.Modal show={show} onHide={onHide}>
    <Bs.Grid>
      <Bs.Row>
        <Bs.Modal.Header>
          <Bs.Col md={6}>
            <Bs.Modal.Title>Edit {card.name}</Bs.Modal.Title>
          </Bs.Col>
          <Bs.Col md={6} className='require'>
          <span> * = Required Field </span>
          </Bs.Col>
        </Bs.Modal.Header>
      </Bs.Row>
      <Bs.Row>
        <form onSubmit={(e) => addCard(e,form)} id="credit-card-form" ref={(el)=> form = el}>
        <Bs.Row>
          <Bs.Col md={4}>
            <FieldGroup
              id='name'
              type='text'
              label='Card Name*'
              placeholder='Insert Card Name'
              defaultValue={card.name}
            />
          </Bs.Col>
          <Bs.Col md={4}>
            <Bs.FormGroup controlId="cardType">
              <Bs.ControlLabel>Card Type*</Bs.ControlLabel>
              <Bs.FormControl componentClass="select" placeholder="select">
                <option value="MasterCard">MasterCard</option>
                <option value="Visa">Visa</option>
                <option value="American Express">American Express</option>
                <option value="Discover">Discover</option>
              </Bs.FormControl>
            </Bs.FormGroup>
          </Bs.Col>
          <Bs.Col md={4}>
            <FieldGroup
              id='last4digits'
              type='text'
              label='Last 4 Digits'
              placeholder='XXXX'
              defaultValue={card.last4digits || ''}
            />
          </Bs.Col>
        </Bs.Row>
        <Bs.Row>
          <Bs.Col md={4}>
            <Bs.FormGroup controlId="category">
              <Bs.ControlLabel>Reward Category*</Bs.ControlLabel>
              <Bs.FormControl componentClass="select" placeholder="select">
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
              label='Rewards Program'
              placeholder='Program Name'
              defaultValue={card.program || ''}
            />
          </Bs.Col>
          <Bs.Col md={4}>
            <FieldGroup
              id='rewardsAmt'
              type='number'
              label='Reward Points Earned'
              placeholder='XXXX.XX'
              defaultValue={card.rewardsAmt || ''}
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
              defaultValue={dateIt(card.expiration) || ''}
            />
          </Bs.Col>
          <Bs.Col md={6}>
            <FieldGroup
              id='monthlyBilldate'
              type='number'
              label='Monthly Bill Date'
              placeholder='XX'
              defaultValue={card.monthlyBilldate || ''}
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
              defaultValue={dateIt(card.applicationDate) || ''}
            />
          </Bs.Col>
          <Bs.Col md={6}>
            <FieldGroup
              id='expCancelDate'
              type='date'
              label='Expected Cancel Date'
              placeholder='XX/XX/XXXX'
              defaultValue={dateIt(card.expCancelDate) || ''}
            />
          </Bs.Col>
        </Bs.Row>
        <Bs.Row>
          <Bs.Col md={6}>
            <FieldGroup
              id='signupBonus'
              type='text'
              label='Sign Up Bonus'
              placeholder='Sign up bonus'
              defaultValue={card.signupBonus || ''}
            />
          </Bs.Col>
          <Bs.Col md={6}>
            <FieldGroup
              id='spendTotal'
              type='number'
              label='Spend Total'
              placeholder='XXXX.XX'
              defaultValue={card.spendTotal || ''}
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
              defaultValue={card.minSpend || ''}
            />
          </Bs.Col>
          <Bs.Col md={6}>
            <FieldGroup
              id='spendDeadline'
              type='date'
              label='Sign-Up Bonus Deadline'
              placeholder='XX/XX/XXXX'
              defaultValue={dateIt(card.spendDeadline) || ''}
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
              defaultValue={card.annFeeAmt || ''}
            />
          </Bs.Col>
          <Bs.Col md={5}>
            <FieldGroup
              id='annFeeDate'
              type='date'
              label='Annual Fee Date'
              placeholder='XX/XX/XXXX'
              defaultValue={dateIt(card.annFeeDate) || ''}
            />
          </Bs.Col>
          <Bs.Col md={3}>
            <Bs.FormGroup>
              <Bs.Checkbox>Annual Fee Waived?</Bs.Checkbox>
            </Bs.FormGroup>
          </Bs.Col>
        </Bs.Row>
        <Bs.Row>
        <Bs.Modal.Footer>
          <Bs.Col md={12}>
            <Bs.Col md={6} className="left-button">
            <Bs.Button onClick={cancel}>
              Cancel
            </Bs.Button>
            </Bs.Col>
            <Bs.Col md={6} className="right-button">
            <Bs.Button type="submit">
              Submit
            </Bs.Button>
            </Bs.Col>
          </Bs.Col>
        </Bs.Modal.Footer>
        </Bs.Row>
        </form>
      </Bs.Row>
    </Bs.Grid>
    </Bs.Modal>
  )
}


export default cardEditView
