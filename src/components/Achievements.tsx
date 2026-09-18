import React from 'react';
import { Trophy, Award, Flame, Star, ExternalLink } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

interface AchievementsProps {
  onViewCertificate?: (title: string, url: string) => void;
}

export const Achievements: React.FC<AchievementsProps> = ({ onViewCertificate }) => {
  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'Academic':
        return <Trophy className="w-6 h-6 text-amber-400" />;
      case 'Hackathon':
        return <Flame className="w-6 h-6 text-orange-400" />;
      case 'Recognition':
        return <Star className="w-6 h-6 text-purple-400" />;
      default:
        return <Award className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3">
          <span>05 // Milestones & Recognition</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Hackathons & <span className="text-gradient">Achievements</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
          Demonstrated academic consistency and hands-on competition experience at university hackathons and competitive technical challenges.
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ACHIEVEMENTS.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col justify-between p-6 sm:p-7 rounded-2xl border transition-all duration-300 group relative overflow-hidden ${
              item.type === 'Academic'
                ? 'bg-gradient-to-b from-amber-950/20 via-dark-900 to-dark-900 border-amber-500/30 hover:border-amber-400/50 shadow-lg shadow-amber-950/10'
                : 'bg-dark-900/70 border-white/[0.08] hover:border-purple-500/30'
            }`}
          >
            {/* Ambient top highlight for academic topper */}
            {item.type === 'Academic' && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            )}

            <div>
              {/* Badge & Icon Header */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all group-hover:scale-105 ${
                    item.type === 'Academic'
                      ? 'bg-amber-500/15 border-amber-500/30 text-amber-300'
                      : 'bg-purple-500/10 border-purple-500/20 text-purple-300'
                  }`}
                >
                  {getAchievementIcon(item.type)}
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                    item.type === 'Academic'
                      ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                      : 'bg-purple-500/10 text-purple-300 border-purple-500/20'
                  }`}
                >
                  {item.badgeText}
                </span>
              </div>

              {/* Title & Event */}
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs font-mono text-purple-400/90 mb-4">
                {item.event}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* If certificate available, provide view link (verified text removed as requested) */}
            {item.certificateUrl && (
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex justify-end">
                <button
                  onClick={() => onViewCertificate?.(item.title, item.certificateUrl!)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-300 hover:text-purple-200 bg-white/[0.04] hover:bg-purple-500/15 px-3 py-1.5 rounded-lg border border-purple-500/25 transition-all"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
};
