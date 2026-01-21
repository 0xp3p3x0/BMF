"use client";
import { usePrivy } from "@privy-io/react-auth";
import Section from "../reusables/section";
import { showSuccessToast, showErrorToast } from "@/components/ui/custom-toast";
import { FaApple, FaGithub, FaSpotify } from "react-icons/fa";
import { SiX, SiDiscord, SiLinkedin, SiTiktok, SiTelegram, SiInstagram, SiLine, SiFarcaster } from "react-icons/si";
import { PhoneIcon, WalletIcon, KeyIcon } from "@heroicons/react/16/solid";

const UnlinkAccounts = () => {
  const {
    user,
    unlinkEmail,
    unlinkPhone,
    unlinkWallet,
    unlinkTwitter,
    unlinkDiscord,
    unlinkGithub,
    unlinkSpotify,
    unlinkInstagram,
    unlinkTiktok,
    unlinkLine,
    unlinkLinkedIn,
    unlinkApple,
    unlinkFarcaster,
    unlinkTelegram,
    unlinkPasskey,
  } = usePrivy();

  const getIconForType = (type: string) => {
    const iconClass = "w-5 h-5";
    switch (type) {
      case "phone":
        return <PhoneIcon className={iconClass} />;
      case "wallet":
        return <WalletIcon className={iconClass} />;
      case "apple_oauth":
        return <FaApple className={iconClass} />;
      case "twitter_oauth":
        return <SiX className={iconClass} />;
      case "discord_oauth":
        return <SiDiscord className={iconClass} />;
      case "github_oauth":
        return <FaGithub className={iconClass} />;
      case "linkedin_oauth":
        return <SiLinkedin className={iconClass} />;
      case "tiktok_oauth":
        return <SiTiktok className={iconClass} />;
      case "line_oauth":
        return <SiLine className={iconClass} />;
      case "spotify_oauth":
        return <FaSpotify className={iconClass} />;
      case "instagram_oauth":
        return <SiInstagram className={iconClass} />;
      case "telegram":
        return <SiTelegram className={iconClass} />;
      case "passkey":
        return <KeyIcon className={iconClass} />;
      default:
        return null;
    }
  };

  const availableActions = [];

  // Process each linked account and create unlink actions
  const accounts = user?.linkedAccounts ?? [];

  for (const acc of accounts) {
    // if (acc.type === "email" && user?.email) {
    //   const address = user.email.address;
    //   availableActions.push({
    //     name: `Unlink Email (${address.slice(0, 6)}...)`,
    //     function: async () => {
    //       try {
    //         await unlinkEmail(address);
    //         showSuccessToast("Email account unlinked successfully");
    //       } catch (error) {
    //         console.log(error);
    //         showErrorToast("Failed to unlink email account");
    //       }
    //     },
    //   });
    // }

    if (acc.type === "phone" && user?.phone) {
      const phoneNumber = user.phone.number;
      availableActions.push({
        name: `Unlink Phone (${phoneNumber.slice(0, 6)}...)`,
        function: async () => {
          try {
            await unlinkPhone(phoneNumber);
            showSuccessToast("Phone account unlinked successfully");
          } catch (error) {
            console.log(error);
            showErrorToast("Failed to unlink phone account");
          }
        },
      });
    }

    if (acc.type === "wallet") {
      const address = acc.address;
      const isExternal =
        acc.walletClientType &&
        acc.walletClientType !== "privy" &&
        acc.walletClientType !== "privy-v2";
      if (isExternal && address) {
        availableActions.push({
          icon: getIconForType("wallet"),
          name: `Unlink Wallet (${address.slice(0, 6)}...)`,
          function: async () => {
            try {
              await unlinkWallet(address);
              showSuccessToast("Wallet account unlinked successfully");
            } catch (error) {
              console.log(error);
              showErrorToast("Failed to unlink wallet account");
            }
          },
        });
      }
    }


    if (acc.type === "apple_oauth") {
      const subject = acc.subject;
      availableActions.push({
        icon: getIconForType("apple_oauth"),
        name: `Unlink Apple (${subject.slice(0, 6)}...)`,
        function: async () => {
          try {
            await unlinkApple(subject);
            showSuccessToast("Apple account unlinked successfully");
          } catch (error) {
            console.log(error);
            showErrorToast("Failed to unlink Apple account");
          }
        },
      });
    }

    if (acc.type === "twitter_oauth") {
      const subject = acc.subject;
      availableActions.push({
        icon: getIconForType("twitter_oauth"),
        name: `Unlink Twitter (${subject.slice(0, 6)}...)`,
        function: async () => {
          try {
            await unlinkTwitter(subject);
            showSuccessToast("Twitter account unlinked successfully");
          } catch (error) {
            console.log(error);
            showErrorToast("Failed to unlink Twitter account");
          }
        },
      });
    }

    if (acc.type === "discord_oauth") {
      const subject = acc.subject;
      availableActions.push({
        icon: getIconForType("discord_oauth"),
        name: `Unlink Discord (${subject.slice(0, 6)}...)`,
        function: async () => {
          try {
            await unlinkDiscord(subject);
            showSuccessToast("Discord account unlinked successfully");
          } catch (error) {
            console.log(error);
            showErrorToast("Failed to unlink Discord account");
          }
        },
      });
    }

    if (acc.type === "github_oauth") {
      const subject = acc.subject;
      availableActions.push({
        icon: getIconForType("github_oauth"),
        name: `Unlink GitHub (${subject.slice(0, 6)}...)`,
        function: async () => {
          try {
            await unlinkGithub(subject);
            showSuccessToast("GitHub account unlinked successfully");
          } catch (error) {
            console.log(error);
            showErrorToast("Failed to unlink GitHub account");
          }
        },
      });
    }

    if (acc.type === "linkedin_oauth") {
      const subject = acc.subject;
      availableActions.push({
        icon: getIconForType("linkedin_oauth"),
        name: `Unlink LinkedIn (${subject.slice(0, 6)}...)`,
        function: async () => {
          try {
            await unlinkLinkedIn(subject);
            showSuccessToast("LinkedIn account unlinked successfully");
          } catch (error) {
            console.log(error);
            showErrorToast("Failed to unlink LinkedIn account");
          }
        },
      });
    }

    if (acc.type === "tiktok_oauth") {
      const subject = acc.subject;
      availableActions.push({
        icon: getIconForType("tiktok_oauth"),
        name: `Unlink Tiktok (${subject.slice(0, 6)}...)`,
        function: async () => {
          try {
            await unlinkTiktok(subject);
            showSuccessToast("Tiktok account unlinked successfully");
          } catch (error) {
            console.log(error);
            showErrorToast("Failed to unlink Tiktok account");
          }
        },
      });
    }

    if (acc.type === "line_oauth") {
      const subject = acc.subject;
      availableActions.push({
        icon: getIconForType("line_oauth"),
        name: `Unlink Line (${subject.slice(0, 6)}...)`,
        function: async () => {
          try {
            await unlinkLine(subject);
            showSuccessToast("Line account unlinked successfully");
          } catch (error) {
            console.log(error);
            showErrorToast("Failed to unlink Line account");
          }
        },
      });
    }

    if (acc.type === "spotify_oauth") {
      const subject = acc.subject;
      availableActions.push({
        icon: getIconForType("spotify_oauth"),
        name: `Unlink Spotify (${subject.slice(0, 6)}...)`,
        function: async () => {
          try {
            await unlinkSpotify(subject);
            showSuccessToast("Spotify account unlinked successfully");
          } catch (error) {
            console.log(error);
            showErrorToast("Failed to unlink Spotify account");
          }
        },
      });
    }

    if (acc.type === "instagram_oauth") {
      const subject = acc.subject;
      availableActions.push({
        icon: getIconForType("instagram_oauth"),
        name: `Unlink Instagram (${subject.slice(0, 6)}...)`,
        function: async () => {
          try {
            await unlinkInstagram(subject);
            showSuccessToast("Instagram account unlinked successfully");
          } catch (error) {
            console.log(error);
            showErrorToast("Failed to unlink Instagram account");
          }
        },
      });
    }

    if (acc.type === "farcaster") {
      const fid = acc.fid ?? null;
      if (fid !== null) {
        availableActions.push({
          icon: getIconForType("farcaster"),
          name: `Unlink Farcaster (${fid})`,
          function: async () => {
            try {
              await unlinkFarcaster(fid);
              showSuccessToast("Farcaster account unlinked successfully");
            } catch (error) {
              console.log(error);
              showErrorToast("Failed to unlink Farcaster account");
            }
          },
        });
      }
    }

    if (acc.type === "telegram") {
      const telegramUserId = (acc as unknown as { telegramUserId?: string })
        .telegramUserId;
      if (telegramUserId) {
        availableActions.push({
          name: `Unlink Telegram (${telegramUserId.slice(0, 6)}...)`,
          icon: getIconForType("telegram"),
          function: async () => {
            try {
              await unlinkTelegram(telegramUserId);
              showSuccessToast("Telegram account unlinked successfully");
            } catch (error) {
              console.log(error);
              showErrorToast("Failed to unlink Telegram account");
            }
          },
        });
      }
    }

    if (acc.type === "passkey") {
      const credentialId = (acc as unknown as { credentialId?: string })
        .credentialId;
      if (credentialId) {
        availableActions.push({
          icon: getIconForType("passkey"),
          name: `Unlink Passkey (${credentialId.slice(0, 6)}...)`,
          function: async () => {
            try {
              await unlinkPasskey(credentialId);
              showSuccessToast("Passkey account unlinked successfully");
            } catch (error) {
              console.log(error);
              showErrorToast("Failed to unlink Passkey account");
            }
          },
        });
      }
    }
  }

  return (
    <Section
      name="Unlink accounts"
      description={
        "Unlink social accounts or external wallets from the current user."
      }
      filepath="src/components/sections/unlink-accounts"
      actions={availableActions}
    />
  );
};

export default UnlinkAccounts;
