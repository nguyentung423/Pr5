"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/lib/i18n";

// Đăng ký plugin
gsap.registerPlugin(ScrollTrigger);

const ClaritySection = () => {
  const container = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const text = t.clarity.slogan;

  useGSAP(
    () => {
      const chars = container.current?.querySelectorAll(".char");

      if (chars && chars.length > 0) {
        gsap.fromTo(
          chars,
          {
            // TRẠNG THÁI BAN ĐẦU (HỖN ĐỘN)
            opacity: 0,
            x: () => gsap.utils.random(-500, 500),
            y: () => gsap.utils.random(-300, 300),
            rotation: () => gsap.utils.random(-360, 360),
            scale: () => gsap.utils.random(0.5, 2),
            filter: "blur(10px)",
          },
          {
            // TRẠNG THÁI KẾT THÚC (RÕ RÀNG)
            opacity: 1,
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            filter: "blur(0px)",
            ease: "power2.out",
            stagger: 0.01,
            scrollTrigger: {
              trigger: container.current,
              start: "top 85%", // Bắt đầu khi khối vào tầm nhìn
              end: "center center", // Kết thúc khi khối ra giữa
              scrub: 1.5, // Animation chạy theo thanh cuộn (Smooth)
            },
          },
        );
      }
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-32 flex flex-col items-center justify-center overflow-hidden min-h-[60vh] bg-transparent"
    >
      {/* Slogan Text: Clarity is Power */}
      <h2 className="text-5xl md:text-7xl font-bold mb-8 text-center text-gray-900 relative z-10 select-none">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="char inline-block will-change-transform"
            style={{ minWidth: char === " " ? "1rem" : "0" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>

      {/* Subtext */}
      <p className="text-xl text-gray-500 mb-10 text-center font-light max-w-xl px-4">
        {t.clarity.subtext}
      </p>

      {/* Call-to-Action Button */}
      <a
        href="mailto:tungnh.vspace@gmail.com"
        className="group relative inline-flex items-center justify-center px-8 py-3 bg-gray-900 rounded-full overflow-hidden transition-transform hover:-translate-y-1 shadow-lg hover:shadow-xl cursor-pointer"
        style={{ color: "#ffffff" }}
      >
        <span className="font-medium mr-2">{t.clarity.cta}</span>
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </a>
    </section>
  );
};

export default ClaritySection;
