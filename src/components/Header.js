import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo } from '../store/actions/todo';

export default function Header({ title }) {
  const dispatch = useDispatch();
  const myTodo = useSelector(({ todo }) => todo);

  return (
    <>
      <button type="button" onClick={() => dispatch(getTodo())}>
        {title}
        Get Todo
      </button>

      <strong>{myTodo.title}</strong>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Title',
};
