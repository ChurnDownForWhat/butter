import CardView from './CardView'
import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'
import Sidebar from './Sidebar'
<<<<<<< f8bce4e9095bd9bf1ad68ed71f0cd26878b4befd
import Popup from "react-popup"
=======
import NewCard from './NewCard'
import Popup from 'react-popup'
>>>>>>> renders new card popup

class CardsPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cards: []
    }
  }  

  componentDidMount(){
    this.props.viewAllCards()
    .then( res => 
      this.setState({
        cards: this.props.cards.cards
      })
    )
  }
  
  click(e){
    return this.props.viewCard(e.target.id)
    .then((card) => Popup.alert(<CardView />))
  }

  filterCards(e){
    var filtered = this.props.cards.cards.filter(card =>
      card.name.toLowerCase().includes(e.target.value.toLowerCase()))
    
    this.setState({cards: filtered})
  }

  addCardPopup(e){
    Popup.create({
      content: <NewCard />,
      noOverlay: true
    })
  }

  render(){
    const cardViewer = (this.state.view ? <CardView /> : <div></div>)

    return (!this.props.cards ?
        (<div></div>)
      :
       (
        <div id='wrapper'>
          <Popup />
          <Sidebar/>
          <div id='page-content-wrapper'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-12'>
                  <h1 className="page-header">
                  {
                    this.props.cards.user.firstName
                    +' '+
                    this.props.cards.user.lastName
                  }
                    <small> {this.props.cards.user.email}</small>
                    <small> 
                      <input onKeyUp={this.filterCards.bind(this)} 
                             placeholder="filter cards"/> 
                    </small>
                    <small><button onClick={(e) => this.addCardPopup(e)} >Add a Card</button></small>
                  </h1> 
                  <div className="row">
                    <div className="col-lg-12">
                      <Popup />
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
          {
            // <div className="container page">
            //   <div className="col-md-2">
            //   </div>
            //   <div className="col-md-10">
            //     <div className="row">
            //         <div className="col-lg-12">
            //           <div className="col-md-8">
            //           </div>
            //           <div className="col-md-4 user-stats">
            //           <span className="col-md-12"><strong>Reward Points:</strong>167870</span>
            //           <span className="col-md-12"><strong>Deadlines Met:</strong>1</span>
            //           </div>
            //         </div>
            //     </div>
            //     <div className="row">
            //       <div className="col-md-12">
            //         <div className="col-md-4 portfolio-item">
            //             <a href="#">
            //                 <img className="img-responsive" src="https://dummyimage.com/600x400/eeeeee/333&text=Credit+Card" alt="" />
            //             </a>
            //             <h3>
            //                 <a href="#">Credit Card Name</a>
            //             </h3>
            //             <p><strong>Spend Deadline: </strong>March 3, 2017</p>
            //             <p>$1456/$3000</p>
            //             <ProgressBar bsStyle="success" active now={1456/3000*100} />
                        
            //         </div>
            //         <div className="col-md-4 portfolio-item danger">
            //             <a href="#">
            //                 <img className="img-responsive" src="https://dummyimage.com/600x400/eeeeee/333&text=Credit+Card" alt="" />
            //             </a>
            //             <h3>
            //                 <a href="#">Credit Card Name</a>
            //             </h3>
            //             <p className="exp-danger"><strong>Spend Deadline: </strong>December 1, 2016</p>
            //             <p>$2700/$3000</p>
            //             <ProgressBar bsStyle="success" active now={2700/3000*100} />
            //         </div>
            //         <div className="col-md-4 portfolio-item complete">
            //             <a href="#">
            //                 <img className="img-responsive" src="https://dummyimage.com/600x400/eeeeee/333&text=Credit+Card" alt="" />
            //             </a>
            //             <h3>
            //                 <a href="#">Credit Card Name</a>
            //             </h3>
            //             <p><strong>Spend Deadline: </strong>February 1, 2016</p>
            //             <p>$3000/$3000</p>
            //             <ProgressBar bsStyle="success" active now={3000/3000*100} />
            //         </div>
            //       </div>
            //       </div>
            //     <div className="row">
            //       <div className="col-md-12">
            //         <div className="col-md-4 portfolio-item">
            //             <a href="#">
            //                 <img className="img-responsive" src="https://dummyimage.com/600x400/eeeeee/333&text=New+Credit+Card+" alt="" />
            //             </a>
            //             <h3>
            //                 <a href="#">Click to create New Card</a>
            //             </h3>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </div>
          }
        </div>
    ))
  }
}


function mapStateToProps(store){
  return {
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
    updateCard: Action.updateCard
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CardsPage)
