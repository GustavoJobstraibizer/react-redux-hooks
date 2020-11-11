import types from './types/todoTypes';

const getTodo = (id) => ({ type: types.GET_TODO, id });

const setTodo = (todo) => ({ type: types.SET_TODO, todo });

const loadingTodo = () => ({ type: types.LOADING_TODO });

const sortTodo = (field) => ({ type: types.SORT_BY, field });

export { getTodo, setTodo, loadingTodo, sortTodo };
