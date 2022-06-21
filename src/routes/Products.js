import Router from "express";
import productsController from "../controllers/Products.controller.js";
import authMiddleware from "../middlewares/auth.js";

const router = new Router();

router.use(authMiddleware)

router.post("/", (req, res) => {
    productsController.create(req)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(500).json(err))
})

router.get("/:_id", (req, res) => {
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