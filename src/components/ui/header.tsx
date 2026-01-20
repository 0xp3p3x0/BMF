import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { usePrivy } from "@privy-io/react-auth";
import { useState, useRef, useEffect } from "react";


interface HeaderProps {
  authenticated: boolean;
  onLoginClick?: () => void;
}

export function Header({ authenticated, onLoginClick }: HeaderProps) {
  const { user, logout } = usePrivy();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"profile" | "social" | "wallets">("profile");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = ["About", "Games", "Tokenomics", "Roadmap", "Team"];

  // Safe email getter
  const getEmailString = () => {
    if (typeof user?.email === "string") return user.email;
    if (typeof user?.email?.address === "string") return user.email.address;
    return null;
  };

  const emailString = getEmailString();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const socialAccounts = [
    { name: "Twitter", connected: false },
    { name: "Discord", connected: false },
    { name: "Telegram", connected: false },
    { name: "Instagram", connected: false },
  ];

  const wallets = user?.linkedAccounts?.filter((acc: any) => typeof acc?.type === "string" && acc.type === "wallet") || [];

  return (
    <header
      className={`fixed top-0 left-0 w-full flex flex-row justify-between items-center px-4 sm:px-6 z-50 h-14 sm:h-[60px] ${
        authenticated === true
          ? "bg-transparent border-none"
          : "bg-transparent border-none"
      }`}
    >
      {/* Left side - Logo/Title */}
      <div className="flex flex-row items-center gap-2 h-[32px]">
        {authenticated === true && (
          <div className="text-medium hidden sm:flex h-[28px] items-center justify-center rounded-full border-2 border-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-white px-[0.75rem] text-[0.875rem] sm:text-[1rem] font-bold shadow-lg">
            Baby Market Fighter
          </div>
        )}
      </div>

      {/* Center - Navigation (hidden on mobile) */}
      {authenticated === true && (
        <div className="hidden md:flex flex-row items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500 hover:bg-clip-text transition-all duration-300 ease-in-out font-bold text-xl sm:text-lg cursor-pointer pb-1 border-b-2 border-transparent hover:border-b-2 hover:border-pink-400 hover:scale-110 transform"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Right side */}
      <div className="flex flex-row justify-end items-center gap-2 sm:gap-4 h-9 relative">
        {/* Mobile Menu Button */}
        {authenticated === true && (
          <div className="md:hidden" ref={mobileMenuRef}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-gradient-to-br hover:from-purple-200 hover:to-pink-200 rounded-lg transition-all duration-300 ease-in-out hover:scale-110 transform"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-5 w-5 text-pink-600 font-bold" />
              ) : (
                <Bars3Icon className="h-5 w-5 text-purple-600 font-bold" />
              )}
            </button>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 rounded-2xl shadow-xl border-2 border-pink-300 py-2 z-50">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-4 py-2 text-base text-gray-700 hover:bg-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500 hover:bg-clip-text font-bold transition-all duration-300 ease-in-out rounded-lg mx-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        {authenticated === true && user ? (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 sm:gap-2 hover:bg-gradient-to-r hover:from-purple-200 hover:via-pink-200 hover:to-yellow-200 px-2 sm:px-3 py-2 rounded-full transition-all duration-300 ease-in-out hover:scale-110 transform shadow-md hover:shadow-lg"
            >
              {/* User Avatar */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white text-xs sm:text-sm font-bold overflow-hidden flex-shrink-0">
                {emailString ? emailString.charAt(0).toUpperCase() : "U"}
              </div>
              <ChevronDownIcon className={`h-3 w-3 sm:h-4 sm:w-4 text-gray-600 transition-transform duration-300 ease-in-out hidden sm:block ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu - Profile Settings */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 rounded-3xl shadow-2xl border-2 border-pink-300 py-0 animate-in fade-in-50 zoom-in-95 duration-300 max-h-[80vh] overflow-y-auto">
                {/* User Info */}
                <div className="px-4 sm:px-6 py-3 sm:py-4 border-b-2 border-pink-300 flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white text-base sm:text-lg font-bold flex-shrink-0">
                    {emailString ? emailString.charAt(0).toUpperCase() : "U"}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-xs sm:text-sm text-gray-900 truncate">
                      {emailString ? emailString.split("@")[0] : "User"}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {emailString ? emailString : "No email"}
                    </p>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-0 border-b-2 border-pink-300">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`flex-1 px-3 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-sm transition-all duration-300 ease-in-out ${activeTab === "profile" ? "text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text border-b-4 border-pink-500" : "text-gray-600 hover:text-pink-600"}`}
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => setActiveTab("social")}
                    className={`flex-1 px-3 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-sm transition-all duration-300 ease-in-out ${activeTab === "social" ? "text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text border-b-4 border-pink-500" : "text-gray-600 hover:text-pink-600"}`}
                  >
                    Social
                  </button>
                  <button
                    onClick={() => setActiveTab("wallets")}
                    className={`flex-1 px-3 sm:px-4 py-2 sm:py-3 font-bold text-xs sm:text-sm transition-all duration-300 ease-in-out ${activeTab === "wallets" ? "text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text border-b-4 border-pink-500" : "text-gray-600 hover:text-pink-600"}`}
                  >
                    Wallets
                  </button>
                </div>

                {/* Content */}
                <div className="px-4 sm:px-6 py-3 sm:py-4 max-h-60 overflow-y-auto space-y-2">
                  {/* Profile Tab */}
                  {activeTab === "profile" && (
                    <div className="space-y-3">
                      <div className="py-2 space-y-2">
                        <label className="text-xs font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">ACCOUNT SETTINGS</label>
                        <Link
                          href="/settings"
                          className="w-full text-left block px-3 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200 rounded-lg transition-all duration-300 ease-in-out font-semibold mt-2"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Settings
                        </Link>
                        <button className="w-full text-left px-3 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gradient-to-r hover:from-pink-200 hover:to-yellow-200 rounded-lg transition-all duration-300 ease-in-out font-semibold">
                          Help & Support
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Social Tab */}
                  {activeTab === "social" && (
                    <div className="space-y-2">
                      {socialAccounts.map((account) => (
                        <div key={account.name} className="flex items-center justify-between p-2 sm:p-3 border-2 border-pink-300 rounded-2xl hover:border-purple-400 transition-all duration-300 ease-in-out bg-white hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50">
                          <span className="text-xs sm:text-sm font-bold text-gray-900">{account.name}</span>
                          <button className={`px-2 sm:px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ease-in-out transform hover:scale-105 ${
                            account.connected
                              ? "bg-gradient-to-r from-red-300 to-red-400 text-white hover:shadow-lg"
                              : "bg-gradient-to-r from-purple-300 to-pink-300 text-white hover:shadow-lg"
                          }`}>
                            {account.connected ? "Disconnect" : "Connect"}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Wallets Tab */}
                  {activeTab === "wallets" && (
                    <div className="space-y-2">
                      {wallets && wallets.length > 0 ? (
                        <>
                          {wallets.map((wallet: any, index: number) => (
                            <div key={index} className="flex items-center justify-between p-2 sm:p-3 border-2 border-pink-300 rounded-2xl hover:border-purple-400 transition-all duration-300 ease-in-out bg-white hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50">
                              <span className="text-xs sm:text-sm font-bold text-gray-900 capitalize">
                                {typeof wallet?.type === "string" ? wallet.type : "Wallet"}
                              </span>
                              <button className="px-2 sm:px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-red-300 to-red-400 text-white hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                                Remove
                              </button>
                            </div>
                          ))}
                          <button className="w-full px-3 py-2 rounded-2xl border-3 border-dashed border-purple-400 text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text hover:bg-gradient-to-r hover:from-pink-100 hover:to-yellow-100 transition-all duration-300 ease-in-out text-xs font-bold mt-2 hover:scale-105 transform">
                            + Add Wallet
                          </button>
                        </>
                      ) : (
                        <div className="text-center py-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl transition-all duration-300 ease-in-out">
                          <p className="text-xs font-bold text-gray-700 mb-3">No wallets connected yet!</p>
                          <button className="w-full px-3 py-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-white text-xs font-bold hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                            Connect Wallet
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="border-t-2 border-pink-300 px-4 sm:px-6 py-2 sm:py-3">
                  <button
                    onClick={() => {
                      logout();
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-center px-3 py-2 text-xs sm:text-sm text-white font-bold bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 rounded-full transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : authenticated !== true && onLoginClick ? (
          <button
            onClick={onLoginClick}
            className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-white px-4 sm:px-7 py-2.5 rounded-full hover:shadow-lg hover:scale-110 transform transition-all duration-300 ease-in-out font-bold text-sm sm:text-base whitespace-nowrap"
          >
            Login
          </button>
        ) : null}
      </div>
    </header>
  );
}
