import express from 'express'
import dotenv from 'dotenv'

import { connectDB } from './lib/db.js'
import authRoute from './routers/auth.route.js'
import staffRoute from './routers/staff.route.js'
import reviewRoute from './routers/review.route.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/staff', staffRoute)
app.use('/api/review', reviewRoute)

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
  connectDB()
})