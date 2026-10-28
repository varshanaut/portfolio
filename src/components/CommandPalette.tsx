import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, FileText, Mail, Github, Linkedin, Sliders, ExternalLink, X, Cpu, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  onOpenResume: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject,
  onOpenResume,
}) => {
  const [query, setQuery] = useState('');
  const { projects, personal } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    onClose();
  };

  const handleScrollTo = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white rounded-2xl border border-stone-300 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-stone-200">
          <Search className="w-4 h-4 text-stone-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a project, technology, or action (e.g. Random Forest, email, CV)..."
            className="w-full text-xs sm:text-sm bg-transparent border-none focus:outline-hidden text-stone-900 placeholder:text-stone-400"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-stone-400 hover:text-stone-700 hover:bg-stone-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-4">
          {/* Projects */}
          <div>
            <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-stone-400">
              Projects & Case Studies
            </div>
            <div className="space-y-1">
              {filteredProjects.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => {
                    onClose();
                    onSelectProject(proj);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-stone-100 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="p-1 rounded bg-stone-100 text-stone-700 group-hover:bg-amber-100 group-hover:text-amber-900">
                      <Cpu className="w-3.5 h-3.5" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-stone-900 group-hover:text-stone-950 font-heading">
                        {proj.title}
                      </div>
                      <div className="text-[11px] text-stone-500 font-mono">
                        {proj.category} · {proj.technologies.slice(0, 3).join(', ')}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-800 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-stone-400">
              Navigation & Actions
            </div>
            <div className="space-y-1">
              <button
                onClick={() => {
                  onClose();
                  onOpenResume();
                }}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-stone-100 transition-colors flex items-center justify-between text-xs text-stone-700 cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-3.5 h-3.5 text-stone-500" />
                  <span>Open Full ATS Resume / CV</span>
                </div>
                <span className="text-[10px] font-mono text-stone-400">Modal</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-stone-100 transition-colors flex items-center justify-between text-xs text-stone-700 cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-stone-500" />
                  <span>Copy Direct Email ({personal.email})</span>
                </div>
                <span className="text-[10px] font-mono text-stone-400">Clipboard</span>
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-stone-100 transition-colors flex items-center justify-between text-xs text-stone-700 cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <ArrowRight className="w-3.5 h-3.5 text-stone-500" />
                  <span>Jump to Contact & Message Form</span>
                </div>
                <span className="text-[10px] font-mono text-stone-400">#contact</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500 font-mono">
          <span>Navigate with mouse or keyboard</span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-white border border-stone-300 text-[10px]">ESC</kbd>
            <span>to close</span>
          </span>
        </div>
      </div>
    </div>
  );
};
