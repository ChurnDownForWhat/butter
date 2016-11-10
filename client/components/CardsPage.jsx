import CardView from './CardView'
import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'
import Sidebar from './Sidebar'

class CardsPage extends React.Component {
  constructor(props){
    super(props)
  }  

  componentDidMount(){
    // new Promise((res, rej) => res(this.props.addCard()))
    // .then(console.log("addCard", res))

    // new Promise((res, rej) => res(this.props.viewCard()))
    // .then(console.log("viewCard", res))

    // new Promise((res, rej) => res(this.props.updateCard()))
    // .then(console.log("updateCard", res))

    // new Promise((res, rej) => res(this.props.getDefaults()))
    // .then(console.log("deleteCard", res))

    // new Promise((res, rej) => res(this.props.viewAllCards('40f2e009-4383-4391-ad67-96e4bbd12c05')))
    // .then(console.log("viewAllCards", res))

    new Promise((res, rej) => res(this.props.getDefaults()))
    .then((res) => console.log("defaults", this.props.defaults))
  }
  
  render(){
    return (
      <div className="container page">
        <div className="col-md-2">
          <Sidebar/>
        </div>
        <div className="col-md-10">
          <div className="row">
              <div className="col-lg-12">
                <div className="col-md-8">
                    <h1 className="page-header">Darion Freeman
                        <small>Credit Cards</small>
                    </h1>
                </div>
                <div className="col-md-4 user-stats">
                <span className="col-md-12"><strong>Reward Points:</strong>167870</span>
                <span className="col-md-12"><strong>Deadlines Met:</strong>1</span>
                </div>
              </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="col-md-4 portfolio-item">
                  <a href="#">
                      <img className="img-responsive" src="https://dummyimage.com/600x400/eeeeee/333&text=Credit+Card" alt="" />
                  </a>
                  <h3>
                      <a href="#">Credit Card Name</a>
                  </h3>
                  <p><strong>Spend Deadline: </strong>March 3, 2017</p>
                  <p>$1456/$3000</p>
                  <ProgressBar bsStyle="success" active now={1456/3000*100} />
                  
              </div>
              <div className="col-md-4 portfolio-item danger">
                  <a href="#">
                      <img className="img-responsive" src="https://dummyimage.com/600x400/eeeeee/333&text=Credit+Card" alt="" />
                  </a>
                  <h3>
                      <a href="#">Credit Card Name</a>
                  </h3>
                  <p className="exp-danger"><strong>Spend Deadline: </strong>December 1, 2016</p>
                  <p>$2700/$3000</p>
                  <ProgressBar bsStyle="success" active now={2700/3000*100} />
              </div>
              <div className="col-md-4 portfolio-item complete">
                  <a href="#">
                      <img className="img-responsive" src="https://dummyimage.com/600x400/eeeeee/333&text=Credit+Card" alt="" />
                  </a>
                  <h3>
                      <a href="#">Credit Card Name</a>
                  </h3>
                  <p><strong>Spend Deadline: </strong>February 1, 2016</p>
                  <p>$3000/$3000</p>
                  <ProgressBar bsStyle="success" active now={3000/3000*100} />
              </div>
            </div>
            </div>
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-4 portfolio-item">
                  <a href="#">
                      <img className="img-responsive" src="https://dummyimage.com/600x400/eeeeee/333&text=New+Credit+Card+" alt="" />
                  </a>
                  <h3>
                      <a href="#">Click to create New Card</a>
                  </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
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