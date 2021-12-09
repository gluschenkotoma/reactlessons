import { types } from './types';

//хранение типов
// export const types = {
//   ADD_NOTE: 'notes/ADD_NOTE',
//   DELETE_NOTE: 'notes/DELETE_NOTE',
// };

const initialState = {
  todos: [],
  username: 'Maksim',
};

//ПЕРЕНЕСЕНО С STORE+ ИЗБАВИТЬСЯ ОТ switch
// const todoReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'addTodo':
//       return {...state, todos:[...state.todos, payload]};payload это= { ...todo, id: uuid() } с TodoForm
//     default:
//       return state;
//   }
// };

const handlers = {
  [types.ADD_NOTE]: (state, actions) => ({
    ...state,
    todos: [...state.todos, actions.payload],
  }),
  [types.DELETE_NOTE]: (state, actions) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== actions.payload),
  }),
  DEFAULT: state => state,
};

export const notes = (state = initialState, actions) => {
  const handler = handlers[actions.type] || handlers.DEFAULT;
  return handler(state, actions);
};
