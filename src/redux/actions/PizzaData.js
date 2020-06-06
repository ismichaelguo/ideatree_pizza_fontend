export const loadPizzaData = () => (dispatch) => {
  dispatch(handlePizzaDataRequested());
  fetch("http://www.mocky.io/v2/5ed9cf2c3300003a0079e624")
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
