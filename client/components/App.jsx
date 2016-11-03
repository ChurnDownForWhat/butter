import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import LandingPage from './LandingPage'
import CardsPage from './CardsPage'
import RewardsPage from './RewardsPage'
import Navbar from './Navbar'
import CreditScore from './CreditScore'

export class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Router history={hashHistory}>
        <Route path="/" component={LandingPage} />
        <Route path="/cards" component={CardsPage} />
        <Route path="/rewards" component={RewardsPage} />
      </Router>
      <Navbar />
      <CreditScore />
    )
  }
}

