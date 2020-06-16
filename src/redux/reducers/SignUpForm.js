const initialState = {
    email:"",
    name:"",
    phoneNumber:"",
    password:"",
}

const SignUpForm =(state = initialState,action)=>{
    console.log("action1",action)
    switch(action.type){
        case "Get_Sign_Up_Inf":
            console.log("new_action",action)
            return {
                ...state,
                email:action.signUpForm.email,
                name:action.signUpForm.name,
                phoneNumber:action.signUpForm.phoneNumber,
                password:action.signUpForm.password,
            }
        default:
            return state;
    }
}

export default SignUpForm;