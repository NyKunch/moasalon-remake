import { useState } from "react"
import { Eye, EyeOff, Lock, User } from 'lucide-react'
import { motion } from 'framer-motion'

import Input from "../components/Input"


const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full my-auto bg-amber-50 backdrop-filter backdrop-blur-xl rounded-2xl 
      shadow-xl overflow-hidden"
    >
      <div className="px-5 py-4">
        <h2 className="text-2xl my-3 mb-7 font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text 
        text-transparent text-center">
          LOGIN
        </h2>
        <form 
          onSubmit={handleSubmit}
          className="px-4"
        >
          <Input 
            icon={User}
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="relative">
            <Input 
              icon={Lock}
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-amber-400" />
                ) : (
                <Eye className="h-5 w-5 text-amber-400" />
              )}
            </button>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white
              font-bold rounded-lg shadow-lg hover:from-amber-600 hover:to-orange-700 focus:outline-none
              focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition duration-200"
            type="submit"
            // disabled={isLoading}
          >
              {/* {isLoading ? <Loader className='size-6 animate-spin mx-auto' /> : 'Login'} */}
              Login
            </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-amber-600 flex justify-center">
        <p className="text-sm text-amber-50 font-semibold">
          Don't have an account? <span className="text-amber-400 hover:underline">register.</span>
        </p>
      </div>
    </motion.div>
  )
}

export default LoginPage