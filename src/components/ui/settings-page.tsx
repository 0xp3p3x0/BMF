"use client";

import { useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { XMarkIcon } from "@heroicons/react/16/solid";

interface SettingsPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsPage({ isOpen, onClose }: SettingsPageProps) {
  const { user } = usePrivy();
  const [activeSettingTab, setActiveSettingTab] = useState<"profile" | "security" | "preferences" | "wallets">("profile");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  if (!isOpen) return null;

  const getEmailString = () => {
    if (typeof user?.email === "string") return user.email;
    if (typeof user?.email?.address === "string") return user.email.address;
    return null;
  };

  const emailString = getEmailString();

  const settingTabs = [
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "security", label: "Security", icon: "🔒" },
    { id: "preferences", label: "Preferences", icon: "⚙️" },
    { id: "wallets", label: "Wallets", icon: "💼" },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose} />

      {/* Settings Panel */}
      <div className="absolute right-0 top-0 h-full w-full sm:w-[500px] bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b-2 border-pink-300 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
            Settings
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gradient-to-br hover:from-purple-200 hover:to-pink-200 rounded-lg transition-all duration-300 ease-in-out"
          >
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Settings Content */}
        <div className="flex h-full">
          {/* Sidebar Tabs */}
          <div className="hidden sm:flex flex-col w-48 border-r-2 border-pink-300 bg-white p-4 gap-2">
            {settingTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSettingTab(tab.id as any)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ease-in-out text-left font-semibold ${
                  activeSettingTab === tab.id
                    ? "bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Mobile Tabs */}
          <div className="sm:hidden w-full">
            <div className="flex overflow-x-auto gap-2 px-4 py-3 border-b-2 border-pink-300 bg-white">
              {settingTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSettingTab(tab.id as any)}
                  className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 ease-in-out ${
                    activeSettingTab === tab.id
                      ? "bg-gradient-to-r from-purple-400 to-pink-400 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200"
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-6 overflow-y-auto max-h-screen">
            {/* Profile Tab */}
            {activeSettingTab === "profile" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Profile Information</h3>
                  <div className="space-y-4">
                    {/* User Avatar & Email */}
                    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border-2 border-pink-200">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                        {emailString ? emailString.charAt(0).toUpperCase() : "U"}
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Email Address</p>
                        <p className="font-bold text-gray-900">{emailString || "No email"}</p>
                      </div>
                    </div>

                    {/* Username */}
                    <div className="p-4 bg-white rounded-2xl border-2 border-pink-200">
                      <label className="text-sm font-bold text-gray-600">Username</label>
                      <input
                        type="text"
                        placeholder="Set your username"
                        defaultValue={emailString ? emailString.split("@")[0] : ""}
                        className="w-full mt-2 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-pink-400 transition-colors"
                      />
                    </div>

                    {/* Bio */}
                    <div className="p-4 bg-white rounded-2xl border-2 border-pink-200">
                      <label className="text-sm font-bold text-gray-600">Bio</label>
                      <textarea
                        placeholder="Tell us about yourself..."
                        rows={3}
                        className="w-full mt-2 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-pink-400 transition-colors"
                      />
                    </div>

                    {/* Save Button */}
                    <button className="w-full px-4 py-3 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-white font-bold hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105">
                      Save Profile
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeSettingTab === "security" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Security Settings</h3>
                  <div className="space-y-4">
                    {/* Change Password */}
                    <div className="p-4 bg-white rounded-2xl border-2 border-pink-200">
                      <label className="text-sm font-bold text-gray-600">Change Password</label>
                      <div className="space-y-2 mt-3">
                        <input
                          type="password"
                          placeholder="Current password"
                          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-pink-400 transition-colors"
                        />
                        <input
                          type="password"
                          placeholder="New password"
                          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-pink-400 transition-colors"
                        />
                        <input
                          type="password"
                          placeholder="Confirm password"
                          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-pink-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Two Factor Authentication */}
                    <div className="p-4 bg-white rounded-2xl border-2 border-pink-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-gray-900">Two-Factor Authentication</p>
                          <p className="text-sm text-gray-600 mt-1">Add an extra layer of security</p>
                        </div>
                        <button
                          onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                          className={`relative w-14 h-7 rounded-full transition-all duration-300 ease-in-out ${
                            twoFactorEnabled
                              ? "bg-gradient-to-r from-green-400 to-green-500"
                              : "bg-gray-300"
                          }`}
                        >
                          <div
                            className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                              twoFactorEnabled ? "translate-x-7" : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Session Management */}
                    <div className="p-4 bg-white rounded-2xl border-2 border-pink-200">
                      <p className="font-bold text-gray-900 mb-3">Active Sessions</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="text-sm font-semibold text-gray-900">Current Device</p>
                            <p className="text-xs text-gray-600">Chrome on Windows</p>
                          </div>
                          <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                            Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Preferences Tab */}
            {activeSettingTab === "preferences" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Preferences</h3>
                  <div className="space-y-4">
                    {/* Notifications */}
                    <div className="p-4 bg-white rounded-2xl border-2 border-pink-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-gray-900">Notifications</p>
                          <p className="text-sm text-gray-600 mt-1">Receive updates about your account</p>
                        </div>
                        <button
                          onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                          className={`relative w-14 h-7 rounded-full transition-all duration-300 ease-in-out ${
                            notificationsEnabled
                              ? "bg-gradient-to-r from-green-400 to-green-500"
                              : "bg-gray-300"
                          }`}
                        >
                          <div
                            className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                              notificationsEnabled ? "translate-x-7" : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Email Preferences */}
                    <div className="p-4 bg-white rounded-2xl border-2 border-pink-200">
                      <p className="font-bold text-gray-900 mb-3">Email Preferences</p>
                      <div className="space-y-3">
                        {["Marketing emails", "Transaction updates", "Security alerts"].map((pref) => (
                          <label key={pref} className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300" />
                            <span className="text-sm text-gray-700">{pref}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Theme */}
                    <div className="p-4 bg-white rounded-2xl border-2 border-pink-200">
                      <label className="text-sm font-bold text-gray-600">Theme</label>
                      <div className="flex gap-3 mt-3">
                        {["Light", "Dark", "Auto"].map((theme) => (
                          <button
                            key={theme}
                            className="px-4 py-2 rounded-lg border-2 border-pink-300 text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200"
                          >
                            {theme}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Wallets Tab */}
            {activeSettingTab === "wallets" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Wallet Management</h3>
                  <div className="space-y-4">
                    {/* Connected Wallets */}
                    <div className="p-4 bg-white rounded-2xl border-2 border-pink-200">
                      <p className="font-bold text-gray-900 mb-3">Connected Wallets</p>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-pink-200">
                          <div>
                            <p className="text-sm font-semibold text-gray-900">Ethereum Wallet</p>
                            <p className="text-xs text-gray-600">0x742d...Cc47</p>
                          </div>
                          <button className="px-3 py-1 rounded-full text-xs font-bold bg-red-300 text-white hover:bg-red-400 transition-all">
                            Disconnect
                          </button>
                        </div>
                        <button className="w-full px-4 py-3 rounded-full border-3 border-dashed border-purple-400 text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text font-bold hover:scale-105 transition-all duration-300 ease-in-out">
                          + Add Wallet
                        </button>
                      </div>
                    </div>

                    {/* Network Settings */}
                    <div className="p-4 bg-white rounded-2xl border-2 border-pink-200">
                      <label className="text-sm font-bold text-gray-600">Default Network</label>
                      <select className="w-full mt-2 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-pink-400 transition-colors">
                        <option>Ethereum Mainnet</option>
                        <option>Polygon</option>
                        <option>Arbitrum</option>
                        <option>Optimism</option>
                      </select>
                    </div>

                    {/* Gas Settings */}
                    <div className="p-4 bg-white rounded-2xl border-2 border-pink-200">
                      <label className="text-sm font-bold text-gray-600">Gas Settings</label>
                      <div className="flex gap-2 mt-3">
                        {["Slow", "Standard", "Fast"].map((speed) => (
                          <button
                            key={speed}
                            className="flex-1 px-3 py-2 rounded-lg border-2 border-pink-300 text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200"
                          >
                            {speed}
                          </button>
                        ))}
                      </div>
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
