import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Zap, 
  ShieldCheck, 
  Rocket, 
  CheckCircle 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { personalInfo } = portfolioData;

  const corePrinciples = [
    {
      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />,
      title: "Performance First",
      description: "Obsessed with 60 FPS UI rendering, minimal bundle footprints, and sub-second API latency."
    },
    {
      icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />,
      title: "Strict Type Safety",
      description: "Leveraging TypeScript generics and strict schemas to eliminate runtime bugs before production."
    },
    {
      icon: <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />,
      title: "SaaS Product Vision",
      description: "Architecting software scalable for thousands of concurrent users with intuitive glass UI."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative bg-surface/50 border-t border-border-color/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl font-extrabold font-heading text-main tracking-tight"
          >
            Engineering <span className="text-gradient">Modern Digital Experiences</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Personal Highlights & Bio */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col gap-4 sm:gap-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-main">
              Passionate Full-Stack Developer & Software Architect
            </h3>

            <div className="space-y-3.5 text-muted font-sans text-xs sm:text-base leading-relaxed">
              {personalInfo.aboutBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
              <div className="p-3.5 sm:p-4 rounded-xl glass-panel flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold text-muted">Location</div>
                  <div className="text-xs sm:text-sm font-bold text-main">{personalInfo.location}</div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl glass-panel flex items-start gap-3">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-accent-secondary shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold text-muted">Role Focus</div>
                  <div className="text-xs sm:text-sm font-bold text-main">Full-Stack & AI Systems</div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl glass-panel flex items-start gap-3">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-accent-tertiary shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold text-muted">Education</div>
                  <div className="text-xs sm:text-sm font-bold text-main">B.Tech in Computer Science</div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl glass-panel flex items-start gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold text-muted">Status</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-400">Ready for Remote Roles</div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Engineering Principles Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-border-color shadow-xl">
              <h4 className="text-base sm:text-lg font-bold font-heading text-main mb-4 flex items-center gap-2">
                <span>Core Engineering Pillars</span>
              </h4>

              <div className="space-y-3">
                {corePrinciples.map((pillar, idx) => (
                  <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-surface-elevated/70 border border-border-color/60 hover:border-accent-primary/40 transition-colors">
                    <div className="flex items-center gap-2.5 mb-1">
                      {pillar.icon}
                      <h5 className="font-bold text-xs sm:text-sm text-main">{pillar.title}</h5>
                    </div>
                    <p className="text-xs text-muted pl-6 sm:pl-7 leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
