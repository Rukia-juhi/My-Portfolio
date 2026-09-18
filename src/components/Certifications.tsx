import React, { useState } from 'react';
import { ExternalLink, ShieldCheck, FileCheck, X, Download, Maximize2 } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import type { Certification } from '../data/portfolioData';

interface CertificationsProps {
  externalSelectedCert?: { title: string; url: string } | null;
  onClearExternalCert?: () => void;
}

export const Certifications: React.FC<CertificationsProps> = ({
  externalSelectedCert,
  onClearExternalCert,
}) => {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  // If triggered externally (e.g. from Experience or Achievements)
  const currentCert = activeCert || (externalSelectedCert ? {
    id: 'external',
    title: externalSelectedCert.title,
    issuer: 'Credential',
    category: 'Credential Document',
    pdfUrl: externalSelectedCert.url,
  } : null);

  const handleClose = () => {
    setActiveCert(null);
    onClearExternalCert?.();
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3">
          <span>07 // Certifications</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Professional <span className="text-gradient">Certifications</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
          Industry credentials and course completions across SQL, MongoDB, Data Analytics, Generative AI, and Python.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.id}
            className="flex flex-col justify-between p-5 rounded-2xl bg-dark-900/60 border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-950/20"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-300 text-[10px] font-mono border border-purple-500/20">
                  {cert.category}
                </span>
                <ShieldCheck className="w-4 h-4 text-purple-400 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="text-sm font-bold text-zinc-100 group-hover:text-purple-200 transition-colors mb-2 leading-snug">
                {cert.title}
              </h3>

              <div className="text-xs font-medium text-zinc-400 flex items-center gap-1.5 mb-2">
                <span className="text-purple-400 font-mono text-[11px]">Issuer:</span>
                <span className="text-zinc-300 text-xs">{cert.issuer}</span>
              </div>

              {cert.dateAwarded && (
                <div className="text-[11px] font-mono text-zinc-400 mb-4">
                  <span>Issued: {cert.dateAwarded}</span>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-white/[0.05] flex items-center justify-end">
              <button
                onClick={() => setActiveCert(cert)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-purple-600 text-xs font-mono text-purple-300 hover:text-white border border-purple-500/30 hover:border-purple-500 transition-all shadow-sm"
              >
                <span>View Certificate</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Individual Certificate Dedicated Viewer Modal */}
      {currentCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full h-full max-w-none max-h-none bg-dark-900 border border-purple-500/30 rounded-none shadow-2xl flex flex-col">
            
            {/* Modal Header */}
            <div className="shrink-0 flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/[0.08] bg-dark-900/95">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                    {currentCert.title}
                  </h3>
                  <p className="text-xs font-mono text-purple-400">
                    {currentCert.issuer}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={currentCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-zinc-400 hover:text-white rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08]"
                  title="Open Fullscreen in New Tab"
                >
                  <Maximize2 className="w-4 h-4" />
                </a>
                <a
                  href={currentCert.pdfUrl}
                  download
                  className="p-2 text-zinc-400 hover:text-white rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08]"
                  title="Download Certificate PDF"
                >
                  <Download className="w-4 h-4" />
                </a>
                <button
                  onClick={handleClose}
                  className="p-2 text-zinc-400 hover:text-white rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08]"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Individual Certificate Embedded Document Viewer */}
            <div className="flex-1 w-full h-[70vh] min-h-[400px] rounded-xl overflow-auto bg-zinc-950 border border-white/[0.1] relative">
              <object
                key={currentCert.pdfUrl}
                data={`${currentCert.pdfUrl}#view=Fit`}
                type="application/pdf"
                className="w-full h-full rounded-xl"
              >
                <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-4">
                  <p className="text-sm text-zinc-300">
                    Preview available directly via PDF document:
                  </p>
                  <a
                    href={currentCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold"
                  >
                    <span>Open Certificate in New Tab</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </object>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
