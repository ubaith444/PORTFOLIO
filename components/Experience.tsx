"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    period: "June — July 2025",
    role: "Artificial Intelligence Intern",
    company: "Web Epic Technologies Pvt Ltd",
    desc: "Worked on AI workflows, machine learning concepts, and real-world AI application development. Contributed to building intelligent systems and exploring end-to-end ML pipelines.",
    tags: ["Machine Learning", "AI Workflows", "Python"],
  },
  {
    period: "Oct — Nov 2025",
    role: "Green Skills AI Internship",
    company: "Shell & Edunet Foundation",
    desc: "Worked on AI model development, data preprocessing, and prototype creation under industry mentorship. Applied sustainability-focused AI concepts to real-world datasets.",
    tags: ["AI Modelling", "Data Preprocessing", "Prototyping"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="border-t border-[#0E0E0E]/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-[auto_1fr] gap-10 items-end py-10 border-b border-[#0E0E0E]/10"
        >
          <span className="font-serif text-sm italic text-[#6B6B6B]">02</span>
          <div className="flex justify-between items-end">
            <h2 className="font-serif text-5xl md:text-6xl font-black leading-none tracking-tight">Experience</h2>
            <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#6B6B6B]">2 Internships</span>
          </div>
        </motion.div>

        <div className="pb-20">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10 py-10 border-b border-[#0E0E0E]/10 first:border-t first:border-[#0E0E0E]/10"
            >
              <div>
                <p className="font-serif italic text-sm text-[#6B6B6B]">{exp.period}</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold leading-snug mb-1 text-[#0E0E0E]">{exp.role}</h3>
                <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#6B6B6B] mb-4">{exp.company}</p>
                <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4">{exp.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {exp.tags.map(t => (
                    <span key={t} className="text-[10px] font-medium tracking-[0.1em] uppercase px-2.5 py-1 border border-[#0E0E0E]/12 text-[#6B6B6B]">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
