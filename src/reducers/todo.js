import types from '../store/actions/types/todoTypes';

const INITIAL_STATE = {
  data: [],
  isLoading: false,
};

export default function todos(state = INITIAL_STATE, action) {
  if (action.type === types.SET_TODO) {
    return { ...state, data: [...state.data, action.todo], isLoading: false };
  }

  if (action.type === types.LOADING_TODO) {
    return { ...state, isLoading: true };
  }

  return state;
}
