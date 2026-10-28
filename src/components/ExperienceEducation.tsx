import React from 'react';
import { Briefcase, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 md:py-28 bg-stone-100/50 border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-800 mb-2">
            03. TRACK RECORD
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 font-heading mb-3">
            Professional Experience
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Hands-on technical implementation across machine learning pipelines, predictive modeling, and agentic systems.
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/90 shadow-2xs"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2 pb-3 border-b border-stone-100">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-heading">
                    {item.role}
                  </h3>
                  <div className="text-xs font-medium text-stone-600 mt-0.5">
                    {item.company}
                  </div>
                </div>
                <span className="text-xs font-mono text-amber-800 font-semibold px-2.5 py-1 bg-amber-50 rounded-md border border-amber-200">
                  {item.period}
                </span>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed mb-3">
                {item.description}
              </p>

              {item.achievements && item.achievements.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-stone-100">
                  {item.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-stone-600">
                      <span className="text-amber-800 font-bold shrink-0 mt-0.5">•</span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
