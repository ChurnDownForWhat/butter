import CardView from './CardView'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'
import Sidebar from './Sidebar'
import Popup from "react-popup"
import QuickNewCard from './NewCard_quick'
import DetailedNewCard from './NewCard_detailed'
import { DropdownButton, ButtonToolbar, MenuItem, Modal,ProgressBar } from 'react-bootstrap'
import * as Bs from 'react-bootstrap'

class CardsPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cards: [],
      showQuick: false,
      showDetailed: false,
      showModal: false    
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
    this.props.deleteCard(e.target.id, e.target.key)
    e.target.parentElement.parentElement.remove()
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

    return (
      <div id='page-content-wrapper'  className={this.state.hover}>
        <Bs.Grid fluid={true}>
          <CardView show={this.state.showModal} close={this.close.bind(this)}/>
          <QuickNewCard show={this.state.showQuick} switch={this.switchAddViews.bind(this)} onHide={closeQuick} />
          <DetailedNewCard show={this.state.showDetailed} switch={this.switchAddViews.bind(this)} onHide={closeDetailed} />
        </Bs.Grid>
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

export default connect(mapStateToProps, matchDispatchToProps)(CardsPage)
