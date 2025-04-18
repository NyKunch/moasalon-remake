import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import ServicesSection from "../components/ServiceSection"
import StaffSection from "../components/StaffSection"

// import { useAuthStore } from "../stores/auth.store"

const HomePage = () => {
  // const { isAuthenticated, user } = useAuthStore()
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <StaffSection />
    </>
  )
}

export default HomePage