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
    <section className="relative min-h-[80vh] pt-32 pb-16 flex flex-col justify-center border-b border-border-color">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full text-left">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-border-color mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-medium text-muted">
            {personalInfo.availability}
          </span>
        </motion.div>

        {/* Name & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-3 mb-6"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-main font-heading leading-tight">
            {personalInfo.name}
          </h1>
          <p className="text-xl sm:text-2xl text-muted font-medium">
            {personalInfo.title}
          </p>
        </motion.div>

        {/* Bio Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed mb-8"
        >
          {personalInfo.summary}
        </motion.p>

        {/* CTA Buttons & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap items-center gap-3 mb-12"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-black bg-white hover:bg-slate-200 rounded-lg transition-all"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-main bg-surface-elevated hover:bg-border-color border border-border-color rounded-lg transition-all"
          >
            <Mail className="w-4 h-4 text-muted" />
            <span>Get in Touch</span>
          </a>

          <div className="flex items-center gap-1.5 pl-2">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border-color text-muted hover:text-main hover:border-border-hover transition-all"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={twitterLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border-color text-muted hover:text-main hover:border-border-hover transition-all"
              title="X Profile"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border-color text-muted hover:border-border-hover hover:text-main transition-all"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border-color"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold font-heading text-main">
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
