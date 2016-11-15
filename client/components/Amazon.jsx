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
  }

  onSearch(e){
    if(e.keyCode === 13){
      this.props.getAmazonSearch(e.target.value)
      e.target.value = ''
    }
  }

  render() {
    var itemArr = this.props.amazonItems.name.Item
    console.log('itemArr is' , itemArr)
    return (
      <div id='wrapper'>
          <Sidebar/>
        <div id='page-content-wrapper'>
          <div className='container-fluid'>
          <input placeholder="Amazon Search" onKeyUp={this.onSearch.bind(this)}/>
            <div className='row'>
              <div className="col-md-12">

              {
                itemArr.map((x,i) => 
                  <div  key={i}id="amazonArray" className="col-md-12">
                    <div className='row '>
                    <a href= {x.DetailPageURL}>
                      <img className="amazonImage" src={x.MediumImage.URL}/>
                    </a>
                    </div>
                    <div className='row amazonRow'>
                      {x.ItemAttributes.Title}
                    </div>
                  </div>
                )
              }
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
    amazonItems: store.amazonItems
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getAmazonDefault: Action.getAmazonDefault,
    getAmazonSearch: Action.getAmazonSearch
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CardView)


