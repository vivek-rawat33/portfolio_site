import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  ArrowRight, 
  Terminal, 
  Cpu 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, TwitterIcon, LinkedinIcon } from './SocialIcons';

export const HeroSection: React.FC = () => {
  const { personalInfo, stats, socialLinks } = portfolioData;

  const githubLink = socialLinks.find(s => s.platform === 'github')?.url;
  const twitterLink = socialLinks.find(s => s.platform === 'twitter')?.url;
  const linkedinLink = socialLinks.find(s => s.platform === 'linkedin')?.url;

  return (
    <section className="relative min-h-[90vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-mesh-grid">
      
      {/* Ambient Glow background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[450px] sm:w-[600px] h-[300px] bg-gradient-to-tr from-accent-primary/20 via-accent-secondary/15 to-accent-tertiary/20 blur-[110px] rounded-full pointer-events-none -z-10" />

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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 backdrop-blur-md">
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
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 rounded-xl shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 transition-all duration-200"
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

          {/* Right Column: Sleek SaaS Code Editor / IDE Terminal Box (NO PHOTO AT ALL!) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full max-w-md rounded-2xl glass-panel border border-border-color shadow-2xl overflow-hidden font-code text-xs text-left"
            >
              {/* IDE Top Window Control Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-surface-elevated border-b border-border-color">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-muted font-medium">
                  <Terminal className="w-3.5 h-3.5 text-accent-primary" />
                  <span>DeveloperProfile.ts</span>
                </div>
                <div className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md font-semibold">
                  TSC Clean
                </div>
              </div>

              {/* Syntax Highlighted Code Content */}
              <div className="p-4 sm:p-5 space-y-2 bg-surface/90 font-code text-[11px] sm:text-xs leading-relaxed overflow-x-auto text-slate-300">
                <div>
                  <span className="text-purple-400">interface</span> <span className="text-amber-300">SoftwareEngineer</span> {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-sky-400">name</span>: <span className="text-emerald-300">'Vivek Rawat'</span>;
                </div>
                <div className="pl-4">
                  <span className="text-sky-400">role</span>: <span className="text-emerald-300">'Full-Stack & AI Systems'</span>;
                </div>
                <div className="pl-4">
                  <span className="text-sky-400">stack</span>: [<span className="text-emerald-300">'React 19'</span>, <span className="text-emerald-300">'TypeScript'</span>, <span className="text-emerald-300">'Node'</span>];
                </div>
                <div className="pl-4">
                  <span className="text-sky-400">architecture</span>: <span className="text-emerald-300">'Modular Microservices'</span>;
                </div>
                <div className="pl-4">
                  <span className="text-sky-400">performance</span>: <span className="text-amber-400">99.9</span>;
                </div>
                <div>{'}'}</div>

                <div className="pt-2 text-dim">
                  <span className="text-sky-400">// Instant AI Agent & RAG Pipeline Sync</span>
                </div>
                <div>
                  <span className="text-purple-400">export const</span> <span className="text-blue-400">architectSystem</span> = () =&gt; ({'{'}
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">return</span> {'{'} <span className="text-sky-400">status</span>: <span className="text-emerald-400">'Production Ready 🚀'</span> {'}'};
                </div>
                <div>{'}'});</div>
              </div>

              {/* IDE Bottom Status Bar */}
              <div className="px-4 py-2 bg-surface-elevated/90 border-t border-border-color flex items-center justify-between text-[10px] text-muted">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Main Branch • 0 Vulnerabilities</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-3 h-3 text-accent-primary" />
                  <span>React 19 Vite</span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
