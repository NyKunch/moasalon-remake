import Review from "../models/review.model.js"

export const getReview = async (req, res) => {
  try {
    const reviews = await Review.find()
    res.status(200).json({ reviews })
  } catch (error) {
    res.status(500).json({ message: 'Internal server error ', error })
  }
}

export const addReview = async (req, res) => {
  try {
    // const { message, star } = req.body
    const { id:staffId } = req.params
    // const reviewerId = req.user._id
    // tes purpose
    const { message, star, reviewerId } = req.body
    

    if (!message && !star) return res.status(400).json({ message: 'Please input your reviews' })

    const newReview = new Review({
      message,
      star,
      staffId,
      reviewerId
    })

    await newReview.save()
    res.status(201).json({ message: 'Review sent successfully', newReview })
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error })
  }
}