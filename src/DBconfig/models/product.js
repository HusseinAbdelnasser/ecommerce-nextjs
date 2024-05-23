
const mongoose = require("mongoose");
 const Schema = mongoose.Schema;
 const models = mongoose.models;

 // define the Schema (the structure of the article)
 const productSchema = new Schema({
   productImg: String,
   title: String,
   price: Number,
   description: String,
 
 });

 // Create a model based on that schema
 const ProductModal = models.Product || mongoose.model("Product", productSchema);

 // export the model
 module.exports = ProductModal;
