
import axios from "axios"
import * as types from "./actionTypes"


const getProducsRequest =()=> {
    return{
        type: types.GET_P_REQUEST
    }
    
}

const getProducsSuccess =(payload)=> {
    return{
        type: types.GET_P_SUCCESS,
        payload
    }
    
}

const getProducsFailure =()=> {
    return{
        type: types.GET_P_FAILURE
    }
    
}

const addToBagReq = ()=>{
    return{
        type: types.ADD_TO_BAG_REQ
    }
}

const addToBagReqSuccess=(payload)=>{
    return{
      type:types.ADD_TO_BAG_SUCCESS,
      payload
    }
}

const addToBagFail = ()=>{
    return{
        type: types.ADD_TO_BAG_FAIL
    }
}



// const getProducts =()=> (dispatch)=>{
//     dispatch(getProducsRequest())
//     return axios.get("http://localhost:8080/posts")
//     .then((r)=>{
//         return(dispatch(getProducsSuccess(r.data)))
//     })
//     .catch(()=>{
//         dispatch(getProducsFailure())
//       })
// }

export {getProducsSuccess, getProducsRequest, getProducsFailure , addToBagFail, addToBagReq, addToBagReqSuccess}