import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { editProduct } from '../Redux/action';

function EditProduct() {
    const params=useParams()
    const history=useHistory()
    const data=useSelector(state=>state.data)
    const editedProduct=data.find(item=>{ return item._id==params.id})
    const dispatch=useDispatch()
    const [state,setState]=useState({
        sku:editedProduct.sku || "",
        name:editedProduct.name || "",
        category:editedProduct.category || "",
        season:editedProduct.season || ""
    })
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setState((prevstate) => ({
            ...prevstate,
            [name]: value,
          }));
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(editProduct({id:params.id,data:state}))
        history.push("/products")
    }
    return (
        <div style={{textAlign:"left",padding:30}}>
            <h1>Edit Products</h1>
            <hr/>
           <form onSubmit={handleSubmit}>
               <div>
                   <label>Name : </label>
                   <input type="text" name="name" value={state.name} onChange={handleChange}  />
               </div>
               <div>
                   <label>SKU : </label>
                   <input type="text" name="sku" value={state.sku} onChange={handleChange} />
               </div>
               <div>
                   <label>Category : </label>
                   <input type="text" name="category" value={state.category} onChange={handleChange} />
               </div>
               <div>
                   <label>Season : </label>
                   <input type="text" name="season" value={state.season} onChange={handleChange} />
               </div>
               <div>
                   <input type="submit" value="Update"/>
               </div>
           </form>
        </div>
    )
}

export default EditProduct
