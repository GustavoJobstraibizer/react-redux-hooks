import React from "react";
import { useDispatch, useSelector } from "react-redux";
import getTodo from "../store/actions/todo";

export default function Header() {
  const dispatch = useDispatch();
  const todo = useSelector(({ todo }) => todo);

  function fetchTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1").then((data) => data.json());
  }

  function handleGetTodo() {
    return function (dispatch) {
      return fetchTodo().then((todo) => dispatch(getTodo(todo)));
    };
  }

  return (
    <>
      <button type="button" onClick={() => dispatch(handleGetTodo())}>
        Get Todo
      </button>

      <strong>{todo.title}</strong>
    </>
  );
}
