const initialState = {
  toppingData: [],
  currentSelection: [],
};

const toppingData = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TOPPING_DATA":
      return {
        ...state,
        toppingData: action.value,
      };
    case "ADD_TOPPING":
      return lengthCheck(state, action);
    // return {
    //   ...state,
    //   currentSelection: [...state.currentSelection, action.item],
    // };

    case "DELETE_TOPPING":
      return {
        ...state,
        currentSelection: state.currentSelection.filter((items) => {
          return items.id !== action.id;
        }),
      };
    default:
      return state;
  }
};

const lengthCheck = (state, action) => {
  state.currentSelection = [...state.currentSelection, action.item];
  let crust = state.currentSelection.filter((item) => {
    return item.type === "crust";
  });
  if (crust.length > 1) {
    alert("only one curst is allowed");
    return {
      ...state,
      currentSelection: state.currentSelection.filter((items) => {
        return items.id !== action.id;
      }),
    };
  }
  return {
    ...state,
    currentSelection: state.currentSelection,
  };
};

export default toppingData;
