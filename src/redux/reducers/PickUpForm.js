

const initialState = {
  storesData: [],
  inputType: 'postcode',
  pickUpTime: '',
  store: {},
}

const PickUpForm = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PICK_UP_TIME':
      return {
        ...state,
        pickUpTime: action.pickUpTime
      };

    case 'CHANGE_STORE':

      return {
        ...state,
        store: { ...action.store }
      };

    case 'CHANGE_STORES_DATA':
      
      return {
        ...state,
        storesData: action.storesData
      };

    case 'CHANGE_INPUT_TYPE':

      return {
        ...state,
        inputType: action.inputType
      };

    case "CLEAR_STORE_HISTORY":
      // console.log('CLEAR_STORE_HISTORY')
      return initialState;

    default:
      return state;
  }
}

export default PickUpForm;