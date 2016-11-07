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
    let { value, label, fill, innerRadius = 0, outerRadius, cornerRadius, props, padAngle } = this.props
    if ( this.state.isHovered ) {
      outerRadius *= 1.1
    }
    let arc = d3.arc()
      .innerRadius( innerRadius )
      .outerRadius( outerRadius )
      .cornerRadius( cornerRadius )
      .padAngle( padAngle )

    return (
      <g onMouseOver = { this.onMouseOver }
        onMouseOut = { this.onMouseOut }
        { ...props }>
      <path d = { arc(value) } fill = { this.props.fill } />
      <text transform = { this.translate( ...arc.centroid(value) )}
            dy = ".35em"
            className = "label">
            {label}
            </text>
      </g>
    )
  }
}
