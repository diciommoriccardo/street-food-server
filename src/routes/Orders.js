import Router from "express";
import orderController from "../controllers/Orders.controller.js";

const router = new Router();

router.post("/", (req, res) => {
    orderController.create(req)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(500).json(err))
})

router.get("/:_id", (req, res) => {
    orderController.getById(req)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
})

router.get("/", (req, res) => {
    orderController.getAll()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
})

router.put("/", (req, res) => {
    orderController.updateOne(req)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
})

export default router;