import CardView from './CardView'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'
import Sidebar from './Sidebar'
import Popup from "react-popup"
import QuickNewCard from './NewCard_quick'
import DetailedNewCard from './NewCard_detailed'
import * as Bs from 'react-bootstrap'

class CardsPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cards: [],
      showQuick: false,
      showDetailed: false,
      showModal: false,
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

  onHover(){
    this.setState({
      hover:'menuDisplayed'
    })
  }

  exitHover(){
    this.setState({
      hover:''
    })
  }


  close(){
    this.setState({
      showModal: false
    })
  }

  deleteClick(e){
    this.props.deleteCard(e.target.parentElement.id)
    e.target.parentElement.parentElement.parentElement.remove()
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
        <Bs.Button id='cards-panel-add' className='cards-panel-header'>
          <i className="fa fa-plus fa-1x" aria-hidden="true"></i>
        </Bs.Button>
      </div>
    )

    return (
      <div id='wrapper'>
        <div id='sidebar-wrapper' onMouseOver={this.onHover.bind(this)} onMouseLeave={this.exitHover.bind(this)}>
          <Sidebar display={this.state.hover}/>
        </div>
        <div id='page-content-wrapper' className={this.state.hover}>
          <Bs.Grid fluid={true}>
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
                            <div className='removeButton' onClick={(this.deleteClick.bind(this))} id={card.id} ref="removeButton">
                              <i className="fa fa-times" aria-hidden="true"></i>
                            </div>
                            <div onClick={(this.click.bind(this))} className='cardName col-md-11' id={card.id}>
                              {card.name}          
                            </div> 
                            <Bs.ProgressBar bsStyle="success" active now={card.spendTotal/card.minSpend*100} />
                            {'Spend Deadline:' + " "+ date}
                          </Bs.Panel>
                        </Bs.Col>
                      )
                    })
                  }
                </Bs.Row>
              </Bs.Panel>
            </Bs.Row>
            <Bs.Row>
                <Bs.DropdownButton bsSize="large" title="Add A Card" >
                  <Bs.MenuItem eventKey="1" onSelect={(e) => this.setState({showQuick: true})}>Quick</Bs.MenuItem>
                  <Bs.MenuItem eventKey="2" onSelect={(e) => this.setState({showDetailed: true})}>Detailed</Bs.MenuItem>
                </Bs.DropdownButton>
            </Bs.Row>
          </Bs.Grid>
        </div>
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
