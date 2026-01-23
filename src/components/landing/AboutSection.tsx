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
      id="story" 
      className="w-full py-16 sm:py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-fuchsia-500 via-pink-500 to-amber-400 bg-clip-text mb-4 drop-shadow-lg"
            style={{ fontFamily: "'Fredoka One', 'Comic Sans MS', cursive" }}
          >
            Our Story
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-800 mt-5 max-w-3xl mx-auto font-bold" style={{ fontFamily: "'Fredoka One', 'Comic Sans MS', cursive" }}>
            Welcome to the tale of Baby Market Fighter—told loud, proud, and playful for every degen baby in the arena.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Responsive video viewer */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="relative w-full md:w-[95%] lg:w-full"
          >
            <div className="relative overflow-hidden rounded-4xl shadow-3xl ring-4 ring-pink-300/80 bg-gradient-to-br from-fuchsia-100 via-pink-50 to-amber-100">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/30 via-transparent to-pink-100/30" />
              <div className="relative aspect-video sm:aspect-[16/9] lg:aspect-[16/9]">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  controls
                  poster="/background.jpg"
                >
                  <source src="/intro.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-black text-pink-600" style={{ fontFamily: "'Fredoka One', 'Comic Sans MS', cursive" }}>
                Baby Fighter TV
              </div>
            </div>
          </motion.div>

          {/* Right: Story Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-5 text-gray-900 bg-white/40 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-2xl ring-2 ring-pink-200/60"
          >
            <p className="text-2xl md:text-3xl font-black text-pink-500 drop-shadow" style={{ fontFamily: "'Fredoka One', 'Comic Sans MS', cursive" }}>
              The Great Baby Chain Rumble
            </p>
            <div className="space-y-3 text-base sm:text-lg md:text-2xl leading-relaxed" style={{ fontFamily: "'Fredoka One', 'Comic Sans MS', cursive" }}>
              <p className="text-2xl md:text-3xl font-black text-fuchsia-600">Welcome to The Great Baby Chain Rumble.</p>
              <p>
                Baby Market Fighter watched the house of cards crumble and bet on the chain with the toughest babies who survived it all.
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-500">👑 That baby was Baby BNB.</p>
              <p>So Baby Market Fighter chose BSC.</p>
            </div>
            <div className="flex flex-wrap gap-3 pt-3">
              <Link
                href="#"
                className="rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white px-6 py-3 text-base font-black shadow-lg hover:shadow-xl transition-transform hover:-translate-y-0.5"
                style={{ fontFamily: "'Fredoka One', 'Comic Sans MS', cursive" }}
              >
                Watch Full Trailer
              </Link>
              <Link
                href="#tokenomics"
                className="rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-white px-6 py-3 text-base font-black shadow-lg hover:shadow-xl transition-transform hover:-translate-y-0.5"
                style={{ fontFamily: "'Fredoka One', 'Comic Sans MS', cursive" }}
              >
                Explore Tokenomics
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
