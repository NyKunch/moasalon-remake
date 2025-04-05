import { useState } from "react"
import Input from "../components/Input"

import { Lock, User } from 'lucide-react'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="max-w-md w-full px-4 py-2 mt-5 bg-white border rounded-lg border-amber-500">
      <h2 className="text-2xl my-3 font-bold bg-gradient-to-r from-orange-300 to-amber-400 bg-clip-text 
      text-transparent text-center">
        Login
      </h2>
      <form className="flex flex-col items-center justify-center">
        <Input 
          icon={User}
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input 
          icon={Lock}
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </div>
  )
}

export default LoginPage