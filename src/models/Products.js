import mongoose from "mongoose";

const Products = mongoose.model("Products", mongoose.Schema({
    displayName: String,
    description: String,
    price: Number,
    category: String,
    imgUrl: String
}))

export default Products;