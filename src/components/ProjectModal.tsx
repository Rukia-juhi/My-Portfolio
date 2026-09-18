import React, { useEffect } from 'react';
import { X, Check, Layers, Sparkles, Terminal } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { GitHubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-dark-900 border border-purple-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-colors focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto pr-1">
          {/* Category & Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-mono font-medium">
              {project.category}
            </span>
            {project.highlightMetric && (
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-medium flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                {project.highlightMetric}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-sm font-mono text-purple-300/80 mb-4">
              {project.subtitle}
            </p>
          )}

          {/* Description */}
          <div className="p-4 rounded-xl bg-dark-850/80 border border-white/[0.06] mb-6">
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Architectural & Functional Features */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-purple-400" />
              <span>Key Features & Capabilities:</span>
            </h4>
            <div className="space-y-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-purple-400" />
              <span>Technologies & Libraries Used:</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-white/[0.05] text-zinc-200 border border-white/[0.08] text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links - Demo removed, GitHub repository prominent */}
          <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-purple-900/30 transition-all"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>View GitHub Repository</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
