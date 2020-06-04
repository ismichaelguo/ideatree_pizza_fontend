const initialState = {
    userName:'',
    password:'',
    status:false,
}

const loginInf =(state = initialState,action)=>{
    // console.log("action",action)

    switch(action.type){
        case "Get_Username":
            return{
                ...state,
                userName:action.userName.userName,
            }

        case "Get_Password":
            return{
                ...state,
                password:action.password.password,
            }

        case "Get_Login_Information":
            return{
                ...state,
                status:action.status.status,
            }
        default:
            return state;
    }
}

export default loginInf;