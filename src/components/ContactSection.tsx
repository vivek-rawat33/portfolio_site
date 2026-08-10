import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Check, 
  Copy, 
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, TwitterIcon, LinkedinIcon } from './SocialIcons';

export const ContactSection: React.FC = () => {
  const { contactInfo, socialLinks } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const githubLink = socialLinks.find(s => s.platform === 'github')?.url;
  const twitterLink = socialLinks.find(s => s.platform === 'twitter')?.url;
  const linkedinLink = socialLinks.find(s => s.platform === 'linkedin')?.url;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative bg-surface/50 border-t border-border-color/50 overflow-hidden">
      
      {/* Background Ambient Lights */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-gradient-to-t from-accent-primary/15 via-accent-secondary/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl font-extrabold font-heading text-main tracking-tight"
          >
            Let's Build Something <span className="text-gradient">Extraordinary</span> Together
          </motion.h2>
          <p className="text-xs sm:text-base text-muted font-sans mt-3">
            Have a project in mind, an engineering role opportunity, or just want to chat about AI & tech? Send me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Personal Details & Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-5 w-full"
          >
            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl glass-panel border border-border-color shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold font-heading text-main mb-5">
                Contact Information
              </h3>

              <div className="space-y-3.5 mb-6">
                
                {/* Email Box with One-Click Copy */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-surface-elevated border border-border-color flex items-center justify-between gap-2 group overflow-hidden">
                  <div className="flex items-center gap-3 overflow-hidden min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0 overflow-hidden">
                      <div className="text-[10px] sm:text-[11px] font-semibold text-muted uppercase">Direct Email</div>
                      <div className="text-xs sm:text-sm font-bold text-main truncate font-code">{contactInfo.email}</div>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 sm:p-2.5 rounded-xl bg-surface border border-border-color text-muted hover:text-main hover:bg-surface-elevated transition-colors shrink-0"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-surface-elevated border border-border-color flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent-secondary/10 flex items-center justify-center text-accent-secondary shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-[11px] font-semibold text-muted uppercase">Location</div>
                    <div className="text-xs sm:text-sm font-bold text-main truncate">{contactInfo.location}</div>
                  </div>
                </div>

                {/* Timezone Box */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-surface-elevated border border-border-color flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent-tertiary/10 flex items-center justify-center text-accent-tertiary shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-[11px] font-semibold text-muted uppercase">Timezone & Status</div>
                    <div className="text-xs sm:text-sm font-bold text-main truncate">{contactInfo.timezone}</div>
                  </div>
                </div>

              </div>

              {/* Top Social Profile Quick Bar */}
              <div>
                <h4 className="text-[11px] font-bold text-muted uppercase tracking-wider mb-2.5">
                  Connect On Social Media
                </h4>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-xl bg-surface-elevated border border-border-color flex flex-col items-center justify-center gap-1 text-muted hover:text-main hover:border-accent-primary transition-all duration-200"
                  >
                    <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-[10px] sm:text-[11px] font-semibold">GitHub</span>
                  </a>
                  <a
                    href={twitterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-xl bg-surface-elevated border border-border-color flex flex-col items-center justify-center gap-1 text-muted hover:text-sky-400 hover:border-sky-400 transition-all duration-200"
                  >
                    <TwitterIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-[10px] sm:text-[11px] font-semibold">X / Twitter</span>
                  </a>
                  <a
                    href={linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-xl bg-surface-elevated border border-border-color flex flex-col items-center justify-center gap-1 text-muted hover:text-indigo-400 hover:border-indigo-400 transition-all duration-200"
                  >
                    <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-[10px] sm:text-[11px] font-semibold">LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Interactive SaaS Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 w-full"
          >
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl glass-panel border border-border-color shadow-2xl">
              
              {submitted ? (
                <div className="py-10 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-main mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-muted max-w-md mb-5">
                    Thank you for getting in touch. I have received your message and will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-xl bg-surface border border-border-color text-xs font-semibold text-main hover:bg-surface-elevated"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-main mb-1">
                    Send Me a Direct Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-muted uppercase mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-surface-elevated/80 border border-border-color text-xs sm:text-sm text-main placeholder:text-muted focus:outline-none focus:border-accent-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-muted uppercase mb-1">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-surface-elevated/80 border border-border-color text-xs sm:text-sm text-main placeholder:text-muted focus:outline-none focus:border-accent-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-muted uppercase mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Project Inquiry / Job Opportunity"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-surface-elevated/80 border border-border-color text-xs sm:text-sm text-main placeholder:text-muted focus:outline-none focus:border-accent-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-muted uppercase mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project, timeline, or engineering role..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-surface-elevated/80 border border-border-color text-xs sm:text-sm text-main placeholder:text-muted focus:outline-none focus:border-accent-primary transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
