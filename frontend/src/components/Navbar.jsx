import { useAuthStore } from "../stores/auth.store"

const Navbar = () => {
  const { logout } = useAuthStore()
  const handleLogout = async () => {
    await logout()
  }
  return (
    <div className="w-full py-3 px-10 mt-1 flex justify-between items-center border-b-2 border-amber-400
    shadow-sm">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-300 to-amber-400 bg-clip-text 
      text-transparent">
        Moa<span className="text-orange-400">Salon</span>
      </h1>
      <div className="flex gap-12">
        <a href="/service" className="text-xl font-bold text-amber-500">
          Service
        </a>
        <a href="/staff" className="text-xl font-bold text-amber-500">
          Staff
        </a>
        <button 
          type="button" 
          onClick={handleLogout} 
          className="text-xl font-bold text-amber-500"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar