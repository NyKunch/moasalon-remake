import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"

import { useAuthStore } from "../stores/auth.store"

const HomePage = () => {
  // const { isAuthenticated, user } = useAuthStore()
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  )
}

export default HomePage