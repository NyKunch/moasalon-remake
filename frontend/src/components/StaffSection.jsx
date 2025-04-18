import { motion } from "framer-motion";

const staffMembers = [
  {
    name: "Ayu",
    photo: "/images/staff-ayu.jpg", // ganti dengan path asli
    skills: ["Hair Cutting", "Hair Coloring"],
  },
  {
    name: "Rina",
    photo: "/images/staff-rina.jpg",
    skills: ["Hair Styling", "Hair Smoothing"],
  },
  {
    name: "Dewi",
    photo: "/images/staff-dewi.jpg",
    skills: ["Hair Coloring", "Hair Styling"],
  },
  {
    name: "Sari",
    photo: "/images/staff-sari.jpg",
    skills: ["Hair Cutting", "Hair Smoothing"],
  },
];

export default function StaffSection() {
  return (
    <section className="bg-amber-50 py-20 px-6 md:px-16" id="staff">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-amber-900"
        >
          Tim Profesional Kami
        </motion.h2>
        <p className="text-amber-800 mt-2">Para ahli kecantikan yang siap merawat rambutmu</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {staffMembers.map((staff, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center"
          >
            <img
              src={staff.photo}
              alt={staff.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 shadow"
            />
            <h3 className="text-lg font-semibold text-amber-900 mb-2">{staff.name}</h3>
            <ul className="text-sm text-amber-800 space-y-1">
              {staff.skills.map((skill, i) => (
                <li key={i}>• {skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
