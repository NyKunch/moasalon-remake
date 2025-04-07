import { Router } from 'express'
import { checkAuth, login, logout, signup } from '../controllers/auth.controller.js'

const authRoute = Router()

authRoute.post('/signup', signup)
authRoute.post('/login', login)
authRoute.get('/logout', logout)
authRoute.get('/check-auth', checkAuth)

export default authRoute