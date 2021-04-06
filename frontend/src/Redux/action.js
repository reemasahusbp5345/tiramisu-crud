import { DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, EDIT_PRODUCT_FAILURE, EDIT_PRODUCT_REQUEST, EDIT_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, POST_PRODUCT_FAILURE, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS, SEARCH_PRODUCT_FAILURE, SEARCH_PRODUCT_REQUEST, SEARCH_PRODUCT_SUCCESS } from "./actionType";
import axios from "axios"

export const getProductRequest=()=>({
    type:GET_PRODUCT_REQUEST
})
export const getProductSuccess=(payload)=>({
    type:GET_PRODUCT_SUCCESS,
    payload
})
export const getProductFailure=()=>({
    type:GET_PRODUCT_FAILURE
})

export const getProduct=()=>dispatch=>{
    dispatch(getProductRequest())
    axios({
        method:"GET",
        url:"http://localhost:5000/api/products"
    })
    .then(res=>dispatch(getProductSuccess(res.data)))
    .catch(err=>dispatch(getProductFailure(err)))
}

export const postProductRequest=()=>({
    type:POST_PRODUCT_REQUEST
})
export const postProductSuccess=(payload)=>({
    type:POST_PRODUCT_SUCCESS,
    payload
})
export const postProductFailure=()=>({
    type:POST_PRODUCT_FAILURE
})

export const postProduct=(payload)=>dispatch=>{
    dispatch(postProductRequest())
    axios({
        method:"POST",
        url:"http://localhost:5000/api/product",
        data:payload
    })
    .then(res=>dispatch(getProduct()))
    .catch(err=>dispatch(postProductFailure(err)))
}

export const deleteProductRequest=()=>({
    type:DELETE_PRODUCT_REQUEST
})
export const deleteProductSuccess=(payload)=>({
    type:DELETE_PRODUCT_SUCCESS,
    payload
})
export const deleteProductFailure=()=>({
    type:DELETE_PRODUCT_FAILURE
})

export const deleteProduct=(payload)=>dispatch=>{
    dispatch(deleteProductRequest())
    axios({
        method:"DELETE",
        url:"http://localhost:5000/api/deleteProduct/"+payload,
    })
    .then(res=>dispatch(getProduct()))
    .catch(err=>dispatch(deleteProductFailure(err)))
}

export const editProductRequest=()=>({
    type:EDIT_PRODUCT_REQUEST
})
export const editProductSuccess=(payload)=>({
    type:EDIT_PRODUCT_SUCCESS,
    payload
})
export const editProductFailure=()=>({
    type:EDIT_PRODUCT_FAILURE
})

export const editProduct=(payload)=>dispatch=>{
    dispatch(editProductRequest())
    axios({
        method:"POST",
        url:"http://localhost:5000/api/updateProduct/"+payload.id,
        data:payload.data
    })
    .then(res=>dispatch(getProduct()))
    .catch(err=>dispatch(editProductFailure(err)))
}

export const searchProductRequest=()=>({
    type:SEARCH_PRODUCT_REQUEST
})
export const searchProductSuccess=(payload)=>({
    type:SEARCH_PRODUCT_SUCCESS,
    payload
})
export const searchProductFailure=()=>({
    type:SEARCH_PRODUCT_FAILURE
})

export const searchProduct=(payload)=>dispatch=>{
    dispatch(searchProductRequest())
    axios({
        method:"GET",
        url:"http://localhost:5000/api/searchProducts/"+payload
    })
    .then(res=>dispatch(searchProductSuccess(res.data)))
    .catch(err=>dispatch(searchProductFailure(err)))
}
