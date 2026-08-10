import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 border-b border-border-color">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="flex items-center gap-2 text-xs font-semibold text-muted uppercase tracking-wider mb-2">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Career</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-main mb-8">
          Work Experience
        </h2>

        <div className="space-y-6">
          {experience.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-xl bg-surface-elevated border border-border-color space-y-2"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold text-muted flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>
                <span className="text-xs text-muted flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {item.location}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-main">
                {item.role} <span className="text-muted font-medium">at {item.company}</span>
              </h3>

              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {item.description}
              </p>

              <ul className="space-y-1 pt-2 border-t border-border-color/60 text-xs text-muted list-disc list-inside">
                {item.achievements.map((ach, idx) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
