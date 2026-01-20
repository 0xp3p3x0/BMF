"use client";

import { usePrivy } from "@privy-io/react-auth";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";

import { FullScreenLoader } from "@/components/ui/fullscreen-loader";
import { Header } from "@/components/ui/header";
import { CustomLoginModal } from "@/components/ui/custom-login-modal";
import CreateAWallet from "@/components/sections/create-a-wallet";
import FundWallet from "@/components/sections/fund-wallet";
import LinkAccounts from "@/components/sections/link-accounts";
import UnlinkAccounts from "@/components/sections/unlink-accounts";
import WalletActions from "@/components/sections/wallet-actions";
import SessionSigners from "@/components/sections/session-signers";
import WalletManagement from "@/components/sections/wallet-management";
import MFA from "@/components/sections/mfa";

function Home() {
  const { ready, authenticated } = usePrivy();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (ready) {
      setIsLoaded(true);
    }
  }, [ready]);

  if (!ready) {
    return <FullScreenLoader />;
  }

  return (
    <div className={`${authenticated ? 'bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 min-h-screen' : 'bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 h-screen overflow-hidden'}`}>
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
      <Header authenticated={authenticated} onLoginClick={() => setIsLoginModalOpen(true)} />
      
      {/* Landing Page - Always Visible */}
      <section className="w-full flex flex-row justify-center items-center min-h-screen relative fade-in pt-[60px]">
        {/* Decorative blur circles */}
        <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-purple-300 opacity-50 blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-pink-300 opacity-40 blur-2xl"></div>
        <div className="absolute top-1/3 right-10 w-20 h-20 rounded-full bg-yellow-300 opacity-30 blur-xl"></div>

        <Image
          src="/background.jpg"
          alt="Background"
          fill
          style={{ objectFit: "cover", zIndex: 0 }}
          priority
          className="opacity-80"
        />
        
        <div className="z-10 flex flex-col items-center justify-center w-full h-full px-4">
          {/* Main title with animation */}
          <div className="slide-in-up text-center mb-12">
            <Image
              src="/title.png"
              alt="Baby Market Fighter"
              width={500}
              height={350}
              className="drop-shadow-lg hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </div>
      </section>

      {/* Authenticated Content Section */}
      {authenticated && (
        <section className="w-full py-16 px-4 fade-in">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <CreateAWallet />
                <FundWallet />
                <LinkAccounts />
                <UnlinkAccounts />
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <WalletActions />
                <SessionSigners />
                <WalletManagement />
                <MFA />
              </div>
            </div>
          </div>
        </section>
      )}

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
