import React from 'react';
import { Layers, CheckCircle2, Terminal, Cpu, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const { about, personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-800 mb-2">
            01. CORE PHILOSOPHY & STACK
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900 font-heading mb-4 text-balance">
            {about.headline}
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Data science is only as good as its deployment reliability. I bridge deep statistical modeling and prompt engineering with maintainable, low-latency microservices.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Prose */}
          <div className="lg:col-span-6 space-y-5 text-stone-700 leading-relaxed text-base">
            {about.paragraphs.map((p, idx) => (
              <p key={idx} className="text-stone-700">
                {p}
              </p>
            ))}

            <div className="pt-4 border-t border-stone-200">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                Full-Stack Data Science Lifecycle
              </h4>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-stone-700 font-mono">
                <span>Data Ingestion</span>
                <span className="text-stone-400">→</span>
                <span>EDA & Imbalance Handling</span>
                <span className="text-stone-400">→</span>
                <span>Feature Engineering</span>
                <span className="text-stone-400">→</span>
                <span>Stratified Validation</span>
                <span className="text-stone-400">→</span>
                <span>Flask API Serving</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Engineering Pillars with subtle minimal color accents */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.pillars.map((pillar, idx) => {
              const pillarAccents = [
                { num: 'text-blue-700', hover: 'hover:border-blue-300 hover:bg-blue-50/20' },
                { num: 'text-emerald-700', hover: 'hover:border-emerald-300 hover:bg-emerald-50/20' },
                { num: 'text-purple-700', hover: 'hover:border-purple-300 hover:bg-purple-50/20' },
                { num: 'text-amber-700', hover: 'hover:border-amber-300 hover:bg-amber-50/20' },
              ][idx] || { num: 'text-stone-700', hover: 'hover:border-stone-300' };

              return (
                <div
                  key={idx}
                  className={`bg-white p-5 rounded-xl border border-stone-200/90 shadow-2xs transition-all ${pillarAccents.hover}`}
                >
                  <div className={`text-xs font-mono font-bold mb-2 ${pillarAccents.num}`}>
                    0{idx + 1}
                  </div>
                  <h3 className="text-sm font-semibold text-stone-900 mb-2 font-heading">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
