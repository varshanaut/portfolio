import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-200 bg-[#FAF9F5] py-12 text-stone-600 text-xs">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-200">
          <div>
            <div className="font-bold text-stone-900 font-heading text-sm">
              {personal.name}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="hover:text-stone-950 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-stone-950 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-stone-950 transition-colors"
            >
              Contact
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} {personal.name}.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-stone-900 transition-colors"
            >
              GitHub
            </a>
            <span>·</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-stone-900 transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href={`mailto:${personal.email}`}
              className="hover:text-stone-900 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
