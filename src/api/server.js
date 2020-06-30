import axios from 'axios';
const axiosInstance = axios.create({
    baseURL:"http://localhost:8080",
    timeout:5000,
    headers:{"withCredentials": "true"},
    // data:{}
})

axiosInstance.interceptors.request.use(config=>{
    console.log("url",config.url)
    if(config.url ==='/user/login' || config.url ==='/products' || config.url ==='/user/signup'){
        return config
    }else{
        let token = window.localStorage.getItem('Authorization');
        console.log("token",token)
        if(token){
            config.headers.authorization = `${token}`;
            console.log("config",config)
            return config;
        }else{
            window.location.href('https://localhost:3000/account')
            alert("You haven't log in yet!")
        }

    }
},error=>{
    return Promise.reject(error)
})

axiosInstance.interceptors.response.use(response=>{
    console.log("response",response)
    const {authorization} = response.headers;
    if(authorization){
        window.localStorage.setItem('Authorization',`Bearer ${authorization}`)
    }
    return response;
},error=>{
    if(error.response){
        const {status}= error.response;
        if(status === 401 || status === 405){
            window.location.href('https://localhost:3000/account')
        }
    }
})

export default axiosInstance;

