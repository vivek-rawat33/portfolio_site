import React, { useState } from 'react';
import { ExternalLink, Sparkles, Filter } from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData';
import { GithubIcon } from '../../SocialIcons';

export const GalleryApp: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState('All');
  const categories = ['All', 'AI & SaaS', 'Web Apps', 'Cloud & DevOps', 'Fintech'];

  const filteredProjects = portfolioData.projects.filter(p => {
    if (selectedCat === 'All') return true;
    return p.category === selectedCat;
  });

  return (
    <div className="space-y-6">
      
      {/* Category Filter Toolbar */}
      <div className="flex items-center justify-between gap-4 pb-3 border-b border-border-color">
        <div className="flex items-center gap-2 text-xs font-bold text-main">
          <Filter className="w-4 h-4 text-[#E95420]" />
          <span>Filter Projects:</span>
        </div>

        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                selectedCat === cat
                  ? 'bg-[#E95420] text-white font-bold'
                  : 'bg-surface-elevated text-muted hover:text-main'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="p-4 rounded-xl bg-surface-elevated border border-border-color shadow-lg flex flex-col justify-between hover:border-[#E95420]/50 transition-colors"
          >
            <div>
              
              {/* Image Preview */}
              <div className="relative w-full h-44 rounded-lg overflow-hidden mb-4 border border-border-color bg-black">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-bold text-[#E95420]">
                  {project.category}
                </div>
                {project.featured && (
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              {/* Title & Short Description */}
              <h3 className="text-base font-bold text-main font-heading mb-1">
                {project.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed mb-3">
                {project.shortDescription}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-surface text-[10px] font-code text-muted border border-border-color">
                    {t}
                  </span>
                ))}
              </div>

              {/* Key Metrics */}
              {project.metrics && (
                <div className="grid grid-cols-3 gap-2 mb-4 p-2 rounded bg-surface/50 border border-border-color/60 text-center">
                  {project.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-xs font-bold text-[#E95420]">{m.value}</div>
                      <div className="text-[9px] text-muted">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

            </div>

            {/* Bottom Action Links */}
            <div className="pt-3 border-t border-border-color flex items-center justify-between">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border-color text-xs font-medium text-main hover:bg-surface-elevated transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#E95420] text-white text-xs font-bold hover:bg-rose-600 shadow transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
