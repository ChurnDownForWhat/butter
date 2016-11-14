import CardView from './CardView'
import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'
import Sidebar from './Sidebar'
require('../css/sidebar.css')

class CardsPage extends React.Component {
  constructor(props){
    super(props)
  }  

  componentDidMount(){
     //async stuff


    // var newCard = {
    //   name: 'Citi DoubleCash',
    //   user_id: "21274577-2e7c-40cf-b2c0-6b56f4ceeda9",
    //   cardType: 'Citi',
    //   benefit: '2% cash back',
    //   annFeeAmt: 0,
    //   waivedFees: false,
    //   category: 'Cash Back',
    //   program: 'Citi Rewards',
    //   signupBonus: 0,
    //   minSpend: 0
    // }

    this.props.viewAllCards()

    // new Promise((res, rej) => res(this.props.addCard(newCard)))
    // .then(res => console.log("addCard", res))

    // new Promise((res, rej) => res(this.props.viewCard(4)))
    // .then((res) => console.log("viewCard", this.props.card))

    // new Promise((res, rej) => res(this.props.updateCard(4, {category: 'LIFE'})))
    // .then(res => console.log("updateCard", res))

    // new Promise((res, rej) => res(this.props.getDefaults()))
    // .then(console.log("deleteCard", res))

    // new Promise((res, rej) => res(this.props.viewAllCards()))
    // .then((res) => console.log("viewAllCards", this.props.cards))

    // new Promise((res, rej) => res(this.props.getDefaults()))
    // .then((res) => console.log("defaults", this.props.defaults))

  }
  
  click(e){
    this.props.viewCard(e.target.id)
  }
  render(){
    console.log('Card',this.props.card)
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
                    this.props.cards.user.firstName
                    +' '+
                    this.props.cards.user.lastName
                  }
                    <small> {this.props.cards.user.email}</small>
                  </h1>
                  <div className="row">
                    <div className="col-lg-12">
                      {

                        this.props.cards.cards.map((card, i) =>
                        { 

                          var date = new Intl.DateTimeFormat('en', 
                            {
                              month: 'long',
                              year:'numeric',
                              day:'numeric' 
                            }).format(new Date(card.spendDeadline))

                          return (
                          <div key={i}>

                            <div onClick={this.click.bind(this)} className='cardName' id={card.id}>{card.name}</div> {date} 
                            <div className="progress">
                              <div id='progressBar'className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="600" aria-valuemin="0" aria-valuemax="3000">
                                {card.spendTotal + '/' + card.minSpend}
                              </div>
                            </div>
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


