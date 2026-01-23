"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useState } from "react";

import { FullScreenLoader } from "@/components/ui/fullscreen-loader";
import { Header } from "@/components/ui/header";
import { CustomLoginModal } from "@/components/ui/custom-login-modal";
import HeroSection from "@/components/HeroCard/HeroSection";

function HerosPage() {
  const { ready, authenticated } = usePrivy();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  if (!ready) {
    return <FullScreenLoader />;
  }

  return (
    <div className={`${authenticated ? "bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 min-h-screen" : "bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 min-h-screen"}`}>
      <Header authenticated={authenticated} onLoginClick={() => setIsLoginModalOpen(true)} />
      <main className="fade-in">
        <HeroSection />
      </main>
      <CustomLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
}

export default HerosPage;
