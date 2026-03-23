"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

const contactInfo = [
  { icon: FiMail, label: "Email", value: "ubaithsherif22@gmail.com", href: "mailto:ubaithsherif22@gmail.com" },
  { icon: FiPhone, label: "Phone", value: "+91 63859 46906", href: "tel:+916385946906" },
  { icon: FiGithub, label: "GitHub", value: "github.com/ubaith444 ↗", href: "https://github.com/ubaith444" },
  { icon: FiLinkedin, label: "LinkedIn", value: "linkedin.com/in/ubaith-sherif-4235a5256 ↗", href: "https://www.linkedin.com/in/ubaith-sherif-4235a5256" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="border-t border-[#0E0E0E]/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 items-end py-10 border-b border-[#0E0E0E]/10"
        >
          <span className="font-serif text-sm italic text-[#6B6B6B]">05</span>
          <h2 className="font-serif text-4xl md:text-6xl font-black leading-none tracking-tight">
            Let's<br /><em className="font-normal italic">Connect</em>
          </h2>
        </motion.div>

        {/* Big italic CTA */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-serif italic font-black leading-none tracking-tight my-8"
          style={{ fontSize: "clamp(2.5rem,7vw,6rem)" }}
        >
          Got a project?<br />Let's talk.
        </motion.p>

        {/* Contact grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-10 pt-4 border-t border-[#0E0E0E]/10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.65 }}
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer" className="no-underline">
                <div className="flex items-center py-4 border-b border-[#0E0E0E]/10 group">
                  <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#6B6B6B] w-24 flex-shrink-0">{label}</span>
                  <span className="text-sm font-medium text-[#0E0E0E] group-hover:text-[#6B6B6B] transition-colors">{value}</span>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.65 }}
            className="flex flex-col h-full"
          >
            <p className="text-[#6B6B6B] text-sm leading-relaxed mb-8">
              I'm currently open to internship and freelance opportunities. If you have a project that needs an AI developer, or if you'd like to collaborate — reach out anytime.
            </p>

            <form action="https://formspree.io/f/xnjgkobb" method="POST" className="space-y-4 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#6B6B6B]">Name</label>
                  <input required id="name" name="name" type="text" placeholder="John Doe"
                    className="bg-transparent border border-[#0E0E0E]/10 px-4 py-3 text-sm focus:border-[#0E0E0E] outline-none transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#6B6B6B]">Email</label>
                  <input required id="email" name="email" type="email" placeholder="john@example.com"
                    className="bg-transparent border border-[#0E0E0E]/10 px-4 py-3 text-sm focus:border-[#0E0E0E] outline-none transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#6B6B6B]">Message</label>
                <textarea required id="message" name="message" rows={4} placeholder="Hello, I'd like to talk about..."
                  className="bg-transparent border border-[#0E0E0E]/10 px-4 py-3 text-sm focus:border-[#0E0E0E] outline-none transition-colors resize-none"></textarea>
              </div>
              <div className="pt-2">
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#0E0E0E] text-[#F5F2EC] hover:bg-[#333] px-6 py-4 text-xs font-medium tracking-[0.08em] uppercase transition-colors">
                  <FiSend className="w-3 h-3" /> Send Message
                </button>
              </div>
            </form>

            <div className="flex gap-3 mt-auto">
              <a href="https://ubaith-portfolio.web.app/resume/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 text-center border border-[#0E0E0E]/20 text-[#6B6B6B] hover:border-[#0E0E0E] hover:bg-[#0E0E0E] hover:text-[#F5F2EC] px-6 py-4 text-xs font-medium tracking-[0.08em] uppercase transition-all no-underline">
                Download Résumé
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center py-6 border-t border-[#0E0E0E]/10 mt-4">
          <p className="text-xs text-[#6B6B6B] tracking-[0.05em]">© 2026 Ubaith Sherif. All rights reserved.</p>
          <p className="text-xs text-[#6B6B6B] tracking-[0.05em]">AI & Data Science · United Institute of Technology</p>
        </div>
      </div>
    </section>
  );
}
