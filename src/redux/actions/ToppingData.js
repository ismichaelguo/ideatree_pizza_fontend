export const getToppingData = (value) => {
  return {
    type: "GET_TOPPING_DATA",
    value,
  };
};

export const addTopping = (item,id) => {
  return {
    type: "ADD_TOPPING",
    item,id
  };
};

export const deleteTopping = (id) => {
  return {
    type: "DELETE_TOPPING",
    id,
  };
};
