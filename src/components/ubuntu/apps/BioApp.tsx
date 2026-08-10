import React from 'react';
import { User, Zap, ShieldCheck, Rocket } from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData';

export const BioApp: React.FC = () => {
  const { personalInfo } = portfolioData;

  return (
    <div className="space-y-6 font-sans">
      
      {/* Header Banner */}
      <div className="p-4 rounded-xl bg-surface-elevated border border-border-color space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 font-code">
          <User className="w-4 h-4" />
          <span>Personal_Bio.md</span>
        </div>
        <h2 className="text-xl font-bold font-heading text-main">
          About {personalInfo.name} — My Developer Journey
        </h2>
        <p className="text-xs text-muted">
          Passionate Full-Stack Systems Engineer & AI Application Developer.
        </p>
      </div>

      {/* Story Paragraphs */}
      <div className="p-5 rounded-xl bg-surface-elevated border border-border-color space-y-4 text-xs sm:text-sm text-muted leading-relaxed">
        <h3 className="text-sm font-bold text-main font-heading">
          Engineering Philosophy & Mission
        </h3>
        
        {personalInfo.aboutBio.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      {/* Engineering Pillars */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-muted">
          Core Software Architecture Pillars
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-surface-elevated border border-border-color space-y-1">
            <Zap className="w-5 h-5 text-sky-400" />
            <h4 className="font-bold text-xs text-main">Performance Obsessed</h4>
            <p className="text-[11px] text-muted">Sub-second response times, 60 FPS rendering, zero wasted re-renders.</p>
          </div>

          <div className="p-4 rounded-xl bg-surface-elevated border border-border-color space-y-1">
            <ShieldCheck className="w-5 h-5 text-indigo-400" />
            <h4 className="font-bold text-xs text-main">Strict Type Safety</h4>
            <p className="text-[11px] text-muted">TypeScript end-to-end for zero runtime crashes and self-documenting code.</p>
          </div>

          <div className="p-4 rounded-xl bg-surface-elevated border border-border-color space-y-1">
            <Rocket className="w-5 h-5 text-purple-400" />
            <h4 className="font-bold text-xs text-main">AI Integration</h4>
            <p className="text-[11px] text-muted">Leveraging LLM pipelines, vector databases, and real-time streaming interfaces.</p>
          </div>
        </div>
      </div>

    </div>
  );
};
