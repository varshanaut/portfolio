import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
      {/* Subtle modern ambient background gradient glows - minimal & refined */}
      <div className="absolute top-12 left-1/4 w-[450px] h-[300px] bg-gradient-to-br from-amber-200/35 via-rose-100/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-24 right-1/4 w-[500px] h-[350px] bg-gradient-to-bl from-indigo-200/30 via-teal-100/25 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Clean Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Status & Role Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900 text-stone-100 text-xs font-mono tracking-wide mb-6 shadow-xs border border-stone-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>DATA SCIENCE & AI INTERN @ RP2 INDIA PVT LTD</span>
            </div>

            {/* Clean, Impactful Name with subtle accent */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-stone-900 font-heading mb-4 text-balance">
              VARSHA M V
            </h1>

            {/* Short Bio directly from user input */}
            <p className="text-xl sm:text-2xl font-medium text-stone-800 leading-snug mb-8">
              {personal.shortBio}
            </p>

            {/* Modern Action Buttons with minimal color pop */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-stone-950 via-stone-900 to-indigo-950 hover:from-stone-900 hover:to-indigo-900 rounded-xl transition-all shadow-md shadow-stone-900/10 hover:shadow-indigo-950/20 cursor-pointer active:scale-98 whitespace-nowrap"
              >
                <span>Explore Projects Deck</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 text-amber-300 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-stone-900 bg-white border border-stone-300 hover:border-amber-400 hover:bg-amber-50/50 rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-2xs"
              >
                <span>Let's Connect</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center px-4 py-3.5 text-xs font-semibold text-stone-600 hover:text-indigo-900 transition-colors cursor-pointer whitespace-nowrap"
              >
                <FileText className="mr-1.5 w-4 h-4 text-stone-400" />
                <span>View CV</span>
              </button>
            </div>

            {/* Quick Links Dock */}
            <div className="w-full pt-6 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-4">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-700 hover:text-stone-950 font-mono transition-colors font-medium"
                >
                  <Github className="w-4 h-4 text-stone-900" />
                  <span>github.com/{personal.githubHandle}</span>
                </a>
                <span className="text-stone-300">/</span>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-700 hover:text-blue-700 font-mono transition-colors font-medium"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span>linkedin.com/in/{personal.linkedinHandle}</span>
                </a>
              </div>

              <div className="text-stone-500 font-mono text-[11px]">
                varshapraveenmv@gmail.com
              </div>
            </div>
          </div>

          {/* Right Column: Clean Framed Portrait with subtle colorful gradient border */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Subtle ambient colorful backdrop */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-400/30 via-indigo-400/25 to-teal-400/30 rounded-3xl blur-md -z-10" />

              {/* Main Photo Card */}
              <div className="relative bg-white p-2.5 rounded-2xl border border-stone-200 shadow-xl overflow-hidden">
                <div className="aspect-square w-full overflow-hidden rounded-xl bg-stone-100 relative group">
                  <img
                    src={personal.photoUrl}
                    alt="Varsha M V - Data Science and AI Intern"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-500 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="mt-3 px-2 pb-1 flex items-center justify-between text-xs text-stone-600">
                  <span className="font-semibold text-stone-900 block font-heading">Varsha M V</span>
                  <span className="text-[11px] font-mono text-indigo-700 font-medium">RP2 INDIA PVT LTD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
