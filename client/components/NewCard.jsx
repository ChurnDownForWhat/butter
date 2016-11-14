import React from 'react'
import { Button, ButtonGroup} from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'

class NewCard extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className='col-lg-12'>
        <div className="">
          <div className='row'>
            <input placeholder="card name" className="col-xs-4" />
          </div>
          <div className='row'>
            <input placeholder="exp date" className="col-xs-1" />
            <input placeholder="spendTotal" className="col-xs-1" />
            <input placeholder="minSpend" className="col-xs-1" /> 
          </div>
          <ButtonGroup>
            <Button> Create Card </Button>
            <Button> Edit Details </Button>
            <Button> Cancel </Button>
          </ButtonGroup>
        </div>
        <div className='progress row'>
          <div id='progressBar'className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="600" aria-valuemin="0" aria-valuemax="3000">
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(store){
  return {
    defaults: store.cardStates.defaults
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    getDefaults: Action.getDefaults,
    addCard: Action.addCard
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(NewCard)