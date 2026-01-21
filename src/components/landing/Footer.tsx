"use client";
import Link from "next/link";
import { FaGithub, FaTwitter, FaDiscord, FaTelegram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-black mb-3 bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
              BABY MARKET FIGHTER
            </h3>
            <p className="text-purple-200 text-sm leading-relaxed mb-6">
              The ultimate meme gaming platform where real crypto market data powers baby fighter battles. Trading is stressful. Babies don't care – they just FIGHT!
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple-700 hover:bg-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaDiscord size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple-700 hover:bg-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple-700 hover:bg-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaTelegram size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple-700 hover:bg-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-purple-200">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-purple-300 hover:text-pink-300 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#games"
                  className="text-purple-300 hover:text-pink-300 transition-colors duration-300"
                >
                  Play Games
                </a>
              </li>
              <li>
                <a
                  href="#tokenomics"
                  className="text-purple-300 hover:text-pink-300 transition-colors duration-300"
                >
                  Tokenomics
                </a>
              </li>
              <li>
                <a
                  href="#roadmap"
                  className="text-purple-300 hover:text-pink-300 transition-colors duration-300"
                >
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Token Section */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-purple-200">$BMF Token</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-purple-300 hover:text-pink-300 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-pink-400">→</span> Buy $BMF
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-300 hover:text-pink-300 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-pink-400">→</span> Join Whitelist
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-300 hover:text-pink-300 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-pink-400">→</span> Token Contract
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-300 hover:text-pink-300 transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-pink-400">→</span> Audit Report
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-purple-200">Stay Updated</h4>
            <p className="text-purple-300 text-sm mb-4">
              Get the latest news about Baby Market Fighter
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-purple-800 border border-purple-700 text-white placeholder-purple-400 focus:outline-none focus:border-pink-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 font-bold transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-700 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-purple-300 text-sm text-center md:text-left">
            © {currentYear} Baby Market Fighter. All rights reserved. | Powered by $BMF
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-purple-300 hover:text-pink-300 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-purple-300 hover:text-pink-300 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-purple-300 hover:text-pink-300 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
