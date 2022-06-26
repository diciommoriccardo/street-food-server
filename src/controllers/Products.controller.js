import Products from '../models/Products.js';
import { ParamsMissing } from '../helpers/Errors.js';

const productsController = {
    getById: (req) => {
        return new Promise((resolve, reject) => {
            if(!req.params._id || req.params._id == '') reject(new ParamsMissing("_id"))

            Products.findById(req.params._id)
            .then(data => resolve(data))
            .catch(err => reject(err))
        }) 
    },

    create: (req) => {
        return new Promise((resolve, reject) => {
            console.log(req.body)
            new Products(req.body).save()
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    getAll: (req) => {
        return new Promise((resolve, reject) => {
            Products.find().skip(req.body.offset).limit(req.body.limit)
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    updateOne: (req) => {
        return new Promise((resolve, reject) => {
            Products.findOneAndUpdate(req.body._id, req.body)
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    getByCategory: (category) => {
        return new Promise((resolve, reject) => {
            Products.find({category: {category}})
            .then(data => resolve(data))
            .catch(err => reject(err))
        })

    }
}

export default productsController;