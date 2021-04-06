const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique:true,
    minlength:3
  } ,
  category: {
      type: String,
      required: true,
  },
  season:{
      type: String,
      required:true,
  },
  sku:{
      type:String,
      required:true,
  }
},{
  versionKey:false,
}
);

module.exports = mongoose.model("Products", ProductSchema);