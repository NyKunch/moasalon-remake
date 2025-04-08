import Navbar from "../components/Navbar"
import { useAuthStore } from "../stores/auth.store"

const HomePage = () => {
  const { isAuthenticated, user } = useAuthStore()
  console.log(isAuthenticated, user)
  return (
    <>
      <Navbar />
      <div>HomePage</div>
    </>
  )
}

export default HomePage