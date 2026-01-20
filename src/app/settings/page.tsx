"use client";

import { useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";

export default function SettingsPage() {
  const { user } = usePrivy();
  const [activeTab, setActiveTab] = useState<"profile" | "security" | "preferences" | "wallets">("profile");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const getEmailString = () => {
    if (typeof user?.email === "string") return user.email;
    if (typeof user?.email?.address === "string") return user.email.address;
    return null;
  };

  const emailString = getEmailString();

  const tabs = [
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "security", label: "Security", icon: "🔒" },
    { id: "preferences", label: "Preferences", icon: "⚙️" },
    { id: "wallets", label: "Wallets", icon: "💼" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 pt-24 pb-16">
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeIn 0.8s ease-in-out; }
        .slide-in-up { animation: slideInUp 1s ease-out 0.3s both; }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 fade-in flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-gradient-to-r hover:from-purple-300 hover:to-pink-300 rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
            <ChevronLeftIcon className="h-6 w-6 text-white" />
          </Link>
          <div>
            <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 bg-clip-text">
              Settings
            </h1>
            <p className="text-sm text-gray-700 font-semibold mt-1">Manage your account & preferences</p>
          </div>
        </div>

        {/* Main Container */}
        <div className="flex flex-col lg:flex-row gap-6 slide-in-up">
          {/* Sidebar Navigation */}
          <div className="lg:w-64">
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 bg-white lg:bg-transparent rounded-2xl lg:rounded-none p-2 lg:p-0 shadow-lg lg:shadow-none border-2 border-pink-200 lg:border-0 sticky top-24 lg:static">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 font-bold whitespace-nowrap lg:whitespace-normal text-sm ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white shadow-lg scale-105"
                      : "bg-gradient-to-br from-purple-50 to-pink-50 text-gray-700 hover:from-purple-100 hover:to-pink-100 border-2 border-pink-200"
                  }`}
                >
                  <span className="text-xl">{tab.icon}</span>
                  <span className="hidden lg:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="bg-white rounded-3xl shadow-xl p-8 border-3 border-pink-300 fade-in">
                <h2 className="text-3xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-8">👤 Profile</h2>
                <div className="space-y-6">
                  {/* Avatar & Email */}
                  <div className="flex items-center gap-6 p-6 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 rounded-3xl border-3 border-pink-300 shadow-lg">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 flex items-center justify-center text-white text-3xl font-black flex-shrink-0 shadow-lg">
                      {emailString ? emailString.charAt(0).toUpperCase() : "U"}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-black text-purple-600 uppercase tracking-wider">Email</p>
                      <p className="font-bold text-gray-900 text-lg">{emailString || "Not set"}</p>
                      <p className="text-xs text-gray-600 mt-1 font-semibold">✓ Verified</p>
                    </div>
                  </div>

                  {/* Username */}
                  <div>
                    <label className="block text-xs font-black text-purple-600 uppercase mb-2 tracking-wider">Username</label>
                    <input type="text" placeholder="Set your username" defaultValue={emailString ? emailString.split("@")[0] : ""} className="w-full px-5 py-3 rounded-2xl border-2 border-pink-300 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-300 font-bold text-gray-900" />
                  </div>

                  {/* Bio */}
                  <div>
                    <label className="block text-xs font-black text-purple-600 uppercase mb-2 tracking-wider">Bio</label>
                    <textarea placeholder="Tell us about yourself..." rows={4} className="w-full px-5 py-3 rounded-2xl border-2 border-pink-300 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-300 font-bold text-gray-900 resize-none" />
                  </div>

                  {/* Save Button */}
                  <button className="w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white font-black text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 shadow-xl">
                    💾 Save Profile
                  </button>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="bg-white rounded-3xl shadow-xl p-8 border-3 border-pink-300 fade-in">
                <h2 className="text-3xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-8">🔒 Security</h2>
                <div className="space-y-6">
                  
                  {/* Two Factor */}
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-pink-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-900">🛡️ Two-Factor Authentication</p>
                        <p className="text-sm text-gray-600 mt-1 font-semibold">Add extra security layer</p>
                      </div>
                      <button onClick={() => setTwoFactorEnabled(!twoFactorEnabled)} className={`relative w-14 h-7 rounded-full transition-all duration-300 shadow-md ${twoFactorEnabled ? "bg-green-500" : "bg-gray-400"}`}>
                        <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full transition-transform duration-300 shadow-md ${twoFactorEnabled ? "translate-x-7" : "translate-x-0.5"}`} />
                      </button>
                    </div>
                  </div>

                  {/* Active Sessions */}
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">📱 Active Sessions</h3>
                    <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl border-2 border-pink-300 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-gray-900">Current Device</p>
                        <p className="text-xs text-gray-600 mt-1 font-semibold">Chrome on Windows</p>
                      </div>
                      <span className="text-xs font-bold text-white bg-gradient-to-r from-green-500 to-green-600 px-3 py-1 rounded-full">🟢 Active</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Preferences Tab */}
            {activeTab === "preferences" && (
              <div className="bg-white rounded-3xl shadow-xl p-8 border-3 border-pink-300 fade-in">
                <h2 className="text-3xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-8">⚙️ Preferences</h2>
                <div className="space-y-6">
                  {/* Notifications */}
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-pink-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-900">🔔 Notifications</p>
                        <p className="text-sm text-gray-600 mt-1 font-semibold">Get account updates</p>
                      </div>
                      <button onClick={() => setNotificationsEnabled(!notificationsEnabled)} className={`relative w-14 h-7 rounded-full transition-all duration-300 shadow-md ${notificationsEnabled ? "bg-green-500" : "bg-gray-400"}`}>
                        <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full transition-transform duration-300 shadow-md ${notificationsEnabled ? "translate-x-7" : "translate-x-0.5"}`} />
                      </button>
                    </div>
                  </div>

                  {/* Email Preferences */}
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-pink-300">
                    <h3 className="font-bold text-gray-900 mb-4">📧 Email Preferences</h3>
                    <div className="space-y-3">
                      {["📢 Marketing emails", "💳 Transaction updates", "🔐 Security alerts"].map((pref) => (
                        <label key={pref} className="flex items-center gap-3 cursor-pointer hover:bg-white p-3 rounded-lg transition-all">
                          <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-2 border-pink-400 accent-pink-600 cursor-pointer" />
                          <span className="text-sm font-bold text-gray-700">{pref}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Theme */}
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-pink-300">
                    <h3 className="font-bold text-gray-900 mb-4">🎨 Theme Preference</h3>
                    <div className="flex gap-3 flex-wrap">
                      {["☀️ Light", "🌙 Dark", "🔄 Auto"].map((theme) => (
                        <button key={theme} className="px-5 py-2 rounded-xl border-2 border-pink-400 text-sm font-bold text-gray-700 bg-white hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200 transition-all duration-300 hover:scale-105 shadow-lg">
                          {theme}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Wallets Tab */}
            {activeTab === "wallets" && (
              <div className="bg-white rounded-3xl shadow-xl p-8 border-3 border-pink-300 fade-in">
                <h2 className="text-3xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-8">💼 Wallets</h2>
                <div className="space-y-6">
                  {/* Connected Wallets */}
                  <div>
                    <h3 className="font-bold text-gray-900 mb-4">🔗 Connected Wallets</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl border-2 border-pink-300">
                        <div>
                          <p className="text-sm font-black text-gray-900">Ethereum Wallet</p>
                          <p className="text-xs text-gray-600 mt-1 font-mono font-bold">0x742d...Cc47</p>
                        </div>
                        <button className="px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-red-400 to-red-500 text-white hover:shadow-lg transition-all duration-300 hover:scale-105">
                          ✕ Disconnect
                        </button>
                      </div>
                      <button className="w-full px-6 py-4 rounded-2xl border-3 border-dashed border-purple-400 text-purple-600 font-black hover:bg-purple-50 transition-all duration-300 hover:scale-105">
                        ➕ Add Wallet
                      </button>
                    </div>
                  </div>

                  {/* Network Settings */}
                  <div>
                    <label className="block text-sm font-black text-purple-600 uppercase mb-3 tracking-wider">🌐 Default Network</label>
                    <select className="w-full px-5 py-3 rounded-2xl border-2 border-pink-300 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-300 font-bold text-gray-900 bg-white">
                      <option>Ethereum Mainnet</option>
                      <option>Polygon</option>
                      <option>Arbitrum</option>
                      <option>Optimism</option>
                    </select>
                  </div>

                  {/* Gas Settings */}
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">⛽ Gas Settings</h3>
                    <div className="flex gap-3 flex-wrap">
                      {["🐢 Slow", "⚡ Standard", "🚀 Fast"].map((speed) => (
                        <button key={speed} className="flex-1 min-w-24 px-4 py-3 rounded-xl border-2 border-pink-300 text-sm font-black text-gray-700 bg-white hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200 transition-all duration-300 hover:scale-105 shadow-lg">
                          {speed}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
