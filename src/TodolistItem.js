import React, { Component } from 'react';
import PropTypes from 'prop-types'


export default class TodolistItem extends Component {
  static propTypes = {
    item: PropTypes.string,
    handleItemDelete: PropTypes.func,
    index: PropTypes.number,
    test: PropTypes.string.isRequired,
  }
  static defaultProps = {
    test: "ListItem",
  }
  handleClick = () => {
    this.props.handleItemDelete(this.props.index);
  }
  render() {
    return (
      <li onClick={this.handleClick}>{this.props.test} - {this.props.item}</li>
    )
  }
}
