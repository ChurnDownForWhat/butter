import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { getUser } from '../actions/actions'
import CardsPage from './CardsPage'
import RewardsPage from './RewardsPage'
import Navbar from './Navbar'
import CreditScore from './CreditScore'
import Pie from './Pie'
import Slice from './Slice'
import Sidebar from './Sidebar'
import Amazon from './Amazon'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hover: ''
    }
  }

  render () {
    return (
      <div>
    <Provider store={ this.props.store } >
        <Router history={hashHistory}>
        <Route path="/" component={CardsPage}/>
        <Route path="/cards" component={CardsPage} />
        <Route path="/rewards" component={RewardsPage} />
        <Route path='/amazon' component={Amazon}/>
      </Router>
    </Provider>
    </div>
    )
  }
}
