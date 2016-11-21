import React from 'react'
import * as Action from '../actions/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Bs from 'react-bootstrap'

class Settings extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      show: false,
      feedback: ''
    }
  }

  componentDidMount(){
    this.props.viewAllCards()
  }

  deleteUser(){
    this.props.deleteUser()
  }

  deleteCard(e){
    this.props.deleteCard(e.target.id)
    document.getElementById(e.target.id).remove()
  }

  sendFeedback(e){
    e.preventDefault()
    console.log(this.state.feedback)
    this.setState({show: false})
  }

  onChange(e){
    this.setState({feedback: e.target.value})
  }

  render(){
    return (
      <div>
        <Bs.Col md={12}>
          <Bs.Row className='page-header'>
              <Bs.Col md={7}>Settings</Bs.Col>
              <Bs.Col md={4} id='feedbackBtn'>
                <Bs.Button block bsStyle='primary' bsSize='large' onClick={() => this.setState({ show: true })}>
                  Feedback
                </Bs.Button>
              </Bs.Col>
          </Bs.Row>
        </Bs.Col>
<<<<<<< c7c37da026e9d046aa275918c3eb2efe20ae3280
        <Bs.Col className='settings_content' md={11}>
=======
        <Bs.Col className='settings_content' md={10}>
>>>>>>> Fixed import
          <Bs.Row>  
            { 
              this.props.cards.map((card, i) => 
                <Bs.Col md={6} id={card.id}>
                  <Bs.Panel key={i} className="settings_cards" >
                    <Bs.Row>
                      <Bs.Col md={2}><img src={card.cardImg} /></Bs.Col>
                      <Bs.Col md={8} className="cardName">{card.name}</Bs.Col>
                      <Bs.Col md={2}>
                        <Bs.Button block id={card.id} bsStyle='danger' onClick={this.deleteCard.bind(this)}>X</Bs.Button>
                      </Bs.Col>
                    </Bs.Row>
                  </Bs.Panel>
                </Bs.Col>
              )
            }
          </Bs.Row>
          <Bs.Row className="delAcct">
            <Bs.Button block bsStyle='danger' bsSize='large' href='/api/logout' onClick={this.deleteUser.bind(this)}>Delete Account</Bs.Button>
          </Bs.Row>
        </Bs.Col>
        
        <Bs.Modal show={this.state.show} onHide={() => this.setState({ show: false })}>
          <Bs.Modal.Header>
            <Bs.Col md={12}>
              <h3>Please, Share Your Thoughts!</h3>
            </Bs.Col>
          </Bs.Modal.Header>
          <Bs.Row>
            <Bs.Col md={12}>
              <Bs.Modal.Body>
                <form onSubmit={(e) => this.sendFeedback(e)}> 
                  <Bs.FormGroup controlId="formControlsTextarea">
                    <Bs.FormControl onChange={(e) => this.onChange(e)} componentClass="textarea" />
                    <br/>
                    <Bs.Button block type='submit' bsStyle='primary' bsSize='large'>Thanks</Bs.Button>
                  </Bs.FormGroup> 
                </form> 
              </Bs.Modal.Body>    
            </Bs.Col>
          </Bs.Row>
        </Bs.Modal>

      </div>

    )
  }
}

function mapStateToProps(store){
  return {
    //object w/ all user cards data
    cards: store.cardStates.cards
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    deleteCard: Action.deleteCard,
    viewAllCards: Action.viewAllCards,
    deleteUser: Action.deleteUser,


  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Settings)