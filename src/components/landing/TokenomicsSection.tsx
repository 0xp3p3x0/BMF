"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const tokenBreakdown = [
  { label: "Liquidity Pool", percentage: 40, color: "#a855f7", icon: "💧" },
  { label: "Game Rewards & Airdrops", percentage: 25, color: "#ec4899", icon: "🏆" },
  { label: "Marketing & Partnerships", percentage: 15, color: "#eab308", icon: "📢" },
  { label: "Development (vested)", percentage: 10, color: "#8b5cf6", icon: "⚙️" },
  { label: "Team (locked/vested)", percentage: 5, color: "#f97316", icon: "👥" },
  { label: "Initial Burn", percentage: 5, color: "#ef4444", icon: "🔥" }
];

export default function TokenomicsSection() {
  return (
    <section 
      id="tokenomics" 
      className="w-full py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50"
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
            Tokenomics – Simple & Cute
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Visual Chart */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-purple-200">
              {/* Cute Pie Chart Visualization */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                  {/* Generate pie slices */}
                  {tokenBreakdown.reduce((acc, item, index) => {
                    const startAngle = acc.currentAngle;
                    const angle = (item.percentage / 100) * 360;
                    const endAngle = startAngle + angle;
                    
                    const startRad = (startAngle * Math.PI) / 180;
                    const endRad = (endAngle * Math.PI) / 180;
                    
                    const x1 = 100 + 80 * Math.cos(startRad);
                    const y1 = 100 + 80 * Math.sin(startRad);
                    const x2 = 100 + 80 * Math.cos(endRad);
                    const y2 = 100 + 80 * Math.sin(endRad);
                    
                    const largeArc = angle > 180 ? 1 : 0;
                    
                    acc.slices.push(
                      <motion.path
                        key={index}
                        d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`}
                        fill={item.color}
                        stroke="white"
                        strokeWidth="2"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="cursor-pointer"
                      />
                    );
                    
                    acc.currentAngle = endAngle;
                    return acc;
                  }, { slices: [], currentAngle: 0 }).slices}
                  
                  {/* Center circle with cute baby */}
                  <circle cx="100" cy="100" r="30" fill="white" />
                 
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Right: Breakdown List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            {tokenBreakdown.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all border-2 border-purple-100"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md"
                      style={{ backgroundColor: item.color + "33" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.label}</h4>
                    </div>
                  </div>
                  <div className="text-3xl font-black" style={{ color: item.color }}>
                    {item.percentage}%
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Tax Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-300"
            >
              <h4 className="font-black text-purple-600 mb-3 text-lg">Transaction Tax</h4>
              <p className="text-gray-700 leading-relaxed">
                4-6% tax on each transaction goes to liquidity, marketing, burns, and game reward pools. 
                This ensures sustainable growth and keeps the ecosystem healthy!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
