import React from 'react';
import { 
  Code2, 
  Mail, 
  ArrowUp
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, TwitterIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const { personalInfo, socialLinks } = portfolioData;

  const githubLink = socialLinks.find(s => s.platform === 'github')?.url;
  const twitterLink = socialLinks.find(s => s.platform === 'twitter')?.url;
  const linkedinLink = socialLinks.find(s => s.platform === 'linkedin')?.url;
  const emailLink = socialLinks.find(s => s.platform === 'email')?.url;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border-color bg-surface-elevated/60 backdrop-blur-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border-color/60">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500 p-[1px]">
              <div className="w-full h-full bg-surface-elevated rounded-[11px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-accent-primary" />
              </div>
            </div>
            <div>
              <span className="font-heading font-bold text-lg text-main">
                {personalInfo.name}
              </span>
              <p className="text-xs text-muted">
                {personalInfo.title}
              </p>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-muted">
            <a href="#about" className="hover:text-main transition-colors">About</a>
            <a href="#skills" className="hover:text-main transition-colors">Tech Stack</a>
            <a href="#projects" className="hover:text-main transition-colors">Projects</a>
            <a href="#experience" className="hover:text-main transition-colors">Experience</a>
            <a href="#contact" className="hover:text-main transition-colors">Contact</a>
          </div>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 pr-3 border-r border-border-color">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted hover:text-main hover:bg-surface transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={twitterLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted hover:text-sky-400 hover:bg-surface transition-colors"
                title="X / Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted hover:text-indigo-400 hover:bg-surface transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={emailLink}
                className="p-2 rounded-lg text-muted hover:text-purple-400 hover:bg-surface transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-surface border border-border-color text-muted hover:text-main hover:bg-surface-elevated transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted gap-2">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
