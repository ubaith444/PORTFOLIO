"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: [{ name: "Python", w: 90 }, { name: "JavaScript", w: 78 }],
  },
  {
    title: "AI & Machine Learning",
    skills: [{ name: "TensorFlow", w: 85 }, { name: "Scikit-learn", w: 80 }, { name: "Computer Vision", w: 85 }, { name: "NLP", w: 70 }],
  },
  {
    title: "Data Analytics",
    skills: [{ name: "Data Cleaning & EDA", w: 80 }, { name: "Power BI", w: 72 }],
  },
  {
    title: "Development & Tools",
    skills: [{ name: "React Native", w: 75 }, { name: "MongoDB", w: 72 }, { name: "OpenCV", w: 80 }, { name: "Git", w: 85 }],
  },
];

function SkillBar({ name, w }: { name: string; w: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="flex items-center justify-between py-2.5 border-b border-[#0E0E0E]/8 last:border-0 group">
      <span className="text-sm text-[#6B6B6B] group-hover:text-[#0E0E0E] transition-colors">{name}</span>
      <div className="w-20 h-0.5 bg-[#0E0E0E]/10">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${w}%` } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="h-full bg-[#0E0E0E]"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="border-t border-[#0E0E0E]/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-[auto_1fr] gap-10 items-end py-10 border-b border-[#0E0E0E]/10"
        >
          <span className="font-serif text-sm italic text-[#6B6B6B]">04</span>
          <h2 className="font-serif text-5xl md:text-6xl font-black leading-none tracking-tight">
            Skills &amp;<br /><em className="font-normal italic">Expertise</em>
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 pb-16" style={{ gap: "1px", background: "rgba(14,14,14,0.1)" }}>
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.65 }}
            className="bg-[#F5F2EC] px-6 md:px-8 py-8"
          >
            <h3 className="font-serif text-base font-bold mb-5 pb-3 border-b border-[#0E0E0E]/10 text-[#0E0E0E]">
              {cat.title}
            </h3>
            {cat.skills.map(s => <SkillBar key={s.name} name={s.name} w={s.w} />)}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
