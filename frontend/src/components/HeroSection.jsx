import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1633681926035-ec1ac984418a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Salon Background" 
        className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
      />

      {/* Overlay (untuk kontras teks) */}
      <div className="absolute inset-0 bg-amber-50/20 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-amber-900 mb-4 drop-shadow-md"
        >
          Kecantikan Dimulai di Sini
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-amber-800 mb-5 drop-shadow-sm"
        >
          Salon profesional untuk penampilan terbaikmu.
        </motion.p>

        <div>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: 'easeInOut' }}
            className="px-6 py-3 mx-2 bg-amber-50 hover:bg-amber-500 text-amber-500 hover:text-white font-semibold rounded-2xl shadow-lg transition border-2 border-amber-400 hover:border-amber-500"
          >
            Our Services
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: 'easeInOut' }}
            className="px-6 py-3 mx-2 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-2xl shadow-lg transition"
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection