import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import * as Bs from 'react-bootstrap'

const Sidebar = (props) => {
  const display = props.display
  return (
    <Bs.Navbar bsClass ='nav sidebar fixed-top'>
      <Bs.Nav bsClass='nav sidebar'>
        <h1 className={'nav-title' + display}>Butter</h1>
        <LinkContainer to='/'>
          <Bs.NavItem>
            <i className="fa fa-credit-card-alt fa-2x" aria-hidden="true"></i>
            <h4 className={'sidebar-text' + display}> Cards</h4>
          </Bs.NavItem>
        </LinkContainer>

        <LinkContainer to='/rewards'>
          <Bs.NavItem>
            <i className="fa fa-gift fa-2x" aria-hidden="true"></i>
            <h4 className={'sidebar-text' + display}> Rewards</h4>
          </Bs.NavItem>
        </LinkContainer>

        <LinkContainer to='/amazon'>
          <Bs.NavItem>
            <i className="fa fa-amazon fa-2x" aria-hidden="true"></i>
            <h4 className={'sidebar-text' + display}> Amazon</h4>
          </Bs.NavItem>
        </LinkContainer>

        <Bs.NavItem>
          <i className="fa fa-cogs fa-2x" aria-hidden="true"></i>
          <h4 className={'sidebar-text' + display}> Settings</h4>
        </Bs.NavItem>

        <Bs.NavItem className="sign-out"  href='/api/logout'>
          <i className="fa fa-sign-out fa-2x" aria-hidden="true"></i>
          <h4 className={'sidebar-text' + display}> Logout</h4>
        </Bs.NavItem>
      </Bs.Nav>
    </Bs.Navbar>
  )
}

export default Sidebar