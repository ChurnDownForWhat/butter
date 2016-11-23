import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Pie from './Pie'
import * as Action from '../actions/actions'
import * as Bs from 'react-bootstrap'
import SweetAlert from 'sweetalert-react'

// want to add getAllCards. and display those in the rewards table.
class RewardsPage extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.viewAllRewards()
    this.props.getUser()
    this.props.viewAllCards()
  }

  render() {
    if(this.props.loading.loading) { 
      return (
        <div>
        <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        </div>
      )
    }
    let isThereData
    let Rewards
    let links =
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
    if (this.props.cards && this.props.cards.length){
      isThereData = (
         <svg width = "100%" height = "100%" className='pie'>
          <Pie x={window.innerWidth/6}
            y={window.innerHeight/4}
            innerRadius={( Math.min( window.innerWidth, window.innerHeight ) * .9 ) / 4 *.35}
            outerRadius={( Math.min( window.innerWidth, window.innerHeight ) * .9 ) / 4}
            cornerRadius={5}
            padAngle={0}/>
        </svg>
      )
    }
    else {
      isThereData =  <div>You'll need to add a card that's earned reward points to see your category breakdown!</div>
    }
    if(this.props.rewards.length !== 0){
      Rewards = this.props.rewards.map(function(val, i){
        var link = links[val.program] || null
        return (<tr className="" key={i}>
                <th scope="row"> {i +1} </th>
                  <td>{val.program}</td>
                  <td>{val.category}</td>
                  <td>{val.rewardsAmt}</td>
                  <td>{val.count}</td>
                  <td>
                  { link ? <a href={link} target="_blank"> Reward Portal </a>
                    : <div> ¯\_(ツ)_/¯ </div> }
                  </td>
              </tr>
        )
      })
    } else {
      Rewards = (<tr className="">
                <th scope="row"> {1} </th>
                  <td>You</td>
                  <td>Should</td>
                  <td>Add</td>
                  <td>A</td>
                  <td>Card!</td>
                </tr>
                )
    }

    return (
      <div>
        <Bs.Row className='page-header'>
          <Bs.Col md={12}>Rewards</Bs.Col>
        </Bs.Row>
        <Bs.Col md={12} className='rewardContent'>
          <Bs.Row> 
            <Bs.Col md={7}>
              <Bs.Panel bsStyle='primary' header={<h1>Program Breakdown</h1>}>
                <Bs.Table responsive hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Program</th>
                      <th>Category</th>
                      <th>Points</th>
                      <th>Cards</th>
                      <th>Redeem</th>
                    </tr>
                  </thead>
                  <tbody>     
                  {Rewards}
                    </tbody>
                  </Bs.Table>
              </Bs.Panel>    
            </Bs.Col>
            <Bs.Col md={5} >
              <Bs.Panel bsStyle='primary' header={<h1>Category Breakdown</h1>}>
                {isThereData}
              </Bs.Panel>
            </Bs.Col>
          </Bs.Row>
        </Bs.Col>
      </div>
    )
  }
}

function mapStateToProps(store){
  return {
    rewards: store.cardStates.rewards,
    cards: store.cardStates.cards,
    user: store.cardStates.user,
    loading: store.loading
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    viewAllRewards: Action.viewAllRewards,
    viewAllCards: Action.viewAllCards,
    getUser: Action.getUser
  }, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(RewardsPage)
