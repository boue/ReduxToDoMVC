import React, { Component } from 'react';
import TodoList from './Todolist';
import TodoHeader from './TodoHeader';

export default class TodoApp extends Component {
  render(){
    return (
      <div>
        <section className="todoapp">
          <TodoHeader />
          <TodoList todos={this.props.todos} filter={this.props.filter} />
        </section>
      </div>
    )
  };
}