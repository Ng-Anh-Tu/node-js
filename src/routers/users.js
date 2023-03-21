import express from "express";

import { create, getAll, getDetail, remove, update } from "../controllers/users.js";

const router = express.Router();

router.get("/users", getAll);
router.get("/users/:id", getDetail);
router.post("/users", create);
router.put("/users/:id", update);
router.delete("/users/:id", remove);
export default router;