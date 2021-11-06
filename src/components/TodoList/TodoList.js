import React from 'react';
import s from './TodoList.module.scss';
//                  передача пропсов с <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className={s.list}>
    {/*  id, name, number      деструкт-е ключи с масива обьектов */}
    {todos.map(({ id, name, number }) => (
      <li key={id} className={s.list__item}>
        <p className={s.list__text}>
          {name} <span>{number}</span>
        </p>
        <button type="button" onClick={() => onDeleteTodo(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
