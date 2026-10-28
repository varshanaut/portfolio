import React, { useState, useMemo } from 'react';
import { Search, Code2, Cpu, Database, BarChart3, Globe, Wrench } from 'lucide-react';
import { PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    'languages-core': <Code2 className="w-4 h-4 text-stone-700" />,
    'machine-learning': <Cpu className="w-4 h-4 text-stone-700" />,
    'deep-learning-genai': <Cpu className="w-4 h-4 text-amber-700" />,
    'data-viz': <BarChart3 className="w-4 h-4 text-stone-700" />,
    'web-deployment': <Globe className="w-4 h-4 text-stone-700" />,
    'tools-version-control': <Wrench className="w-4 h-4 text-stone-700" />,
  };

  const filteredCategories = useMemo(() => {
    return skillCategories
      .map((cat) => {
        const matchesCategory = selectedCategory === 'all' || cat.id === selectedCategory;
        if (!matchesCategory) return null;

        const filteredSkills = cat.skills.filter((skill) => {
          if (!searchQuery.trim()) return true;
          const query = searchQuery.toLowerCase();
          return (
            skill.name.toLowerCase().includes(query) ||
            skill.focus.toLowerCase().includes(query)
          );
        });

        if (filteredSkills.length === 0 && searchQuery.trim()) {
          return null;
        }

        return {
          ...cat,
          skills: filteredSkills,
        };
      })
      .filter(Boolean) as SkillCategory[];
  }, [skillCategories, selectedCategory, searchQuery]);

  const totalSkillsCount = useMemo(() => {
    return skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [skillCategories]);

  return (
    <section id="skills" className="py-20 md:py-28 bg-stone-100/60 border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              02. Technical Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 font-heading mb-3">
              Key Skills & Tooling
            </h2>
            <p className="text-base text-stone-600 leading-relaxed">
              Curated across data engineering, statistical modeling, neural architectures, and production deployment.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. SMOTE, LSTM, Flask)..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-all text-stone-800 placeholder:text-stone-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs - Interactive segmented control */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-700 hover:text-stone-950 border border-stone-200'
            }`}
          >
            All Areas ({totalSkillsCount})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:text-stone-950 border border-stone-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        {filteredCategories.length === 0 ? (
          <div className="bg-white p-10 rounded-xl border border-stone-200 text-center">
            <p className="text-sm text-stone-600 mb-2">No skills matched "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs font-semibold text-amber-800 hover:underline cursor-pointer"
            >
              Reset search filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-xl border border-stone-200/90 p-5 shadow-2xs hover:border-stone-300 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100">
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 rounded-md bg-stone-100">
                        {categoryIcons[category.id] || <Code2 className="w-4 h-4 text-stone-700" />}
                      </span>
                      <h3 className="text-sm font-semibold text-stone-900 font-heading">
                        {category.name}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-stone-400">
                      {category.skills.length} competencies
                    </span>
                  </div>

                  <p className="text-xs text-stone-500 mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills List - Clean unboxed text layout, NO PILL BADGES */}
                  <div className="space-y-3">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="py-1.5 border-b border-stone-100 last:border-b-0 group"
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-xs font-semibold text-stone-900 group-hover:text-amber-900 transition-colors">
                            {skill.name}
                          </span>
                          {skill.level && (
                            <span className="text-[10px] uppercase font-mono text-stone-400 tracking-wider">
                              {skill.level}
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-stone-500 leading-snug mt-0.5">
                          {skill.focus}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
