import React, { useState } from 'react';
import { Input } from '../../ui/Input/Input';
import { SubmitButton } from '../../ui/SubmitButton/SubmitButton';
import { Form, InputBox } from './TodoForm.styles';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux'; //хук useDispatch
import { addTodo } from '../../redux/actions';

export const TodoForm = () => {
  const dispatch = useDispatch(); //portal

  const [todo, setTodo] = useState({
    learn: '',
    description: '',
  });

  const handleSubmit = evt => {
    evt.preventDefault();
    // dispatch({type:'addTodo', payload:{...todo, id:uuid()}}) //
    dispatch(addTodo({ ...todo, id: uuid() })); //oбращение к экшену
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
