const INITIAL_STATE = {
  data: ["React Native", "ReactJS"],
};

export default function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_COURSE":
      return { ...state, data: [...state.data, action.title] };
    case "REMOVE_COURSE":
      return { ...state, data: [...state.data.filter((data) => data !== action.course)] };
    case "EDIT_COURSE":
      return {
        ...state,
        data: [...state.data.map((data, index) => (index === action.index ? action.course : data))],
      };
    default:
      return state;
  }
}
