import React, { useContext, useState } from 'react';
import { Input } from '../../ui/Input/Input';
import { SubmitButton } from '../../ui/SubmitButton/SubmitButton';
import { Form, InputBox } from './TodoForm.styles';
import { v4 as uuid } from 'uuid';
import { TodoContext } from '../../context/TodoContext';
// import { useDispatch } from 'react-redux';
// import { addTodo } from '../../redux/actions';

export const TodoForm = () => {
  const state = useContext(TodoContext);
  // const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    learn: '',
    description: '',
  });

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('todo todoForm', todo); //todo {learn: 'react', description: 'dont know'}
    console.log('state TodoForm', state); //state {state: {…}, dispatch: ƒ}
    // addTodo-
    //...todo-
    state.dispatch({ type: 'addTodo', payload: { ...todo, id: uuid() } });
    setTodo({ learn: '', description: '' });
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputBox>
        <Input
          name="learn"
          label="что хочешь выучить ?"
          indentBottom
          value={todo.learn}
          onChange={handleChange}
        />
        <Input
          name="description"
          label="как планируешь учить ?"
          value={todo.description}
          onChange={handleChange}
        />
      </InputBox>
      <SubmitButton textContent="начать учить" />
    </Form>
  );
};
