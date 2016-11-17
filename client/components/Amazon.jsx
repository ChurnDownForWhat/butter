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
    const itemArr = this.props.amazonItems.name === "No Results" ? 
      <h1>No Results</h1> 
     :
      this.props.amazonItems.name.Item.map((x,i) => {
        if(!x.MediumImage){
          x.MediumImage = 'Cannot Find Image'
        }if(!x.ItemAttributes.ListPrice){
          x.ItemAttributes.ListPrice = 'Cannot Find Price'
        }if(x.ItemAttributes.Title.length > 100){
          x.ItemAttributes.Title = x.ItemAttributes.Title.slice(0, 100)
        }
        return <div  key={i}id="amazonArray" className="col-md-4">
          <div className='row'>
          <a href= {x.DetailPageURL} className="col-md-6" >
            <img className="amazonImage" src={x.MediumImage.URL}/>
          </a>
          <div className="formattedPrice col-md-6">
              {x.ItemAttributes.ListPrice.FormattedPrice}
          </div>
          </div>
          <div className='row amazonRow col-md-8'>
            {x.ItemAttributes.Title}
          </div>
        </div>
      })
    return (
      <div id='wrapper'>
          <Sidebar/>
        <div id='page-content-wrapper'>
          <div className='container-fluid'>
          <input placeholder="Amazon Search" onKeyUp={this.onSearch.bind(this)}/>
            <div className='row'>
              <div className="col-md-12">
              {itemArr}
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


