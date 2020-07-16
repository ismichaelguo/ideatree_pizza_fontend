export const loadPizzaData = () => (dispatch) => {
  dispatch(handlePizzaDataRequested());
  fetch(`${process.env.BACKEND}/products`, { method: "GET" })
    .then((res) => res.json())
    .then((res) => dispatch(handlePizzaDataSucceeded(res)))
    .catch((err) => dispatch(handlePizzaDataFailed(err)));
};

const handlePizzaDataRequested = () => ({
  type: "REQUESTED",
});

const handlePizzaDataSucceeded = (res) => ({
  type: "SUCCEEDED",
  pizzaData: { pizzaData: res || [] },
});

const handlePizzaDataFailed = (err) => ({
  type: "FAILED",
  data: { err },
});
