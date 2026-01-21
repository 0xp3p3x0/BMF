"use client";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const roadmapPhases = [
  {
    year: "Q1 2026",
    title: "Phase 1: Launch & Foundation",
    description: "Website, socials, and first mini-games launch. Token debuts on BNB. Community building begins with Discord and Telegram.",
    image: "/roadmaps/roadmap-1.png",
  },
  {
    year: "Q2 2026",
    title: "Phase 2: Expand Games",
    description: "Release additional mini-games and launch exclusive Baby Fighters collection. First tournaments go live with prizes.",
    image: "/roadmaps/roadmap-2.png",
  },
  {
    year: "Q3 2026",
    title: "Phase 3: Staking & Mobile",
    description: "Staking platform launches allowing holders to earn passive income. Major CEX listings and mobile app beta release.",
    image: "/roadmaps/roadmap-3.png",
  },
  {
    year: "Q4 2026",
    title: "Phase 4: Ecosystem Growth",
    description: "Cross-chain bridge integration, advanced leaderboards, guild system, and partnerships with major gaming platforms.",
    image: "/roadmaps/roadmap-4.png",
  },
  {
    year: "Q1 2027",
    title: "Phase 5: World Domination",
    description: "Babies Fight Market Chaos becomes the leading play-to-earn platform. Global tournaments, metaverse integration, and beyond.",
    image: "/roadmaps/roadmap-5.png",
  },
];

export default function RoadmapSection() {
  useEffect(() => {
    // Custom pagination bullet renderer
    const paginationBullets = document.querySelectorAll(".swiper-pagination-bullet");
    paginationBullets.forEach((bullet, index) => {
      bullet.textContent = roadmapPhases[index].year;
    });
  }, []);

  return (
    <section id="roadmap" className="w-full pt-16 bg-white overflow-hidden">
      <style>{`
        .roadmap-timeline {
          position: relative;
          width: 100%;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(250, 204, 21, 0.1) 100%);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .roadmap-timeline .swiper-container {
          height: auto;
          width: 100%;
          position: relative;
          min-height: 500px;
        }

        .roadmap-timeline .swiper-wrapper {
          transition: 2s cubic-bezier(0.68, -0.4, 0.27, 1.34) 0.2s;
        }

        .roadmap-timeline .swiper-slide {
          position: relative;
          color: white;
          overflow: hidden;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          min-height: 500px;
        }

        .roadmap-timeline .swiper-slide::after {
          content: "";
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.7));
          box-shadow: -230px 0 150px 60vw rgba(0, 0, 0, 0.7);
          border-radius: 100%;
        }

        .roadmap-timeline .swiper-slide-content {
          position: absolute;
          text-align: center;
          width: 90%;
          max-width: 350px;
          right: 50%;
          top: 50%;
          transform: translate(50%, -50%);
          z-index: 2;
          padding: 20px;
        }

        .roadmap-timeline .timeline-year {
          display: block;
          font-style: italic;
          font-size: 32px;
          margin-bottom: 12px;
          transform: translate3d(20px, 0, 0);
          color: #a855f7;
          font-weight: 300;
          opacity: 0;
          transition: 0.2s ease 0.4s;
        }

        .roadmap-timeline .timeline-title {
          font-weight: 800;
          font-size: 20px;
          margin: 0 0 12px;
          opacity: 0;
          transform: translate3d(20px, 0, 0);
          transition: 0.2s ease 0.5s;
          line-height: 1.3;
        }

        .roadmap-timeline .timeline-text {
          line-height: 1.5;
          font-size: 13px;
          opacity: 0;
          transform: translate3d(20px, 0, 0);
          transition: 0.2s ease 0.6s;
        }

        .roadmap-timeline .swiper-slide-active .timeline-year {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: 0.4s ease 1.6s;
        }

        .roadmap-timeline .swiper-slide-active .timeline-title {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: 0.4s ease 1.7s;
        }

        .roadmap-timeline .swiper-slide-active .timeline-text {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: 0.4s ease 1.8s;
        }

        .roadmap-timeline .swiper-pagination {
          right: 15% !important;
          height: 100%;
          display: none;
          flex-direction: column;
          justify-content: center;
          font-style: italic;
          font-weight: 300;
          font-size: 16px;
          z-index: 1;
          position: absolute;

        }

        .roadmap-timeline .swiper-pagination::before {
          content: "";
          position: absolute;
          left: -30px;
          top: 0;
          height: 100%;
          width: 1px;
          background-color: rgba(255, 255, 255, 0.2);
        }

        .roadmap-timeline .swiper-pagination-bullet {
          width: auto;
          height: auto;
          text-align: center;
          opacity: 1;
          background: transparent;
          color: #a855f7;
          margin: 20px 0 !important;
          position: relative;
          font-weight: 600;
          font-size: 14px;
          padding: 0 10px;
        }

        .roadmap-timeline .swiper-pagination-bullet::before {
          content: "";
          position: absolute;
          top: 7px;
          left: -32.5px;
          width: 6px;
          height: 6px;
          border-radius: 100%;
          background-color: #a855f7;
          transform: scale(0);
          transition: 0.2s;
        }

        .roadmap-timeline .swiper-pagination-bullet-active {
          color: #a855f7;
        }

        .roadmap-timeline .swiper-pagination-bullet-active::before {
          transform: scale(1);
        }

        .roadmap-timeline .swiper-button-next,
        .roadmap-timeline .swiper-button-prev {
          width: 50px;
          height: 50px;
          margin-top: 0;
          z-index: 10;
          transition: all 0.3s ease;
          background-color: rgba(168, 85, 247, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          left: 50%;
          transform: translateX(-50%);
        }

        .roadmap-timeline .swiper-button-next:hover,
        .roadmap-timeline .swiper-button-prev:hover {
          background-color: rgba(236, 72, 153, 0.9);
          transform: translateX(-50%) scale(1.1);
        }

        .roadmap-timeline .swiper-button-next svg,
        .roadmap-timeline .swiper-button-prev svg {
          display: none;
        }

        .roadmap-timeline .swiper-button-prev {
          top: 20px;
        }

        .roadmap-timeline .swiper-button-prev::after {
          content: "↑";
          color: white;
          font-size: 28px;
          font-weight: bold;
          line-height: 1;
        }

        .roadmap-timeline .swiper-button-next {
          bottom: 20px;
          top: auto;
        }

        .roadmap-timeline .swiper-button-next::after {
          content: "↓";
          color: white;
          font-size: 28px;
          font-weight: bold;
          line-height: 1;
        }

        @media screen and (max-width: 640px) {
          .roadmap-timeline .swiper-container {
            height: 400px;
          }

          .roadmap-timeline .swiper-slide {
            min-height: 400px;
          }

          .roadmap-timeline .swiper-slide::after {
            right: -80%;
            bottom: -15%;
            width: 100%;
            height: 100%;
            box-shadow: -150px 0 100px 40vw rgba(0, 0, 0, 0.7);
          }

          .roadmap-timeline .swiper-slide-content {
            right: 50%;
            top: 50%;
            transform: translate(50%, -50%);
            width: 85%;
            max-width: 280px;
            padding: 15px;
          }

          .roadmap-timeline .timeline-year {
            font-size: 28px;
            margin-bottom: 10px;
          }

          .roadmap-timeline .timeline-title {
            font-size: 18px;
            margin: 0 0 10px;
          }

          .roadmap-timeline .timeline-text {
            font-size: 12px;
            line-height: 1.4;
          }

          .roadmap-timeline .swiper-button-prev {
            width: 40px;
            height: 40px;
            top: 10px;
          }

          .roadmap-timeline .swiper-button-prev::after {
            font-size: 24px;
          }

          .roadmap-timeline .swiper-button-next {
            width: 40px;
            height: 40px;
            bottom: 10px;
          }

          .roadmap-timeline .swiper-button-next::after {
            font-size: 24px;
          }
        }

        @media screen and (min-width: 641px) and (max-width: 767px) {
          .roadmap-timeline .swiper-container {
            height: 500px;
          }

          .roadmap-timeline .swiper-slide {
            min-height: 500px;
          }

          .roadmap-timeline .swiper-slide-content {
            width: 85%;
            max-width: 320px;
            padding: 25px;
          }

          .roadmap-timeline .timeline-year {
            font-size: 36px;
            margin-bottom: 15px;
          }

          .roadmap-timeline .timeline-title {
            font-size: 24px;
            margin: 0 0 15px;
          }

          .roadmap-timeline .timeline-text {
            font-size: 14px;
          }
        }

        @media screen and (min-width: 768px) {
          .roadmap-timeline .swiper-container {
            height: 600px;
          }

          .roadmap-timeline .swiper-slide {
            min-height: 600px;
          }

          .roadmap-timeline .swiper-slide::after {
            right: -30%;
            bottom: -8%;
            width: 240px;
            height: 50%;
            box-shadow: -230px 0 150px 50vw rgba(0, 0, 0, 0.7);
          }

          .roadmap-timeline .swiper-slide-content {
            right: 30%;
            top: 50%;
            transform: translateY(-50%);
            width: 380px;
            font-size: 11px;
            text-align: right;
            padding: 0;
          }

          .roadmap-timeline .timeline-year {
            margin-bottom: 0;
            font-size: 42px;
          }

          .roadmap-timeline .timeline-title {
            font-size: 40px;
            margin: 0;
          }

          .roadmap-timeline .swiper-pagination {
            display: flex;
          }
        }

        .roadmap-title {
          text-align: center;
          margin-bottom: 40px;
        }

        .roadmap-title h2 {
          font-size: 2.5rem;
          font-weight: 900;
          background: linear-gradient(135deg, #7c3aed, #ec4899, #fbbf24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
        }

        .roadmap-title p {
          color: #666;
          font-size: 1.1rem;
        }
      `}</style>

      <div className="roadmap-title px-6">
        <h2>Babies Fight Market Roadmap</h2>
        <p>Watch our evolution from tiny babies to market champions</p>
      </div>

      <div className="roadmap-timeline md:px-0">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true, type: "bullets" }}
          speed={1600}
          direction="vertical"
          loop={false}
          className="swiper-container"
        >
          {roadmapPhases.map((phase, index) => (
            <SwiperSlide
              key={index}
              style={{
                backgroundImage: `url('${phase.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="swiper-slide-content">
                <span className="timeline-year">{phase.year}</span>
                <h4 className="timeline-title">{phase.title}</h4>
                <p className="timeline-text">{phase.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
