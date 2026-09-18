import React, { useState } from 'react';
import { Mail, Send, Copy, Check, Sparkles, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate frontend dispatch (ready for integration with Formspree / EmailJS)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3">
          <span>08 // Get In Touch</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Let's build something <span className="text-gradient">meaningful</span>.
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
          Interested in full-time software engineering roles, AI/ML engineering, internships, or open-source collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Channels & Information */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-dark-900/70 border border-white/[0.08] space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span>Contact Channels</span>
            </h3>

            {/* Email Card with Copy Feature */}
            <div className="p-4 rounded-xl bg-dark-850/80 border border-white/[0.06] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-[11px] font-mono text-zinc-400 block">Direct Email</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-mono text-zinc-200 hover:text-purple-300 transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopy}
                className="p-2 rounded-lg bg-white/[0.05] hover:bg-purple-500/20 text-zinc-400 hover:text-purple-300 transition-colors shrink-0"
                title="Copy Email Address"
                aria-label="Copy Email Address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-dark-850/80 border border-white/[0.06] hover:border-purple-500/30 flex items-center justify-between gap-3 group transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-400 block">Professional Network</span>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-purple-300 transition-colors">
                    linkedin.com/in/rukia-juhi
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono text-purple-400 group-hover:translate-x-0.5 transition-transform">
                ↗
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-dark-850/80 border border-white/[0.06] hover:border-purple-500/30 flex items-center justify-between gap-3 group transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center text-zinc-200 group-hover:scale-105 transition-transform">
                  <GitHubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-400 block">Open Source & Code</span>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-purple-300 transition-colors">
                    github.com/Rukia-juhi
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono text-purple-400 group-hover:translate-x-0.5 transition-transform">
                ↗
              </span>
            </a>

            {/* Location */}
            <div className="pt-2 flex items-center text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>Chennai, Tamil Nadu, India</span>
              </span>
            </div>

          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-2xl bg-dark-900/70 border border-white/[0.08] shadow-xl space-y-5 relative"
          >
            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-in fade-in">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! Your message has been received. Juhi will get back to you shortly.</span>
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Recruiter / Hiring Manager"
                className="w-full px-4 py-3 rounded-xl bg-dark-850 border border-white/[0.08] focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-sm text-white placeholder-zinc-500 outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. recruiter@company.com"
                className="w-full px-4 py-3 rounded-xl bg-dark-850 border border-white/[0.08] focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-sm text-white placeholder-zinc-500 outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Discuss a role, opportunity, or collaboration..."
                className="w-full px-4 py-3 rounded-xl bg-dark-850 border border-white/[0.08] focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-sm text-white placeholder-zinc-500 outline-none transition-all resize-none"
              />
            </div>

            <div className="pt-2 flex items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-md shadow-purple-900/30 disabled:opacity-60 transition-all"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

      </div>

    </section>
  );
};
