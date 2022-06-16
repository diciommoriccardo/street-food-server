import mongoose from "mongoose";
import autopopulate from 'mongoose-autopopulate';

const Products = mongoose.model("Products", mongoose.Schema({
    ID: {
        type: String,
        unique: true
    },
    displayName: String,
    description: String,
    price: Number
}).plugin(autopopulate))

export default Products;