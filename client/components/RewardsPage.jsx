import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { viewAllCards, viewAllRewards, getPieData } from '../actions/actions'
import Sidebar from './Sidebar'
import Pie from './Pie'

// want to add getAllCards. and display those in the rewards table.
class RewardsPage extends React.Component {

  constructor(props){
    super(props)
    this.state={
      hover:''
    }
  }

  componentDidMount(){
    this.props.viewAllRewards()
  }

  onHover(){
    this.setState({
      hover:'menuDisplayed'
    })
  }

  exitHover(){
    this.setState({
      hover:''
    })
  }

  render() {

    var links =
      {
        'Chase Ultimate Rewards':'https://www.chase.com/ultimaterewards',
        'Marriott Rewards':'http://www.marriott.com/rewards/rewards-program.mi',
        'Capital One Miles':'https://verified.capitalone.com/sic-ui/#/esignin?Product=Card&Action=Rewards',
        'Citi ThankYou Rewards':'https://www.thankyou.com/cms/thankyou',
        'IHG Rewards Club':'https://www.ihg.com/rewardsclub/us/en/home',
        'Hyatt Gold Passport':'https://goldpassport.hyatt.com/content/gp/en/home.html',
        'Southwest Rapid Rewards':'https://www.southwest.com/rapidrewards',
        'Bank of America Preferred Rewards':'https://www.managerewardsonline.bankofamerica.com/RWDapp/ns/home?mc=barrwd',
        'Avios':'https://www.avios.com/av/en_gb/',
        'Barclay':'https://home.barclaycardus.com/',
        'JetBlue TrueBlue':'https://trueblue.jetblue.com/web/trueblue/home',
        'Starpoints':'http://www.starwoodhotels.com/preferredguest/account/starpoints/redeem/index.html?language=en_US',
        'HHonors':'http://hhonors3.hilton.com/en/index.html?WT.srch=1'
      }

    return (
      <div id='wrapper'>
        <div id='sidebar-wrapper' onMouseOver={this.onHover.bind(this)} onMouseLeave={this.exitHover.bind(this)}>
          <Sidebar display={this.state.hover}/>
        </div>
        <div id='page-content-wrapper' className={this.state.hover}>
           <div className='container-fluid'>
             <div className='row'>
                <form className="form-inline">
                  <input className="col-lg-offset-2 col-md-5" placeholder="filter rewards"></input>
                </form>
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
                      {this.props.rewards.map(function(val, i){
                        var link = links[val.program] || null
                        return (<tr className="">
                                <th scope="row"> {i +1} </th>
                                  <td>{val.program}</td>
                                  <td>{val.category}</td>
                                  <td>{val.rewardsAmt}</td>
                                  <td>
                                  { link ? <a href={link} target="_blank"> Reward Portal </a>
                                    : <div> ¯\_(ツ)_/¯ </div> }
                                  </td>
                              </tr>
                        )
                      })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-md-6 col-md-offset-1">
                   <div className="piechart">
                     <svg width = "100%" height = "100%">
                       <Pie x={window.innerWidth/7}
                            y={window.innerHeight/4}
                            innerRadius={( Math.min( window.innerWidth, window.innerHeight ) * .9 ) / 4 *.35}
                            outerRadius={( Math.min( window.innerWidth, window.innerHeight ) * .9 ) / 4}
                            cornerRadius={5}
                            padAngle={0}/>
                     </svg>
                   </div>
                 </div>
                </div>
              </div>
            </div>
      </div>
    )
  }
}

function mapStateToProps(store){
  return {
    rewards: store.cardStates.rewards
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    viewAllRewards: viewAllRewards
  }, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(RewardsPage)
