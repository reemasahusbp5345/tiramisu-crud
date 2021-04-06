const express=require("express")
const cors=require("cors")
const productRoutes=require("./routes/products-routes")
const app=express()
app.use(express.json());
app.use(cors())
const dotenv = require("dotenv");
const connectDB=require("./config/db")
dotenv.config();
connectDB()

app.use("/api",productRoutes)

app.listen(5000,()=>{
    console.log("The server is up and running")
})