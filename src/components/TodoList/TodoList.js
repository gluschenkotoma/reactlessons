import React, { useContext } from 'react';
import { PlanningCard } from '../../ui/PlanningCard/PlanningCard';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteTodo } from '../../redux/actions';
import { TodoContext } from '../../context/TodoContext';

export const TodoList = () => {
  // const state = useContext(TodoContext);
  const { state, dispatch } = useContext(TodoContext);
  const deleteTodo = uniqueCardId => {
    dispatch({ type: 'deleteTodo', payload: { uniqueCardId } });
  };
  return state.todos?.map(({ learn, description, id }) => (
    <PlanningCard
      id={id}
      key={id}
      title={learn}
      description={description}
      onHandleDeleteTask={deleteTodo}
    />
  ));
};

// export const TodoList = () => {
//   const { todos } = useSelector(state => state);
//   const dispatch = useDispatch();
//   console.log(`state`, todos);

//   const deleteNote = id => {
//     dispatch(deleteTodo(id));
//   };

//   return todos.map(({ learn, description, id }) => (
//     <PlanningCard
//       key={id}
//       description={description}
//       title={learn}
//       id={id}
//       onHandleDeleteTask={deleteNote}
//     />
//   ));
// };
