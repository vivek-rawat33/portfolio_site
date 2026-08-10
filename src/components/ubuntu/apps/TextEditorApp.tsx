import React, { useState } from 'react';
import { 
  FileText, 
  Mail, 
  MapPin, 
  Clock, 
  Copy, 
  Check, 
  GraduationCap
} from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData';
import { GithubIcon, TwitterIcon, LinkedinIcon } from '../../SocialIcons';

export const TextEditorApp: React.FC = () => {
  const { personalInfo, contactInfo, socialLinks } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const githubLink = socialLinks.find(s => s.platform === 'github')?.url;
  const twitterLink = socialLinks.find(s => s.platform === 'twitter')?.url;
  const linkedinLink = socialLinks.find(s => s.platform === 'linkedin')?.url;

  return (
    <div className="space-y-6 font-sans">
      
      {/* File Header Info */}
      <div className="p-4 rounded-xl bg-surface-elevated border border-border-color space-y-3">
        <div className="flex items-center justify-between border-b border-border-color pb-3">
          <div className="flex items-center gap-2 text-sm font-bold text-main">
            <FileText className="w-4 h-4 text-sky-400" />
            <span>About_Info.txt</span>
          </div>
          <span className="text-xs text-emerald-400 font-code font-bold">STATUS: {personalInfo.availability}</span>
        </div>

        <h2 className="text-xl font-bold text-main font-heading">
          {personalInfo.name}
        </h2>
        <p className="text-xs text-sky-400 font-code font-bold">
          {personalInfo.title}
        </p>
        <p className="text-xs text-muted leading-relaxed">
          {personalInfo.summary}
        </p>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Email Box */}
        <div className="p-4 rounded-xl bg-surface-elevated border border-border-color flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 overflow-hidden">
            <Mail className="w-5 h-5 text-sky-400 shrink-0" />
            <div className="truncate">
              <div className="text-[10px] font-bold text-muted uppercase">Email</div>
              <div className="text-xs font-bold text-main truncate font-code">{contactInfo.email}</div>
            </div>
          </div>
          <button
            onClick={handleCopy}
            className="p-2 rounded bg-surface border border-border-color hover:bg-surface-elevated transition-colors text-muted hover:text-main shrink-0"
            title="Copy email"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Location */}
        <div className="p-4 rounded-xl bg-surface-elevated border border-border-color flex items-center gap-3">
          <MapPin className="w-5 h-5 text-rose-400 shrink-0" />
          <div>
            <div className="text-[10px] font-bold text-muted uppercase">Location</div>
            <div className="text-xs font-bold text-main">{personalInfo.location}</div>
          </div>
        </div>

        {/* Timezone */}
        <div className="p-4 rounded-xl bg-surface-elevated border border-border-color flex items-center gap-3">
          <Clock className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <div className="text-[10px] font-bold text-muted uppercase">Timezone</div>
            <div className="text-xs font-bold text-main">{contactInfo.timezone}</div>
          </div>
        </div>

        {/* Education */}
        <div className="p-4 rounded-xl bg-surface-elevated border border-border-color flex items-center gap-3">
          <GraduationCap className="w-5 h-5 text-purple-400 shrink-0" />
          <div>
            <div className="text-[10px] font-bold text-muted uppercase">Education</div>
            <div className="text-xs font-bold text-main">B.Tech Computer Science</div>
          </div>
        </div>

      </div>

      {/* Direct Social Links Bar */}
      <div className="p-4 rounded-xl bg-surface-elevated border border-border-color space-y-3">
        <span className="text-xs font-bold text-muted uppercase">Connect On Social Profiles:</span>
        <div className="flex items-center gap-3 pt-1">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border-color text-xs font-bold text-main hover:bg-[#E95420] hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>
          <a
            href={twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border-color text-xs font-bold text-main hover:bg-sky-500 hover:text-white transition-colors"
          >
            <TwitterIcon className="w-4 h-4" />
            <span>X / Twitter</span>
          </a>
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border-color text-xs font-bold text-main hover:bg-indigo-600 hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

    </div>
  );
};
