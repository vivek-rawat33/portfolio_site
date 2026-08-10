import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, TwitterIcon, LinkedinIcon } from './SocialIcons';

export const ContactSection: React.FC = () => {
  const { contactInfo, socialLinks } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    try {
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.8 } });
    } catch {
      // fallback
    }

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const githubLink = socialLinks.find(s => s.platform === 'github')?.url;
  const twitterLink = socialLinks.find(s => s.platform === 'twitter')?.url;
  const linkedinLink = socialLinks.find(s => s.platform === 'linkedin')?.url;

  return (
    <section id="contact" className="py-16 border-b border-border-color font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="flex items-center gap-2 text-xs font-semibold text-muted uppercase tracking-wider mb-2">
          <Mail className="w-3.5 h-3.5" />
          <span>Contact</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-main mb-8 tracking-tight">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Info Cards */}
          <div className="md:col-span-5 space-y-4">
            
            {/* Email Box */}
            <div className="clean-card p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <Mail className="w-5 h-5 text-muted shrink-0" />
                <div className="truncate">
                  <div className="text-[10px] uppercase font-semibold text-muted">Email Address</div>
                  <div className="text-xs font-semibold font-code text-main truncate">{contactInfo.email}</div>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg border border-border-color hover:bg-surface text-muted hover:text-main shrink-0 vercel-btn"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="clean-card p-4 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-muted shrink-0" />
              <div>
                <div className="text-[10px] uppercase font-semibold text-muted">Location</div>
                <div className="text-xs font-semibold text-main">{contactInfo.location}</div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="clean-card p-4 space-y-3">
              <div className="text-[10px] uppercase font-semibold text-muted">Social Profiles</div>
              <div className="flex items-center gap-2">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 p-2 rounded-lg border border-border-color text-xs font-semibold text-main hover:bg-surface transition-colors vercel-btn"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={twitterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 p-2 rounded-lg border border-border-color text-xs font-semibold text-main hover:bg-surface transition-colors vercel-btn"
                >
                  <TwitterIcon className="w-4 h-4" />
                  <span>X</span>
                </a>
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 p-2 rounded-lg border border-border-color text-xs font-semibold text-main hover:bg-surface transition-colors vercel-btn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Form */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="clean-card p-5 space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-muted mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-surface border border-border-color text-main focus:outline-none focus:border-border-hover"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-surface border border-border-color text-main focus:outline-none focus:border-border-hover"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Vivek, I'd like to discuss a project..."
                  className="w-full px-3 py-2 text-xs rounded-lg bg-surface border border-border-color text-main focus:outline-none focus:border-border-hover resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full py-2.5 px-4 rounded-lg bg-white text-black font-semibold text-xs hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 vercel-btn"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{submitted ? 'Message Sent Successfully!' : 'Send Message'}</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
