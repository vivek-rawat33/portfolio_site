import React from 'react';
import { User, MapPin, Globe, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { personalInfo, contactInfo } = portfolioData;

  return (
    <section id="about" className="py-16 border-b border-border-color">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="section-label">
          <User className="w-3.5 h-3.5" />
          <span>About Me</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-main mb-6">
          Engineering Background & Focus
        </h2>

        <div className="space-y-4 text-sm sm:text-base text-muted leading-relaxed mb-8">
          {personalInfo.aboutBio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Quick Spec List */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border-color">
          <div className="p-4 rounded-lg bg-card border border-border-color">
            <div className="text-xs text-muted font-medium mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-muted" />
              <span>Location</span>
            </div>
            <div className="text-sm font-semibold text-main">{personalInfo.location}</div>
          </div>

          <div className="p-4 rounded-lg bg-card border border-border-color">
            <div className="text-xs text-muted font-medium mb-1 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-muted" />
              <span>Timezone</span>
            </div>
            <div className="text-sm font-semibold text-main">{contactInfo.timezone}</div>
          </div>

          <div className="p-4 rounded-lg bg-card border border-border-color">
            <div className="text-xs text-muted font-medium mb-1 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-muted" />
              <span>Specialization</span>
            </div>
            <div className="text-sm font-semibold text-main">Full-Stack & AI</div>
          </div>
        </div>

      </div>
    </section>
  );
};
