import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'
import Sidebar from './Sidebar'

class CardView extends React.Component {
  constructor(props) {
    super(props)
  }  

  componentDidMount() {
    this.props.getAmazonDefault()
    .then(function(items){
      console.log(items)
    })  

    console.log("This is the poorpsojf",this.props.amazonItems)
  }
  render() {
    return (
      
        <div>
        {
          this.props.amazonItems.map((x) => 
            <div>x.ItemSearchResponse.Items.ItemAttributes.Title</div>)
        }
        </div>
      
    )
  }
}
function mapStateToProps(store){
  return {
    amazonItems: store.amazonItems
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getAmazonDefault: Action.getAmazonDefault
  }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(CardView)