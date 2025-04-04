import { Router } from 'express'
import { login, logout, signup } from '../controllers/auth.controller.js'

const authRoute = Router()

authRoute.post('/signup', signup)
authRoute.post('/login', login)
authRoute.get('/logout', logout)

export default authRoute