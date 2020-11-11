import types from '../store/actions/types/courseTypes';

const INITIAL_STATE = {
  data: ['React Native', 'ReactJS'],
};

export default function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_COURSE:
      return { ...state, data: [...state.data, action.title] };
    case types.REMOVE_COURSE:
      return {
        ...state,
        data: [...state.data.filter((data) => data !== action.course)],
      };
    case types.EDIT_COURSE:
      return {
        ...state,
        data: [
          ...state.data.map((data, index) =>
            index === action.index ? action.course : data
          ),
        ],
      };
    default:
      return state;
  }
}
