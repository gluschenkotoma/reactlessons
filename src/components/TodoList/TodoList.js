import React from 'react';
import s from './TodoList.module.scss';
//                  передача пропсов с <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className={s.list}>
    {/*  id, text, completed     деструкт-е ключи с масива обьектов */}
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={s.list__item}>
        <p className={s.list__text}>
          {text} <span>{completed}</span>
        </p>
        <button type="button" onClick={() => onDeleteTodo(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
