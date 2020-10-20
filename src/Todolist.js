import React, { Component, Fragment } from 'react';
import './style.css';

import TodolistItem from './TodolistItem';
export default class Todolist extends Component {
  state = {
    task: "",
    list: []
  }
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleOnClick = (e) => {
    if(this.state.task){
      this.setState({
        list: [...this.state.list, this.state.task],
        task: "",
      })
    }
  }
  handleItemDelete = (i) => {
    const temp = [...this.state.list];
    temp.splice(i, 1);
    this.setState({
      list: temp
    })
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="list-item">Add Item</label>
          <input 
            id="list-item"
            className="input"
            type="text"
            name="task"
            value={this.state.task}
            onChange={this.handleOnChange}
          />
          <button
            onClick={this.handleOnClick}
          >Submit</button>
        </div>
        <ul>
          {
            this.state.list.map((item, i) => {
              return (
                <TodolistItem handleItemDelete={this.handleItemDelete} index={i} item={item} key={i}></TodolistItem>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}
