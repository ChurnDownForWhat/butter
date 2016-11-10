import React from 'react'
import { render } from 'react-dom'
import { store } from './reducers/main'
import App from './components/App'

render(
  <App store={ store }/>,
  document.getElementById('app')
)

module.hot.accept()
// data = {[5, 2, 7, 1, 1, 3, 4, 9]}
