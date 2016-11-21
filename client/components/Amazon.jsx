import React from 'react'
import * as Bs from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Action from '../actions/actions'

class CardView extends React.Component {
  constructor(props) {
    super(props)
  }  

  componentDidMount() {
    this.props.getAmazonDefault()
  }

  onSearch(e){
    console.log("dispatch",this.props)
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
        return (
            <Bs.Col md={4}  xs={12} key={i} className="amazonArray">
             <Bs.Col className="amImg" md={6}>
                <a href= {x.DetailPageURL}>
                  <img className="amazonImage" src={x.MediumImage.URL}/>
                </a>
              </Bs.Col>
              <Bs.Col md={6} className="formattedPrice">
                <div className="priceBanner">
                  {x.ItemAttributes.ListPrice.FormattedPrice}
                </div>
              </Bs.Col>
            <Bs.Col md={12} className='amazonRow'>
              <Bs.Row>
                <Bs.Col md={12}>
                  {x.ItemAttributes.Title}
                </Bs.Col>
              </Bs.Row>
              </Bs.Col>
            </Bs.Col>
        )
      })
    return (
      <Bs.Grid>
        <Bs.Row className='amazonTop'>
          <Bs.Col md={12}>
            <h1> Welcome to the Amazon Search Page! </h1> 
          </Bs.Col>
        </Bs.Row>
        <Bs.Row className='amazonTop'>
          <Bs.Col md={4} className='input-group amazonSearchBar'>
            <input className='form-control' placeholder="Amazon Search" ref="inputVal" onKeyUp={this.onSearch.bind(this)}/>
            <span className='input-group-btn'>
              <button className="btn btn-default glyphicon glyphicon-search" onClick={this.buttonClickSearch.bind(this)}></button>
            </span>
          </Bs.Col>
        </Bs.Row>
          <Bs.Row>
            <Bs.Col md={12}>
              {itemArr}
            </Bs.Col>
          </Bs.Row>
      </Bs.Grid>
    )
  }
}
function mapStateToProps(store){
  return {
    amazonItems: store.amazonItems,
    dispatch: store
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getAmazonDefault: Action.getAmazonDefault,
    getAmazonSearch: Action.getAmazonSearch
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CardView)


