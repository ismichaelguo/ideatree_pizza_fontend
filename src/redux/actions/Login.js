export function getUsername (userName){
    return{
        type:"Get_Username",
        userName,
    }
}

export function getPassword (password){
    return{
        type:"Get_Password",
        password,
    }
}



export function getLoginInf (status){
    return{
        type:"Get_Login_Information",
        status,
    }
}