import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Cpu } from 'lucide-react';
import { type Project } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  useEffect(() => {
    const cls = document.documentElement.classList;
    project ? cls.add('modal-open') : cls.remove('modal-open');
    return () => cls.remove('modal-open');
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">

        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-sm"
        />

        {/* Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ type: 'spring', damping: 30, stiffness: 340 }}
          className="relative w-full max-w-3xl bg-card border border-border-hover rounded-2xl shadow-2xl overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-border-color bg-card shrink-0">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-blue bg-accent-blue/10 px-2 py-0.5 rounded-full shrink-0">
                {project.category}
              </span>
              <h3 className="text-sm font-bold text-main truncate">{project.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-border-color text-muted hover:text-main hover:border-border-hover transition-colors shrink-0 ml-3 vercel-btn"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable body */}
          <div className="overflow-y-auto p-5 space-y-5">

            {/* Image */}
            <div className="relative w-full h-44 sm:h-72 rounded-xl overflow-hidden border border-border-color bg-surface">
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 right-3 flex items-center gap-2">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-sm text-white text-xs font-semibold hover:bg-black/90 transition-colors">
                  <GithubIcon className="w-3.5 h-3.5" /><span className="hidden sm:inline">GitHub</span>
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-blue text-white text-xs font-semibold hover:opacity-90 transition-opacity">
                  <span>Live Demo</span><ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-[11px] font-semibold text-muted uppercase tracking-wider mb-1.5">Overview</h4>
              <p className="text-sm text-main leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div>
                <h4 className="text-[11px] font-semibold text-muted uppercase tracking-wider mb-2">Key Metrics</h4>
                <div className="grid grid-cols-3 gap-3">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="p-3 rounded-xl bg-surface border border-border-color text-center">
                      <div className="text-lg sm:text-2xl font-extrabold text-accent-blue">{m.value}</div>
                      <div className="text-[10px] text-muted mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights */}
            <div>
              <h4 className="text-[11px] font-semibold text-muted uppercase tracking-wider mb-2">Engineering Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.highlights.map((h, i) => (
                  <div key={i} className="p-3 rounded-xl bg-surface border border-border-color flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
                    <span className="text-xs text-main leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture note */}
            {project.architectureNotes && (
              <div className="p-3.5 rounded-xl bg-accent-blue/5 border border-accent-blue/20 flex items-start gap-2.5">
                <Cpu className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-[11px] font-bold text-accent-blue uppercase mb-0.5">Architecture Insight</h5>
                  <p className="text-xs text-muted leading-relaxed">{project.architectureNotes}</p>
                </div>
              </div>
            )}

            {/* Tech stack */}
            <div>
              <h4 className="text-[11px] font-semibold text-muted uppercase tracking-wider mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg bg-surface border border-border-color text-xs font-code text-main">{t}</span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="px-5 py-3 border-t border-border-color bg-card flex items-center justify-end gap-2 shrink-0">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-color text-xs font-semibold text-muted hover:text-main hover:border-border-hover transition-colors vercel-btn">
              <GithubIcon className="w-3.5 h-3.5" /><span>GitHub</span>
            </a>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-blue text-white text-xs font-semibold hover:opacity-90 transition-opacity vercel-btn">
              <span>Open Live</span><ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
