import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

interface HeaderProps {
  authenticated: boolean;
  onLoginClick?: () => void;
}

export function Header({ authenticated, onLoginClick }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 w-full h-[60px] flex flex-row justify-between items-center px-6 z-50 ${
        authenticated
          ? "bg-white border-b border-[#E2E3F0]"
          : "bg-transparent border-none backdrop-blur-none"
      }`}
    >
      <div className="flex flex-row items-center gap-2 h-[26px]">
        {authenticated && (
          <div
            className={`text-medium flex h-[22px] items-center justify-center rounded-[11px] border px-[0.375rem] text-[0.75rem] ${
              authenticated
                ? "border-primary text-primary"
                : "border-white text-white"
            }`}
          >
            Baby Marktet Fighter
          </div>
        )}
      </div>

      <div className="flex flex-row justify-end items-center gap-4 h-9">
        {!authenticated && onLoginClick && (
          <button
            onClick={onLoginClick}
            className="bg-white text-brand-off-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors font-semibold"
          >
            Login/Sign up
          </button>
        )}
      </div>
    </header>
  );
}
