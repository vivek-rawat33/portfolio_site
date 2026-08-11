import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, TwitterIcon, LinkedinIcon } from './SocialIcons';

export const HeroSection: React.FC = () => {
  const { personalInfo, stats, socialLinks } = portfolioData;

  const githubLink = socialLinks.find(s => s.platform === 'github')?.url;
  const twitterLink = socialLinks.find(s => s.platform === 'twitter')?.url;
  const linkedinLink = socialLinks.find(s => s.platform === 'linkedin')?.url;

  return (
    <section className="relative min-h-[82vh] pt-32 pb-16 flex flex-col justify-center border-b border-border-color">
      
      {/* Minimal Ambient Glow Spotlights */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#0070f3]/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-[#10b981]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full text-left">
        
        {/* Availability Badge in Emerald Green */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-semibold text-emerald-400 tracking-wide">
            {personalInfo.availability}
          </span>
        </motion.div>

        {/* Name & Headline with Minimal Blue & Green Contrast */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-3 mb-6"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-main font-heading leading-tight">
            Hi, I'm {personalInfo.name}
          </h1>
          <p className="text-xl sm:text-3xl font-bold tracking-tight text-gradient-blue-green">
            {personalInfo.title}
          </p>
        </motion.div>

        {/* Bio Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed mb-8 font-sans"
        >
          {personalInfo.tagline}. {personalInfo.summary}
        </motion.p>

        {/* CTA Buttons & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap items-center gap-3 mb-12"
        >
          {/* Primary CTA (Vercel Blue) */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0070f3] hover:bg-blue-600 rounded-lg shadow-lg shadow-blue-500/20 transition-all vercel-btn"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-main bg-card hover:bg-card-hover border border-border-color hover:border-accent-green/40 hover:text-accent-green rounded-lg transition-all vercel-btn"
          >
            <Mail className="w-4 h-4 text-accent-green" />
            <span>Get in Touch</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-1.5 pl-2">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border-color text-muted hover:text-white hover:border-[#0070f3] transition-all vercel-btn"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={twitterLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border-color text-muted hover:text-sky-400 hover:border-sky-400/50 transition-all vercel-btn"
              title="X Profile"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border-color text-muted hover:text-emerald-400 hover:border-emerald-500/50 transition-all vercel-btn"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Metrics Grid with Blue Contrast Values */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border-color"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold font-heading text-[#0070f3]">
                {stat.value}
              </span>
              <span className="text-xs text-muted mt-0.5 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
