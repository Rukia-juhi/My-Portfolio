import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Brain, 
  Database, 
  Binary, 
  Wrench, 
  Sparkles 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Code2 className="w-5 h-5 text-purple-400" />;
      case 'Web Development':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Data & Machine Learning':
        return <Brain className="w-5 h-5 text-purple-300" />;
      case 'Databases':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Core Computer Science':
        return <Binary className="w-5 h-5 text-indigo-400" />;
      case 'Tools & Platforms':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-purple-400" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3">
          <span>02 // Technical Competencies</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Skills & <span className="text-gradient">Technologies</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
          Categorized technical skills developed through coursework, projects, internships, and algorithmic problem solving.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-purple-600 text-white shadow-md shadow-purple-900/30'
                : 'bg-dark-900/80 text-zinc-400 hover:text-zinc-200 border border-white/[0.06] hover:bg-white/[0.04]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((group, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-6 rounded-2xl bg-dark-900/60 border border-white/[0.07] hover:border-purple-500/30 transition-all duration-300 group"
          >
            <div>
              {/* Category Header (competencies count removed) */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 group-hover:border-purple-500/40 transition-all">
                  {getCategoryIcon(group.category)}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-100 group-hover:text-purple-300 transition-colors">
                    {group.category}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
                {group.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-850 border border-white/[0.06] hover:border-purple-400/30 hover:bg-purple-500/[0.08] text-xs font-mono text-zinc-200 hover:text-purple-200 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400/70" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
