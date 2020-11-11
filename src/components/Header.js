import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo, loadingTodo } from '../store/actions/todo';

export default function Header({ title }) {
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
      <button type="button" onClick={getTodoById}>
        {title}
        Get Todo
      </button>
      {loading && <span>Carregando...</span>}

      <ul>
        {myTodos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong>
          </li>
        ))}
      </ul>
      {/* <strong>{myTodo.title}</strong> */}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Title',
};
