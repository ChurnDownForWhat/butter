import React from 'react'
import * as d3 from 'd3'
import Slice from './Slice'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'

class Pie extends React.Component {
  constructor (props) {
    super(props)
    this.colorScale = d3.schemeCategory10
    this.renderSlice = this.renderSlice.bind(this)
  }

  componentDidMount(){
    this.props.getPieData()
  }


  translate (x, y) {
    return `translate(${x}, ${y})`
  }

  render () {
    let { x, y, data } = this.props
    let pie = d3.pie()
    console.log(this.props.data)

    return (
      <g transform = { this.translate(x, y) }>
        { pie(data).map(this.renderSlice) }
      </g>
    )
  }

  renderSlice (value, i) {
    let { data, innerRadius, outerRadius, cornerRadius, padAngle, startAngle, endAngle } = this.props
    let total = data.reduce((acc, curr) => curr[1] ? acc += curr[1] : null, 0)

    let position = 0

    for (var j = 0; j < i; j++){
      position += (data[j][1] * Math.PI * 2)/total
    }

    startAngle = position
    endAngle = startAngle + (value.data[1]*Math.PI*2)/total

    if (value.data[1]) {
      return (
        <Slice key={i}
        innerRadius = { innerRadius }
        startAngle = { startAngle }
        endAngle = { endAngle }
        outerRadius = { outerRadius }
        cornerRadius = { cornerRadius }
        padAngle = { 0 }
        value = { value.data[1] }
        label = { value.data[0] + '\n' + value.data[1] }
        fill = { this.colorScale[i] } />
      )
    }
  }
}

function mapStateToProps(store){
  return {
    data: store.cardStates.data

  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    getPieData: Action.getPieData
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Pie)
