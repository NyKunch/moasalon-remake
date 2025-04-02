import Review from "../models/review.model.js"
import Staff from "../models/staff.model.js"

export const addStaff = async (req, res) => {
  try {
    const { name, speciality } = req.body
    if (!name || !speciality) return res.status(400).json({ message: 'All fields are required' })

    const staffExist = await Staff.findOne({ name })
    if (staffExist) return res.status(400).json({ message: 'Staff already exists' })

    const newStaff = new Staff({ name,speciality })
    await newStaff.save()
    res.status(201).json({ message: 'New staff added successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error })
  }
}

export const getStaff = async (req, res) => {
  try {
    const staffs = await Staff.find()
    res.status(200).json({ staffs })
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error })
  }
}

export const getStaffReviewById = async (req, res) => {
  try {
    const { id:staffId } = req.params
    const reviews = await Review.find({ staffId })
    res.status(200).json({ reviews })
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error })
  }
}