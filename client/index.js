import React from 'react'
import { render } from 'react-dom'
import { store } from './reducers/main'
import App from './components/App'
require('./css/sidebar.css')
require('./css/creditCardsPage.css')


render(
  <App store={ store }/>,
  document.getElementById('app')
)

module.hot.accept()

