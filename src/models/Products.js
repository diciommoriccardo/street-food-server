import mongoose from "mongoose";
import autopopulate from 'mongoose-autopopulate';

const Products = mongoose.model("Products", mongoose.Schema({
    displayName: String,
    description: String,
    price: Number,
    category: String
}).plugin(autopopulate))

export default Products;