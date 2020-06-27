import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { DELETE_TODO, TOGGLE_TODO } from '../apollo/todos/todos.queries';

function Todo({ text, id, completed }) {
  const [deleteTodo] = useMutation(DELETE_TODO);
  const [toggleTodo] = useMutation(TOGGLE_TODO);
  const onBtnClick = () => {
    deleteTodo({ variables: { id } });
  };
  return (
    <li>
      <b
        onClick={() => toggleTodo({ variables: { id } })}
        style={{ cursor: 'pointer' }}
      >
        {text}{' '}
      </b>
      <span>{completed ? 'done' : 'doing'}</span>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

export default Todo;
