import React from 'react'
import RewardView from './RewardView'
require('../../Static Assets/static rewards/rewards.less')
require('../../Static Assets/static rewards/rewards.css')

const RewardsPage = (props) => {
  return (
    <div>
    <div class="background">
      <div class="row">
        <div class="logo col-md-5">
          <h3 class=''>REWARDS</h3>
        </div>
        <form class="form-inline">
          <input class="col-lg-offset-2 col-md-5" placeholder="filter rewards"></input>
        </form>
      </div>
      <a href="#menu-toggle" class="btn btn-default" id="menu-toggle">Toggle Menu</a>
      <div class="toggled" id="wrapper">
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">Menu</a>
                </li>
                <li>
                    <a href="#">Credit Cards</a>
                </li>
                <li>
                    <a href="#">Rewards</a>
                </li>
                <li>
                    <a href="#">Amazon</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Settings</a>
                </li>
            </ul>
        </div>
        <div id="page-content-wrapper">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="tableContainer">
                  <table class="table table-responsive table-hover">
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
                      <tr class="">
                        <th scope="row">1</th>
                        <td>Virgin Elevate</td>
                        <td>Airline</td>
                        <td>1935</td>
                        <td>link</td>
                      </tr>
                      <tr class="er">
                        <th scope="row">2</th>
                        <td>Hilton HHonors</td>
                        <td>Hotel</td>
                        <td>582</td>
                        <td>link</td>
                      </tr>
                      <tr class="ess">
                        <th scope="row">3</th>
                        <td>SPG</td>
                        <td>General</td>
                        <td>15,487</td>
                        <td>link</td>
                      </tr>
                        <tr class="">
                        <th scope="row">4</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                        <tr class="">
                        <th scope="row">5</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                        <tr class="">
                        <th scope="row">6</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                        <tr class="">
                        <th scope="row">7</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                        <tr class="">
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
              <div class="col-md-6 col-md-offset-1">
                <div class="piechart"></div>
              </div>
            </div>
          </div>
        </div>
    </div>
      // <RewardView />
    </div>
    </div>
  )
}

export default RewardsPage
