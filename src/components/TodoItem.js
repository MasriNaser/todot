import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  state = {
    isEdit: false
  };
  getStyle = () => {
    return {
      background: 'gray',
      padding: '15px',
      borderBottom: '1px blue dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };
  //edit

  render() {
    //console.log(this.props.todo.id, 'in todoitems');
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type='checkbox'
            onChange={this.props.markComplete.bind(this, id)}
          />{' '}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={styleBTN}>
            X
          </button>
          <button
            onClick={this.props.edit.bind(this, id, title)}
            style={styleEdit}
          >
            Edit
          </button>
        </p>
      </div>
    );
  }
}
TodoItem.PropType = {
  todos: PropTypes.object.isRequired
};
const styleBTN = {
  background: 'red',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  cursor: 'pointer',
  float: 'right',
  marginLeft: '10px'
};
const styleEdit = {
  background: 'blue',
  color: '#fff',
  border: '1px white',
  padding: '5px 9px',
  cursor: 'pointer',
  float: 'right'
};

export default TodoItem;

/*
getStyle = () => {
    if (this.props.todo.completed) {
      return {
        textDecoration: 'line-through'
      };
    } else {
      return {
        textDecoration: 'none'
      };
    }
  };
*/
