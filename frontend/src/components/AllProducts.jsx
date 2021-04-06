import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { deleteProduct, searchProduct } from '../Redux/action'

function AllProducts() {
    const [search,setSearch]=useState("")
    const data=useSelector(state=>state.data)
    const dispatch=useDispatch()
    const history=useHistory()
    const handleDelete=(id)=>{
        dispatch(deleteProduct(id))
    }
    const handleEdit=(id)=>{
        history.push(`/editProduct/${id}`)
    }
    const handleSearch=()=>{
        dispatch(searchProduct(search))
    }
    return (
        <div>
            <div>
                <input type="text" placeholder="Search Something..." value={search} onChange={e=>setSearch(e.target.value)}/>
                <button onClick={handleSearch}>Search</button>
            </div>
             
           <table className="table table-hover">
               <thead>
                   <tr>
                       <th>SKU</th>
                       <th>Name</th>
                       <th>Category</th>
                       <th>Season</th>
                       <th>Delete</th>
                       <th>Edit</th>
                   </tr>
               </thead>
               <tbody>
               {data.length==0 && <h2>No Data Found</h2>}
                   {data && data.map(item=><tr key={item._id}>
                       <td>{item.sku}</td>
                       <td>{item.name}</td>
                       <td>{item.category}</td>
                       <td>{item.season}</td>
                       <td onClick={()=>handleEdit(item._id)} style={{cursor:"pointer"}}>Edit</td>
                       <td onClick={()=>handleDelete(item._id)} style={{cursor:"pointer"}}>Delete</td>
                   </tr>)}
               </tbody>
           </table>
        </div>
    )
}

export default AllProducts
