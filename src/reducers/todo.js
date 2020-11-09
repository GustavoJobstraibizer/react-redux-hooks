const INITIAL_STATE = "";

export default function todo(state = INITIAL_STATE, action) {
  if (action.type === "GET_TODO") {
    state = action.todo;
  }

  return state;
}
