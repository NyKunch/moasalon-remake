import { Router } from "express"
import { addReview, getReview } from "../controllers/review.controller.js"

const reviewRoute = Router()

reviewRoute.get('/', getReview)
reviewRoute.post('/:id', addReview)

export default reviewRoute