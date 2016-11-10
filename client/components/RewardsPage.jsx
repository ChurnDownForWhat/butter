import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { viewAllCards } from '../actions/actions'

class RewardsPage extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
      <div className="background">
        <div className="row">
          <div className="logo col-md-5">
            <h3 className=''>REWARDS</h3>
          </div>
          <form className="form-inline">
            <input className="col-lg-offset-2 col-md-5" placeholder="filter rewards"></input>
          </form>
        </div>
        <a href="#menu-toggle" className="btn btn-default" id="menu-toggle">Toggle Menu</a>
        <div className="toggled" id="wrapper">
          <div id="page-content-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div className="tableContainer">
                    <table className="table table-responsive table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Program</th>
                          <th>Category</th>
                          <th>Points</th>
                          <th>Redeem</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="">
                          <th scope="row">1</th>
                          <td>Virgin Elevate</td>
                          <td>Airline</td>
                          <td>1935</td>
                          <td>link</td>
                        </tr>
                        <tr className="er">
                          <th scope="row">2</th>
                          <td>Hilton HHonors</td>
                          <td>Hotel</td>
                          <td>582</td>
                          <td>link</td>
                        </tr>
                        <tr className="ess">
                          <th scope="row">3</th>
                          <td>SPG</td>
                          <td>General</td>
                          <td>15,487</td>
                          <td>link</td>
                        </tr>
                          <tr className="">
                          <th scope="row">4</th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                          <tr className="">
                          <th scope="row">5</th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                          <tr className="">
                          <th scope="row">6</th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                          <tr className="">
                          <th scope="row">7</th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                          <tr className="">
                          <th scope="row">8</th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-md-6 col-md-offset-1">
                  <div className="piechart"></div>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    //object w/ all user cards data
    cards: state.cards
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    viewAllCards: viewAllCards
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(RewardsPage)
