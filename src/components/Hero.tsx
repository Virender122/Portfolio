import { Github, Linkedin, Mail, Phone, MapPin, Terminal, Cpu, ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData } from "../data/portfolioData";

interface HeroProps {
  onNavClick: (section: string) => void;
}

export default function Hero({ onNavClick }: HeroProps) {
  const { name, role, email, phone, location, linkedIn, gitHub } = portfolioData;

  const mockCode = `// 🚀 Virender's Core Competencies
const developer = {
  name: "${name}",
  role: "${role}",
  techStack: ["React", "Node", "MongoDB", "Express", "MySQL"],
  experienceYears: 1.7,
  scalableArchitecture: true,
  awsCertified: false,
  passion: "Building business-driven Web Solutions",
  
  deploy: function() {
    return \`App successfully deployed on AWS EC2!\`;
  }
};`;

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-cyber-bg-primary"
    >
      {/* Absolute Decorative Glows and Cyber Grids */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-bg-primary/50 to-cyber-bg-primary pointer-events-none" />
      
      {/* Blur Orbs for background depth */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-cyber-cyan/15 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-cyber-purple/10 blur-[130px] pointer-events-none animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Card 1: Main Intro Block (Col span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden backdrop-blur-md flex flex-col justify-between shadow-2xl group hover:border-cyber-cyan/30 transition-all duration-300"
          >
            {/* Grid background overlay inside the card */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cyber-cyan/10 blur-[80px] pointer-events-none" />

            <div className="relative z-10 space-y-6 sm:space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-cyan/5 border border-cyber-cyan/20 w-fit">
                <Cpu className="w-4 h-4 text-cyber-cyan animate-spin-slow" />
                <span className="font-mono text-[10px] sm:text-xs text-cyber-cyan tracking-wider font-semibold uppercase">
                  Available for Full-time Roles & Contracts
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-none">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink bg-clip-text text-transparent text-neon-cyan">
                    {name}
                  </span>
                </h1>

                <h2 className="font-display font-semibold text-xl sm:text-2xl text-text-secondary tracking-wide flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-cyber-purple" />
                  {role}
                </h2>

                <p className="text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed font-sans">
                  I build responsive, scalable, and secure web applications using{" "}
                  <span className="text-white font-medium underline decoration-cyber-cyan decoration-2 underline-offset-4">React.js</span>,{" "}
                  <span className="text-white font-medium underline decoration-cyber-purple decoration-2 underline-offset-4">Node.js</span>,{" "}
                  <span className="text-white font-medium underline decoration-cyber-lime decoration-2 underline-offset-4">MongoDB</span>,{" "}
                  and modern cloud deployment tools.
                </p>
              </div>

              {/* Quick Contact Info Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-text-secondary font-mono border-t border-white/5 pt-6">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-cyber-cyan" />
                  <a href={`mailto:${email}`} className="hover:text-white transition-colors duration-200">
                    {email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-cyber-purple" />
                  <a href={`tel:${phone}`} className="hover:text-white transition-colors duration-200">
                    +91 {phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 sm:col-span-2">
                  <MapPin className="w-4 h-4 text-cyber-lime" />
                  <span>{location}</span>
                </div>
              </div>
            </div>

            {/* CTA & Social Actions */}
            <div className="relative z-10 flex flex-wrap items-center gap-4 pt-8 border-t border-white/5 mt-6">
              <button
                onClick={() => onNavClick("projects")}
                className="px-6 sm:px-8 py-3.5 bg-gradient-to-r from-cyber-cyan to-cyber-purple text-white font-display font-bold rounded-xl shadow-neon-cyan hover:shadow-neon-purple cursor-pointer transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                View Projects
              </button>
              
              <button
                onClick={() => onNavClick("contact")}
                className="px-6 sm:px-8 py-3.5 bg-transparent border border-white/10 hover:border-cyber-cyan/50 text-white font-display font-semibold rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/5"
              >
                Contact Me
              </button>

              {/* Socials */}
              <div className="flex items-center gap-3 ml-auto">
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyber-bg-secondary border border-white/5 hover:border-cyber-cyan/60 text-text-secondary hover:text-cyber-cyan transition-all duration-300 shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyber-bg-secondary border border-white/5 hover:border-cyber-purple/60 text-text-secondary hover:text-cyber-purple transition-all duration-300 shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: Interactive Code/Profile Block (Col span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-md flex flex-col justify-between shadow-2xl group hover:border-cyber-purple/30 transition-all duration-300"
          >
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-cyber-purple/10 blur-[80px] pointer-events-none" />

            {/* Terminal Frame inside Bento Card */}
            <div className="relative w-full h-full flex flex-col justify-between">
              <div>
                {/* Header controls */}
                <div className="flex items-center justify-between px-4 py-3 border border-white/10 rounded-t-2xl bg-cyber-bg-secondary/80">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyber-pink/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-cyber-purple/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-cyber-cyan/80" />
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs text-text-secondary/80 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyber-cyan" />
                    virender@fullstack ~ bash
                  </span>
                  <div className="w-4" />
                </div>

                {/* Simulated IDE / Code Editor */}
                <div className="p-4 sm:p-5 border-x border-b border-white/10 rounded-b-2xl bg-cyber-bg-primary/50 font-mono text-xs sm:text-sm text-left leading-relaxed text-text-secondary overflow-x-auto select-none">
                  <pre className="whitespace-pre-wrap">
                    <code>
                      <span className="text-cyber-pink">const</span> developer = <span className="text-cyber-cyan">{"{"}</span>
                      {"\n  "}name: <span className="text-cyber-lime">"{name}"</span>,
                      {"\n  "}role: <span className="text-cyber-lime">"{role}"</span>,
                      {"\n  "}techStack: <span className="text-white">[</span>
                      <span className="text-cyber-cyan">"React"</span>,{" "}
                      <span className="text-cyber-purple">"Node"</span>,{" "}
                      <span className="text-cyber-cyan">"MongoDB"</span>
                      <span className="text-white">]</span>,
                      {"\n  "}exp: <span className="text-amber-400">1.7 yrs</span>,
                      {"\n  "}awsEC2: <span className="text-amber-400">true</span>,
                      {"\n  "}motive: <span className="text-cyber-cyan">"Build business apps"</span>
                      {"\n"}<span className="text-cyber-cyan">{"};"}</span>
                      {"\n\n"}<span className="text-slate-500">// Initialize profile</span>
                      {"\n"}<span className="text-cyber-purple">virender</span>.<span className="text-cyber-cyan">deploy</span>();
                    </code>
                  </pre>
                </div>
              </div>

              {/* Initials Badge Overlay inside Card */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 shadow-lg mt-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-cyber-cyan to-cyber-purple text-white font-display font-extrabold tracking-wider shadow-inner text-lg">
                  VY
                </div>
                <div className="text-left">
                  <div className="font-display font-bold text-xs text-white">Virender Yadav</div>
                  <div className="font-mono text-[10px] text-cyber-cyan">MERN Architect</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll down indicator */}
        <div className="w-full flex justify-center mt-16 md:mt-24">
          <button
            onClick={() => onNavClick("about")}
            className="flex flex-col items-center gap-2 cursor-pointer text-text-secondary hover:text-cyber-cyan transition-colors duration-300"
          >
            <span className="font-mono text-xs tracking-widest uppercase">Scroll Explore</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4 text-cyber-cyan" />
            </motion.div>
          </button>
        </div>
      </div>
    </section>
  );
}
