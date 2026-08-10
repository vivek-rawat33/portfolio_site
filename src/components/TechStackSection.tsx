import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  FileCode2, 
  Palette, 
  Zap, 
  Sparkles, 
  Layers, 
  Server, 
  Terminal, 
  Network, 
  Cpu, 
  Database, 
  Flame, 
  Box, 
  Cloud, 
  GitBranch,
  Search
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map icon string to Lucide icon component safely
const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-sky-400" />,
  FileCode2: <FileCode2 className="w-5 h-5 text-blue-400" />,
  Palette: <Palette className="w-5 h-5 text-teal-400" />,
  Zap: <Zap className="w-5 h-5 text-purple-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-yellow-400" />,
  Layers: <Layers className="w-5 h-5 text-indigo-400" />,
  Server: <Server className="w-5 h-5 text-emerald-400" />,
  Terminal: <Terminal className="w-5 h-5 text-green-400" />,
  Network: <Network className="w-5 h-5 text-pink-400" />,
  Cpu: <Cpu className="w-5 h-5 text-amber-400" />,
  Database: <Database className="w-5 h-5 text-cyan-400" />,
  Flame: <Flame className="w-5 h-5 text-orange-400" />,
  Box: <Box className="w-5 h-5 text-blue-500" />,
  Cloud: <Cloud className="w-5 h-5 text-sky-300" />,
  GitBranch: <GitBranch className="w-5 h-5 text-red-400" />
};

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Frontend', 'Backend', 'AI & Databases', 'Cloud & DevOps'];

  const filteredSkills = portfolioData.techStack.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-16 sm:py-24 relative bg-mesh-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack & Tools</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl font-extrabold font-heading text-main tracking-tight"
          >
            Technologies I Master & <span className="text-gradient">Ship To Production</span>
          </motion.h2>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 sm:mb-12 w-full">
          
          {/* Scrollable Category Filter Tabs for mobile responsiveness */}
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar py-1">
            <div className="inline-flex items-center gap-1.5 p-1 rounded-2xl bg-surface-elevated/80 border border-border-color shadow-sm min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'text-main'
                      : 'text-muted hover:text-main'
                  }`}
                >
                  {selectedCategory === cat && (
                    <motion.div
                      layoutId="tech-tab-active"
                      className="absolute inset-0 bg-surface rounded-xl border border-border-color shadow-sm"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 whitespace-nowrap">{cat}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill or tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-elevated/80 border border-border-color text-xs font-medium text-main placeholder:text-muted focus:outline-none focus:border-accent-primary transition-colors"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="p-4 sm:p-5 rounded-2xl glass-panel group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-surface-elevated flex items-center justify-center border border-border-color group-hover:border-accent-primary/40 transition-colors shrink-0">
                        {iconMap[skill.icon] || <Code2 className="w-5 h-5 text-accent-primary" />}
                      </div>
                      <div className="truncate">
                        <h3 className="font-bold text-sm sm:text-base text-main group-hover:text-accent-primary transition-colors truncate">
                          {skill.name}
                        </h3>
                        <span className="text-[10px] sm:text-[11px] font-medium text-muted uppercase tracking-wider block">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-code font-bold text-accent-primary bg-accent-primary/10 px-2.5 py-1 rounded-full shrink-0">
                      {skill.proficiency}%
                    </span>
                  </div>

                  <p className="text-xs text-muted leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Proficiency Meter Bar */}
                <div className="w-full bg-surface-elevated rounded-full h-1.5 overflow-hidden border border-border-color/60">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 rounded-full"
                  />
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
