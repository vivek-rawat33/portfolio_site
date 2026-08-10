import React, { useState, useEffect } from 'react';
import { 
  Wifi, 
  Volume2, 
  Battery, 
  Sun, 
  Moon, 
  Zap, 
  Grid, 
  ChevronDown
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { portfolioData } from '../../data/portfolioData';
import { GithubIcon, TwitterIcon, LinkedinIcon } from '../SocialIcons';

interface UbuntuTopBarProps {
  activeAppTitle?: string;
  onToggleLauncher: () => void;
}

export const UbuntuTopBar: React.FC<UbuntuTopBarProps> = ({ activeAppTitle = 'Desktop', onToggleLauncher }) => {
  const { theme, setTheme } = useTheme();
  const [timeStr, setTimeStr] = useState('');
  const [systemDropdownOpen, setSystemDropdownOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true
      };
      setTimeStr(now.toLocaleString('en-US', options));
    };

    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  const githubLink = portfolioData.socialLinks.find(s => s.platform === 'github')?.url;
  const twitterLink = portfolioData.socialLinks.find(s => s.platform === 'twitter')?.url;
  const linkedinLink = portfolioData.socialLinks.find(s => s.platform === 'linkedin')?.url;

  return (
    <header className="h-7 bg-black/90 backdrop-blur-md text-white text-xs font-sans px-3 flex items-center justify-between z-50 select-none border-b border-white/10 relative">
      
      {/* Left: Activities & Active App Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleLauncher}
          className="hover:bg-white/15 px-2.5 py-0.5 rounded transition-colors flex items-center gap-1.5 font-medium"
        >
          <Grid className="w-3.5 h-3.5 text-amber-500" />
          <span>Activities</span>
        </button>

        <span className="text-white/40">|</span>

        <span className="font-semibold text-white/90">
          {activeAppTitle}
        </span>
      </div>

      {/* Center: Live Clock */}
      <div className="font-medium text-white/90 cursor-default">
        {timeStr || 'Mon Aug 10  06:51 AM'}
      </div>

      {/* Right: Indicators & Settings Menu */}
      <div className="relative flex items-center gap-2">
        
        {/* Quick Social Buttons */}
        <div className="hidden sm:flex items-center gap-1.5 pr-2 border-r border-white/15">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 text-white/70 p-1" title="GitHub">
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
          <a href={twitterLink} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 text-white/70 p-1" title="X / Twitter">
            <TwitterIcon className="w-3.5 h-3.5" />
          </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 text-white/70 p-1" title="LinkedIn">
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* System Control Group */}
        <button
          onClick={() => setSystemDropdownOpen(!systemDropdownOpen)}
          className="flex items-center gap-2 hover:bg-white/15 px-2 py-0.5 rounded transition-colors"
        >
          <Wifi className="w-3.5 h-3.5" />
          <Volume2 className="w-3.5 h-3.5" />
          <Battery className="w-3.5 h-3.5 text-emerald-400" />
          <ChevronDown className="w-3 h-3 text-white/70" />
        </button>

        {/* System Indicator Dropdown Popup */}
        {systemDropdownOpen && (
          <div className="absolute right-0 top-8 w-64 bg-[#2d2d2d] border border-white/15 rounded-xl shadow-2xl p-3 z-50 text-white space-y-3">
            
            <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10 font-bold">
              <span>Ubuntu System Status</span>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">Connected</span>
            </div>

            {/* Theme Selector */}
            <div className="space-y-1.5">
              <span className="text-[11px] text-white/60 font-semibold block">Select Desktop Theme:</span>
              <div className="grid grid-cols-3 gap-1.5">
                <button
                  onClick={() => { setTheme('dark'); setSystemDropdownOpen(false); }}
                  className={`flex flex-col items-center gap-1 p-2 rounded-lg text-[10px] border transition-colors ${
                    theme === 'dark' ? 'bg-[#E95420]/20 border-[#E95420] text-[#E95420] font-bold' : 'bg-white/5 border-white/10 text-white/70'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>Yaru Dark</span>
                </button>
                <button
                  onClick={() => { setTheme('light'); setSystemDropdownOpen(false); }}
                  className={`flex flex-col items-center gap-1 p-2 rounded-lg text-[10px] border transition-colors ${
                    theme === 'light' ? 'bg-[#E95420]/20 border-[#E95420] text-[#E95420] font-bold' : 'bg-white/5 border-white/10 text-white/70'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>Yaru Light</span>
                </button>
                <button
                  onClick={() => { setTheme('cyberpunk'); setSystemDropdownOpen(false); }}
                  className={`flex flex-col items-center gap-1 p-2 rounded-lg text-[10px] border transition-colors ${
                    theme === 'cyberpunk' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400 font-bold' : 'bg-white/5 border-white/10 text-white/70'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Cyber</span>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-2 border-t border-white/10 space-y-1.5">
              <span className="text-[11px] text-white/60 font-semibold block">Developer Profiles:</span>
              <div className="flex items-center justify-between text-xs pt-1">
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/80 hover:text-white">
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a href={twitterLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/80 hover:text-sky-400">
                  <TwitterIcon className="w-3.5 h-3.5" />
                  <span>X / Twitter</span>
                </a>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/80 hover:text-indigo-400">
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>
        )}

      </div>
    </header>
  );
};
