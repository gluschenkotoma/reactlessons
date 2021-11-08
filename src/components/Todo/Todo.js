import React from 'react';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

import IconButton from '../IconButton';
import './Todo.scss';

const Todo = ({ text, completed, onToggleCompleted, onDelete }) => (
  <>
    <input
      type="checkbox"
      className="TodoList__checkbox"
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className="TodoList__text">{text}</p>
    <IconButton onClick={onDelete}>
      <DeleteIcon width="40" height="40" fill="#fff" />
    </IconButton>
    {/* <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton> */}

    {/* <button type="button" className="TodoList__btn" onClick={onDelete}>
      Удалить
    </button> */}
  </>
);

export default Todo;
