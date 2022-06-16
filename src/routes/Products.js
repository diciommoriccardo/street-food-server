import Router from "express";
import productsController from "../controllers/Products.controller.js";

const router = new Router();

router.post("/", (req, res) => {
    productsController.create(req)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(500).json(err))
})

router.get("/:id", (req, res) => {
    productsController.getById(req)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
})

router.put("/", (req, res) => {
    productsController.updateOne(req)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
})

export default router;