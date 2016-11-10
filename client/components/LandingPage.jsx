import React from 'react'
import Login from './Login'
import Navbar from './Navbar'
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css')
// require('../../node_modules/animate.css/animate.min.css')
// require('../../node_modules/tether/dist/js/tether.min.js')
// require('../../node_modules/jquery-touchswipe/jquery.touchswipe.min.js')
// require('../../node_modules/jquery/dist/jquery.min.js')
require('../css/landingPage.css')
require('animate.css')
require('tether')
require('jquery')
require('jquery-touchswipe')
// require('bootstrap')
import Container from '../containers/sampleContainer'



const LandingPage = (props) => {
  return (
    <div>
      <Container />
      <section id="menu-7">
          <nav className="navbar navbar-dropdown bg-color transparent navbar-fixed-top">
              <div className="container">
                  <div className="mbr-table">
                      <div className="mbr-table-cell">
                          <div className="navbar-brand">
                                <h1>Butter</h1>
                          </div>
                      </div>
                  </div>

              </div>
          </nav>
      </section>

      <section className=" mbr-section mbr-section-hero mbr-section-full mbr-section-with-arrow mbr-after-navbar" id="header5-9">
        <div className="mbr-table-cell">
            <div className="container">
                <div className="row">
                    <div className="mbr-section col-md-10">
                        <h1 className="mbr-section-title display-1">Welcome to Butter</h1>
                        <p className="mbr-section-lead lead">The butter solution to churning.</p>
                        <div className="mbr-section-btn"><a className="btn btn-lg btn-primary" href='/#/'>Sign in with Google</a></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="mbr-arrow mbr-arrow-floating" aria-hidden="true"><a href="#msg-box8-e"><i className="mbr-arrow-icon"></i></a></div>
      </section>

      <section className="mbr-section article mbr-parallax-background" id="msg-box8-e">
        <div className="mbr-overlay" id='mbr-overlay'>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-xs-center">
                    <h3 className="mbr-section-title display-2">What is Churning?</h3>
                    <div className="lead"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis mauris, semper sit amet lorem non, vestibulum mattis turpis. Praesent vitae massa nec justo tincidunt facilisis. Phasellus sagittis commodo interdum. Duis sed nisl a quam maximus porttitor. Cras eget consequat elit, a volutpat leo. Praesent aliquam dignissim molestie. Etiam dictum felis massa, vitae vestibulum dui volutpat ac. Donec a iaculis nulla. Ut aliquet, odio non egestas volutpat, ipsum enim placerat lorem, sed imperdiet arcu nunc in sem. Aenean egestas ipsum nisl, eu tempor est accumsan ut. Nunc a diam tempor, sollicitudin nunc sit amet, volutpat diam. Mauris molestie, ex at pharetra aliquam, turpis est dignissim magna, vitae faucibus eros ex sit amet lectus.</p></div>
                </div>
            </div>
        </div>
      </section>

    </div>
  )
}

export default LandingPage
