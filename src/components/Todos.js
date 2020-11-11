import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/index.css';
import { getTodo, loadingTodo, sortTodo } from '../store/actions/todo';

export default function Todos({ title }) {
  const dispatch = useDispatch();
  const [todoId, setTodoId] = useState(1);
  const todos = useSelector(({ todo }) => todo.data);
  const loading = useSelector(({ todo }) => todo.isLoading);

  function getTodoById() {
    dispatch(loadingTodo());
    dispatch(getTodo(todoId));
    setTodoId(todoId + 1);
  }

  function orderTodoById() {
    dispatch(sortTodo('id'));
    // const todosDescById = todos.sort((a, b) => sortBy(a, b, 'id'));
    // console.log(todosDescById);
    // return todosDescById;
  }

  function orderByName() {
    dispatch(sortTodo('title'));
    // return todos.sort((a, b) => sortBy(a, b, 'title'));
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', placeItems: 'center' }}
    >
      <button
        type="button"
        onClick={getTodoById}
        disabled={loading}
        style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
      >
        {title}
        {loading ? 'Carregando...' : 'Get Todo'}
      </button>

      <div style={{ display: 'flex', marginTop: '16px' }}>
        <button type="button" onClick={orderTodoById}>
          Order by code desc
        </button>
        <button type="button" onClick={orderByName}>
          Order by Todo Name
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

Todos.propTypes = {
  title: PropTypes.string,
};

Todos.defaultProps = {
  title: 'Title',
};
