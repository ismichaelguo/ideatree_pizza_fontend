export const initialState= {
    pizzaData:[],
}

const pizzaData = (state = initialState,action)=>{
    

    switch(action.type){
     case 'REQUESTED':
       return {
         ...state,
       }
     case "SUCCEEDED":
       console.log('==================', action)
       return {
         ...state,
         pizzaData: action.pizzaData.pizzaData,
       }
     case "FAILED":
       return {
         ...state,
       }
     default:
       return state;
  }
}

export default pizzaData;