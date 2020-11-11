import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/index.css';
import { getTodo, loadingTodo } from '../store/actions/todo';

export default function Todos({ title }) {
  const dispatch = useDispatch();
  const [todoId, setTodoId] = useState(1);
  const myTodos = useSelector(({ todo }) => todo.data);
  const loading = useSelector(({ todo }) => todo.isLoading);

  function getTodoById() {
    dispatch(loadingTodo());
    dispatch(getTodo(todoId));
    setTodoId(todoId + 1);
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

      <ul>
        {myTodos.map((todo) => (
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
