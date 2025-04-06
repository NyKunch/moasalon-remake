import { Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar"
import LoginPage from "./pages/LoginPage"
import HomePage from './pages/HomePage'
import { useAuthStore } from './stores/auth.store'



function App() {
  const { isAuthenticated } = useAuthStore()
  return (
    <div className="h-screen flex flex-col items-center bg-amber-100">
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/" element={isAuthenticated ? <HomePage /> : <LoginPage />} />
        <Route path="/login" element={isAuthenticated ? <HomePage /> : <LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
