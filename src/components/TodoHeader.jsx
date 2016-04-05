import React from 'react';

export default React.createClass({
  _handleKeyPress: function(e){
    if(e.key === 'Enter' && this.refs.addTodoInput.value !== ''){
      return this.props.addItem(
        this.refs.addTodoInput.value
      );
    }
  },
  render: function(){
    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo"
               ref="addTodoInput"
               autofocus
               autoComplete="off"
               placeholder="What needs to be done?"
               onKeyPress = {this._handleKeyPress}/>
      </header>
    );
  }
})