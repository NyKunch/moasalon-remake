import { Router } from 'express'
import { addStaff, getStaff, getStaffReviewById } from '../controllers/staff.controller.js'

const staffRoute = Router()

staffRoute.get('/', getStaff)
staffRoute.get('/:id', getStaffReviewById)
staffRoute.post('/add', addStaff)

export default staffRoute