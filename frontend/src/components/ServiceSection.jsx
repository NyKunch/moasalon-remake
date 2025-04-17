import { motion } from "framer-motion";

const services = [
  {
    title: "Hair Styling",
    description: "Tampil lebih percaya diri dengan gaya rambut yang sesuai tren dan kepribadianmu.",
    icon: "💇‍♀️",
  },
  {
    title: "Hair Cutting",
    description: "Potongan rambut profesional yang mempertegas karakter dan pesona dirimu.",
    icon: "✂️",
  },
  {
    title: "Hair Coloring",
    description: "Warna rambut yang stylish dan tahan lama dengan teknik pewarnaan modern.",
    icon: "🎨",
  },
  {
    title: "Hair Smoothing",
    description: "Rambut lebih halus, lembut, dan mudah diatur dengan smoothing berkualitas.",
    icon: "💆‍♀️",
  },
];

export default function ServicesSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white py-20 px-6 md:px-16" id="services">
      <div className="text-center mb-12 mt-[-14px]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-amber-900"
        >
          Layanan Kami
        </motion.h2>
        <p className="text-amber-800 mt-2">Pilihan terbaik untuk rambut indah dan terawat</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-amber-50 p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">{service.title}</h3>
            <p className="text-amber-800 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
