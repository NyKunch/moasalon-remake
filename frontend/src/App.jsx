import { Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar"
import LoginPage from "./pages/LoginPage"

function App() {
  return (
    <div className="h-screen flex flex-col items-center bg-amber-100">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element=<LoginPage /> />
      </Routes>
    </div>
  )
}

export default App
