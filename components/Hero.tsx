"use client";
import { useRef, useEffect, type RefObject, type ReactNode } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/ubaithsherif", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/ubaithsherif", label: "LinkedIn" },
  { icon: FiMail, href: "mailto:ubaithsherif22@gmail.com", label: "Email" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function useMagnetic(ref: RefObject<HTMLElement>, strength = 0.35) {
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      if (Math.sqrt(dx * dx + dy * dy) < 100) el.style.transform = `translate(${dx * strength}px,${dy * strength}px)`;
      else el.style.transform = "";
    };
    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    return () => window.removeEventListener("mousemove", onMove);
  }, [ref, strength]);
}

function Btn({ children, primary = false, href }: { children: ReactNode; primary?: boolean; href: string; }) {
  const ref = useRef<HTMLAnchorElement>(null);
  useMagnetic(ref as any);
  const cls = primary
    ? "bg-[#0E0E0E] text-[#F5F2EC] hover:bg-[#333] px-6 py-3 text-xs font-medium tracking-[0.08em] uppercase transition-all duration-200 no-underline"
    : "border border-[#0E0E0E]/20 text-[#6B6B6B] hover:border-[#0E0E0E] hover:bg-[#0E0E0E] hover:text-[#F5F2EC] px-6 py-3 text-xs font-medium tracking-[0.08em] uppercase transition-all duration-200 no-underline";
  return <a ref={ref} href={href} style={{ transition: "transform 0.2s ease, background 0.2s, border-color 0.2s, color 0.2s" }} className={cls}>{children}</a>;
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-end px-6 md:px-10 pt-24 pb-10 bg-[#F5F2EC]">
      <div className="max-w-7xl mx-auto w-full">

        {/* Top row */}
        <motion.div
          variants={container} initial="hidden" animate="show"
          className="flex justify-between items-end mb-8"
        >
          <motion.div variants={item} className="flex flex-col gap-1">
            <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#6B6B6B]">AI Developer & Engineer</span>
            <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#0E0E0E]">Available for opportunities</span>
          </motion.div>
          <motion.span variants={item} className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#6B6B6B]">
            2022 — 2026
          </motion.span>
        </motion.div>

        {/* Display name */}
        <motion.div variants={container} initial="hidden" animate="show" className="mb-8">
          <motion.h1
            variants={item}
            className="font-serif font-black leading-[0.94] tracking-[-0.04em]"
            style={{ fontSize: "clamp(4rem,13vw,11rem)" }}
          >
            Ubaith<br /><em className="font-normal italic">Sherif</em>
          </motion.h1>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={container} initial="hidden" animate="show"
          className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-6 md:gap-8 items-end pt-6 border-t border-[#0E0E0E]/10"
        >
          {/* Description */}
          <motion.p variants={item} className="text-[#6B6B6B] text-sm leading-relaxed max-w-sm">
            I build <strong className="text-[#0E0E0E] font-medium">AI-powered systems</strong>, machine learning applications, and full-stack software that solve real-world problems in healthcare, accessibility, and the environment.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex gap-3 flex-wrap">
            <Btn primary href="#projects">View Work</Btn>
            <Btn href="#contact">Get in Touch</Btn>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex flex-col items-start md:items-end gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                className="flex items-center gap-1.5 text-[#6B6B6B] hover:text-[#0E0E0E] text-[10px] font-medium tracking-[0.06em] uppercase transition-colors no-underline">
                <Icon className="w-3 h-3" />{label} {href.startsWith("http") ? "↗" : ""}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-10 md:mt-6 text-[#6B6B6B]/40">
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
            className="flex flex-col items-center gap-1">
            <span className="text-[9px] tracking-[0.2em] uppercase">Scroll</span>
            <FiArrowDown className="w-3 h-3" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
