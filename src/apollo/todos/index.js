import { GET_TODOS } from './todos.queries';

export const addTodo = (_, { text }, { cache }) => {
  const { todos } = cache.readQuery({ query: GET_TODOS });
  const todo = { text, id: Date.now(), completed: false, __typename: 'Todo' };
  todos.push(todo);
  cache.writeData({
    data: { todos, todoBefore: `todo add : ${todo.text}` },
  });
  return todo;
};

export const deleteTodo = (_, { id }, { cache }) => {
  const { todos } = cache.readQuery({ query: GET_TODOS });
  const todo = todos.find((todo) => todo.id === id);
  cache.writeData({
    data: {
      todos: todos.filter((todo) => todo.id !== id),
      todoBefore: `todo delete : ${todo.text}`,
    },
  });
  return todo;
};

export const toggleTodo = (_, { id }, { cache }) => {
  const { todos } = cache.readQuery({ query: GET_TODOS });
  const todo = todos.find((todo) => todo.id === id);
  todo.completed = !todo.completed;
  cache.writeData({
    data: {
      todos,
      todoBefore: `todo ${todo.text} completed: ${todo.completed}`,
    },
  });
};
