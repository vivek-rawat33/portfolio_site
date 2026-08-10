import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  ArrowRight, 
  Sparkles,
  Zap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, TwitterIcon, LinkedinIcon } from './SocialIcons';
import { InteractiveTerminal } from './InteractiveTerminal';

export const HeroSection: React.FC = () => {
  const { personalInfo, stats, socialLinks } = portfolioData;

  const githubLink = socialLinks.find(s => s.platform === 'github')?.url;
  const twitterLink = socialLinks.find(s => s.platform === 'twitter')?.url;
  const linkedinLink = socialLinks.find(s => s.platform === 'linkedin')?.url;

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-mesh-grid">
      
      {/* Ambient Glow background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[450px] sm:w-[650px] h-[320px] bg-gradient-to-tr from-accent-primary/20 via-accent-secondary/15 to-accent-tertiary/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Headline & Summary */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Status & Social Icon Quick Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap items-center gap-2.5 mb-5"
            >
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/25 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-accent-primary tracking-wide">
                  {personalInfo.availability}
                </span>
              </div>

              {/* Top Social Quick Pills */}
              <div className="flex items-center gap-1.5 bg-surface-elevated/70 px-2.5 py-0.5 rounded-full border border-border-color">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-main transition-colors p-1"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
                <span className="w-1 h-1 rounded-full bg-border-color" />
                <a
                  href={twitterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-sky-400 transition-colors p-1"
                  title="X / Twitter"
                >
                  <TwitterIcon className="w-3.5 h-3.5" />
                </a>
                <span className="w-1 h-1 rounded-full bg-border-color" />
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-indigo-400 transition-colors p-1"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-main font-heading leading-[1.15] mb-3">
                Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
                <br />
                <span className="text-xl sm:text-3xl lg:text-4xl text-muted font-normal block mt-1.5">
                  {personalInfo.title}
                </span>
              </h1>
            </motion.div>

            {/* Subtitle / Bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-muted max-w-2xl font-sans leading-relaxed mb-6"
            >
              {personalInfo.tagline}. {personalInfo.summary}
            </motion.p>

            {/* Action Buttons & Top Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 mb-10 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 rounded-xl shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-main bg-surface-elevated hover:bg-surface border border-border-color hover:border-border-hover rounded-xl transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-accent-primary" />
                <span>Contact Me</span>
              </a>

              {/* Top Social Buttons */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:pl-2">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-surface-elevated border border-border-color text-muted hover:text-main transition-colors"
                  title="View GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={twitterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-surface-elevated border border-border-color text-muted hover:text-sky-400 transition-colors"
                  title="Follow on X / Twitter"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-surface-elevated border border-border-color text-muted hover:text-indigo-400 transition-colors"
                  title="Connect on LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Metrics Counters Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-5 border-t border-border-color/80"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-extrabold font-heading text-gradient">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-medium text-muted mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Column: High-Tech Interactive Live CLI Terminal */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full flex justify-center"
            >
              <InteractiveTerminal />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
