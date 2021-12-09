import { createStore } from 'redux'; //взять с редакса createStore
import { devToolsEnhancer } from 'redux-devtools-extension';
import { notes } from './reducer';

//ПЕРЕНЕСЕНО В REDUCER.JS
// const initialState = { todos: [], userName: 'Max' };
//
// const todoReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'addTodo':
//       return {...state, todos:[...state.todos, payload]}; payload это= { ...todo, id: uuid() } с TodoForm
//     default:
//       return state;
//   }
// };

// создать store  -> 1й - редюсер, 2й-энхансер
// export const store = createStore(todoReducer, devToolsEnhancer());
export const store = createStore(notes, devToolsEnhancer());
