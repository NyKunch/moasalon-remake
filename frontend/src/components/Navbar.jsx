const Navbar = () => {
  return (
    <div className="w-full py-3 px-10 mt-1 flex justify-between items-center border-b-2 border-amber-400
    shadow-sm">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-300 to-amber-400 bg-clip-text 
      text-transparent">
        Moa<span className="text-orange-400">Salon</span>
      </h1>
      <div className="flex gap-12">
        <h3 className="text-xl font-bold text-amber-500">
          Service
        </h3>
        <h3 className="text-xl font-bold text-amber-500">
          Staff
        </h3>
        <h3 className="text-xl font-bold text-amber-500">
          Login
        </h3>
      </div>
    </div>
  )
}

export default Navbar