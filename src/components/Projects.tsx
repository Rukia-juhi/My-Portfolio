import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  Eye,
  CheckCircle2
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { GitHubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'ML & AI', 'Web Development', 'Cloud & Systems'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3">
            <span>04 // Technical Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Real-world systems spanning predictive climate models, skill-mapping platforms, explainable AI, and interactive mental wellbeing tools.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === cat
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-dark-900 text-zinc-400 hover:text-zinc-200 border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-between rounded-2xl bg-dark-900/80 border border-white/[0.08] hover:border-purple-500/40 p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/20 group relative overflow-hidden"
          >
            {/* Ambient corner light */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-all pointer-events-none" />

            <div>
              {/* Card Header Top */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
                  {project.category}
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/[0.06] transition-colors"
                    title="View Source on GitHub"
                    aria-label={`${project.title} GitHub repo`}
                  >
                    <GitHubIcon className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 transition-colors"
                    title="View Full Architecture Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors mb-1">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-xs font-mono text-purple-400/90 mb-3">
                  {project.subtitle}
                </p>
              )}

              {/* Tagline / Brief */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Key Features Preview (First 3) */}
              <div className="space-y-1.5 mb-6">
                {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{feat}</span>
                  </div>
                ))}
                {project.keyFeatures.length > 3 && (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-[11px] font-mono text-purple-400 hover:underline pt-1 inline-block"
                  >
                    +{project.keyFeatures.length - 3} more key capabilities...
                  </button>
                )}
              </div>

              {/* Metric Callout if available */}
              {project.highlightMetric && (
                <div className="mb-5 px-3 py-2 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/20 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-mono text-emerald-300 font-medium">
                    {project.highlightMetric}
                  </span>
                </div>
              )}
            </div>

            {/* Card Footer: Tech tags + GitHub action button (demo button removed) */}
            <div className="pt-4 border-t border-white/[0.06] space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 5).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 text-[11px] font-mono border border-white/[0.05]"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="px-2 py-0.5 text-[10px] font-mono text-zinc-500">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>

              <div className="flex items-center pt-1">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-purple-200 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
};
