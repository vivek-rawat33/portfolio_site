import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, 
  Moon, 
  Zap, 
  Menu, 
  X, 
  Code2, 
  ArrowUpRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import type { ThemeMode } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, TwitterIcon, LinkedinIcon } from './SocialIcons';

export const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const themesList: { mode: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { mode: 'dark', label: 'Dark Slate', icon: <Moon className="w-3.5 h-3.5" /> },
    { mode: 'light', label: 'Clean Light', icon: <Sun className="w-3.5 h-3.5" /> },
    { mode: 'cyberpunk', label: 'Cyberpunk', icon: <Zap className="w-3.5 h-3.5 text-pink-500" /> },
  ];

  const githubLink = portfolioData.socialLinks.find(s => s.platform === 'github')?.url || 'https://github.com';
  const twitterLink = portfolioData.socialLinks.find(s => s.platform === 'twitter')?.url || 'https://x.com';
  const linkedinLink = portfolioData.socialLinks.find(s => s.platform === 'linkedin')?.url || 'https://linkedin.com';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-nav py-3 shadow-lg shadow-black/5' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500 p-[1px] shadow-md group-hover:shadow-sky-500/25 transition-shadow duration-300">
              <div className="w-full h-full bg-surface-elevated rounded-[11px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-accent-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-main tracking-tight group-hover:text-accent-primary transition-colors">
                {portfolioData.personalInfo.name}
              </span>
              <span className="text-[11px] font-code text-muted -mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Full-Stack & AI
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-surface-elevated/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-border-color shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-muted hover:text-main hover:bg-surface/50 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Bar: Top Social Icons & 3-Theme Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Top Social Icon Links (GitHub, X, LinkedIn) */}
            <div className="flex items-center gap-1.5 pr-3 border-r border-border-color">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="p-2 rounded-lg text-muted hover:text-main hover:bg-surface-elevated transition-all duration-200 hover:scale-105"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={twitterLink}
                target="_blank"
                rel="noopener noreferrer"
                title="X (Twitter) Profile"
                className="p-2 rounded-lg text-muted hover:text-sky-400 hover:bg-surface-elevated transition-all duration-200 hover:scale-105"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="p-2 rounded-lg text-muted hover:text-indigo-400 hover:bg-surface-elevated transition-all duration-200 hover:scale-105"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            {/* 3-Theme Switcher Toggle */}
            <div className="flex items-center gap-1 bg-surface-elevated/80 p-1 rounded-xl border border-border-color shadow-inner">
              {themesList.map((item) => (
                <button
                  key={item.mode}
                  onClick={() => setTheme(item.mode)}
                  className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200 ${
                    theme === item.mode
                      ? 'text-main font-semibold'
                      : 'text-muted hover:text-main hover:bg-surface/40'
                  }`}
                  title={`Switch to ${item.label} Theme`}
                >
                  {theme === item.mode && (
                    <motion.div
                      layoutId="theme-active-indicator"
                      className="absolute inset-0 bg-surface rounded-lg shadow-sm border border-border-color/80"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.icon}</span>
                  <span className="relative z-10 hidden xl:inline">{item.label}</span>
                </button>
              ))}
            </div>

            {/* CTA Contact Button */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 rounded-xl shadow-md shadow-sky-500/20 hover:shadow-sky-500/35 transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

          </div>

          {/* Mobile Navigation Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => {
                if (theme === 'dark') setTheme('light');
                else if (theme === 'light') setTheme('cyberpunk');
                else setTheme('dark');
              }}
              className="p-2 rounded-xl bg-surface-elevated border border-border-color text-muted hover:text-main"
              title="Toggle Theme"
            >
              {theme === 'dark' && <Moon className="w-4 h-4" />}
              {theme === 'light' && <Sun className="w-4 h-4" />}
              {theme === 'cyberpunk' && <Zap className="w-4 h-4 text-pink-500" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-surface-elevated border border-border-color text-main hover:bg-surface focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-surface-elevated/95 backdrop-blur-xl border-b border-border-color overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-sm font-medium text-muted hover:text-main hover:bg-surface rounded-xl transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="h-px bg-border-color my-1" />

              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted">Social Profiles:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-surface text-main hover:text-accent-primary"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={twitterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-surface text-main hover:text-accent-primary"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-surface text-main hover:text-accent-primary"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <span className="text-xs font-medium text-muted">Select Theme Palette:</span>
                <div className="grid grid-cols-3 gap-2">
                  {themesList.map((item) => (
                    <button
                      key={item.mode}
                      onClick={() => setTheme(item.mode)}
                      className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                        theme === item.mode
                          ? 'bg-accent-primary/10 border-accent-primary text-accent-primary'
                          : 'bg-surface border-border-color text-muted'
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
