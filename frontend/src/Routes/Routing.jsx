import React from 'react'
import { Route, Switch } from 'react-router'
import styled from "styled-components"
import AddProduct from '../components/AddProduct'
import Dashboard from '../components/Dashboard'
import EditProduct from '../components/EditProduct'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'

const Wrapper=styled.div`
    display:flex;
    .sidebar{
        flex:0.15;
    }
    .content{
        flex:0.85;
    }
`
const Header=styled.div`
    text-align:left;
    font-size:30px;
    background-color:#f9fbe7;
    padding:5px 10px;
`
function Routing() {
    return (
        <div>
<Header>
    AGRIKING
</Header>
            <Wrapper>
                <div className="sidebar">
                <Sidebar/>
                </div>
                <div className="content">
                 <Switch>
                     <Route path="/" exact component={Dashboard}/>
                     <Route path="/products" exact component={Products}/>
                     <Route path="/newProduct" exact component={AddProduct}/>
                     <Route path="/editProduct/:id" exact component={EditProduct} />
                 </Switch>
                </div>
            </Wrapper>
            
        </div>
    )
}

export default Routing
