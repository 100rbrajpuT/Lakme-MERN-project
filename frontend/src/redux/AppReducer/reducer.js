import * as types from "./actionTypes"

const initState = {
    productData: [],
    bag:[],
    isLoading: false,
    isError: false
}

const reducer = (oldState=initState ,action)=>{
    const {type, payload} = action;
    switch(type){
        case types.GET_P_REQUEST:
            return  {
                ...oldState,
                isLoading:true,
                isError: false
              }


        case types.GET_P_SUCCESS: 
            return {
                ...oldState,
                productData: payload,
                isLoading: false,
                isError: false
            } 
            
            
        case types.GET_P_FAILURE:
            return {
                ...oldState,
                isLoading: false,
                isError: true
            } 

        case types.ADD_TO_BAG_REQ:
            return{
                ...oldState,
                isLoading: true,
                isError: false
            }
            
        case types.ADD_TO_BAG_SUCCESS:
            return{
                ...oldState,
                 bag: [...oldState.bag, payload],
                isLoading: false,
                isError: false

            }    
            
            
        default :
            return oldState   
    }
}

export {reducer}