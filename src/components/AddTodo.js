import React, { Component } from 'react';

export class AddTodo extends Component {
  state = {
    title: ''
  };
  onSubmit = e => {
    console.log('submitting form');
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: ''
    });
  };
  onchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
          <input
            style={{ flex: '10', padding: '5px' }}
            type='text'
            name='title'
            placeholder='add todo...'
            autoComplete='off'
            value={this.state.title}
            onChange={this.onchange}
          />
          <input
            type='submit'
            value='Submit'
            className='btn'
            style={{ flex: '1' }}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
