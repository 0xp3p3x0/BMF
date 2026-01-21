"use client";

import { useState } from "react";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import LinkAccounts from "@/components/sections/link-accounts";
import UnlinkAccounts from "@/components/sections/unlink-accounts";
import WalletManagement from "@/components/sections/wallet-management";
import CreateAWallet from "@/components/sections/create-a-wallet";
import MFA from "@/components/sections/mfa";

export default function SettingsPage() {
    const { user } = usePrivy();
    const { wallets } = useWallets();
    const [activeTab, setActiveTab] = useState<"profile" | "security" | "preferences" | "wallets">("profile");
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    const getEmailString = () => {
        if (typeof user?.email === "string") return user.email;
        if (typeof user?.email?.address === "string") return user.email.address;
        return null;
    };

    const emailString = getEmailString();

    // Get linked accounts and wallets
    const linkedAccounts = user?.linkedAccounts || [];
    const socialAccounts = linkedAccounts.filter((acc: any) => {
        const type = acc?.type || "";
        return ["twitter", "discord", "instagram", "google", "apple", "github", "linkedin", "telegram"].includes(type);
    });
    const linkedWallets = linkedAccounts.filter((acc: any) => acc?.type === "wallet");

    const tabs = [
        { id: "profile", label: "Profile", icon: "👤" },
        { id: "security", label: "Security", icon: "🔒" },
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
                                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 font-bold whitespace-nowrap lg:whitespace-normal text-sm ${activeTab === tab.id
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
                                    {/* Social Accounts Section */}
                                    <div className="pt-6 border-t-2 border-pink-300">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">🔗 Social Accounts</h3>
                                        <p className="text-sm text-gray-600 mb-4 font-semibold">Connect your social accounts to streamline authentication and account recovery.</p>
                                    </div>
                                   

                                    {/* Link/Unlink Accounts */}
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="p-6 bg-white rounded-2xl border-2 border-pink-300">
                                            <h3 className="font-bold text-gray-900 mb-4">➕ Link Account</h3>
                                            <LinkAccounts />
                                        </div>
                                        <div className="p-6 bg-white rounded-2xl border-2 border-pink-300">
                                            <h3 className="font-bold text-gray-900 mb-4">➖ Unlink Account</h3>
                                            <UnlinkAccounts />
                                        </div>
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
                                    {/* MFA Enrollment */}
                                    <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-pink-300">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">🛡️ Multi-Factor Authentication (MFA)</h3>
                                        <p className="text-sm text-gray-600 mb-4 font-semibold">Enhance your account security with MFA. Privy supports TOTP, SMS, and Passkey methods for sensitive wallet actions.</p>
                                        <div className="bg-white rounded-xl p-4">
                                            <MFA />
                                        </div>
                                    </div>

                                    {/* Active Sessions */}
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-3">📱 Active Sessions</h3>
                                        <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl border-2 border-pink-300 flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-bold text-gray-900">Current Browser</p>
                                                <p className="text-xs text-gray-600 mt-1 font-semibold">This device is currently connected</p>
                                            </div>
                                            <span className="text-xs font-bold text-white bg-gradient-to-r from-green-500 to-green-600 px-3 py-1 rounded-full">🟢 Active</span>
                                        </div>
                                    </div>

                                    {/* Security Tips */}
                                    <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-300">
                                        <p className="font-bold text-gray-900 mb-2">💡 Security Tips</p>
                                        <ul className="text-sm text-gray-700 space-y-1 font-semibold">
                                            <li>✓ Never share your private keys or seed phrases</li>
                                            <li>✓ Enable MFA for additional protection</li>
                                            <li>✓ Verify transaction details before confirming</li>
                                        </ul>
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
