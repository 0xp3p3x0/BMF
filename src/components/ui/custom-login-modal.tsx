"use client";

import { useLoginWithEmail } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import { XMarkIcon, EnvelopeIcon } from "@heroicons/react/16/solid";

interface CustomLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CustomLoginModal({ isOpen, onClose }: CustomLoginModalProps) {
  const { sendCode, loginWithCode } = useLoginWithEmail();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isEmailSent, setIsEmailSent] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsLoading(false);
      setError(null);
      setEmail("");
      setIsEmailSent(false);
    }
  }, [isOpen]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      await sendCode({ email });
      setIsEmailSent(true);
      setIsLoading(false);
    } catch (err) {
      console.error("Email submission error:", err);
      setError("Failed to send verification code. Please try again.");
      setIsLoading(false);
    }
  };

  const handleCodeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const code = formData.get("code") as string;

    if (!code.trim()) {
      setError("Please enter the verification code");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await loginWithCode({ code });
      onClose();
    } catch (err) {
      console.error("Code verification error:", err);
      setError("Invalid verification code. Please try again.");
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E2E3F0] px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-900">Sign In</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
            disabled={isLoading}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-8">
          {isEmailSent ? (
            <div className="space-y-6">
              <div>
                <p className="text-center text-gray-600 mb-2">
                  We&apos;ve sent a verification code to:
                </p>
                <p className="text-center font-semibold text-gray-900 break-all">{email}</p>
              </div>

              <form onSubmit={handleCodeSubmit} className="space-y-4">
                <div>
                  <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
                    Verification Code
                  </label>
                  <input
                    type="text"
                    id="code"
                    name="code"
                    placeholder="000000"
                    maxLength={6}
                    className="w-full px-4 py-2 border border-[#E2E3F0] rounded-lg text-center text-2xl tracking-widest focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
                    disabled={isLoading}
                    autoFocus
                  />
                </div>

                {error && (
                  <div className="rounded-lg bg-red-50 border border-red-200 p-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-lg bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] py-3 px-4 font-semibold text-white transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      <span>Verifying...</span>
                    </div>
                  ) : (
                    "Verify Code"
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsEmailSent(false);
                    setEmail("");
                    setError(null);
                  }}
                  disabled={isLoading}
                  className="w-full text-sm text-[#6366F1] hover:underline disabled:opacity-50"
                >
                  Back to email
                </button>
              </form>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-center text-gray-600">
                Sign in with your email to access your wallet and manage your accounts.
              </p>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError(null);
                      }}
                      placeholder="you@example.com"
                      className="w-full pl-10 pr-4 py-2 border border-[#E2E3F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
                      disabled={isLoading}
                      autoFocus
                    />
                  </div>
                </div>

                {error && (
                  <div className="rounded-lg bg-red-50 border border-red-200 p-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-lg bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] py-3 px-4 font-semibold text-white transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      <span>Sending code...</span>
                    </div>
                  ) : (
                    "Continue with Email"
                  )}
                </button>
              </form>

              <div className="flex items-center gap-3">
                <div className="flex-1 border-t border-[#E2E3F0]"></div>
                <p className="text-sm text-gray-500">Built with</p>
                <div className="flex-1 border-t border-[#E2E3F0]"></div>
              </div>

              <div className="space-y-2">
                <FeatureItem
                  icon="🔐"
                  title="Email Verification"
                  description="Secure code-based authentication"
                />
                <FeatureItem
                  icon="👤"
                  title="User Management"
                  description="Manage your account and recovery"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-[#E2E3F0] px-6 py-4">
          <p className="text-center text-xs text-gray-500">
            Powered by{" "}
            <a
              href="https://privy.io"
              target="_blank"
              rel="noreferrer"
              className="text-[#6366F1] hover:underline"
            >
              Privy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-lg mt-1">{icon}</span>
      <div>
        <p className="font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
