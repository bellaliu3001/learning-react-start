import React, { Component, Fragment } from 'react';
import './style.css';

import TodolistItem from './TodolistItem';
export default class Todolist extends Component {
  state = {
    task: "",
    list: []
  }
  handleOnChange = (e) => {
    const inputVal = {
      [e.target.name]: e.target.value
    }
    // setState can take a function
    // NOTE: this function is async func
    this.setState( () => (inputVal))
  }
  handleOnClick = (e) => {
    if(this.state.task){
      // the function in setState has a parameter called prevState
      // it is storing previous state data
      this.setState( (prevState) => ({
        list: [...prevState.list, prevState.task],
        task: "",
      }));
    }
  }
  handleItemDelete = (i) => {
    this.setState((prevState) => {
      const temp = [...prevState.list];
      temp.splice(i, 1);
      return {
        list: temp
      }
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
