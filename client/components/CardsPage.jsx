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
      cardLength: 0,
      filteredLength:0
    }
  }

  componentDidMount(){
    this.props.getUser()
    this.props.viewAllCards()
    .then(res =>{
      this.setState({
        cards: this.props.cards,
        cardLength: this.props.cards.length
      })
      if(this.state.filteredLength === 0){
        this.setState({
          filteredLength: this.state.cardLength
        })
      }
    })
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

  updateCards(){
    this.setState({
      cards:this.props.cards,
      cardLength: this.props.cards.length,
      filteredLength: this.props.cards.length
    })
  }

  switchAddViews(e){
    this.setState({ showQuick: !this.state.showQuick })
    this.setState({ showDetailed: !this.state.showDetailed })
  }

  filterCards(e){
    var filtered = this.props.cards.filter(card =>
      card.name.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({cards: filtered, filteredLength:filtered.length})
  }

  render(){
    if(this.props.loading.loading || !this.props.user) { 
      return (
        <div>
        <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        </div>
      )
    }
    let closeQuick = () => {
      this.updateCards()
      this.setState({ showQuick: false })
    }
    let closeDetailed = () => {
      this.updateCards()
      this.setState({ showDetailed: false })
    }

    const title = (
      <div>
        <h1 className='cards-panel-header'>Cards</h1>
      </div>
    )
    return (
      <div>
        <CardView show={this.state.showModal} updateCards={this.updateCards.bind(this)} close={this.close.bind(this)}/>
        <QuickNewCard show={this.state.showQuick} switch={this.switchAddViews.bind(this)} onHide={closeQuick} />
        <DetailedNewCard show={this.state.showDetailed} switch={this.switchAddViews.bind(this)} onHide={closeDetailed} />
        <Bs.Row>
          <div className='page-header'>
            {'Welcome, ' + this.props.user.firstName + "!"}
          </div>
        </Bs.Row>
        <Bs.Row>
          <Bs.Col md={12}>
            <Bs.Panel className='cards-panel' bsStyle='primary' header={title}>
              <Bs.Panel className='searchHeader'>
                <input onKeyUp={this.filterCards.bind(this)} placeholder="Search Cards"/>
                <h4 className='numCards'>{this.state.filteredLength + "/" + this.state.cardLength + ' Cards'}</h4>
              </Bs.Panel>
              <Bs.Row>
                {
                  this.state.cards.map((card,i) => {

                    var date = new Intl.DateTimeFormat('en',
                      {
                        month: 'long',
                        year:'numeric',
                        day:'numeric'
                      }).format(new Date(card.spendDeadline))

                    return (
                      <Bs.Col md={4} key={i}>
                        <Bs.Panel className='cards'>
                          <Bs.Row>
                            <Bs.Col>
                              <div className='removeButton' onClick={(this.deleteClick.bind(this))}
                                id={card.id} ref="removeButton">
                                <SweetAlert
                                   show={this.state.showAlert}
                                   title="Are you sure you want to delete this card?"
                                   text="You won't be able to recover it if you delete it"
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
                            </Bs.Col>
                          </Bs.Row>
                          <Bs.Row>
                            <Bs.Col md={6}>
                              <img  onClick={(this.click.bind(this))} id={card.id} className='cardImg' src={card.cardImg}/>
                            </Bs.Col>
                          </Bs.Row>
                          <Bs.Row>
                            <Bs.Col md={12}>
                            <div className='cardName col-md-11'>
                                {card.name}
                            </div>
                            </Bs.Col>
                          </Bs.Row>
                          <Bs.Row>
                            <Bs.Col md={12}>
                              <div id='spent'>
                                {'Spent: $' + card.spendTotal}
                              </div>
                            </Bs.Col>
                          </Bs.Row>
                          <Bs.Row>
                            <Bs.Col md={12}>
                              <div id='monthlySpend'>
                                {'Goal: $'  + card.minSpend}
                              </div>
                            </Bs.Col>
                          </Bs.Row>
                          <Bs.Row>
                            <Bs.Col md={12}>
                              <div id='deadline'>
                                {'Deadline: ' + date}
                              </div>
                            </Bs.Col>
                          </Bs.Row>
                          {
                          // <Bs.Col md={12}>
                          // <Bs.ProgressBar bsStyle="success" active now={card.spendTotal/card.minSpend*100} />
                          // </Bs.Col>
                          }
                        </Bs.Panel>
                      </Bs.Col>
                    )
                  })
                }
                <Bs.Col md={4}>
                  <Bs.Panel className='cards addCard'>
                    <div className='col-md-12'>
                      <i className="fa fa-plus fa-2x addCardIcon " aria-hidden="true"></i>
                        <div id='addQuick'  onClick={(e) => this.setState({showQuick: true})}>Quick</div>
                        <div id='addDetailed' onClick={(e) => this.setState({showDetailed: true})}>Detailed</div>
                    </div>
                    <Bs.Col md={12}>
                      <h4 className='addACard'>Add a card</h4>
                    </Bs.Col>
                  </Bs.Panel>
                </Bs.Col>
              </Bs.Row>
            </Bs.Panel>
          </Bs.Col>
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
    defaults: store.cardStates.defaults,
    //boolean for loading
    loading: store.loading
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
    getUser: Action.getUser,
    doneLoad: Action.doneLoading
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CardsPage)
