import React from 'react'
import Login from './Login'
import Navbar from './Navbar'

const LandingPage = (props) => {
  return (
    <div>
      This is the landing page, w/ these components:
      <Navbar />
      <Login />
    </div>
  )
}

export default LandingPage
