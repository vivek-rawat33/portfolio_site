import React, { useState } from 'react';
import { Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Frontend', 'Backend', 'AI & Databases', 'Cloud & DevOps'];

  const filteredSkills = portfolioData.techStack.filter((skill) => {
    if (selectedCategory === 'All') return true;
    return skill.category === selectedCategory;
  });

  return (
    <section id="skills" className="py-16 border-b border-border-color font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="flex items-center gap-2 text-xs font-semibold text-muted uppercase tracking-wider mb-2">
          <Cpu className="w-3.5 h-3.5" />
          <span>Skills & Stack</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-main mb-6 tracking-tight">
          Technologies & Tools
        </h2>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-6">
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="clean-card p-3.5 flex items-center justify-between"
            >
              <div>
                <div className="text-sm font-semibold text-main">{skill.name}</div>
                <div className="text-xs text-muted mt-0.5">{skill.description}</div>
              </div>
              <span className="text-xs font-code font-semibold text-muted px-2 py-0.5 rounded bg-surface border border-border-color shrink-0 ml-2">
                {skill.proficiency}%
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
