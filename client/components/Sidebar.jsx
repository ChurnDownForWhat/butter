import React from 'react'
import {Link} from 'react-router'
import * as Bs from 'react-bootstrap'

const Sidebar = (props) => {
  const display = props.display
  return (
    <Bs.Navbar bsClass ='nav sidebar fixed-top'>
      <Bs.Nav bsClass='nav sidebar'>
        <h1 className={'nav-title' + display}>Butter</h1>
        <Bs.NavItem active={true}>
            <i className="fa fa-tachometer fa-2x" aria-hidden="true"></i>
            <h4 className={'sidebar-text' + display}> Dashboard</h4>
        </Bs.NavItem>
        <Bs.NavItem>
          <i className="fa fa-credit-card-alt fa-2x" aria-hidden="true"></i>
          <h4 className={'sidebar-text' + display}> Cards</h4>
        </Bs.NavItem>
        <Bs.NavItem>
          <i className="fa fa-amazon fa-2x" aria-hidden="true"></i>
          <h4 className={'sidebar-text' + display}> Amazon</h4>
        </Bs.NavItem>
        <Bs.NavItem>
          <i className="fa fa-cogs fa-2x" aria-hidden="true"></i>
          <h4 className={'sidebar-text' + display}> Settings</h4>
          </Bs.NavItem>

        <Bs.NavItem className="sign-out">
          <i className="fa fa-sign-out fa-2x" aria-hidden="true"></i>
          <h4 className={'sidebar-text' + display}> Logout</h4>
        </Bs.NavItem>
      </Bs.Nav>
    </Bs.Navbar>
  )
}

export default Sidebar