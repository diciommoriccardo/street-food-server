import { ParamsMissing } from "../helpers/Errors.js";
import Orders from "../models/Orders.js";

const orderController = {
    getById: (req) => {
        return new Promise((resolve, reject) => {
            if(!req.params._id || req.params._id == '') reject(new ParamsMissing("_id"))

            Orders.findById(req.params._id)
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    getAll: () => {
        return new Promise((resolve, reject) => {
            Orders.find()
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    create: (req) => {
        return new Promise((resolve, reject) => {
            new Orders(req.body).save()
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    updateOne: (req) => {
        return new Promise((resolve, reject) => {
            Orders.findByIdAndUpdate(req.body._id, req.body).save()
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    update: (req) => {
        return new Promise((resolve, reject) => {
            //idk
        })
    }
}

export default orderController;