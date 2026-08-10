import React, { useState } from 'react';
import { FolderGit2, ExternalLink, ArrowUpRight } from 'lucide-react';
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
    <section id="projects" className="py-16 border-b border-border-color font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="flex items-center gap-2 text-xs font-semibold text-muted uppercase tracking-wider mb-2">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Portfolio</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-main mb-6 tracking-tight">
          Selected Projects & Work
        </h2>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium vercel-btn whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'bg-surface-elevated text-muted hover:text-main border border-border-color hover:border-border-hover'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="clean-card p-4.5 flex flex-col justify-between group"
            >
              <div>
                
                {/* Image Container with Hover Zoom */}
                <div 
                  onClick={() => setActiveModalProject(project)}
                  className="relative w-full h-48 rounded-lg overflow-hidden mb-4 cursor-pointer border border-border-color bg-black group/img"
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] font-semibold text-white font-code">
                    {project.category}
                  </div>
                </div>

                <h3 
                  onClick={() => setActiveModalProject(project)}
                  className="text-base font-bold font-heading text-main cursor-pointer hover:text-muted transition-colors mb-1.5 flex items-center justify-between"
                >
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </h3>

                <p className="text-xs text-muted leading-relaxed mb-4">
                  {project.shortDescription}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-surface text-[10px] font-code text-muted border border-border-color">
                      {t}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-3.5 border-t border-border-color flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg border border-border-color text-muted hover:text-main hover:border-border-hover vercel-btn"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg border border-border-color text-muted hover:text-main hover:border-border-hover vercel-btn"
                    title="Open Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-main hover:text-muted transition-colors flex items-center gap-1"
                >
                  <span>Inspect Details</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
