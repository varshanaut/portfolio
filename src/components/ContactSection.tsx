import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, Send, ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    // Build mailto link
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="mb-14 max-w-xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            03. Contact & Collaboration
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 font-heading mb-3">
            Let's Discuss Data Science & AI Opportunities
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            I am actively seeking roles where I can contribute to predictive modeling pipelines, applied machine learning systems, and generative agent workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-stone-100 text-stone-800">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-base font-bold text-stone-900 font-heading hover:text-amber-800 transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-stone-100">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center justify-center gap-1 py-2 px-3.5 text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-white rounded-lg transition-colors"
                >
                  <span>Open Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="block bg-white p-6 rounded-2xl border border-stone-200/90 shadow-2xs hover:border-blue-300 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-50 text-blue-700">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block">
                      Professional Network
                    </span>
                    <span className="text-base font-bold text-stone-900 font-heading group-hover:text-blue-700 transition-colors">
                      LinkedIn Profile
                    </span>
                    <span className="text-xs text-stone-500 block font-mono">
                      /in/{personal.linkedinHandle}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-blue-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="block bg-white p-6 rounded-2xl border border-stone-200/90 shadow-2xs hover:border-stone-400 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-stone-100 text-stone-900">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block">
                      Code Repositories
                    </span>
                    <span className="text-base font-bold text-stone-900 font-heading group-hover:text-stone-900 transition-colors">
                      GitHub Profile
                    </span>
                    <span className="text-xs text-stone-500 block font-mono">
                      @{personal.githubHandle}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/90 shadow-2xs">
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-stone-100">
              <MessageSquare className="w-4 h-4 text-stone-700" />
              <h3 className="text-base font-bold text-stone-900 font-heading">
                Send a Direct Message
              </h3>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Chen"
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:border-stone-900 focus:bg-white text-stone-900 placeholder:text-stone-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:border-stone-900 focus:bg-white text-stone-900 placeholder:text-stone-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Data Science Intern Role / Collaboration"
                  className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:border-stone-900 focus:bg-white text-stone-900 placeholder:text-stone-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Varsha, I reviewed your Predictive Maintenance and EduLynk projects..."
                  className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-hidden focus:border-stone-900 focus:bg-white text-stone-900 placeholder:text-stone-400 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors shadow-xs cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message via Email</span>
                </button>

                <span className="text-[11px] text-stone-400 font-mono">
                  Direct routing to varshapraveenmv@gmail.com
                </span>
              </div>

              {formSubmitted && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Email client launched! You can also email directly at varshapraveenmv@gmail.com.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
