import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Linkedin, Github, FileText, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const { personal, experience, projects, skillCategories } = PORTFOLIO_DATA;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl border border-stone-300 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-stone-200 bg-stone-50 shrink-0 print:hidden">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-600">
            <FileText className="w-4 h-4 text-stone-700" />
            <span>Curriculum Vitae — {personal.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-800 bg-white border border-stone-300 rounded-md hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-7 bg-white text-stone-900 text-xs font-sans print:p-0 print:m-0">
          {/* Header */}
          <div className="border-b border-stone-900 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 font-heading mb-1 uppercase">
              {personal.name}
            </h1>
            <div className="text-sm font-semibold text-stone-700 uppercase tracking-wider mb-2">
              {personal.role}
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-600 font-mono">
              <a href={`mailto:${personal.email}`} className="hover:underline">
                {personal.email}
              </a>
              <span>·</span>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                linkedin.com/in/{personal.linkedinHandle}
              </a>
              <span>·</span>
              <a href={personal.github} target="_blank" rel="noreferrer" className="hover:underline">
                github.com/{personal.githubHandle}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-stone-900 border-b border-stone-200 pb-1 mb-2 font-heading">
              Professional Summary
            </h2>
            <p className="text-xs text-stone-700 leading-relaxed">
              {personal.leadBio}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-stone-900 border-b border-stone-200 pb-1 mb-2.5 font-heading">
              Technical Core Competencies
            </h2>
            <div className="space-y-1.5 text-xs">
              <div>
                <span className="font-semibold text-stone-900">Languages & Core: </span>
                <span className="text-stone-700">Python (Pandas, NumPy, Scikit-learn), JavaScript, SQL, Flask, Flask API</span>
              </div>
              <div>
                <span className="font-semibold text-stone-900">Machine Learning: </span>
                <span className="text-stone-700">Linear/Logistic Regression, Random Forest, SVM, KNN, Naïve Bayes, K-Means, Feature Selection, SMOTE, K-Fold CV, Outlier Detection</span>
              </div>
              <div>
                <span className="font-semibold text-stone-900">Deep Learning & GenAI: </span>
                <span className="text-stone-700">ANN, CNN, RNN/LSTM, TensorFlow, Keras, NLP, Prompt Engineering, Generative AI, Agentic AI workflows</span>
              </div>
              <div>
                <span className="font-semibold text-stone-900">Data & Visualization: </span>
                <span className="text-stone-700">EDA, Matplotlib, Seaborn, Data Preprocessing Pipelines</span>
              </div>
              <div>
                <span className="font-semibold text-stone-900">Web & Deployment: </span>
                <span className="text-stone-700">Flask REST API Development, HTML5, CSS3, Bootstrap</span>
              </div>
              <div>
                <span className="font-semibold text-stone-900">Tools & Environments: </span>
                <span className="text-stone-700">Git, GitHub, Jupyter Notebook, PyCharm</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-stone-900 border-b border-stone-200 pb-1 mb-3 font-heading">
              Key Machine Learning & AI Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-wrap items-baseline justify-between">
                    <span className="font-bold text-stone-900 text-xs">
                      {proj.title}
                    </span>
                    <span className="text-[11px] font-mono text-stone-500">
                      {proj.technologies.slice(0, 3).join(', ')}
                    </span>
                  </div>
                  <div className="space-y-1 pl-3 border-l-2 border-stone-200">
                    {proj.highlights.map((h, hIdx) => (
                      <p key={hIdx} className="text-[11px] text-stone-700 leading-snug">
                        • {h}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-stone-900 border-b border-stone-200 pb-1 mb-2.5 font-heading">
              Work Experience
            </h2>
            {experience.map((exp, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-stone-900 text-xs">{exp.role}</span>
                  <span className="font-mono text-stone-500 text-[11px]">{exp.period}</span>
                </div>
                <div className="text-[11px] text-stone-600 font-medium">{exp.company}</div>
                <p className="text-[11px] text-stone-700 leading-relaxed">
                  {exp.description}
                </p>
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="space-y-0.5 pl-3 border-l-2 border-stone-200">
                    {exp.achievements.map((ach, aIdx) => (
                      <p key={aIdx} className="text-[11px] text-stone-700 leading-snug">
                        • {ach}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
