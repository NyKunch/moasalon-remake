import { Routes, Route, Navigate } from 'react-router-dom'

import LoginPage from "./pages/LoginPage"
import HomePage from './pages/HomePage'
import { useAuthStore } from './stores/auth.store'
import { useEffect } from 'react'

function App() {
  const { isAuthenticated, checkAuth } = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])
  return (
    <div className="h-screen flex flex-col items-center bg-amber-100">
      <Routes>
        <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App
