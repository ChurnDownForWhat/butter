import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'
import Sidebar from './Sidebar'

class CardView extends React.Component {
  constructor(props){
    super(props)
  }  

  componentDidMount(){
    this.props.viewCard(this.props.id)
  }

  render() {
    return (
      <div className="container">
      <div className="col-md-12">
        <h3>{this.props.card.name}</h3>
      </div>
        {this.props.card}
      </div>
    )
  }
}
function mapStateToProps(store){
  return {
    //object w/ one card data
    card: store.cardStates.card,
    //object w/ default cards data
    defaults: store.cardStates.defaults
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    addCard: Action.addCard,
    deleteCard: Action.deleteCard,
    viewCard: Action.viewCard,
    updateCard: Action.updateCard
  }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(CardView)