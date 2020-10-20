import React, { Component } from 'react'

export default class TodolistItem extends Component {
  handleClick = () => {
    this.props.handleItemDelete(this.props.index);
  }
  render() {
    return (
      <li onClick={this.handleClick}>{this.props.item}</li>
    )
  }
}
