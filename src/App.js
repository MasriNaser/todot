import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; //Router, Route is alias shorter!
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        title: 'Take out the trash',
        id: uuid.v4(),
        completed: false,
        isEdit: false
      },
      {
        title: 'wash your hands',
        id: uuid.v4(),
        completed: false,
        isEdit: false
      },
      {
        title: 'eat your food',
        id: uuid.v4(),
        completed: false,
        isEdit: false
      },
      {
        title: 'drink somthing cold',
        id: uuid.v4(),
        completed: false,
        isEdit: false
      }
    ]
  };
  //toggle the complete
  markEvent = id => {
    this.setState({
      todos: this.state.todos.map(i => {
        if (i.id === id) {
          i.completed = !i.completed;
        }
        return i;
      })
    });
  };
  //Delete todo
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };
  //add
  addTodo = (title,id) => {
    const newTodo = {
      title: title,
      id: uuid.v4(),
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };
 
    toggleState=()=>{
      let {isEdit}= this.state;
      this.setState({
        isEdit : !isEdit
      });
    }
  render() {
    console.log(this.state.todos)
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route
              exact
              path='/'
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markCompleteMethod={this.markEvent}
                    delTodo={this.delTodo}
                    edit={this.toggleState}
                  />
                </React.Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
