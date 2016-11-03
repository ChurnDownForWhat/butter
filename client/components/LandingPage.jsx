import React from 'react'
import About from './About'
import Login from './Login'
import Signup from './Signup'

const LandingPage = ( props ) => {
  
  return (
    <div>  
      <div> Landing </div>
      <About />
      <Login />
      <Signup />
    </div>
  )
}

export default LandingPage

