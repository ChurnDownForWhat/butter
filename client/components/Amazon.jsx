import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'
import Sidebar from './Sidebar'

class CardView extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      hover:''
    }
  }  

  componentDidMount() {
    this.props.getAmazonDefault()
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


  onSearch(e){
    if(e.keyCode === 13){
      this.props.getAmazonSearch(e.target.value)
      //clears the input box after the search has been entered.
      e.target.value = ''
    }
  }

  buttonClickSearch(){
    this.props.getAmazonSearch(this.refs.inputVal.value)
    this.refs.inputVal.value = ''
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
        <div id='sidebar-wrapper' onMouseOver={this.onHover.bind(this)} onMouseLeave={this.exitHover.bind(this)}>
          <Sidebar display={this.state.hover}/>
        </div>
        <div id='page-content-wrapper' className={this.state.hover}>
          <div className='container-fluid'>
          <div className='row amazonTop'>
            <h1>    Welcome to the Amazon Search Page! </h1> 
          </div>
          <div className='row amazonTop'>
            <div className='input-group col-md-4 amazonSearchBar'>
              <input className='form-control' placeholder="Amazon Search" ref="inputVal" onKeyUp={this.onSearch.bind(this)}/>
              <span className='input-group-btn'>
                <button className="btn btn-default glyphicon glyphicon-search" onClick={this.buttonClickSearch.bind(this)}> 
                </button>
              </span>
            </div>
          </div>
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


