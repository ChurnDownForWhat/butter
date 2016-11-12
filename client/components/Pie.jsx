import React from 'react'
import * as d3 from 'd3'
import Slice from './Slice'
// const scale = require('d3-scale')
// const layout = require('d3-shape')
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { viewAllCards } from '../actions/actions'

class Pie extends React.Component {
  constructor (props) {
    super(props)
    this.colorScale = d3.schemeCategory10
    this.renderSlice = this.renderSlice.bind(this)
  }

  componentDidMount(){
    
  }


  translate (x, y) {
    return `translate(${x}, ${y})`
  }

  //TO DO: get this data to the pie
  mapPieData(){
    return this.props.viewAllCards()
    .then(() => this.props.cards.cards)
    .then(cards => cards.map(card =>
      [card.category, card.rewardsAmt]
    ))
    .then(data => result = data)
  }

  render () {
    let { x, y } = this.props
    // let data = this.mapPieData()
    // console.log('data', data)
    let pie = d3.pie()
    console.log(this.mapPieData())
    return (
      <g transform = { this.translate(x, y) }>
        { pie(data).map(this.renderSlice) }
      </g>
    )
  }

  renderSlice (value, i) {
    let { innerRadius, outerRadius, cornerRadius, padAngle } = this.props
    return (
      <Slice key={i}
            innerRadius = { innerRadius }
            outerRadius = { outerRadius }
            cornerRadius = { cornerRadius }
            padAngle = { padAngle }
            value = { value[1] }
            label = { value[0] }
            fill = { this.colorScale[i] } />
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
    viewAllCards: viewAllCards
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Pie)