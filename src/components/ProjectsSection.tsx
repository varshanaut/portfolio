import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Eye,
  Sliders,
  Sparkles,
  Layers,
  MoveHorizontal,
  LayoutGrid,
  CreditCard,
  RotateCw,
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import {
  PredictiveMaintenanceDemo,
  EduLynkDemo,
  LunaDemo,
  EmailGeneratorDemo,
} from './InteractiveDemos';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const { projects } = PORTFOLIO_DATA;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inlineDemoOpen, setInlineDemoOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'deck' | 'grid'>('deck');

  // Swipe / Drag handling state
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isDragging = useRef<boolean>(false);
  const dragStartX = useRef<number>(0);
  const [dragOffset, setDragOffset] = useState<number>(0);

  const totalProjects = projects.length;
  const currentProject = projects[currentIndex];

  const handleNext = () => {
    setInlineDemoOpen(false);
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  };

  const handlePrev = () => {
    setInlineDemoOpen(false);
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'deck') return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode]);

  // Touch Swipe handlers (Mobile & Trackpad)
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Mouse Drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button, a, input, select')) return;
    isDragging.current = true;
    dragStartX.current = e.clientX;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const diff = e.clientX - dragStartX.current;
    setDragOffset(diff);
  };

  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (dragOffset < -60) {
      handleNext();
    } else if (dragOffset > 60) {
      handlePrev();
    }
    setDragOffset(0);
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#F4F2EC]/60 border-t border-stone-200/80 relative overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-800 mb-2">
              <span>02. FEATURED WORK</span>
              <span className="text-stone-300">/</span>
              <span className="text-stone-500">PRODUCTION ML & GENAI</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-stone-900 font-heading mb-2">
              Selected Projects
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              {viewMode === 'deck'
                ? 'Swipe left or use arrows to navigate through project cards one by one.'
                : 'Browse the complete portfolio of machine learning systems and live simulators.'}
            </p>
          </div>

          {/* Mode Switcher & Navigation Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Toggle */}
            <div className="flex items-center p-1 bg-white rounded-xl border border-stone-200 shadow-2xs">
              <button
                onClick={() => setViewMode('deck')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'deck'
                    ? 'bg-stone-900 text-white'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Swipeable Cards Deck"
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Swipe Deck</span>
              </button>

              <button
                onClick={() => setViewMode('grid')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-stone-900 text-white'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="View All Projects as Grid"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">All Projects</span>
              </button>
            </div>

            {/* Deck-only Next/Prev Controls */}
            {viewMode === 'deck' && (
              <div className="flex items-center gap-2">
                <div className="text-xs font-mono text-stone-500 font-bold px-3 py-1.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
                  <span className="text-stone-900">0{currentIndex + 1}</span>
                  <span className="text-stone-300 mx-1">/</span>
                  <span>0{totalProjects}</span>
                </div>

                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-white border border-stone-300 hover:bg-stone-100 hover:border-stone-400 text-stone-800 transition-all cursor-pointer shadow-xs active:scale-95"
                  aria-label="Previous project card"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-stone-900 text-white hover:bg-stone-800 transition-all cursor-pointer shadow-xs active:scale-95"
                  aria-label="Next project card"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* View Mode: SWIPE DECK */}
        {viewMode === 'deck' && (
          <div>
            {/* Quick Project Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
              {projects.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setInlineDemoOpen(false);
                    setCurrentIndex(idx);
                  }}
                  className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                    currentIndex === idx
                      ? 'bg-stone-900 text-white shadow-sm font-semibold'
                      : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200/90'
                  }`}
                >
                  <span className="text-[10px] text-amber-300 font-bold">0{idx + 1}</span>
                  <span>{p.title.split('–')[0].split('|')[0].trim()}</span>
                </button>
              ))}
            </div>

            {/* Swipeable Main Card */}
            <div
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
              style={{
                transform: dragOffset !== 0 ? `translateX(${dragOffset * 0.4}px)` : 'none',
                transition: dragOffset === 0 ? 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
              }}
              className="relative bg-white rounded-3xl border border-stone-300/80 shadow-xl overflow-hidden transition-all duration-300"
            >
              {/* Card Top Banner / Visual Header */}
              <div className="relative aspect-16/9 sm:aspect-21/9 w-full bg-stone-900 overflow-hidden group">
                {currentProject.imageUrl ? (
                  <img
                    src={currentProject.imageUrl}
                    alt={`${currentProject.title} mockup preview`}
                    className="w-full h-full object-cover filter contrast-[1.03] transition-transform duration-700 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-stone-900 text-stone-400 font-mono text-xs">
                    Project Visual
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span
                    className={`px-3 py-1 rounded-full backdrop-blur-md border font-mono text-[11px] font-semibold ${
                      currentProject.category === 'Machine Learning'
                        ? 'bg-blue-950/85 text-blue-300 border-blue-400/30'
                        : currentProject.category === 'Deep Learning & GenAI'
                        ? 'bg-purple-950/85 text-purple-300 border-purple-400/30'
                        : currentProject.category === 'Recommender Systems'
                        ? 'bg-emerald-950/85 text-emerald-300 border-emerald-400/30'
                        : 'bg-teal-950/85 text-teal-300 border-teal-400/30'
                    }`}
                  >
                    {currentProject.category}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-stone-950/70 backdrop-blur-md border border-white/10 font-mono text-[11px] text-stone-300">
                    Card 0{currentIndex + 1} of 0{totalProjects} · Swipe left for next
                  </span>
                </div>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <h3
                    onClick={() => onSelectProject(currentProject)}
                    className="text-2xl sm:text-4xl font-bold font-heading tracking-tight mb-1 text-white hover:text-amber-200 transition-colors cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>{currentProject.title}</span>
                    <ArrowUpRight className="w-6 h-6 text-stone-400 group-hover:text-amber-200 transition-all" />
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 max-w-2xl line-clamp-1">
                    {currentProject.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-6 sm:p-8 md:p-10 space-y-6">
                {/* Quantitative Metrics Strip with minimal color accents */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  {currentProject.metrics.map((m, idx) => {
                    const metricColors = ['text-indigo-950', 'text-emerald-900', 'text-purple-900', 'text-amber-900'];
                    return (
                      <div key={idx} className="text-left">
                        <div className="text-[10px] uppercase font-mono tracking-wider text-stone-400 font-medium">
                          {m.label}
                        </div>
                        <div className={`text-xl sm:text-2xl font-bold font-heading font-mono tabular-nums ${metricColors[idx] || 'text-stone-900'}`}>
                          {m.value}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-3">
                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                    {currentProject.overview}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    {currentProject.highlights.slice(0, 3).map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed">
                        <span className="text-amber-700 font-bold shrink-0 mt-0.5">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-600 font-mono">
                  <span className="text-stone-400 font-bold">Stack:</span>
                  {currentProject.technologies.map((t, idx) => (
                    <span key={idx} className="text-stone-900 font-medium">
                      {t}
                      {idx < currentProject.technologies.length - 1 && (
                        <span className="ml-3 text-stone-300">/</span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {currentProject.interactiveDemoType && (
                      <button
                        onClick={() => setInlineDemoOpen(!inlineDemoOpen)}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-xs ${
                          inlineDemoOpen
                            ? 'bg-amber-100 text-amber-900 border border-amber-300'
                            : 'bg-stone-100 text-stone-800 hover:bg-stone-200 border border-stone-200'
                        }`}
                      >
                        <Sliders className="w-3.5 h-3.5" />
                        <span>{inlineDemoOpen ? 'Close Simulator' : 'Test Live Simulator'}</span>
                      </button>
                    )}

                    <button
                      onClick={() => onSelectProject(currentProject)}
                      className="inline-flex items-center gap-1 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-stone-900 rounded-xl hover:bg-stone-800 transition-all cursor-pointer shadow-sm active:scale-98"
                    >
                      <span>Deep-Dive Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-500 hover:text-stone-900 font-semibold cursor-pointer group"
                  >
                    <span>Next Project</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Embedded Live Simulator Drawer */}
                {currentProject.interactiveDemoType && inlineDemoOpen && (
                  <div className="mt-6 pt-6 border-t border-stone-200">
                    {currentProject.interactiveDemoType === 'predictive-maintenance' && (
                      <PredictiveMaintenanceDemo />
                    )}
                    {currentProject.interactiveDemoType === 'edulynk-rec' && <EduLynkDemo />}
                    {currentProject.interactiveDemoType === 'luna-prompt' && <LunaDemo />}
                    {currentProject.interactiveDemoType === 'email-generator' && <EmailGeneratorDemo />}
                  </div>
                )}
              </div>
            </div>

            {/* Deck Navigation Footer */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-stone-400 uppercase tracking-wider">
                  Deck Navigation:
                </span>
                <div className="flex items-center gap-1.5">
                  {projects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setInlineDemoOpen(false);
                        setCurrentIndex(idx);
                      }}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentIndex === idx ? 'w-8 bg-stone-900' : 'w-2 bg-stone-300 hover:bg-stone-400'
                      }`}
                      aria-label={`Go to project card ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="font-mono text-[11px] text-stone-400 flex items-center gap-2">
                <span>← Swipe card left or right on touchscreen / trackpad →</span>
              </div>
            </div>
          </div>
        )}

        {/* View Mode: COMPLETE ALL PROJECTS GRID */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <div
                key={proj.id}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-2xs hover:border-stone-300 hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Image header */}
                  <div
                    onClick={() => onSelectProject(proj)}
                    className="aspect-16/9 w-full bg-stone-100 overflow-hidden relative cursor-pointer group"
                  >
                    {proj.imageUrl && (
                      <img
                        src={proj.imageUrl}
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div className="absolute top-3 left-3 bg-stone-950/75 backdrop-blur-md px-2.5 py-0.5 rounded text-[10px] font-mono text-white">
                      0{idx + 1} · {proj.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3
                      onClick={() => onSelectProject(proj)}
                      className="text-xl font-bold text-stone-900 font-heading mb-1.5 hover:text-amber-800 transition-colors cursor-pointer inline-flex items-center gap-1.5"
                    >
                      <span>{proj.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-stone-400" />
                    </h3>
                    <p className="text-xs text-stone-600 mb-4 line-clamp-2">
                      {proj.subtitle}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-2 p-2.5 rounded-lg bg-stone-50 border border-stone-200/70 mb-4">
                      {proj.metrics.slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx}>
                          <span className="text-[10px] text-stone-400 font-mono block">
                            {m.label}
                          </span>
                          <span className="font-bold font-mono text-sm text-stone-900">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="text-xs text-stone-700 leading-relaxed line-clamp-3 mb-4">
                      {proj.overview}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-stone-100 flex items-center justify-between">
                  <div className="text-[11px] font-mono text-stone-500">
                    {proj.technologies.slice(0, 3).join(', ')}
                  </div>

                  <button
                    onClick={() => onSelectProject(proj)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-stone-900 hover:text-amber-800 transition-colors cursor-pointer"
                  >
                    <span>Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
