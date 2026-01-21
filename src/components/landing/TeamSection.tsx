"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const teamMembers = [
  {
    name: "Luis",
    role: "Founder & Idea Baby",
    avatar: "👶",
    bgGradient: "from-purple-400 to-pink-400",
    description: "The brain behind the chaos"
  },
  {
    name: "Crypto Nanny",
    role: "Lead Developer",
    avatar: "👩‍💻",
    bgGradient: "from-pink-400 to-yellow-400",
    description: "Makes the magic happen"
  },
  {
    name: "Meme Mom",
    role: "Marketing Wizard",
    avatar: "🎨",
    bgGradient: "from-yellow-400 to-purple-400",
    description: "Spreads the word"
  },
  {
    name: "Game Guru",
    role: "Game Designer",
    avatar: "🎮",
    bgGradient: "from-purple-500 to-pink-500",
    description: "Crafts the fun"
  },
  {
    name: "Chart Champ",
    role: "Market Analyst",
    avatar: "📊",
    bgGradient: "from-pink-500 to-yellow-500",
    description: "Reads the chaos"
  }
];

export default function TeamSection() {
  return (
    <section 
      id="team" 
      className="w-full py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 bg-clip-text mb-4">
            The Baby Fighters Behind the Project
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Small team. Big chaos. All degens at heart.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-3xl p-6 shadow-lg border-2 border-purple-200 text-center group"
            >
              {/* Avatar */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.bgGradient} flex items-center justify-center text-5xl shadow-xl`}
              >
                {member.avatar}
              </motion.div>

              {/* Info */}
              <h3 className="font-black text-purple-600 text-xl mb-1">
                {member.name}
              </h3>
              <p className="text-pink-500 font-bold mb-2">
                {member.role}
              </p>
              <p className="text-sm text-gray-600">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <p className="text-2xl font-bold text-gray-700 mb-6">
            Join our growing community of fighters!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <span className="text-xl">💬</span>
              Discord
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <span className="text-xl">✈️</span>
              Telegram
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-purple-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <span className="text-xl">🐦</span>
              Twitter
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
