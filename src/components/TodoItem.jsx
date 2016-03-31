import React, { Component } from 'react';
import classNames from 'classnames';
import TextInput from './TextInput';

export default class TodoItem extends Component {
  render() {
    return (
      <li className="todo">
        <div className="view">
          <input type="checkbox" className="toggle"/>
          <label htmlFor="todo">
            {this.props.text}
          </label>
          <button className="destroy"></button>
        </div>
        <TextInput />
      </li>
    );
  }
}