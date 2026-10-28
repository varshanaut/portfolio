import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ImpactStats: React.FC = () => {
  const { stats } = PORTFOLIO_DATA;

  // Tasteful minimal color accents for each key achievement
  const valueColorStyles = [
    'text-indigo-950 group-hover:text-indigo-700',
    'text-emerald-950 group-hover:text-emerald-600',
    'text-purple-950 group-hover:text-purple-600',
    'text-amber-950 group-hover:text-amber-700',
  ];

  return (
    <section className="border-y border-stone-200/80 bg-white/70 backdrop-blur-xs py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-stone-200/70">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col group transition-all ${
                idx !== 0 ? 'pt-6 md:pt-0 md:pl-6' : ''
              }`}
            >
              <div
                className={`text-3xl sm:text-4xl font-bold tracking-tight font-heading tabular-nums mb-1 transition-colors ${valueColorStyles[idx] || 'text-stone-900'}`}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-stone-800 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-stone-500 leading-relaxed">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
