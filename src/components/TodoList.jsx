import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  //filters items according to their status
  getItems(){
    if(this.props.todos){
      return this.props.todos.filter(
        (item) => item.get('status') === this.props.filter
      );
    }
    return [];
  }
  render(){
    return(
      <section className="main">
        <ul className="todo-list">
          {this.getItems().map(item =>
            <TodoItem key={item.get('text')}
                      text={item.get('text')} />
          )}
        </ul>
      </section >
    );
  }
}