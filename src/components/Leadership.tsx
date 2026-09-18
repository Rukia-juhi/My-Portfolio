import React from 'react';
import { Users, Rocket, CheckCircle2 } from 'lucide-react';
import { LEADERSHIP } from '../data/portfolioData';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3">
          <span>06 // Leadership & Impact</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Leadership & <span className="text-gradient">Initiatives</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
          Fostering an engineering culture of research, technical mentorship, and practical student innovation.
        </p>
      </div>

      {/* Main Leadership Feature Card */}
      <div className="relative rounded-3xl bg-gradient-to-br from-dark-900 via-dark-900 to-purple-950/30 border border-purple-500/30 p-8 sm:p-10 shadow-2xl overflow-hidden group">
        
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/15 transition-all" />

        <div className="relative z-10">
          
          {/* Top Organization & Role Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-md">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-purple-400 block font-medium">
                  {LEADERSHIP.organization} • {LEADERSHIP.institution}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {LEADERSHIP.role}
                </h3>
              </div>
            </div>

            <div className="self-start sm:self-center">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-200 text-xs font-mono font-medium">
                <Rocket className="w-3.5 h-3.5 text-purple-400" />
                <span>Executive Leadership</span>
              </span>
            </div>
          </div>

          {/* User Requested Specific Headline Text */}
          <div className="p-4 rounded-xl bg-purple-500/[0.07] border border-purple-500/20 mb-6">
            <h4 className="text-base sm:text-lg font-semibold text-purple-200">
              "{LEADERSHIP.headline}"
            </h4>
          </div>

          {/* Detailed Description */}
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8">
            {LEADERSHIP.description}
          </p>

          {/* Key Leadership Pillars & Responsibilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
            {LEADERSHIP.keyResponsibilities.map((resp, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-dark-850/60 border border-white/[0.05]"
              >
                <div className="w-5 h-5 rounded-md bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-zinc-300 leading-snug">
                  {resp}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};
