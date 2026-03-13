"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [imgError, setImgError] = useState(false);

  const stats = [
    { label: "Degree", value: "B.Tech AI & Data Science" },
    { label: "Institute", value: "United Institute of Technology" },
    { label: "Period", value: "2022 — 2026" },
    { label: "Focus", value: "Healthcare AI · CV · NLP" },
  ];

  return (
    <section id="about" className="border-t border-[#0E0E0E]/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-[auto_1fr] gap-10 items-end py-10 border-b border-[#0E0E0E]/10"
        >
          <span className="font-serif text-sm italic text-[#6B6B6B]">01</span>
          <div className="flex justify-between items-end">
            <h2 className="font-serif text-5xl md:text-6xl font-black leading-none tracking-tight">
              About<br /><em className="font-normal italic">Me</em>
            </h2>
          </div>
        </motion.div>

        {/* 3-column layout: Avatar | Bio | Stats */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr_1fr] gap-0 pb-20">

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:border-r border-[#0E0E0E]/10 md:pr-10 pt-10 pb-8 md:pb-0"
          >
            <div className="relative bg-[#E8E5DF] overflow-hidden aspect-[3/4] w-full max-w-[260px] flex items-center justify-center">
              {!imgError ? (
                <img
                  src="/images/avatar.png"
                  alt="Ubaith Sherif"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: "grayscale(10%)" }}
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full border border-ink/20 flex items-center justify-center mb-2">
                    <span className="font-serif italic text-ink/40">US</span>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-muted">Photo Pending</p>
                </div>
              )}
            </div>
            <p className="mt-3 text-[10px] tracking-[0.12em] uppercase text-[#6B6B6B] font-medium">
              Ubaith Sherif — 2026
            </p>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:border-r border-[#0E0E0E]/10 md:px-10 pt-10 pb-8 md:pb-0 flex flex-col justify-center"
          >
            <div className="space-y-4 text-[#6B6B6B] leading-7 text-[0.9375rem]">
              <p>
                I am a{" "}
                <strong className="text-[#0E0E0E] font-medium">
                  B.Tech Artificial Intelligence and Data Science
                </strong>{" "}
                student at United Institute of Technology (2022–2026), building technology that makes a meaningful difference.
              </p>
              <p>
                My work focuses on machine learning, computer vision, and building intelligent
                applications that address real-world challenges — from accessibility to healthcare to sustainability.
              </p>
              <p>
                I am particularly drawn to{" "}
                <strong className="text-[#0E0E0E] font-medium">healthcare AI</strong>,
                accessibility technology, and environmental monitoring.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:pl-10 pt-10"
          >
            <div
              className="grid grid-cols-2"
              style={{ gap: "1px", background: "rgba(14,14,14,0.1)" }}
            >
              {stats.map(({ label, value }) => (
                <div key={label} className="bg-[#F5F2EC] p-5 hover:bg-[#ECEAE3] transition-colors">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-[#6B6B6B] font-medium mb-1.5">
                    {label}
                  </p>
                  <p className="font-serif text-[0.9375rem] font-bold leading-snug text-[#0E0E0E]">
                    {value}
                  </p>
                </div>
              ))}
              <div className="col-span-2 bg-[#F5F2EC] p-5 hover:bg-[#ECEAE3] transition-colors">
                <p className="text-[10px] tracking-[0.15em] uppercase text-[#6B6B6B] font-medium mb-1.5">
                  Mission
                </p>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">
                  To leverage AI in creating accessible, impactful solutions that benefit
                  communities and push the boundaries of what technology can do.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
