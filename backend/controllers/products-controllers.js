const Products=require("../models/products-models")
 

const getProducts=(req,res)=>{
    Products.find()
    .then((products)=>res.json(products))
    .catch((err)=>res.status(404).json("Error"))
}

const addProduct=(req,res)=>{
    if (!req.body.name || !req.body.sku || !req.body.season || !req.body.category) {
        return res.status(404).json({ message: "Please Fill all the fields" });
    }
    const {name,sku,season,category}=req.body;
    const newProduct=new Products({name,sku,season,category})

    newProduct
    .save()
    .then(()=>res.json("Product Added Successfully"))
    .catch((err)=>res.status(404).json("Error" + err))
}

const deleteProduct=(req,res)=>{
    Products.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Product Deleted Successfully"))
    .catch((err)=>res.status(404).json("Error"+err))
}

const editProduct=(req,res)=>{
    
    if (!req.body.name || !req.body.sku || !req.body.season || !req.body.category) {
        return res.status(404).json({ message: "Please Fill all the fields" });
    }

    Products.findById(req.params.id)
    .then((product)=>{
        product.name=req.body.name,
        product.sku=req.body.sku,
        product.category=req.body.category,
        product.season=req.body.season,

        product
       .save()
       .then(()=>res.json("Product Updated Successfully"))
       .catch((err)=>res.status(404).json("Error" + err))
    })
     .catch((err)=>res.status(404).json("Error"+err))
}

const searchProducts=(req,res)=>{
    var regex=new RegExp(req.params.name,"i")
    Products.find({name:regex})
    .then((result)=>{res.status(200).json(result)})
}
 
module.exports={getProducts,addProduct,deleteProduct,editProduct,searchProducts}