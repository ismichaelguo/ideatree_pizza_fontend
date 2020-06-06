const initialState = {
  toppingData: [],
  currentSelection: [],
};

const toppingData = (state = initialState, action) => {
  if (action.type === "GET_TOPPING_DATA") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.toppingData = action.value;
    return newState;
  }
  if (action.type === "ADD_TOPPING") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.currentSelection.push(action.item);
    return newState;
  }
  if (action.type === "DELETE_TOPPING") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.currentSelection.splice(action.index, 1);
    return newState;
  }
  return state;
};

export default toppingData;
