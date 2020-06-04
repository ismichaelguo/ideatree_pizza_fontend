export function changePickUpTime({pickUpTime}){
    return{
        type:"CHANGE_PICK_UP_TIME",
        pickUpTime
    };
}

export function changeInputType({inputType}){
    return{
        type:"CHANGE_INPUT_TYPE",
        inputType
    };
}

export function changeStoresData({storesData}){
    
    return{
        type:"CHANGE_STORES_DATA",
        storesData
    };
}

export function changeStore (store){
    
    return{ 
        type: "CHANGE_STORE",
        store
    };
}