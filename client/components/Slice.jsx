import React from 'react'
import * as d3 from 'd3'

export default class Slice extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isHovered: false }
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
  }

  onMouseOver () {
    this.setState({ isHovered: true })
  }

  onMouseOut () {
    this.setState({ isHovered: false })
  }

  translate (x, y) {
    return `translate(${x}, ${y})`
  }

  render () {
    let { value, label, fill, innerRadius, outerRadius, cornerRadius, props, padAngle, startAngle, endAngle = 0 } = this.props

    if ( this.state.isHovered ) {
      outerRadius *= 1.1
    }
    let arc = d3.arc()
      .startAngle( startAngle )
      .innerRadius( innerRadius )
      .outerRadius( outerRadius )
      .cornerRadius( cornerRadius )
      .padAngle( padAngle )
      .endAngle( endAngle )


      console.log('startAngle', startAngle, 'endAngle', endAngle)

    return (
      <g onMouseOver = { this.onMouseOver }
        onMouseOut = { this.onMouseOut }>
      <path d = { arc(this.props) } fill = { fill } />
      <text transform = { this.translate( ...arc.centroid(value) )}
            dy = ".35em"
            className = "label">
            {label}
            </text>
      </g>
    )
  }
}
