import React from 'react'

class NewCard extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <div className='col-lg-3'>
          <input placeholder="card name" />
          <input placeholder="exp date" />
        </div>
        <div className="col-lg-3">
          <input placeholder="spendTotal" />
          <input placeholder="minSpend" /> 
        </div>
        <div className="progress">
          <div id='progressBar'className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="600" aria-valuemin="0" aria-valuemax="3000">
          </div>
        </div>
      </div>
    )
  }
}

export default NewCard