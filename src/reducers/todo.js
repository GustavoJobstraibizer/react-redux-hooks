import types from '../store/actions/types/todoTypes';

const INITIAL_STATE = {
  data: [],
  isLoading: false,
};

function sortBy(a, b, prop) {
  if (a[prop] > b[prop]) {
    return -1;
  }

  if (a[prop] < b[prop]) {
    return 1;
  }

  return 0;
}

export default function todos(state = INITIAL_STATE, action) {
  if (action.type === types.SET_TODO) {
    return { ...state, data: [...state.data, action.todo], isLoading: false };
  }

  if (action.type === types.LOADING_TODO) {
    return { ...state, isLoading: true };
  }

  if (action.type === types.SORT_BY) {
    return {
      ...state,
      data: [...state.data.sort((a, b) => sortBy(a, b, action.field))],
    };
  }

  return state;
}
