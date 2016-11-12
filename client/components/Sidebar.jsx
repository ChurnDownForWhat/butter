import React from 'react'
import {Link} from 'react-router'


const Sidebar = (props) => {
  return (
    <div id='sidebar-wrapper'>
      <ul className='sidebar-nav'>
        <li><Link to="/cards">Credit Cards</Link></li>
        <li><Link to="/rewards">Rewards</Link></li>
        <li><a href="#">Amazons</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="/api/logout"> Logout </a></li>
      </ul>
    </div>
  )
}




export default Sidebar