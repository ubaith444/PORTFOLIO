"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    num: "01",
    title: "Microplastic Pollution Detection",
    subtitle: "using Deep Learning",
    description:
      "AI-powered environmental monitoring system designed to detect and classify microplastic particles from environmental images using deep learning techniques.",
    tags: ["Python", "TensorFlow", "OpenCV", "CNN", "Image Processing"],
    features: [
      "Image preprocessing — thresholding & segmentation",
      "CNN-based classification of microplastic particles",
      "Automated image analysis pipeline",
      "Visualization of detection results",
      "Environmental monitoring application",
    ],
    github: "https://github.com/ubaith444",
    accent: "#10b981",
  },
  {
    num: "02",
    title: "American Sign Language Recognition",
    subtitle: "ASL Recognition",
    description:
      "A real-time computer vision system that detects and translates American Sign Language gestures into text using deep learning.",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
    features: [
      "CNN model — 24 ASL gesture classes",
      "Real-time gesture detection via webcam",
      "Image preprocessing — normalization & augmentation",
      "Gesture-to-text conversion system",
      "Accessibility solution for hearing-impaired users",
    ],
    github: "https://github.com/ubaith444",
    accent: "#3B82F6",
  },
  {
    num: "03",
    title: "Cartify",
    subtitle: "Customer Segmentation for Targeted Marketing",
    description:
      "A data analytics system designed to segment customers into meaningful groups based on purchasing behavior to support targeted marketing strategies.",
    tags: ["Python", "Pandas", "Scikit-learn", "Data Visualization", "ML"],
    features: [
      "Customer behavior analysis from transaction data",
      "Data cleaning and preprocessing pipeline",
      "Customer segmentation via clustering algorithms",
      "Visualization of groups and purchasing patterns",
      "Insights generation for marketing campaigns",
    ],
    github: "https://github.com/ubaith444",
    accent: "#f59e0b",
  },
  {
    num: "04",
    title: "AI Blood Donation & Emergency Help",
    subtitle: "Smart Donor Matching Platform",
    description:
      "A smart platform that connects blood donors and patients during emergencies using AI-powered donor matching and real-time notifications.",
    tags: ["React Native", "JavaScript", "MongoDB", "AI Algorithms"],
    features: [
      "AI-based donor-recipient matching",
      "Emergency prioritization system",
      "Blood stock prediction",
      "Location-based donor search",
      "Secure OTP authentication",
      "Notification and alert system",
    ],
    github: "https://github.com/ubaith444",
    accent: "#ef4444",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="border-t border-[#0E0E0E]/10" ref={ref}>
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 items-end py-10 border-b border-[#0E0E0E]/10"
        >
          <span className="font-serif text-sm italic text-[#6B6B6B]">03</span>
          <div className="flex justify-between items-end">
            <h2 className="font-serif text-4xl md:text-6xl font-black leading-none tracking-tight">
              Selected<br />
              <em className="font-normal italic">Work</em>
            </h2>
            <span className="text-[10px] hidden sm:block font-medium tracking-[0.18em] uppercase text-[#6B6B6B]">
              4 Projects
            </span>
          </div>
        </motion.div>
      </div>

      {/* Projects grid — 2 col on desktop */}
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: "1px", background: "rgba(14,14,14,0.1)" }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: i * 0.1,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full"
          >
            <Tilt
              tiltMaxAngleX={4}
              tiltMaxAngleY={4}
              scale={1.008}
              transitionSpeed={600}
              className="h-full"
            >
              <div className="relative bg-[#F5F2EC] hover:bg-[#ECEAE3] transition-colors duration-300 p-8 md:p-10 h-full flex flex-col group overflow-hidden">
                {/* Accent top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
                />

                {/* Number + subtitle */}
                <div className="flex items-start justify-between mb-5">
                  <span className="font-serif text-sm italic text-[#6B6B6B]">{project.num} /</span>
                  <span
                    className="text-[9px] font-medium tracking-[0.14em] uppercase px-2 py-1 rounded-none border"
                    style={{ borderColor: `${project.accent}33`, color: project.accent, background: `${project.accent}0D` }}
                  >
                    {project.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl md:text-3xl font-bold leading-snug mb-3 text-[#0E0E0E] tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="mb-6 flex-1 space-y-0">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[0.8125rem] text-[#6B6B6B] border-b border-[#0E0E0E]/7 py-2 last:border-0"
                    >
                      <span className="mt-0.5 flex-shrink-0 w-3.5 h-3.5 rounded-full border border-[#0E0E0E]/15 flex items-center justify-center">
                        <span className="w-1 h-1 rounded-full bg-[#0E0E0E]/40" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Footer: tags + github */}
                <div className="border-t border-[#0E0E0E]/10 pt-5">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-medium tracking-[0.12em] uppercase px-2.5 py-1 border border-[#0E0E0E]/12 text-[#6B6B6B] hover:border-[#0E0E0E]/30 hover:text-[#0E0E0E] transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#6B6B6B] hover:text-[#0E0E0E] text-xs font-medium tracking-[0.06em] uppercase transition-colors no-underline group/link"
                  >
                    <FiGithub className="w-3.5 h-3.5" />
                    View on GitHub
                    <FiExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-60 transition-opacity" />
                  </a>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
