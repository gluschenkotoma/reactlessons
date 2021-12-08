import React, { useReducer } from 'react';
import { TodoContext as Context } from './TodoContext';

const initialState = { todos: [], userName: 'Maxim' }; //глобальное состояние

//функция-> (состояние + действие(реакция на состояние))
// const reducer = (state, action) => {
const reducer = (state, { type, payload }) => {
  // action.type именнованый action
  switch (type) {
    case 'addTodo':
      // ...state - распылить нынешнее состояния стейта initialState , все данные которые там есть
      //todos: [...state.todos, action.payload]
      // ...state.todos - распылить предыдущее состояние todos
      // action.payload - записать новые данные payload которые передаются в reducer
      return { ...state, todos: [...state.todos, payload] };
    case 'deleteTodo':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload.uniqueCardId),
      };
    default:
      throw new Error();
  }
};

export const TodoContextProvider = ({ children }) => {
  // dispatch -портал
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log('state', state); //state {todos: Array(0)}
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
