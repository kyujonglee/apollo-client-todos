import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_TODOS, ADD_TODO } from '../apollo/todos/todos.queries';
import Todo from './Todo';
import { GET_TODO_BEFORE } from '../apollo/todoBefore/todoBefore.queries';

function Todos() {
  const [text, setText] = useState('');
  const {
    loading,
    error,
    data: { todos },
  } = useQuery(GET_TODOS);
  const {
    data: { todoBefore },
  } = useQuery(GET_TODO_BEFORE);
  const [addTodo] = useMutation(ADD_TODO);

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo({ variables: { text } });
    setText('');
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;

  return (
    <>
      <h2>Todos</h2>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>ADD</button>
      </form>
      <div>{todoBefore && <h3>before{`> ${todoBefore}`}</h3>}</div>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}

export default Todos;
