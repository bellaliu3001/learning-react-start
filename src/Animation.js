import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group';

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
  handleToggle2 = () => {
    this.setState(() => ({
      show: !this.state.show
    }))
  }
  render() {
    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hide'}>hello</div>
        <button onClick={this.handleToggle}>Toggle</button>

        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          onEntered={(el) => {el.style.color = 'red'}}
          appear={true}
        >
          <div>with CSSTransition</div>
        </CSSTransition>
        <button onClick={this.handleToggle2}>Toggle</button>
      </Fragment>
    )
  }
}
