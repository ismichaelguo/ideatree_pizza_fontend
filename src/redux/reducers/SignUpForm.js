const initialState = {
    email:"",
    name:"",
    phoneNumber:"",
    signPassword:"",
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
                signPassword:action.signUpForm.signPassword,
            }
        default:
            return state;
    }
}

export default SignUpForm;