"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="w-full py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 bg-clip-text mb-4">
            Babies Fight Market Chaos – You Play & Win!
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Illustration */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="relative"
          >
            <div className="relative w-full aspect-square bg-white rounded-3xl shadow-2xl p-8 flex items-center justify-center border-4 border-purple-200">
              {/* Placeholder for baby punching chart illustration */}
              <div className="relative w-full h-full">
                {/* Price Chart Background - Wiggly */}
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Red line (dump) */}
                  <path
                    d="M 20 80 Q 60 40, 100 100 T 180 120"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="animate-pulse"
                  />
                  {/* Green line (pump) */}
                  <path
                    d="M 20 120 Q 60 80, 100 60 T 180 40"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                  {/* Baby fighter punching */}
                  <circle cx="100" cy="100" r="30" fill="#fbbf24" opacity="0.3" />
                  <text x="100" y="110" fontSize="50" textAnchor="middle">👶</text>
                </svg>
              </div>
            </div>
           
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Crypto trading is complex, stressful, unpredictable, emotional, and hard for normal people.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              But short-term market movements are fast, chaotic, simple in pattern — perfect for gameplay.
            </p>
            <p className="text-lg md:text-xl font-bold text-purple-600 leading-relaxed">
              Traders overthink. Babies don't think — they just REACT.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              So we made babies fight using live market data.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <div>
                  <h4 className="font-bold text-purple-600 mb-1">Real-Time Market Data</h4>
                  <p className="text-sm text-gray-600">Live crypto prices power every game move</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-400 to-yellow-400 rounded-full flex items-center justify-center text-2xl">
                  🎮
                </div>
                <div>
                  <h4 className="font-bold text-purple-600 mb-1">Simple Gameplay, Big Rewards</h4>
                  <p className="text-sm text-gray-600">Easy to play, earn tokens while having fun</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-purple-400 rounded-full flex items-center justify-center text-2xl">
                  💰
                </div>
                <div>
                  <h4 className="font-bold text-purple-600 mb-1">Play-to-Earn Ecosystem</h4>
                  <p className="text-sm text-gray-600">Win battles, climb leaderboards, get rewards</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/games">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white font-black text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
              >
                Play Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
