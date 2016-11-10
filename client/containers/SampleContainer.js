import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { getUser } from '../actions/actions'

//A container is a component that you expect to pass data to

class SampleContainer extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getUser(4)
    .then(function(res){
      console.log("container", res)
    })
    // console.log("container", this.props.getUser(4))
  }

  render(){
    return (
      <ul>
				<li>four</li>
				<li>{this.props.userName}</li>
			</ul>
    )
  }
}

function mapStateToProps(state){
  return {
    userName: state.user.name
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    getUser: getUser
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SampleContainer)