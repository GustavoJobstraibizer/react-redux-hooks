import types from './types/todoTypes';

const getTodo = () => ({ type: types.GET_TODO });

const setTodo = (todo) => ({ type: types.SET_TODO, todo });

export { getTodo, setTodo };
