const INITIAL_STATE = "";

export default function todo(state = INITIAL_STATE, action) {
  console.log("todo", action.todo);
  if (action.type === "GET_TODO") {
    state = action.todo;
  }

  return state;
}
