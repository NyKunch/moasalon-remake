const Input = ({ icon:Icon, ...props }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className='size-5 text-amber-500' />
      </div>
      <input 
        {...props}
        className="w-full pl-10 pr-3 py-2 rounded-lg border border-amber-400
          focus:border-amber-500 outline-0 focus:ring-1 focus:ring-amber-500 text-white
          placeholder-amber-400 transition duration-200"
      />
    </div>
  )
}

export default Input