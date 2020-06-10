export const loadPizzaData = () => (dispatch) => {
  dispatch(handlePizzaDataRequested());
  fetch("https://run.mocky.io/v3/1d8eec6f-e40a-4228-9f31-7d18b36255d5")
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
