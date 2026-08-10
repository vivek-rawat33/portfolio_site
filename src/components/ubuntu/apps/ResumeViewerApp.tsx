import React, { useState } from 'react';
import { Download, FileCode, Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData';

export const ResumeViewerApp: React.FC = () => {
  const { personalInfo, experience, stats } = portfolioData;
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    // Create interactive simulated PDF download or trigger contact mailto
    const element = document.createElement("a");
    const file = new Blob([
      `VIVEK RAWAT - RESUME\n\n` +
      `Title: ${personalInfo.title}\n` +
      `Email: ${portfolioData.contactInfo.email}\n` +
      `Location: ${personalInfo.location}\n\n` +
      `SUMMARY:\n${personalInfo.summary}\n\n` +
      `EXPERIENCE:\n` +
      experience.map(e => `${e.role} at ${e.company} (${e.period})\n- ${e.description}\n`).join('\n')
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Vivek_Rawat_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="space-y-6 font-sans">
      
      {/* Resume Document Top Bar with Download Action */}
      <div className="p-4 rounded-xl bg-surface-elevated border border-border-color flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-rose-400 font-code">
            <FileCode className="w-4 h-4" />
            <span>Resume.pdf (Evince PDF Reader)</span>
          </div>
          <h2 className="text-xl font-extrabold text-main font-heading mt-1">
            {personalInfo.name} — Resume Document
          </h2>
          <p className="text-xs text-muted">
            {personalInfo.title} • {personalInfo.location}
          </p>
        </div>

        {/* Download Resume Button */}
        <button
          onClick={handleDownload}
          className="px-5 py-2.5 rounded-xl bg-[#E95420] hover:bg-rose-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-colors shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>{downloaded ? 'Resume Downloaded!' : 'Download Resume PDF'}</span>
        </button>
      </div>

      {/* Stats Summary Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((s, i) => (
          <div key={i} className="p-3 rounded-xl bg-surface-elevated border border-border-color text-center">
            <div className="text-xl font-bold font-heading text-[#E95420]">{s.value}</div>
            <div className="text-[10px] text-muted font-medium">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Career Work Experience Timeline */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-muted flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-[#E95420]" />
          <span>Work Experience Timeline</span>
        </h3>

        <div className="space-y-4">
          {experience.map((item) => (
            <div key={item.id} className="p-4 rounded-xl bg-surface-elevated border border-border-color space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#E95420] bg-[#E95420]/10 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {item.period}
                </span>
                <span className="text-xs text-muted flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {item.location}
                </span>
              </div>

              <h4 className="text-base font-bold text-main">{item.role}</h4>
              <div className="text-xs font-semibold text-sky-400">{item.company}</div>
              <p className="text-xs text-muted leading-relaxed">{item.description}</p>

              <div className="space-y-1 pt-1">
                {item.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-main">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="p-4 rounded-xl bg-surface-elevated border border-border-color space-y-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-muted flex items-center gap-2">
          <Award className="w-4 h-4 text-purple-400" />
          <span>Education & Credentials</span>
        </h3>
        <div className="text-xs text-main font-bold">B.Tech in Computer Science & Engineering</div>
        <div className="text-xs text-muted">Specialization in Full-Stack Web Development, System Architecture & AI.</div>
      </div>

    </div>
  );
};
