"use client";

import { useState } from "react";
import { CustomLoginModal } from "@/components/ui/custom-login-modal";
import { usePrivy } from "@privy-io/react-auth";

export default function LoginModalDemo() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { user, logout } = usePrivy();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Login Modal Demo
          </h1>
          <p className="text-gray-600 mb-8">
            Using Privy API for secure authentication
          </p>

          {user ? (
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-800">✓ Logged in successfully</p>
                <p className="text-xs text-green-700 mt-2">
                  User ID: {user.id}
                </p>
              </div>

              <button
                onClick={() => logout()}
                className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors"
              >
                Log Out
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="w-full px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
            >
              Open Login Modal
            </button>
          )}
        </div>
      </div>

      <CustomLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
}
