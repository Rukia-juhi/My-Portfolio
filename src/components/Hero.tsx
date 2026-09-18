import React from 'react';
import { ArrowRight, FileText, Mail, Terminal, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon } from './Icons';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenResume }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/[0.08] border border-purple-500/20 text-purple-300 text-xs font-mono mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Final Year B.Tech CSE • Open to Opportunities</span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-3">
              Hi, I'm <span className="text-gradient">Juhi</span>.
            </h1>

            {/* Subtitle */}
            <div className="text-xl sm:text-2xl font-semibold text-purple-300/90 mb-4 tracking-tight">
              {PERSONAL_INFO.subtitle}
            </div>

            {/* Short Statement */}
            <p className="text-lg sm:text-xl text-zinc-300 font-medium mb-4">
              "{PERSONAL_INFO.shortStatement}"
            </p>

            {/* Technical Focus Narrative */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl mb-8">
              Final-year Computer Science Engineering student at{' '}
              <span className="text-zinc-200 font-medium">Hindustan Institute of Technology and Science (HITS), Chennai</span>. 
              Focused on <span className="text-purple-300 font-medium">Web Development</span>, <span className="text-purple-300 font-medium">Python</span>, <span className="text-purple-300 font-medium">Data Analytics</span>, and <span className="text-purple-300 font-medium">AI/ML</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-purple-900/30 hover:shadow-purple-600/30 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-dark-850 hover:bg-dark-800 text-zinc-200 hover:text-white font-semibold text-sm border border-white/[0.1] hover:border-purple-400/40 transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Icons & Direct Channels */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/[0.08] w-full max-w-md">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Connect:</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-purple-500/10 text-zinc-400 hover:text-purple-300 border border-white/[0.06] hover:border-purple-500/30 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-purple-500/10 text-zinc-400 hover:text-purple-300 border border-white/[0.06] hover:border-purple-500/30 transition-all"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-purple-500/10 text-zinc-400 hover:text-purple-300 border border-white/[0.06] hover:border-purple-500/30 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <div className="ml-auto hidden sm:flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>Chennai, India</span>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-purple-600/30 via-indigo-500/20 to-purple-400/30 rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition duration-1000" />

              <div className="relative rounded-2xl bg-dark-900 border border-white/[0.1] p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
                
                {/* Visual Avatar / Actual Profile Photo */}
                <div className="relative aspect-square w-full rounded-xl bg-dark-850 border border-white/[0.1] overflow-hidden group shadow-inner">
                  <img
                    src={PERSONAL_INFO.profilePhotoUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <h3 className="text-base font-bold text-white drop-shadow-md">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs font-mono text-purple-300 drop-shadow">B.Tech CSE • Final Year</p>
                  </div>
                </div>

                {/* Quick Info Terminal-like snippet underneath - Only keeping CGPA */}
                <div className="mt-4 pt-3 border-t border-white/[0.08] space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-zinc-400">
                    <span className="flex items-center gap-1.5 text-zinc-400">
                      <Terminal className="w-3.5 h-3.5 text-purple-400" />
                      <span>focus</span>
                    </span>
                    <span className="text-purple-300 font-medium">Web • Python • AI/ML</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span className="text-zinc-400">institution</span>
                    <span className="text-zinc-300">HITS, Chennai</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span className="text-zinc-400">academic_standing</span>
                    <span className="text-emerald-400 font-semibold">{PERSONAL_INFO.cgpa}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
