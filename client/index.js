import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from 'reducers/main'
import allReducers from './reducers'
import App from './components/App'

render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('app')
)

module.hot.accept()
// data = {[5, 2, 7, 1, 1, 3, 4, 9]}
