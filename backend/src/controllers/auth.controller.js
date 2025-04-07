import bcrypt from 'bcrypt'
import User from "../models/user.model.js"
import { generateToken } from '../lib/utils.js'

export const signup = async (req, res) => {
  try {
    const { username, password } = req.body
    if (!username || !password) return res.status(400).json({ message: 'All field are required' })
    
    const user = await User.findOne({ username })
    if (user) return res.status(400).json({ message: 'Username already exists' })
    
    const hashedPassword = await bcrypt.hash(password, 10)
    
    const newUser = new User({
      username,
      password: hashedPassword,
    })

    await newUser.save()
    generateToken(newUser._id, res)
    return res.status(201).json({ message: 'Account created', user: newUser.username })
  } catch (error) {
    return res.status(500).json({ message: 'Server error ', error })
  }
}

export const login = async (req, res) => {
  try {
    const { username, password } = req.body
    if (!username || !password) return res.status(400).json({ message: 'All field are required' })

    const user = await User.findOne({ username })
    if (!user) return res.status(400).json({ message: 'Invalid credetials' })
      
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) return res.status(400).json({ message: 'Invalid credetials' })
    
    req.user = user
    generateToken(user._id, res)
    res.status(200).json({ message: 'Login success', user: { ...user._doc, password: undefined } })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
}

export const logout = (req, res) => {
  try {
    res.cookie('jwt', '', {maxAge: 0})
    res.status(200).json({ message: 'Logout succesfully' })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
}

export const checkAuth = (req, res) => {
  try {
    res.status(200).json(req.user)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}