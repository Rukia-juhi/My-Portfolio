import React from 'react';
import { GraduationCap, Calendar, Sparkles, Building2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-20">
      
      {/* Section Header (text below removed as requested) */}
      <div className="mb-12 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3">
          <span>08 // Academic Foundation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Education & <span className="text-gradient">Scholastic Record</span>
        </h2>
      </div>

      {/* Education Cards */}
      <div className="space-y-6">
        {EDUCATION_DATA.map((item, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-7 rounded-2xl border transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-900 to-purple-950/20 border-purple-500/30 shadow-xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-purple-500/15 border border-purple-500/30 text-purple-300">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.degree}
                    </h3>
                    {item.status && (
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-300 text-xs font-mono">
                        {item.status}
                      </span>
                    )}
                  </div>

                  <div className="text-sm font-medium text-zinc-300 flex items-center gap-1.5 mb-3">
                    <Building2 className="w-4 h-4 text-purple-400" />
                    <span>{item.institution}</span>
                  </div>

                  {item.details && (
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                      {item.details}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span>{item.period}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Grade / Percentage Badge */}
              {item.grade && (
                <div className="sm:self-start shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-200 font-mono text-sm font-bold shadow-sm">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span>{item.grade}</span>
                  </div>
                </div>
              )}

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
