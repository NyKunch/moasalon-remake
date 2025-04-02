import mongoose from "mongoose"

const staffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true
  },
  speciality: String,
}, { timestamps: true })

const Staff = mongoose.model('Staff', staffSchema)

export default Staff