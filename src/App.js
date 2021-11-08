import React, { Component } from 'react';
import shortid from 'shortid';

import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import Filter from './components/Filter';

// import initialTodo from './todos.json';

class App extends Component {
  state = {
    // todos: initialTodo,
    todos: [], //localStorage
    //   значение Filter
    filter: '',
  };

  // ДОБАВЛЕНИЕ ТУДУШКИ ============================================================
  // получения текста с текстерии
  // проп для формы
  // в text приходит -> this.state.message c this.props.onSubmit(this.state.message); //<TodoAdd onSubmit={this.addTodo} />
  addTodo = text => {
    console.log(text); //hjjhvjhvjh
    const todo = {
      id: shortid.generate(),
      // имя свойства, имя переменной
      text: text,
      completed: false,
    };
    //   добавить обьект todo  в new массив todos методом распыления, от предыдущего состояния, сразу кинуть то что создали, и следующее - то что было в предыдущей todos
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));

    // this.setState({todos} => ({
    //   todos: [todo, ...todos],
  };

  // УДАЛЕНИЕ
  // filer - выкинуть элемент ид которого совпадают
  // вернуть те элементы ид которого не совпадают
  // в todoId будет заходить ид с анонимки onDeleteTodo(id)
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  // ФИЛЬТРАЦИЯ
  //принятие ивента
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  // метод фильтрации массива
  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };
  //
  calculateCompletedTodo = () => {
    const { todos } = this.state;
    return todos.reduce((total, todo) => (todo.id ? total + 1 : total), 0);
  };
  componentDidMount() {
    console.log('componentDidMount');
    const todosMount = localStorage.getItem('todos');
    const parsedTodo = JSON.parse(todosMount);
    console.log(parsedTodo); //(3) [{…}, {…}, {…}]
    if (parsedTodo) {
      this.setState({ todos: parsedTodo }); // записать с локалстореджа}
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    // console.log(prevState); //до обновления {todos: Array(4), filter: ''}
    // console.log(this.state); //после обновления {todos: Array(5), filter: ''}
    if (this.state.todos !== prevState.todos) {
      console.log('Updated fild(array) todos writed in storage');

      localStorage.setItem('todos', JSON.stringify(this.state.todos)); //in application localStorage will change value(minning)
    }
  }

  render() {
    console.log('App render');

    const { todos, filter } = this.state;
    const visibleTodos = this.getVisibleTodos();

    // const totalTodoCount = todos.length;
    // const completedTodoCount = this.calculateCompletedTodo();

    //   для фильтра

    return (
      <>
        {/* this.props.onSubmit(this.state.message); */}
        <TodoAdd onSubmit={this.addTodo} />

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        {/* рендер только видимых, отфильтрованых тудушек */}
        <TodoList todos={visibleTodos} onDeleteTodo={this.deleteTodo} />
        <Filter onChange={this.changeFilter} value={filter} />
      </>
    );
  }
}
export default App;

// монтирование:consrtuctor-render-reactDOM-компонент замаунтился(componentDidMount)
// Вызывается 1 раз когда смонтироваляся

// Обновление:new props+setState()+forceUpdate()-render-reactDOM-componentDidUpdate()
//Вызывается каждый раз при обновлении компонентов сетстейтов

// Размонтирование-ComponentWillUnmount-очистка слушателей,таймаутов, запросов
// Вызывается 1 раз перед уничожением компонентов

// getDerivedstateFromProps
//shouldComponentUpdate - должен ли обновится наш компонент, можно запретить компоненту обновляться
// getSnapShotBeforeupdate- прочитать значение дом дерева прямо перед обновлением
