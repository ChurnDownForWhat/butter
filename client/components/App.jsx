import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import LandingPage from './LandingPage'
import CardsPage from './CardsPage'
import RewardsPage from './RewardsPage'
import Navbar from './Navbar'
import CreditScore from './CreditScore'
import Foundation from 'react-foundation'
import Less from 'less'

export default class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
    <div>  
    
 
      <Router history={hashHistory}>
        <Route path="/" component={LandingPage} />
        <Route path="/cards" component={CardsPage} />
        <Route path="/rewards" component={RewardsPage} />
      </Router>
        <Navbar />
        <CreditScore />
   
      
    
    </div>
    )
  }
}

