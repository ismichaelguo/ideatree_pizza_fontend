const initialState = {
    unit:'',
    streetNum:'',
    streetName:'',
    suburb:'',
    postcode:'',
    deliverNow: true,
    rememberAddress: false,
    time:'',
}

const DeliveryForm = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_UNIT":
            return {
                ...state,
                unit: action.unit
            };
        case "CHANGE_STREET_NUMBER":
            return {
                ...state,
                streetNum: action.streetNum
            };
        case "CHANGE_STREET_NAME":
            return {
                ...state,
                streetName: action.streetName
            };
        case "CHANGE_SUBURB":
            return {
                ...state,
                suburb: action.suburb
            };
        case "CHANGE_POSTCODE":
            return {
                ...state,
                postcode:action.postcode
            };
        case "CHANGE_DELIVERNOW":
            return {
                ...state,
                deliverNow: action.deliverNow
            };
        case "CHANGE_REMEMBER_ADDRESS":
            return {
                ...state,
                rememberAddress: action.rememberAddress
            };

        case "CHANGE_TIME":
            return{
                ...state,
                time:action.time
            }
        default:
            return state;
    }
}

export default DeliveryForm;