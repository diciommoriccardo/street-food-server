import mongoose from "mongoose";
import { DATABASE } from "../config/config.js";

const uri = `mongodb+srv://${DATABASE.USER}:${DATABASE.PASS}${DATABASE.CLUSTER_SHARD}`;

class Mongo{
    constructor(){
        mongoose.connect(uri)
        .then(() => console.log("Mongo connect succesfully"))
        .catch(err => console.log(err))
    }
} 

export default Mongo;