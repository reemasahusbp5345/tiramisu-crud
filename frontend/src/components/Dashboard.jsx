import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProduct } from '../Redux/action'
import styled from "styled-components"
import { CardBar } from './CardBar'
import { BarChart } from './BarChart'
import { PieChartComponent } from './PieChart'

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
    .stat{
        display:flex;
    }
    .stat>div{
        min-height:400px;
        flex:1;
    }
`


export default function Dashboard() {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getProduct())
    })
    return (
        <Wrapper>
           <h1>Dashboard</h1>
           <hr/>
           <div className="stat">
               <div> 
               <CardBar title="Pie-Chart" chart={<PieChartComponent />} />
               </div>
               <div> 
                   <CardBar title="Graph" chart={<BarChart />} />
               </div>
            </div> 
        </Wrapper>
    )
}
