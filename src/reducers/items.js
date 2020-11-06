const INITIAL_STATE = '';

export default function items(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case "ITEM_SELECTED":
      return action.item;
    default:
      return state;
  }
}
