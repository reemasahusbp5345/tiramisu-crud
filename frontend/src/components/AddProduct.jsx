import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { postProduct } from '../Redux/action'

function AddProduct() {
    const dispatch=useDispatch()
    const [state,setState]=useState({
        sku:"",
        name:"",
        category:"",
        season:""
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
        dispatch(postProduct(state))
    }
    return (
        <div>
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
                   <input type="submit" value="Save"/>
               </div>
           </form>
        </div>
    )
}

export default AddProduct
