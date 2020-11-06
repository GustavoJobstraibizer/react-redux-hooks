const INITIAL_STATE = {
  isEditing: false,
};

export default function actions(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "EDITING":
      return { ...state, isEditing: action.isEditing };
    default:
      return state;
  }
}
