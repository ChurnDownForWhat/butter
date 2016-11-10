import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import LandingPage from './LandingPage'
import CardsPage from './CardsPage'
import RewardsPage from './RewardsPage'
import Navbar from './Navbar'
import CreditScore from './CreditScore'
import Pie from './Pie'
import Slice from './Slice'

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {

    return (

    <div>
      <Router history={hashHistory}>
        <Route path="/" component={CardsPage} />
        <Route path="/cards" component={CardsPage} />
        <Route path="/rewards" component={RewardsPage} />
      </Router>
    </div>
    )
  }
}

    // let height = window.innerHeight
    // let width = window.innerWidth
    // let minViewportSize = Math.min( width, height )
    // let radius = ( minViewportSize * .9 ) / 2
    // let x = width / 2
    // let y = height / 2

    // <svg width = "100%" height = "100%">
    //   <Pie x = {x}
    //       y ={y}
    //       innerRadius = { radius * .35 }
    //       outerRadius = { radius }
    //       cornerRadius = {7}
    //       padAngle = { .02 }
    //       data = { this.props.data } />
    // </svg>
