import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from './layouts/header';
import Footer from './layouts/footer';
import todosData from './todosData';
import TodoItem from './TodoItem';

// import Home from './pages/home';
// import jokesData from './jokesData';
// import Jokes from './Jokes';
class AppOld extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }
  render() {
    // const jokesComponent = jokesData.map((joke) => (
    //   <Jokes
    //     key={joke.id}
    //     punchLine={joke.punchLine}
    //     question={joke.question}
    //   />
    // ));
    const todoItems = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return (
      <>
        <Header />
        <Container>
          <div className='todo-list'>{todoItems}</div>
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
