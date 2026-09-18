import React from 'react';
import { Briefcase, MapPin, CheckCircle2, Terminal, ExternalLink } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperienceProps {
  onViewCertificate?: (title: string, url: string) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onViewCertificate }) => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="mb-14 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3">
          <span>03 // Industry Exposure</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Internship <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
          Practical application of machine learning, full-stack web development, and modern software engineering pipelines.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l border-purple-500/20 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="relative group">
            
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-dark-950 border-2 border-purple-500 flex items-center justify-center group-hover:scale-125 group-hover:border-purple-300 transition-all duration-300 shadow-sm shadow-purple-500/40">
              <span className="w-2 h-2 rounded-full bg-purple-400 group-hover:bg-white transition-colors" />
            </div>

            {/* Experience Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-dark-900/70 border border-white/[0.08] group-hover:border-purple-500/30 group-hover:bg-dark-900 transition-all duration-300 shadow-lg">
              
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-purple-200 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-purple-400 flex items-center gap-1.5 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                {/* Location Pill (Remote / Hybrid) - duration removed */}
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                {exp.summary}
              </p>

              {/* Focus Areas List */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                  Key Responsibilities & Focus:
                </span>
                {exp.focusAreas.map((item, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills & Certificate Link */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                    <Terminal className="w-3 h-3" />
                    <span>Tech Stack:</span>
                  </span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 text-xs font-mono border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.certificateUrl && (
                  <button
                    onClick={() => onViewCertificate?.(`${exp.company} - ${exp.role}`, exp.certificateUrl!)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-300 hover:text-purple-200 bg-white/[0.04] hover:bg-purple-500/15 px-3 py-1.5 rounded-lg border border-purple-500/25 transition-all self-start sm:self-auto"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
