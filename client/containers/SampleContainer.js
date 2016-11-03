import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

//A container is a componet that you expect to pass data to



class SampleContainer extends Component{

	render(){
		return (
			<ul>
				<li>one</li>
				<li>two</li>
				<li>three</li>
			</ul>
		)
	}
}

function mapStateToProps(state){
	return {
		sample: state.sample
	}
}

export default connect(mapStateToProps)(SampleContainer)