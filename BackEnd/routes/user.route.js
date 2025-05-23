import { login, signup } from "../controllers/user.controller.js";
import express, { Router } from 'express'


const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)

export default router
