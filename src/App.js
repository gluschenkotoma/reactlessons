import React, { Component } from 'react';
import TodoList from './components/TodoList';

import initialTodo from './todos.json';

class App extends Component {
  state = {
    todos: initialTodo,
  };
  // filer - выкинуть элемент ид которого совпадают
  // вернуть те элементы ид которого не совпадают
  // в todoId будет заходить ид с анонимки onDeleteTodo(id)
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.id ? total + 1 : total),
      0,
    );
    return (
      <>
        <h1>Phonebook</h1>
        <div>
          <p>Oбщее количество: {totalTodoCount}</p>
          <p>Kоличество выполненых: {completedTodoCount}</p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}
export default App;
