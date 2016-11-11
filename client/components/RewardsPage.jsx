import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { viewAllCards, viewAllRewards } from '../actions/actions'
import Sidebar from './Sidebar'
import Pie from './Pie'


// want to add getAllCards. and display those in the rewards table.
class RewardsPage extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.viewAllCards()
    .then(function (respon){
      console.log('respon is', respon)
    })

    this.props.viewAllRewards()
    .then(function (response){
      console.log('REWARDS ARE NOW', response)
    })
  }

  render() {
    return (
     <div id='wrapper'>
       <Sidebar/>
         <div id='page-content-wrapper'>
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
                        return (<tr className=""> 
                                <th scope="row"> {i +1} </th>
                                  <td>{val.program}</td>
                                  <td>{val.category}</td>
                                  <td>{val.rewardsAmt}</td>
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
                        <Pie x={window.innerWidth/2}
                             y={window.innerHeight/2}
                             innerRadius={( Math.min( window.innerWidth, window.innerHeight ) * .9 ) / 2*.35}
                             outerRadius={( Math.min( window.innerWidth, window.innerHeight ) * .9 ) / 2}
                             cornerRadius={7}
                             padAngle={.02}
                             data={this.props.cards.cards} />
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
    cards: store.cardStates.cards,
    rewards: store.cardStates.rewards
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    viewAllCards: viewAllCards,
    viewAllRewards: viewAllRewards
  }, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(RewardsPage)
