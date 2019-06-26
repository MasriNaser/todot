import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    //console.log(this.props,'from app in Todos')
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markCompleteMethod}
        delTodo={this.props.delTodo}
        edit={this.props.edit}
      />
    ));
  }
}
//ProTypes
Todos.PropType = {
  todos: PropTypes.array.isRequired
};
export default Todos;
