import * as types from "./actionTypes";
import axios from "axios";



const login = (payload)=>(dispatch)=>{
    dispatch({type:types.USER_LOGIN_REQUEST});
    alert("login called")
    console.log(payload);

    return axios({
        method:"post",
        url:"/user/login",
        baseURL:"https://backend-puce-eight.vercel.app",
        data:payload
    })
    .then((r)=> {
        return dispatch({type:types.USER_LOGIN_SUCCESS, payload:r.data.token})
    })
    .catch((e)=>dispatch({type:types.USER_LOGIN_FAILURE}))
}

export {login}