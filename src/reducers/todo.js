import types from '../store/actions/types/todoTypes';

const INITIAL_STATE = '';

export default function todo(state = INITIAL_STATE, action) {
  if (action.type === types.SET_TODO) {
    return action.todo;
  }

  return state;
}
