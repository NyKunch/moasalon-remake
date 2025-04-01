import jwt from 'jsonwebtoken'

export const generateToken = (username, res) => {
  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: '3d'
  })

  res.cookie('jwt', token, {
    maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== 'development'
  })

  return token
}