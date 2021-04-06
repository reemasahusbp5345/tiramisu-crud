import { DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, EDIT_PRODUCT_FAILURE, EDIT_PRODUCT_REQUEST, EDIT_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, POST_PRODUCT_FAILURE, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS, SEARCH_PRODUCT_FAILURE, SEARCH_PRODUCT_REQUEST, SEARCH_PRODUCT_SUCCESS } from "./actionType"

const initState={
    data:[],
    loading:false,
    error:false
}

function reducer(state=initState,{type,payload}) {
    console.log(type,payload)
    switch(type){
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                loading:true
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                data:payload,
                loading:false,
            }
        case GET_PRODUCT_FAILURE:
            return {
                ...state,
                loading:false,
                error:true
            }
        case POST_PRODUCT_REQUEST:
            return {
                ...state,
                loading:true
            }
        case POST_PRODUCT_SUCCESS:
            return {
                ...state,
                loading:false,
            }
        case POST_PRODUCT_FAILURE:
            return {
                ...state,
                loading:false,
                error:true
            }
        case DELETE_PRODUCT_REQUEST:
            return {
                ...state,
                loading:true
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading:false,
            }
        case DELETE_PRODUCT_FAILURE:
            return {
                ...state,
                loading:false,
                error:true
            }
        case EDIT_PRODUCT_REQUEST:
            return {
                ...state,
                loading:true
            }
        case EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                loading:false,
            }
        case EDIT_PRODUCT_FAILURE:
            return {
                ...state,
                loading:false,
                error:true
            }
        case SEARCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading:true
            }
        case SEARCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading:false,
                data:payload
            }
        case SEARCH_PRODUCT_FAILURE:
            return {
                ...state,
                loading:false,
                error:true
            }
            default:
                return state
    }
}

export default reducer
