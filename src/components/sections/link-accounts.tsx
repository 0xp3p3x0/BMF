"use client";
import { useCrossAppAccounts, useLinkAccount } from "@privy-io/react-auth";
import { EnvelopeIcon, PhoneIcon, WalletIcon, KeyIcon } from "@heroicons/react/16/solid";
import { FaGoogle, FaApple, FaGithub, FaSpotify } from "react-icons/fa";
import { SiX, SiDiscord, SiLinkedin, SiTiktok, SiTelegram, SiInstagram, SiLine } from "react-icons/si";
import { showSuccessToast, showErrorToast } from "@/components/ui/custom-toast";

type Method =
  | "email"
  | "phone"
  | "wallet"
  | "google"
  | "apple"
  | "twitter"
  | "discord"
  | "github"
  | "linkedin"
  | "tiktok"
  | "line"
  | "spotify"
  | "instagram"
  | "farcaster"
  | "telegram"
  | "passkey"
  | "crossAppAccount"
  | null;

interface AccountOption {
  type: Method;
  name: string;
  icon: React.ReactNode;
  bgColor: string;
  hoverColor: string;
}

const LinkAccounts = () => {
  const { linkCrossAppAccount } = useCrossAppAccounts();
  const handlers = useLinkAccount({
    onSuccess: ({ linkMethod}) => {
      showSuccessToast(`${linkMethod} account linked successfully`);
    },
    onError: (e: any) => {
  let errorMessage = `Failed to link ${e.message}`;
                
                showErrorToast(errorMessage);
    },
  });

  const accountOptions: AccountOption[] = [
    { type: "email", name: "Email", icon: <EnvelopeIcon className="w-6 h-6" />, bgColor: "bg-red-500", hoverColor: "hover:bg-red-600" },
    { type: "wallet", name: "Wallet", icon: <WalletIcon className="w-6 h-6" />, bgColor: "bg-purple-500", hoverColor: "hover:bg-purple-600" },
    { type: "google", name: "Google", icon: <FaGoogle className="w-5 h-5" />, bgColor: "bg-blue-600", hoverColor: "hover:bg-blue-700" },
    { type: "discord", name: "Discord", icon: <SiDiscord className="w-5 h-5" />, bgColor: "bg-indigo-600", hoverColor: "hover:bg-indigo-700" },
    { type: "github", name: "GitHub", icon: <FaGithub className="w-5 h-5" />, bgColor: "bg-gray-800", hoverColor: "hover:bg-gray-900" },
    { type: "telegram", name: "Telegram", icon: <SiTelegram className="w-5 h-5" />, bgColor: "bg-blue-500", hoverColor: "hover:bg-blue-600" },
     ];

  const getHandlerForMethod = (method: Method) => {
    switch (method) {
      case "email":
        return handlers.linkEmail;
      case "phone":
        return handlers.linkPhone;
      case "wallet":
        return handlers.linkWallet;
      case "google":
        return handlers.linkGoogle;
      case "apple":
        return handlers.linkApple;
      case "twitter":
        return handlers.linkTwitter;
      case "discord":
        return handlers.linkDiscord;
      case "github":
        return handlers.linkGithub;
      case "linkedin":
        return handlers.linkLinkedIn;
      case "tiktok":
        return handlers.linkTiktok;
      case "line":
        return handlers.linkLine;
      case "spotify":
        return handlers.linkSpotify;
      case "instagram":
        return handlers.linkInstagram;
      case "farcaster":
        return handlers.linkFarcaster;
      case "telegram":
        return () => handlers.linkTelegram({ launchParams: {} });
      case "passkey":
        return handlers.linkPasskey;
      default:
        return () => {};
    }
  };


  return (
    <div className="w-full">
      <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3">
        {accountOptions.map((option) => (
          <button
            key={option.type}
            onClick={async () => {
              try {
                const handler = getHandlerForMethod(option.type);
                console.log(handler);
                await handler();
              } catch (error) {
                let errorMessage = `Failed to link ${option.name}`;
                
                showErrorToast(errorMessage);
              }
            }}
            className={`flex flex-col items-center justify-center gap-1 p-3 rounded-2xl ${option.bgColor} ${option.hoverColor} text-white font-bold transition-all duration-300 hover:shadow-lg hover:scale-110 transform shadow-md group`}
            title={option.name}
          >
            <div className="text-lg sm:text-xl group-hover:scale-125 transition-transform duration-300">
              {typeof option.icon === "string" ? <span className="text-xl">{option.icon}</span> : option.icon}
            </div>
            <span className="text-xs font-black text-center leading-tight hidden sm:block">{option.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LinkAccounts;
