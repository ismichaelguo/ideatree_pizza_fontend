import STORE_DATA from '../../components/store/store-data';

const tempStoresData = [];
for (let i = 0; i < STORE_DATA.length; i++) {
  for (let j = 0; j < STORE_DATA[i].cities.length; j++) {
    for (let k = 0; k < STORE_DATA[i].cities[j].stores.length; k++) {
      tempStoresData.push(STORE_DATA[i].cities[j].stores[k]);
    }
  }
}

const initialState = {
  storesData: tempStoresData,
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