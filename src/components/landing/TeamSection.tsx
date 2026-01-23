"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
interface TeamMember {
  id: number;
  img: string;
  name: string;
  role: string;
  description: string;
}

export default function TeamSection() {
  const [selected, setSelected] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      img: "/teams/team_3.png",
      name: "Steven Robinson",
      role: "CTO",
      description: "Leads the technology strategy and development efforts, ensuring innovation and scalability across all technical platforms."
    },
    {
      id: 2,
      img: "/teams/team_4.png",
      name: "Mari Johnson",
      role: "Community Manager",
      description: "Engages with the community to foster relationships, gather feedback, and build a loyal user base around our product."
    },
    {
      id: 3,
      img: "/teams/team_5.png",
      name: "Bob",
      role: "UI/UX Designer",
      description: "Designs intuitive user interfaces that prioritize user experience, ensuring a seamless and aesthetically pleasing product."
    },
    {
      id: 4,
      img: "/teams/team_6.png",
      name: "Susan Williams",
      role: "Lead Developer",
      description: "Leads the development team in building robust, efficient, and high-performance applications with a focus on clean code and scalability."
    },
    {
      id: 5,
      img: "/teams/team_2.png",
      name: "James Braun",
      role: "CMO",
      description: "Develops and executes marketing strategies, creating campaigns that resonate with customers and drive growth across all channels."
    },
    {
      id: 6,
      img: "/teams/team_1.png",
      name: "Andrew Charles",
      role: "CEO",
      description: "Guides the company's vision and overall strategy, aligning the team to achieve business goals and drive sustainable growth."
    },
  ];
  const selectedMember = teamMembers.find((m) => m.id === selected);

  return (
    <section id="team" className="relative w-full pt-16 pb-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent via-sky-50/30 to-transparent">
      {/* Light Saber Divider at top */}
      <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-center overflow-hidden">
        <style>{`
          .lightsaber-glow {
            position: relative;
            height: 6px;
            width: 100%;
            background: linear-gradient(to right, #0066ff, #ff1493);
            filter: blur(5px);
          }
          .lightsaber-glow::before {
            content: '';
            position: absolute;
            top: -3px;
            left: 0;
            right: 0;
            height: 6px;
            background: linear-gradient(to right, #0066ff, #ff1493);
            filter: blur(8px);
            opacity: 0.8;
          }
        `}</style>
        <div className="lightsaber-glow w-full"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 14, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 240, damping: 16 }}
          className="text-center text-3xl font-black tracking-tight text-[#5B4B8A] sm:text-4xl md:text-5xl mb-24"
          style={{ fontFamily: "'Fredoka One', 'Comic Sans MS', cursive" }}
        >
          Our Team – Growing Together
        </motion.h2>

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Circular container with avatars */}
          <div
            style={{ "--total": teamMembers.length } as React.CSSProperties}
            className="relative w-80 h-80 md:w-96 md:h-96"
          >
            {/* Center "The Team" badge - transforms to selected avatar */}
            <div className="absolute inset-0 m-auto w-40 h-40 rounded-full border-4 border-white/40 overflow-hidden shadow-2xl z-10 transition-all duration-500">
              {selectedMember ? (
                <>
                  {/* Selected avatar image as background */}
                  <img
                    src={selectedMember.img}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Info text curved around the edge */}
                  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                      />
                    </defs>
                    <text className="text-[14px] font-bold fill-white uppercase tracking-wider" style={{ paintOrder: 'stroke', stroke: '#000', strokeWidth: '2px' }}>
                      <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                        {selectedMember.name} - {selectedMember.role}
                      </textPath>
                    </text>
                  </svg>
                </>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-sky-500 to-sky-600 grid place-content-center">
                  <p className="uppercase font-black text-white text-2xl tracking-wider">The Team</p>
                </div>
              )}
            </div>

            {/* Avatar hotspots arranged in circle */}
            {teamMembers.map((member) => (
              <button
                key={member.id}
                onClick={() => setSelected(selected === member.id ? null : member.id)}
                className="avatar-btn absolute w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-4 ring-white/60 shadow-lg transition-all duration-500 cursor-pointer hover:ring-white hover:scale-110 active:scale-95"
                style={{ "--i": member.id } as React.CSSProperties}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${selected === member.id ? "scale-125 brightness-110" : "scale-100 brightness-100"
                    }`}
                />
                {selected === member.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                )}
              </button>
            ))}

            {/* Avatar circular positioning CSS */}
            <style>{`
            .avatar-btn {
              --radius: 12rem;
              --d: calc(var(--i) / var(--total));
              --angle: calc((360deg * var(--d)) - 90deg);
              --x: calc(var(--radius) * cos(var(--angle)));
              --y: calc(var(--radius) * sin(var(--angle)));
              
              left: 50%;
              top: 50%;
              transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y)));
            }
            @media (max-width: 768px) {
              .avatar-btn {
                --radius: 7.5rem;
              }
            }
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fadeIn {
              animation: fadeIn 0.5s ease-out;
            }
            .animate-slideUp {
              animation: slideUp 0.4s ease-out;
            }
          `}</style>
          </div>

          {/* Description panel on the right */}
          <div className="w-full lg:w-96 min-h-[400px] bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl mx-8 p-8 transition-all duration-500 border border-sky-100">
            <AnimatePresence mode="wait">
              {selectedMember ? (
                <motion.div
                  key={selectedMember.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={selectedMember.img}
                      alt={selectedMember.name}
                      className="w-20 h-20 rounded-full object-cover ring-4 ring-sky-500/30"
                    />
                    <div>
                      <h3 className="text-2xl font-black text-sky-600">{selectedMember.name}</h3>
                      <p className="text-sky-500 font-semibold">{selectedMember.role}</p>
                    </div>
                  </div>
                  <div className="border-t border-sky-200 pt-6">
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">About</h4>
                    <p className="text-gray-700 leading-relaxed">{selectedMember.description}</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-600 mb-2">Meet Our Team</h3>
                  <p className="text-gray-500 text-sm">Click on any avatar to learn more about our team members</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
