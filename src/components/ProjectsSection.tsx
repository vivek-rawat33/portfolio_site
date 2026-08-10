import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowUpRight, 
  Eye, 
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './SocialIcons';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & SaaS', 'Web Apps', 'Cloud & DevOps', 'Fintech'];

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-24 relative bg-surface/40 border-t border-border-color/50">
      
      {/* Background glow circle */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-accent-primary/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold font-heading text-main tracking-tight"
          >
            Selected Works & <span className="text-gradient">Production Projects</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-muted font-sans mt-3"
          >
            Explore recent web applications, AI platforms, and open-source systems. Click on any project card to inspect deep architectural details.
          </motion.p>
        </div>

        {/* Category Tabs Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-surface-elevated/80 border border-border-color shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'text-main'
                    : 'text-muted hover:text-main hover:bg-surface/50'
                }`}
              >
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="project-tab-active"
                    className="absolute inset-0 bg-surface rounded-xl border border-border-color shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group p-5 rounded-3xl glass-panel flex flex-col justify-between hover:scale-[1.01] transition-all duration-300"
              >
                <div>
                  
                  {/* Image Container with Click Handler & Overlay */}
                  <div 
                    onClick={() => setActiveModalProject(project)}
                    className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden mb-5 cursor-pointer bg-surface-elevated border border-border-color group/img"
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Hover Tint Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center gap-2 transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                        <Eye className="w-4 h-4" />
                        <span>Inspect Project Details</span>
                      </div>
                    </div>

                    {/* Top Category Pill Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface-elevated/90 backdrop-blur-md border border-border-color text-[11px] font-semibold text-accent-primary">
                      {project.category}
                    </div>

                    {/* Featured Star Badge */}
                    {project.featured && (
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-[11px] font-semibold text-amber-400 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Featured</span>
                      </div>
                    )}

                  </div>

                  {/* Title & Description */}
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 
                      onClick={() => setActiveModalProject(project)}
                      className="text-xl font-bold font-heading text-main cursor-pointer hover:text-accent-primary transition-colors"
                    >
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-surface-elevated text-[11px] font-code font-medium text-muted border border-border-color/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 rounded-md bg-surface text-[10px] font-code text-dim">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                </div>

                {/* Bottom Action Buttons (GitHub & Live Link) */}
                <div className="flex items-center justify-between pt-4 border-t border-border-color/70">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-surface border border-border-color text-muted hover:text-main hover:bg-surface-elevated transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-surface border border-border-color text-muted hover:text-sky-400 hover:bg-surface-elevated transition-colors"
                      title="Open Live Application"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex items-center gap-1.5 text-xs font-bold text-accent-primary hover:text-accent-secondary transition-colors"
                  >
                    <span>View Project Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Overlay Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </section>
  );
};
