import React from 'react'
import Sidebar from './Sidebar'
import * as Bs from 'react-bootstrap'


export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      hover: ''
    }
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

  render () {
    return (
      <div id='wrapper'>
        <div id='sidebar-wrapper' onMouseOver={this.onHover.bind(this)} onMouseLeave={this.exitHover.bind(this)}>
          <Sidebar display={this.state.hover}/>
        </div>
        <div id='page-content-wrapper' className={this.state.hover}>
          <Bs.Grid fluid={true}>
            { this.props.children }
          </Bs.Grid>
        </div>
      </div>
    )
  }
}
