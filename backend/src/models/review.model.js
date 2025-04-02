import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema({
  message: String,
  star: String,
  staffId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff',
    required: true
  },
  reviewerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true })

const Review = mongoose.model('Review', reviewSchema)

export default Review