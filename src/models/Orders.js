import mongoose from "mongoose";
import autopopulate from 'mongoose-autopopulate';

const Orders = mongoose.model("Orders", mongoose.Schema({
    description: String,
    date: Date,
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        autopopulate: true
    }],
    price: Number,
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        autopopulate: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        autopopulate: true
    },
    status: String
}).plugin(autopopulate))



export default Orders;