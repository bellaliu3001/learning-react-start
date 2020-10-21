import React, { Component, Fragment } from 'react'

export default class Animation extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: true
    }
  }
  handleToggle = () => {
    this.setState(() => ({
      show: !this.state.show
    }))
  }
  render() {
    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hide'}>hello</div>
        <button onClick={this.handleToggle}>Toggle</button>
      </Fragment>
    )
  }
}
