import express from "express";
import { createUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", createUser); // POST /users

export default router;
