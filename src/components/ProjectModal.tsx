import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Database, Activity, Code2 } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { PredictiveMaintenanceDemo, EduLynkDemo, LunaDemo, EmailGeneratorDemo } from './InteractiveDemos';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#FAF9F5] rounded-2xl border border-stone-300 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-white shrink-0">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-stone-700">Case Study</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8">
          {/* Project Image Banner */}
          {project.imageUrl && (
            <div className="w-full aspect-16/9 rounded-xl overflow-hidden border border-stone-200 bg-stone-100 shadow-xs">
              <img
                src={project.imageUrl}
                alt={`${project.title} interface`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {/* Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 font-heading mb-2">
              {project.title}
            </h2>
            <p className="text-base text-stone-600">
              {project.subtitle}
            </p>
          </div>

          {/* Quantitative Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-white border border-stone-200">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <span className="text-[11px] uppercase tracking-wider text-stone-400 block mb-0.5">
                  {m.label}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-stone-900 font-heading font-mono tabular-nums">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Technologies Used - Unboxed text with typographic separators */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-stone-800 font-mono">
              {project.technologies.map((t, idx) => (
                <span key={idx}>
                  {t}
                  {idx < project.technologies.length - 1 && <span className="ml-3 text-stone-300">/</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-800 mb-2">
              Project Overview & Problem Statement
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Highlights & Engineering Details */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-800 mb-3">
              Key Engineering Contributions & Results
            </h3>
            <div className="space-y-2.5">
              {project.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Pipeline */}
          {project.architecture && project.architecture.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-800 mb-3">
                System & Pipeline Architecture
              </h3>
              <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-2">
                {project.architecture.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs text-stone-700">
                    <span className="font-mono text-stone-400 text-[11px] w-6 shrink-0">
                      0{idx + 1}.
                    </span>
                    <span className="font-medium text-stone-900">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Embedded Interactive Demo */}
          {project.interactiveDemoType && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-800 mb-3">
                Live Interactive Simulation
              </h3>
              {project.interactiveDemoType === 'predictive-maintenance' && <PredictiveMaintenanceDemo />}
              {project.interactiveDemoType === 'edulynk-rec' && <EduLynkDemo />}
              {project.interactiveDemoType === 'luna-prompt' && <LunaDemo />}
              {project.interactiveDemoType === 'email-generator' && <EmailGeneratorDemo />}
            </div>
          )}

          {/* Dataset Details */}
          {project.datasetInfo && (
            <div className="p-3.5 bg-stone-100/70 rounded-lg border border-stone-200 text-xs text-stone-600 flex items-start gap-2.5">
              <Database className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-stone-800">Dataset Context: </span>
                <span>{project.datasetInfo}</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-white border-t border-stone-200 flex items-center justify-between shrink-0">
          <div className="text-xs text-stone-500 font-mono">
            Varsha M V · Machine Learning & AI
          </div>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View on GitHub</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-medium text-stone-700 hover:text-stone-950 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
