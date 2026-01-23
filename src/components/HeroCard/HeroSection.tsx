"use client";

import React from "react";

const heroes = [
  {
    name: "Baby BTC Fighter",
    imgSrc: "./heros/baby-btc-fighter.png",
    altText: "Bitcoin Fighter",
    heading: "Unleash",
    highlight: "Baby BTC",
    description: "Forged in the genesis block of Bitcoin, Baby BTC stands as the original protector of the blockchain. Endowed with exceptional defensive capabilities and timeless strength, this steadfast guardian has safeguarded the network from the very beginning. It is said that with every Bitcoin surge, Baby BTC's power intensifies even further."
  },
  {
    name: "Baby ETH Fighter",
    imgSrc: "./heros/baby-eth-fighter.png",
    altText: "Ethereum Fighter",
    heading: "Embark on ",
    highlight: "Baby ETH",
    description: "The mystical mage of the crypto realm, Baby ETH wields the power of smart contracts and decentralized finance (DeFi) magic. When gas fees are low, Baby ETH becomes an unstoppable force. Master of the Ethereum ecosystem and sworn protector of all ERC-20 tokens."
  },
  {
    name: "Baby SOL Fighter",
    imgSrc: "./heros/baby-sol-fighter.png",
    altText: "Solana Fighter",
    heading: "Master the",
    highlight: "Baby SOL",
    description: "Baby SOL is the fastest entity in the entire blockchain universe. Capable of moving at light speed, Baby SOL executes actions with unparalleled precision. Trained in the ancient art of high-throughput combat, this samurai can process thousands of attacks in the blink of an eye.."
  },
  {
    name: "Baby AVAX Fighter",
    imgSrc: "./heros/baby-avax-fighter.png",
    altText: "Avalanche Fighter",
    heading: "Rise as the",
    highlight: "Baby AVAX",
    description: "Baby AVAX is a fierce warrior hailing from the frozen mountains, bringing the power of avalanches to every battle. With subnets under their command and blazing-fast finality, this red warrior is always prepared for combat."
  },
  {
    name: "Baby BNB Fighter",
    imgSrc: "./heros/baby-bnb-fighter.png",
    altText: "BNB Fighter",
    heading: "Forge",
    highlight: "Baby BNB",
    description: "Born in the heart of the world's largest exchange, Baby BNB is a well-balanced warrior with no discernible weaknesses. This yellow ninja has mastered the art of token burns, using this power to grow stronger with each passing quarter."
  },
  {
    name: "Baby UNI Fighter",
    imgSrc: "./heros/baby-uni-fighter.png",
    altText: "Uniswap Fighter",
    heading: "Command the",
    highlight: "Baby UNI",
    description: "Baby UNI is the magical unicorn of decentralized exchanges, bringing the power of decentralized finance (DeFi) to the battlefield. With automated market making and liquidity pools, this pink unicorn can seamlessly transition between offense and defense in an instant."
  },
  {
    name: "Baby XRP Fighter",
    imgSrc: "./heros/baby-xrp-fighter.png",
    altText: "XRP Fighter",
    heading: "Strike with",
    highlight: "Baby XRP",
    description: "Baby XRP is the noble knight of instant transactions. Having endured legal challenges, Baby XRP emerged stronger than ever. With lightning-fast transfers and unwavering resolve, this blue warrior safeguards the realm of cross-border payments."
  },
  {
    name: "Baby DOT Fighter",
    imgSrc: "./heros/baby-dot-fighter.png",
    altText: "Polkadot Fighter",
    heading: "Master the",
    highlight: "Baby DOT",
    description: "Baby DOT is the connector of all blockchains, specializing in uniting networks. With the power of parachains and cross-chain communication, this pink tech genius can seamlessly link with any ally to execute powerful combo attacks."
  },
  {
    name: "Baby DOGE Fighter",
    imgSrc: "./heros/baby-doge-fighter.png",
    altText: "Dogecoin Fighter",
    heading: "Unleash",
    highlight: "Baby DOGE",
    description: "Baby DOGE is a powerful and charismatic figure in the meme coin world. Embodying the spirit of unpredictability and community-driven energy, this pup becomes legendary whenever the community rallies behind it."
  },
  {
    name: "Baby LINK Fighter",
    imgSrc: "./heros/baby-link-fighter.png",
    altText: "Chainlink Fighter",
    heading: "Bridge",
    highlight: "Baby LINK",
    description: "Baby LINK is the all-seeing oracle of the crypto world, possessing unparalleled knowledge. With access to real-world data and price feeds, this blue entity can anticipate enemy moves before they are even conceived."
  },
  {
    name: "Baby ADA Fighter",
    imgSrc: "./heros/baby-ada-fighter.png",
    altText: "Cardano Fighter",
    heading: "Strategize",
    highlight: "Baby ADA",
    description: "Baby ADA is the wisest entity in the land, known for taking the time to meticulously plan each attack. With peer-reviewed combat strategies and scientific precision, this sage never makes a move without thorough research and analysis."
  },
  {
    name: "Baby MATIC Fighter",
    imgSrc: "./heros/baby-matic-fighter.png",
    altText: "Polygon Fighter",
    heading: "Scale",
    highlight: "Baby MATIC",
    description: "Baby MATIC is the purple speedster who scales to infinity. Moving at Layer 2 speeds across the battlefield, this entity steps in to resolve congestion on the main chain, delivering lightning-fast performance when needed most."
  }
];

const HeroSection = () => {
  return (
    <section className="section fade-in">
      <style jsx global>{`
        @layer library, reset, base, demo;
        @import "https://unpkg.com/open-props@2.0.0-beta.5" layer(library);
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300..700&display=swap");

        @layer reset {
          *,
          ::before,
          ::after {
            box-sizing: border-box;
          }

          :where(:not(dialog)) {
            margin: 0;
          }
        }

        @layer base {
          html {
            --nav-block-size: 74px;
            --brand-gradient: linear-gradient(227deg, #1400c7 0%, #00bbff 100%);

            @media (prefers-reduced-motion: no-preference) {
              scroll-behavior: smooth;
            }
          }

          body {
            font-family: "Inter", sans-serif;
            min-block-size: 100dvb;
          }
        }

        @layer demo {
        
          .section {
            --section-block-size: max(400px, 100dvb);
            display: grid;
            background-color: white;
            min-block-size: var(--section-block-size);
            position: relative;
            block-size: 100%;
            display: grid;

            > * {
              grid-area: 1/1;
            }
          }

          .section-wrapper {
            position: relative;
            display: grid;

            @media (width >=960px) {
              grid-template-columns: 1fr 1fr;
            }

            @media (width < 960px) {
              padding-block-start: calc(var(--nav-block-size) + var(--size-7));
              padding-block-end: var(--size-7);
            }
          }

          .video {
            display: block;
            inline-size: 100%;
            block-size: 100%;
            object-fit: cover;
            position: relative;
            z-index: -1;
          }

          .content-wrapper {
            display: grid;

            @media (width < 960px) {
              gap: var(--size-7);
            }
          }

          .meta {
            display: grid;
            gap: var(--size-3);
          }

          .content {
            display: grid;
            inline-size: 100%;
            place-items: center;
            padding-block: var(--size-7);
            padding-inline: var(--size-5);

            @media (width >=960px) {
              padding: var(--size-10);
              min-block-size: 100cqb;
              place-items: center;
            }

            @media (width < 960px) {
              gap: var(--size-5);
            }
          }

          .mobile-visual {
            inline-size: 100%;
            aspect-ratio: var(--ratio-square);

            @media (width >=960px) {
              display: none;
            }
          }

          .headline {
            font-size: var(--font-size-7);
            font-weight: var(--font-weight-4);
            max-inline-size: var(--size-content-1);
            text-wrap: pretty;

            @media (width < 960px) {
              font-size: var(--font-size-6);
            }
          }

          .desc {
            font-size: var(--font-size-4);
            line-height: 1.5;
            max-inline-size: 40ch;
            text-wrap: pretty;

            @media (width < 960px) {
              font-size: var(--font-size-3);
            }
          }

          .visual {
            display: grid;
            position: sticky;
            block-size: var(--section-block-size);
            inset-block-start: 0;
            container-type: size;

            @media (width < 960px) {
              display: none;
            }
          }

          .video-visual {
            inline-size: 100%;
            block-size: var(--section-block-size);
            display: block;
            position: sticky;
            inset-block-start: 0;
            isolation: isolate;
            filter: hue-rotate(210deg);
            overflow: hidden;
          }

          .card-wrapper {
            container-type: size;
            display: grid;
            place-items: center;
            overflow: clip;

            > * {
              grid-area: 1/1;
            }
          }

          .card {
            aspect-ratio: var(--ratio-square);
            inline-size: 50cqi;
            border-radius: var(--radius-3);
            scale: 0.4;
          }

          .card-img {
            display: block;
            inline-size: 100%;
            block-size: 100%;
            object-fit: cover;
          }

          .card-1 {
            scale: 1;
          }

          .card-2 {
            translate: -33cqi 15cqb;
            opacity: 0.5;
          }

          .card-3 {
            translate: 33cqi 15cqb;
            opacity: 0.5;
          }

          .card-4 {
            translate: -28cqi 21cqb;
            opacity: 0.5;
          }

          .card-5 {
            translate: 28cqi 21cqb;
            opacity: 0.5;
          }
          
          .card-6 {
            translate: -21cqi 27cqb;
            opacity: 0.5;
          }
            .card-7 {
            translate: 21cqi 27cqb;
            opacity: 0.5;
          }
            .card-8 {
            translate: -14cqi 33cqb;
            opacity: 0.5;
          }
            .card-9 {
            translate: 14cqi 33cqb;
            opacity: 0.5;
          }
          
            .card-10 {
            translate: -7cqi 39cqb;
            opacity: 0.5;
          }
            .card-11 {
            translate: 7cqi 39cqb;
            opacity: 0.5;
          }
            .card-12 {
            translate: 0cqi 40cqb;
            opacity: 0.5;
          }
          


          .content-1 {
            --_text-gradient: linear-gradient(227deg, #F7931A 0%, #FDB62C 100%);
          }

          .content-2 {
            --_text-gradient: linear-gradient(227deg, #627EEA 0%, #A29BFE 100%);
          }

          .content-3 {
            --_text-gradient: linear-gradient(227deg, #1400c7 0%, #b800b1 100%);
          }

          .content-4 {
            --_text-gradient: linear-gradient(227deg, #E84142 0%, #F84D4D 100%);
          }

          .content-5 {
            --_text-gradient: linear-gradient(227deg, #F3BA2F 0%, #FFEAA7 100%);
          }

          .content-6 {
            --_text-gradient: linear-gradient(227deg, #FF007A 0%, #FF6AAA 100%);
          }
          
          .content-7 {
            --_text-gradient: linear-gradient(227deg, #23292F 0%, #0066FF 100%);
          }
          
          .content-8 {
            --_text-gradient: linear-gradient(227deg, #E6007A 0%, #FFB3D9 100%);
          }
          
          .content-9 {
            --_text-gradient: linear-gradient(227deg, #BA9F33 0%, #F3D156 100%);
          }
          
          .content-10 {
            --_text-gradient: linear-gradient(227deg, #2F5233 0%, #5DB5E8 100%);
          }
          
          .content-11 {
            --_text-gradient: linear-gradient(227deg, #0033A0 0%, #0050A0 100%);
          }
          
          .content-12 {
            --_text-gradient: linear-gradient(227deg, #8247E5 0%, #B19CD9 100%);
          }
          

          .text-highlight {
            background: var(--_text-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            font-size: 1.3em;
            font-weight: var(--font-weight-9);
          }
        }

        @supports (animation-timeline: scroll()) {
          body {
            timeline-scope: --content-1, --content-2, --content-3, --content-4, --content-5, --content-6, --content-7, --content-8, --content-9, --content-10, --content-11, --content-12;
          }

          .section {
            view-timeline-name: --section;
          }

          .content-1 {
            view-timeline-name: --content-1;
          }

          .content-2 {
            view-timeline-name: --content-2;
          }

          .content-3 {
            view-timeline-name: --content-3;
          }

          .content-4 {
            view-timeline-name: --content-4;
          }

          .content-5 {
            view-timeline-name: --content-5;
          }

          .content-6 {
            view-timeline-name: --content-6;
          }
          
          .content-7 {
            view-timeline-name: --content-7;
          }

          .content-8 {
            view-timeline-name: --content-8;
          }

          .content-9 {
            view-timeline-name: --content-9;
          }

          .content-10 {
            view-timeline-name: --content-10;
          }

          .content-11 {
            view-timeline-name: --content-11;
          }

          .content-12 {
            view-timeline-name: --content-12;
          }

          .card {
            animation-timing-function: linear;
            animation-fill-mode: forwards;
          }

          .card-1 {
            animation-timeline: --content-1;
            animation-name: slide-up-first-card;
          }

          .card-2 {
            animation-timeline: --content-2;
            animation-name: slide-up-card;
          }

          .card-3 {
            animation-timeline: --content-3;
            animation-name: slide-up-card;
          }

          .card-4 {
            animation-timeline: --content-4;
            animation-name: slide-up-card;
          }

          .card-5 {
            animation-timeline: --content-5;
            animation-name: slide-up-card;
          }
          .card-6 {
            animation-timeline: --content-6;
            animation-name: slide-up-card;
          }
          .card-7 {
            animation-timeline: --content-7;
            animation-name: slide-up-card;
          }
            .card-8 {
            animation-timeline: --content-8;
            animation-name: slide-up-card;
          }
            .card-9 {
            animation-timeline: --content-9;
            animation-name: slide-up-card;
          }
          .card-10 {
            animation-timeline: --content-10;
            animation-name: slide-up-card;
          }
          .card-11 {
            animation-timeline: --content-11;
            animation-name: slide-up-card;
          }
          .card-12 {
            animation-timeline: --content-12;
            animation-name: slide-up-card;
          }

          .video-visual {
            animation-timeline: --section;
            animation-range-end: exit 110%;
            animation-name: update-hue;
            animation-timing-function: step-end;
            animation-fill-mode: forwards;
          }

          @keyframes update-hue {
            0% {
              filter: hue-rotate(210deg);
            }

            25% {
              filter: hue-rotate(150deg);
            }

            45% {
              filter: hue-rotate(300deg);
            }

            60% {
              filter: hue-rotate(4deg);
            }
          }

          @keyframes slide-up-first-card {
            50% {
              translate: 0;
              opacity: 1;
            }

            90% {
              translate: 0 -50cqi;
              scale: 0.6;
            }

            100% {
              translate: 0 -100cqi;
              opacity: 0;
            }
          }

          @keyframes slide-up-card {
            50% {
              opacity: 1;
              translate: 0;
              scale: 1;
            }

            90% {
              opacity: 0.5;
              scale: 0.6;
              translate: 0 -50cqb;
            }

            100% {
              translate: 0 -100cqi;
              opacity: 0;
            }
          }
        }
      `}</style>

      <div className="section">
        <div className="video-visual" aria-hidden="true">
          <video className="video" autoPlay loop muted playsInline aria-label="background gradient animation">
            <source
              src="./bg-gradient-animation.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="section-wrapper">
          <div className="content-wrapper">
            {heroes.map((hero, index) => (
              <div key={hero.name} className={`content content-${index + 1}`}>
                <div className="mobile-visual">
                  <img
                    className="card-img"
                    src={hero.imgSrc}
                    alt={hero.altText}
                    loading="lazy"
                  />
                </div>
                <div className="meta">
                  <h2 className="headline">
                    {hero.heading} <span className="text-highlight">{hero.highlight}</span>
                  </h2>
                  <p className="desc">{hero.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="visual">
            <div className="card-wrapper">
              {heroes.map((hero, index) => (
                <div key={`card-${hero.name}`} className={`card card-${index + 1}`}>
                  <img
                    className="card-img"
                    src={hero.imgSrc}
                    alt={hero.altText}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
