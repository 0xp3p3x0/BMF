"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const games = [
  {
    name: "Battle Arena",
    description: "Watch babies throw punches as prices pump! Dodge red candles, catch green ones. Last baby standing wins.",
    icon: "🥊",
    bgGradient: "from-purple-400 to-pink-400",
    link: "/games/arena"
  },
  {
    name: "Battle Tetris",
    description: "Market volatility controls block speed. Pumps slow down, dumps speed up. Stack blocks, survive the chaos!",
    icon: "🧱",
    bgGradient: "from-pink-400 to-yellow-400",
    link: "/games/tetris"
  },
  {
    name: "Racing",
    description: "Race your baby fighter on a track shaped by live charts. Green pumps give speed boosts, red dumps bring obstacles!",
    icon: "🏎️",
    bgGradient: "from-yellow-400 to-purple-400",
    link: "/games/racing"
  }
];

export default function GamesSection() {
  return (
    <section 
      id="games" 
      className="w-full py-16 px-6 md:px-12 lg:px-24 bg-white"
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
            Mini-Games Powered by Real Market Chaos
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Watch babies react to live crypto prices — pumps give boosts, dumps bring obstacles!
          </p>
        </motion.div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut" 
                  }
                }
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -1, 1, -1, 0],
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all p-8 border-2 border-purple-200"
            >
              {/* Game Icon/Thumbnail */}
              <div className={`w-full aspect-square bg-gradient-to-br ${game.bgGradient} rounded-2xl shadow-xl flex items-center justify-center mb-6 relative overflow-hidden`}>
                <div className="text-8xl">{game.icon}</div>
                {/* Cute decorative elements */}
                <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full opacity-50"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white rounded-full opacity-30"></div>
              </div>

              {/* Game Info */}
              <h3 className="text-2xl font-black text-purple-600 mb-3">
                {game.name}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {game.description}
              </p>

              {/* CTA Button */}
              <Link href={game.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Play Now
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 px-8 py-4 rounded-full border-2 border-purple-300">
            <p className="text-xl font-bold text-purple-600">
              More Mini-Games Coming Soon!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
