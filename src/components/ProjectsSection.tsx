import React, { useState } from 'react';
import { FolderGit2, ExternalLink, ArrowUpRight } from 'lucide-react';
import { portfolioData, type Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './SocialIcons';

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 border-b border-border-color">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        <div className="section-label">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Portfolio</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
          Selected Projects &amp; Work
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="clean-card p-5 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div
                  onClick={() => setActiveModalProject(project)}
                  className="relative w-full h-48 rounded-lg overflow-hidden mb-4 cursor-pointer border border-border-color bg-black group/img"
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3
                  onClick={() => setActiveModalProject(project)}
                  className="text-base font-bold text-main cursor-pointer hover:text-accent-blue transition-colors mb-1.5 flex items-center justify-between"
                >
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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

              {/* Action Row */}
              <div className="pt-3.5 border-t border-border-color flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg border border-border-color text-muted hover:text-main hover:border-border-hover vercel-btn"
                    title="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg border border-border-color text-muted hover:text-accent-green hover:border-accent-green/50 vercel-btn"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-accent-green hover:underline transition-all flex items-center gap-1"
                >
                  Inspect Details
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
