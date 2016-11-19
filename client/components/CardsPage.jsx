import React from 'react'
import CardView from './CardView'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'
import QuickNewCard from './NewCard_quick'
import DetailedNewCard from './NewCard_detailed'
import * as Bs from 'react-bootstrap'
import SweetAlert from 'sweetalert-react'

class CardsPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cards: [],
      showQuick: false,
      showDetailed: false,
      showModal: false,
      showAlert: false,
      currentID: null,
      hover: ''  
    }
  }  

  componentDidMount(){
    this.props.getUser()
    this.props.viewAllCards()
    .then(res => 
      this.setState({
        cards: this.props.cards
      })
    )
  }
  
  click(e){
    return this.props.viewCard(e.target.id)
    .then((card) => this.setState({showModal: true}))
  }

  close(){
    this.setState({
      showModal: false
    })
  }

  deleteClick(e){
    console.log("dasfadsfsdf",e)

    this.setState({
      currentID: e.target.parentElement.id,
      showAlert: true
    })
  }

  onConfirmDelete(){
    var self = this
    this.props.deleteCard(this.state.currentID)
    .then(function(){
      self.props.viewAllCards()
      .then(res => 
        self.setState({
          cards: self.props.cards
        })
      )
    })
    this.setState({
      showAlert: false
    })
  }

  switchAddViews(e){
    this.setState({ showQuick: !this.state.showQuick })
    this.setState({ showDetailed: !this.state.showDetailed })
  }

  filterCards(e){
    var filtered = this.props.cards.filter(card =>
      card.name.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({cards: filtered})
  }

  render(){
    let closeQuick = () => this.setState({ showQuick: false })
    let closeDetailed = () => this.setState({ showDetailed: false })
    const title = (
      <div>
        <h1 className='cards-panel-header'>Cards</h1>
        <div id='cards-panel-add' className='cards-panel-header'>
        <Bs.DropdownButton id='cards-panel-add' className='cards-panel-header' bsSize="large" title="Add A Card" >
          <Bs.MenuItem eventKey="1" onSelect={(e) => this.setState({showQuick: true})}>Quick</Bs.MenuItem>
          <Bs.MenuItem eventKey="2" onSelect={(e) => this.setState({showDetailed: true})}>Detailed</Bs.MenuItem>
        </Bs.DropdownButton>
        </div>
      </div>
    )

    return (
      <div>
        <CardView show={this.state.showModal} close={this.close.bind(this)}/>
        <QuickNewCard show={this.state.showQuick} switch={this.switchAddViews.bind(this)} onHide={closeQuick} />
        <DetailedNewCard show={this.state.showDetailed} switch={this.switchAddViews.bind(this)} onHide={closeDetailed} />
        <Bs.Row>
          <div className='page-header'>
            {'Welcome, ' + this.props.user.firstName + "!"}
          </div>
        </Bs.Row>
        <Bs.Row>
          <Bs.Panel className='cards-panel' header={title}>
            <input onKeyUp={this.filterCards.bind(this)} placeholder="filter cards"/> 
            <Bs.Row>
              {
                this.state.cards.map((card,i) =>{
                  var date = new Intl.DateTimeFormat('en', 
                    {
                      month: 'long',
                      year:'numeric',
                      day:'numeric' 
                    }).format(new Date(card.spendDeadline))
                  return (
                    <Bs.Col md={4} key={i}>
                      <Bs.Panel className='cards'>
                        <div className='removeButton' onClick={(this.deleteClick.bind(this))} 
                          id={card.id} ref="removeButton">
                          <SweetAlert
                             show={this.state.showAlert}
                             title="Are you sure you want to delete this card?"
                             text="you won't be able to recover it if you delete it"
                             type="warning"
                             showCancelButton= {true}
                             confirmButtonText="Delete Card"
                               onConfirm={this.onConfirmDelete.bind(this)}
                               onCancel={() => {
                                 this.setState({ showAlert: false })
                               }}
                          />
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </div>
                        <div onClick={(this.click.bind(this))} className='cardName col-md-11' id={card.id}>
                          {card.name}          
                        </div>
                        <Bs.Col md={12}> 
                        <Bs.ProgressBar bsStyle="success" active now={card.spendTotal/card.minSpend*100} />
                        {'Spend Deadline:' + " "+ date}
                        </Bs.Col>
                      </Bs.Panel>
                    </Bs.Col>
                  )
                })
              }
            </Bs.Row>
          </Bs.Panel>
        </Bs.Row>
      </div>
    )
  }
}


function mapStateToProps(store){
  return {
    user: store.userStates.user,
    //object w/ one card data
    card: store.cardStates.card,
    //object w/ all user cards data
    cards: store.cardStates.cards,
    //object w/ default cards data
    defaults: store.cardStates.defaults
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    getDefaults: Action.getDefaults,
    addCard: Action.addCard,
    deleteCard: Action.deleteCard,
    viewAllCards: Action.viewAllCards,
    viewCard: Action.viewCard,
    updateCard: Action.updateCard,
    getUser: Action.getUser

  }, dispatch)
}

// <div className='removeButton' onClick={(this.deleteClick.bind(this))} id={card.id} ref="removeButton">
  // <i className="fa fa-times" aria-hidden="true"></i>
 // </div>

export default connect(mapStateToProps, matchDispatchToProps)(CardsPage)
