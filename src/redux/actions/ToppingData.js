export const getToppingData = (value) => {
  return {
    type: "GET_TOPPING_DATA",
    value,
  };
};

export const addTopping = (item) => {
  return {
    type: "ADD_TOPPING",
    item,
  };
};

export const deleteTopping = (index) => {
  return {
    type: "DELETE_TOPPING",
    index,
  };
};
