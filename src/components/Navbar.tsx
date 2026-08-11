import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, TwitterIcon, LinkedinIcon } from './SocialIcons';

export const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const githubLink = portfolioData.socialLinks.find(s => s.platform === 'github')?.url;
  const twitterLink = portfolioData.socialLinks.find(s => s.platform === 'twitter')?.url;
  const linkedinLink = portfolioData.socialLinks.find(s => s.platform === 'linkedin')?.url;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled ? 'clean-nav py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          
          {/* Minimal Brand Name Logo with Emerald Dot */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-heading font-bold text-sm sm:text-base tracking-tight text-main group-hover:text-[#0070f3] transition-colors">
              {portfolioData.personalInfo.name}
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-muted hover:text-[#0070f3] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Top Social Icons */}
            <div className="flex items-center gap-1 pr-3 border-r border-border-color">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="p-1.5 rounded-lg text-muted hover:text-main transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={twitterLink}
                target="_blank"
                rel="noopener noreferrer"
                title="X / Twitter Profile"
                className="p-1.5 rounded-lg text-muted hover:text-main transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="p-1.5 rounded-lg text-muted hover:text-main transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-1.5 rounded-lg border border-border-color text-muted hover:text-main hover:border-border-hover transition-all"
              title="Toggle theme mode"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Minimal CTA (Vercel Blue) */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-[#0070f3] hover:bg-blue-600 rounded-lg shadow-sm transition-all vercel-btn"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3 h-3 text-white/80" />
            </a>

          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-1.5 rounded-lg border border-border-color text-muted"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg border border-border-color text-main"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden clean-nav border-b border-border-color px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-muted hover:text-[#0070f3] py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-border-color flex items-center justify-between">
            <span className="text-xs text-muted">Social:</span>
            <div className="flex items-center gap-3">
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-main">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href={twitterLink} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-main">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-main">
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
