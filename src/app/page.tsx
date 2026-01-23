"use client";

import { usePrivy } from "@privy-io/react-auth";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

import { FullScreenLoader } from "@/components/ui/fullscreen-loader";
import { Header } from "@/components/ui/header";
import { CustomLoginModal } from "@/components/ui/custom-login-modal";
import AboutSection from "@/components/landing/AboutSection";
import GamesSection from "@/components/landing/GamesSection";
import TokenomicsSection from "@/components/landing/TokenomicsSection";
import RoadmapSection from "@/components/landing/RoadmapSection";
import TeamSection from "@/components/landing/TeamSection";
import Footer from "@/components/landing/Footer";

function Home() {
  const { ready, authenticated } = usePrivy();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  if (!ready) {
    return <FullScreenLoader />;
  }

  return (
    <div className={`'bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 min-h-screen' : 'bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 h-screen overflow-hidden'}`}>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .fade-in {
          animation: fadeIn 0.8s ease-in-out;
        }
        .slide-in-up {
          animation: slideInUp 1s ease-out 0.3s both;
        }
        .bounce-animation {
          animation: bounce 3s infinite;
        }
      `}</style>

      {/* Sticky background that stays fixed while scrolling */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: "url('/back_2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Header authenticated={authenticated} onLoginClick={() => setIsLoginModalOpen(true)} />

      {/* Landing Page - Always Visible */}
      <section className="relative w-full min-h-screen overflow-hidden fade-in pt-[60px] pb-12">
        {/* Decorative blur circles and overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/55 via-purple-600/45 to-slate-900/75" />
        <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-fuchsia-400 opacity-70 blur-2xl" />
        <div className="absolute bottom-16 right-10 w-32 h-32 rounded-full bg-pink-400 opacity-65 blur-2xl" />
        <div className="absolute top-1/3 right-8 w-20 h-20 rounded-full bg-amber-300 opacity-55 blur-xl" />

        <Image
          src="/background.jpg"
          alt="Background"
          fill
          style={{ objectFit: "cover", zIndex: 0 }}
          priority
          className="opacity-65"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-10 flex flex-col gap-8 items-center text-center">
          {/* Main title with animation */}
          <div className="slide-in-up mt-12">
            <Image
              src="/title.png"
              alt="Baby Market Fighter"
              width={520}
              height={360}
              className="drop-shadow-lg hover:scale-105 transition-transform duration-300 max-w-xs sm:max-w-md mx-auto"
              priority
            />
          </div>
          
          {/* Story narrative */}
          <div className="slide-in-up w-full text-white drop-shadow-lg" style={{ animationDelay: '0.15s' }}>
            <style>{`
              .story-text {
                font-family: 'Fredoka One', 'Comic Sans MS', cursive;
              }
              .story-bounce {
                animation: bounce 3s infinite;
              }
              .cta-button {
                font-family: 'Fredoka One', 'Comic Sans MS', cursive;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 14px 26px;
                border-radius: 9999px;
                font-weight: 900;
                font-size: 13px;
                transition: all 0.25s ease;
                text-transform: uppercase;
                letter-spacing: 1px;
                border: none;
                cursor: pointer;
                width: 100%;
                max-width: 240px;
              }
              .cta-button:hover {
                transform: translateY(-3px) scale(1.05);
                box-shadow: 0 15px 35px rgba(0,0,0,0.25);
              }
              .cta-button:active {
                transform: scale(0.97);
              }
            `}</style>

            {/* Market section */}
            <div className="mt-10 pt-6 border-t-4 border-yellow-200/70 bg-white/2 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl ring-1 ring-white/30">
              <p className="story-text text-2xl sm:text-4xl font-black mb-3 text-cyan-50">
                📈 Short-Time Market Moves 📉
              </p>
              <p className="story-text text-xl sm:text-3xl font-black mb-2 text-pink-100">
                R Too Hard 4 Traders...
              </p>
              <p className="story-text text-xl sm:text-3xl font-black mb-5 text-lime-100">
                But PERFECT for Baby Fighters! 
              </p>
              
              <p className="text-base sm:text-lg md:text-xl mb-8 opacity-95 leading-relaxed max-w-3xl mx-auto">
                <span className="story-text font-extrabold text-yellow-50">Trading is stressful fr fr.</span> Charts r scary af. Babies don't care – they just SMASH! 💥 Welcome 2 da world's first meme gaming platform powered by REAL crypto market data. LFG! 🚀
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-6">
                <button className="cta-button bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400 text-white hover:from-fuchsia-500 hover:to-rose-500 shadow-2xl">
                  💎 BUY $BMF
                </button>
                <button className="cta-button bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600 shadow-2xl">
                  ⭐ WHITELIST
                </button>
                <button className="cta-button bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 text-white hover:from-amber-400 hover:to-orange-400 shadow-2xl">
                  🎮 PLAY GAME
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <GamesSection />
      <TokenomicsSection />
      <RoadmapSection />
      <TeamSection />
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        limit={1}
        aria-label="Toast notifications"
        style={{ top: 58 }}
      />

      <CustomLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
}

export default Home;
