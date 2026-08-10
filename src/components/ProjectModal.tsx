import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Cpu
} from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock body scroll when modal is active so background doesn't scroll
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {/* High z-index wrapper z-[100] to sit strictly above sticky navbar z-50 */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        
        {/* Dark Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className="relative w-full max-w-4xl bg-surface-elevated border border-border-hover rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col"
        >
          
          {/* Top Bar with Title & Close Button */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-border-color bg-surface/90 backdrop-blur-md shrink-0">
            <div className="flex items-center gap-2 truncate">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-accent-primary bg-accent-primary/10 px-2.5 py-0.5 rounded-full shrink-0">
                {project.category}
              </span>
              <h3 className="text-sm sm:text-base font-bold font-heading text-main truncate">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-surface border border-border-color text-muted hover:text-main hover:bg-surface-elevated transition-colors shrink-0 ml-2"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Content Area */}
          <div className="overflow-y-auto p-4 sm:p-6 space-y-5 sm:space-y-6">
            
            {/* Project Image Banner */}
            <div className="relative w-full h-48 sm:h-80 rounded-xl sm:rounded-2xl overflow-hidden border border-border-color bg-surface group">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Bottom Quick Overlay Links */}
              <div className="absolute bottom-3 right-3 flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md text-white text-xs font-bold hover:bg-black transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-bold hover:shadow-lg transition-all"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Overview & Description */}
            <div>
              <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-1.5">
                Project Overview
              </h4>
              <p className="text-sm sm:text-base text-main font-sans leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Key Performance Metrics */}
            {project.metrics && (
              <div>
                <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-2.5">
                  Key Metrics & Impact
                </h4>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="p-3 sm:p-4 rounded-xl bg-surface/70 border border-border-color text-center">
                      <div className="text-lg sm:text-2xl font-extrabold font-heading text-gradient">
                        {metric.value}
                      </div>
                      <div className="text-[10px] sm:text-xs font-medium text-muted mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features & Architecture Highlights */}
            <div>
              <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-2.5">
                Key Features & Engineering Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-surface/60 border border-border-color flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-main leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Notes */}
            {project.architectureNotes && (
              <div className="p-3.5 rounded-xl bg-accent-primary/5 border border-accent-primary/20 flex items-start gap-2.5">
                <Cpu className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-[11px] font-bold text-accent-primary uppercase mb-0.5">Architecture Insight</h5>
                  <p className="text-xs text-muted leading-relaxed">{project.architectureNotes}</p>
                </div>
              </div>
            )}

            {/* Tech Badges */}
            <div>
              <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-surface border border-border-color text-xs font-code font-medium text-main"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer Bar */}
          <div className="px-4 sm:px-6 py-3 border-t border-border-color bg-surface/90 backdrop-blur-md flex items-center justify-between shrink-0">
            <span className="text-[11px] text-muted font-code hidden sm:inline">
              ID: {project.id}
            </span>
            <div className="flex items-center gap-2.5 ml-auto">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface border border-border-color text-xs font-semibold text-main hover:bg-surface-elevated transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-xs font-semibold text-white shadow-md hover:shadow-sky-500/25 transition-all"
              >
                <span>Open Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};
