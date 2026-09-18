import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  FolderGit2, 
  Trophy, 
  Compass, 
  Layers, 
  BrainCircuit, 
  BarChart3, 
  Sparkles 
} from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHT_STATS, CURRENTLY_EXPLORING } from '../data/portfolioData';

export const About: React.FC = () => {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-purple-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-indigo-400" />;
      case 'FolderGit2':
        return <FolderGit2 className="w-5 h-5 text-purple-300" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3">
          <span>01 // Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          About <span className="text-gradient">Juhi</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
          Passionate about engineering clean web applications, predictive machine learning models, and data-driven systems.
        </p>
      </div>

      {/* Main Narrative & Verified Highlights Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
        
        {/* Left: Bio Narrative */}
        <div className="lg:col-span-7 space-y-5 text-zinc-300 leading-relaxed text-sm sm:text-base">
          <p className="bg-dark-900/60 border border-white/[0.06] p-5 rounded-2xl">
            {PERSONAL_INFO.summary}
          </p>

          <div className="space-y-3 pt-2">
            <h3 className="text-base font-semibold text-zinc-100 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              Hands-on engineering across key domains:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-dark-900/40 border border-white/[0.05]">
                <Layers className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-zinc-200">Web Applications</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Responsive interfaces, component architecture, and Flask REST APIs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-dark-900/40 border border-white/[0.05]">
                <BrainCircuit className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-zinc-200">Machine Learning & AI</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Predictive modeling, classification systems, and Explainable AI (XAI).</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-dark-900/40 border border-white/[0.05]">
                <BarChart3 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-zinc-200">Data Analysis & Viz</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Exploratory data analysis, Pandas & NumPy preprocessing, and visual charts.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-dark-900/40 border border-white/[0.05]">
                <Trophy className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-zinc-200">Hackathon Projects</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Rapid prototyping, team synergy, and solving real-world problem statements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Verified Stats Cards (NO INVENTED METRICS) */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
          {HIGHLIGHT_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-dark-900/70 border border-white/[0.07] hover:border-purple-500/30 transition-all group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {getStatIcon(stat.icon)}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-purple-300 transition-colors">
                    {stat.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-snug">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Currently Exploring Area */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/20 via-dark-900 to-indigo-950/20 border border-purple-500/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Currently Exploring & Deepening</h3>
              <p className="text-xs text-zinc-400">Continuous learning focus areas and computer science core competencies</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {CURRENTLY_EXPLORING.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-mono rounded-lg bg-white/[0.04] text-purple-200 border border-purple-500/20 hover:border-purple-400/40 hover:bg-purple-500/10 transition-all"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
