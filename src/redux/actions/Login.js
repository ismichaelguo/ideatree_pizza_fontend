export function getUsername (userName){
    return{
        type:"Get_Username",
        userName,
    }
}

export function getPassword (logPassword){
    return{
        type:"Get_Password",
        logPassword,
    }
}



export function getLoginInf (status){
    return{
        type:"Get_Login_Information",
        status,
    }
}