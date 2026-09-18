import React from 'react';
import { ArrowUp, Mail, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-dark-950/80 backdrop-blur-md pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand / Positioning */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
              <Code2 className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </span>
          </div>
          <p className="text-xs text-zinc-400 font-mono">
            {PERSONAL_INFO.degree} • {PERSONAL_INFO.college}
          </p>
        </div>

        {/* Center: Social links */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/[0.03] hover:bg-purple-500/15 text-zinc-400 hover:text-purple-300 border border-white/[0.06] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/[0.03] hover:bg-purple-500/15 text-zinc-400 hover:text-purple-300 border border-white/[0.06] transition-colors"
            aria-label="GitHub Profile"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2 rounded-lg bg-white/[0.03] hover:bg-purple-500/15 text-zinc-400 hover:text-purple-300 border border-white/[0.06] transition-colors"
            aria-label="Email Juhi"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to top & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <span className="text-xs text-zinc-400 font-mono text-center">
            Designed for impact • 2025
          </span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-zinc-400 hover:text-white border border-white/[0.08] transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
