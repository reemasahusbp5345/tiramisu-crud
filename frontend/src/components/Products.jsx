import React, { useState } from 'react'
import styled from "styled-components"
import AddProduct from './AddProduct'
import AllProducts from './AllProducts'

const Wrapper=styled.div`
    text-align:left;
    padding:30px;
    .tabs{
        display:flex;
        cursor:pointer;
    }
    .tabs>div{
        padding:10px;
    }
    .tabs>div:hover{
        color:green;
    }
`

function Products() {
    const [showProduct,setShowproduct]=useState(true)
    const [showForm,setShowform]=useState(false)
    const handleShowProduct=()=>{
        setShowproduct(true)
        setShowform(false)
    }
    const handleAddProduct=()=>{
        setShowproduct(false)
        setShowform(true)
    }
    return (
        <Wrapper>
            <h1>Products</h1>
            <hr/> 
            <div className="tabs">
                <div onClick={handleShowProduct}>All Products</div>
                <div onClick={handleAddProduct}>Add Products</div>
            </div>
            {showProduct && <AllProducts/>}
            {showForm && <AddProduct/>}
        </Wrapper>
    )
}

export default Products
