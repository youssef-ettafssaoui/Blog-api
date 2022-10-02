import express from "express";
import { login, logout, register } from "../controllers/auth.js";

const router = express.Router();

// send the informations of user :
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
