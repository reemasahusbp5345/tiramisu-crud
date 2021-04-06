import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const SideBar=styled.div`
    background-color:#455a64;
    display:flex;
    flex-direction:column;
    height:607px;
    a{
        text-decoration:none;
        color:#fff;
        text-align:left;
        padding:15px 15px;
    }
`

const links=[
    {
        to:"/",
        title:"Dashboard"
    },{
        to:"/products",
        title:"Products"
    },
    {
        to:"/inventory",
        title:"Inventory"
    },
    {
        to:"/sales",
        title:"Sales"
    },{
        to:"/customers",
        title:"Customers"
    },
    {
        to:"/purchases",
        title:"Purchases"
    },
    {
        to:"/suppliers",
        title:"Suppliers"
    }
]

function Sidebar() {
    return (
        <SideBar>
            {links.map(item=><Link to={item.to} key={item.to}>{item.title}</Link>)}
        </SideBar>
    )
}

export default Sidebar
