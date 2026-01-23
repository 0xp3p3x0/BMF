"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Status = "Planned" | "In Progress" | "Completed";

type Milestone = {
  id: string;
  title: string;
  year: string;
  status: Status;
  items: { text: string; done: boolean }[];
  position: { top: string; left: string };
};

const milestones: Milestone[] = [
  {
    id: "q1",
    title: "Genesis Launch",
    year: "Q1 2026",
    status: "In Progress",
    items: [
      { text: "Fair launch on BSC", done: true },
      { text: "Website & Privy wallet integration", done: true },
      { text: "First three mini-games live", done: true },
      { text: "Community building on X & Telegram", done: false },
    ],
    position: { top: "21%", left: "21%" },
  },
  {
    id: "q2",
    title: "Planned",
    year: "Q2 2026",
    status: "Planned",
    items: [
      { text: "NFT Baby Fighters mint", done: false },
      { text: "Additional mini-games", done: false },
      { text: "In-game $BMF rewards", done: false },
      { text: "First tournaments", done: false },
    ],
    position: { top: "27%", left: "70%" },
  },
  {
    id: "q3",
    title: "Growth Phase",
    year: "Q3 2026",
    status: "Planned",
    items: [
      { text: "Staking & yield farming", done: false },
      { text: "CEX listings target", done: false },
      { text: "KOL partnerships", done: false },
      { text: "Cross-promotions", done: false },
    ],
    position: { top: "52%", left: "19%" },
  },
  {
    id: "q4",
    title: "Community Takeover",
    year: "Q4 2026",
    status: "Planned",
    items: [
      { text: "DAO governance launch", done: false },
      { text: "User-generated content tools", done: false },
      { text: "Major ecosystem integrations", done: false },
    ],
    position: { top: "71%", left: "62%" },
  },
];

const statusStyles: Record<Status, string> = {
  Planned: "bg-slate-200 text-slate-700",
  "In Progress": "bg-amber-200 text-amber-800",
  Completed: "bg-emerald-200 text-emerald-800",
};

const floatVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 0.6,
    y: [0, -8, 0],
    transition: {
      delay: i * 0.2,
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  }),
} as const;

const dialogVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 260, damping: 18 },
  },
  exit: { opacity: 0, scale: 0.95, y: 6, transition: { duration: 0.15 } },
} as const;

export default function RoadmapSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="roadmap"
      className="relative w-full overflow-visible px-4 py-8"
      onClick={() => setActiveId(null)}
    >
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

      <div className="relative my-4 mx-auto flex max-w-6xl flex-col items-center gap-10 ">
        <motion.h2
          initial={{ opacity: 0, y: 14, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 240, damping: 16 }}
          className="text-center text-3xl font-black tracking-tight text-[#5B4B8A] sm:text-4xl md:text-5xl"
          style={{ fontFamily: "'Fredoka One', 'Comic Sans MS', cursive" }}
        >
          Roadmap – Growing Up Fast
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full overflow-visible rounded-3xl bg-white/70 shadow-xl ring-1 ring-white/60 backdrop-blur"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Desktop/Tablet: roadmap illustration with hotspots */}
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] overflow-visible hidden sm:block">
            <Image
              src="/roadmap-placeholder.webp"
              alt="Cute roadmap illustration of Baby Market Fighter growing up"
              fill
              priority
              className="object-cover"
            />

            {milestones.map((milestone) => (
              <div
                key={milestone.id}
                className="absolute"
                style={{
                  top: milestone.position.top,
                  left: milestone.position.left,
                  transform: "translate(-30%, -80%)",
                }}
              >
                <button
                  type="button"
                  className="group relative h-10 w-36 rounded-xl bg-[#A7C7E7] shadow-lg shadow-[#A7C7E7]/50 ring-4 ring-white/80 transition hover:scale-110 hover:bg-[#FFD1DC] focus:outline-none focus:ring-4 focus:ring-[#FFD1DC] active:scale-95 opacity-0"
                  onMouseEnter={() => setActiveId(milestone.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveId((prev) => (prev === milestone.id ? null : milestone.id));
                  }}
                  aria-label={`${milestone.year} – ${milestone.title}`}
                >

                </button>

                <AnimatePresence>
                  {activeId === milestone.id && (
                    <motion.div
                      variants={dialogVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute z-20 mt-3 w-64 max-w-xs -translate-x-1/2 sm:translate-x-0"
                    >
                      <div className="relative rounded-2xl bg-white/95 p-4 shadow-2xl ring-1 ring-[#A7C7E7]/40">
                        <div className="absolute -top-2 left-6 h-3 w-3 rotate-45 rounded-sm bg-white/95 ring-1 ring-[#A7C7E7]/40" />
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-xs font-semibold uppercase tracking-wide text-[#5B4B8A]">
                            {milestone.year}
                          </p>
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[milestone.status]}`}>
                            {milestone.status}
                          </span>
                        </div>
                        <h4
                          className="mt-2 text-lg font-black text-[#FF7BAC]"
                          style={{ fontFamily: "'Fredoka One', 'Comic Sans MS', cursive" }}
                        >
                          {milestone.title}
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm text-[#4b5563]">
                          {milestone.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span
                                className={`mt-1 inline-block h-2.5 w-2.5 rounded-full ${item.done ? "bg-blue-500" : "bg-slate-300"
                                  }`}
                              />
                              <span>{item.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile: vertical milestone cards (no hidden hotspots) */}
          <div className="block sm:hidden mt-6 space-y-4 px-1">
            {milestones.map((m) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl bg-white/95 p-4 shadow-lg ring-1 ring-[#A7C7E7]/30"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#5B4B8A]">{m.year}</p>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[m.status]}`}>{m.status}</span>
                </div>
                <h4
                  className="mt-1 text-lg font-black text-[#FF7BAC]"
                  style={{ fontFamily: "'Fredoka One', 'Comic Sans MS', cursive" }}
                >
                  {m.title}
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-[#4b5563]">
                  {m.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span
                        className={`mt-1 inline-block h-2.5 w-2.5 rounded-full ${item.done ? 'bg-blue-500' : 'bg-slate-300'}`}
                      />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}