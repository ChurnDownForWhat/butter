import CardView from './CardView'
import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'
import Sidebar from './Sidebar'
import Popup from "react-popup"
import QuickNewCard from './NewCard_quick'
import DetailedNewCard from './NewCard_detailed'
import { DropdownButton, ButtonToolbar, MenuItem, Modal } from 'react-bootstrap'

class CardsPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cards: [],
      showQuick: false,
      showDetailed: false
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
    .then((card) => Popup.alert(<CardView />))
  }

  filterCards(e){
    var filtered = this.props.cards.filter(card =>
      card.name.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({cards: filtered})
  }

  render(){
    let closeQuick = () => this.setState({ showQuick: false })
    let closeDetailed = () => this.setState({ showDetailed: false })

    return (!this.props.cards ?
        (<div></div>)
      :
       (
        <div id='wrapper'>
          <Sidebar/>
          <div id='page-content-wrapper'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-12'>
                  <h1 className="page-header">
                  {
                    this.props.user.firstName
                    +' '+
                    this.props.user.lastName
                  }
                    <small> {this.props.user.email}</small>
                    <small> 
                      <input onKeyUp={this.filterCards.bind(this)} 
                             placeholder="filter cards"/> 
                    </small>
                    <small>
                      <ButtonToolbar>
                        <DropdownButton bsSize="large" title="Add A Card" id="dropdown-size-large">
                          <MenuItem eventKey="1" onSelect={(e) => this.setState({showQuick: true})}>Quick</MenuItem>
                          <MenuItem eventKey="2" onSelect={(e) => this.setState({showDetailed: true})}>Detailed</MenuItem>
                        </DropdownButton>
                      </ButtonToolbar>
                    </small>
                  </h1> 
                  <div className="row">
                    <div className="col-lg-12">
                      {
                        this.state.cards.map((card, i) =>
                        { 
                          var date = new Intl.DateTimeFormat('en', 
                            {
                              month: 'long',
                              year:'numeric',
                              day:'numeric' 
                            }).format(new Date(card.spendDeadline))
                          return (
                          <div key={i}>
                            <div onClick={(this.click.bind(this))} className='cardName' id={card.id}>{card.name}</div> {date}
                            <ProgressBar bsStyle="success" active now={card.spendTotal/card.minSpend*100} />
                          </div>
                          )
                        })
                      }
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          <QuickNewCard show={this.state.showQuick} onHide={closeQuick} />
          <DetailedNewCard show={this.state.showDetailed} onHide={closeDetailed} />
        </div>
    ))
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

export default connect(mapStateToProps, matchDispatchToProps)(CardsPage)
