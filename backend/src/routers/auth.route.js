import { Router } from 'express'
import { checkAuth, login, logout, signup } from '../controllers/auth.controller.js'
import { protectedRoute } from '../middlewares/auth.middleware.js'

const authRoute = Router()

authRoute.post('/signup', signup)
authRoute.post('/login', login)
authRoute.get('/logout', logout)
authRoute.get('/check-auth', protectedRoute, checkAuth)

export default authRoute