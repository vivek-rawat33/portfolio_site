import React, { useState, useRef, useEffect } from 'react';
import { CornerDownLeft, HelpCircle, Plus } from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const TerminalApp: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-2 text-slate-300 font-code text-[11px] sm:text-xs">
          <div className="text-[#8AE234] font-bold">
            Welcome to Ubuntu 24.04 LTS (GNU/Linux 6.8.0-40-generic x86_64)
          </div>
          <div className="text-slate-400 space-y-0.5">
            <div> * Documentation:  <a href="https://help.ubuntu.com" target="_blank" rel="noreferrer" className="text-[#729FCF] underline">https://help.ubuntu.com</a></div>
            <div> * Management:     <a href="https://landscape.canonical.com" target="_blank" rel="noreferrer" className="text-[#729FCF] underline">https://landscape.canonical.com</a></div>
            <div> * Support:        <a href="https://ubuntu.com/pro" target="_blank" rel="noreferrer" className="text-[#729FCF] underline">https://ubuntu.com/pro</a></div>
          </div>
          
          <div className="p-2.5 rounded bg-black/30 border border-white/10 space-y-1 text-[11px]">
            <div className="text-[#FCE94F] font-bold">System Status:</div>
            <div>• Developer: <span className="text-white font-bold">{portfolioData.personalInfo.name}</span></div>
            <div>• Title: <span className="text-[#729FCF]">{portfolioData.personalInfo.title}</span></div>
            <div>• Availability: <span className="text-[#8AE234] font-bold">{portfolioData.personalInfo.availability}</span></div>
          </div>

          <div className="text-slate-300 pt-1">
            Type <span className="text-[#FCE94F] font-bold">--help</span> or <span className="text-[#FCE94F] font-bold">help</span> to view all commands.
          </div>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let resultOutput: React.ReactNode = null;

    if (cleanCmd === '--help' || cleanCmd === 'help') {
      resultOutput = (
        <div className="space-y-2 text-xs font-code">
          <div className="text-[#FCE94F] font-bold">Available Ubuntu Terminal Commands:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
            <div><span className="text-[#729FCF] font-bold">whoami</span> - Display developer profile summary</div>
            <div><span className="text-[#729FCF] font-bold">cat info.txt</span> - Print personal details & contact</div>
            <div><span className="text-[#729FCF] font-bold">skills</span> - List tech stack & proficiency %</div>
            <div><span className="text-[#729FCF] font-bold">projects</span> - Display production works & links</div>
            <div><span className="text-[#729FCF] font-bold">contact</span> - Display email, phone & social links</div>
            <div><span className="text-[#729FCF] font-bold">resume</span> - View resume overview & download</div>
            <div><span className="text-[#729FCF] font-bold">bio</span> - Read personal engineering journey</div>
            <div><span className="text-[#729FCF] font-bold">clear</span> - Clear terminal screen</div>
          </div>
        </div>
      );
    } else if (cleanCmd === 'whoami') {
      resultOutput = (
        <div className="text-xs text-slate-300 space-y-1 font-code">
          <div className="text-white font-bold text-sm">{portfolioData.personalInfo.name}</div>
          <div className="text-[#729FCF] font-semibold">{portfolioData.personalInfo.title}</div>
          <div className="pt-1 text-slate-300">{portfolioData.personalInfo.summary}</div>
        </div>
      );
    } else if (cleanCmd === 'cat info.txt' || cleanCmd === 'cat info') {
      resultOutput = (
        <div className="text-xs text-slate-300 space-y-1 font-code">
          <div><strong className="text-white">Name:</strong> {portfolioData.personalInfo.name}</div>
          <div><strong className="text-white">Role:</strong> {portfolioData.personalInfo.title}</div>
          <div><strong className="text-white">Location:</strong> {portfolioData.personalInfo.location}</div>
          <div><strong className="text-white">Email:</strong> {portfolioData.contactInfo.email}</div>
          <div><strong className="text-white">Status:</strong> <span className="text-[#8AE234] font-bold">{portfolioData.personalInfo.availability}</span></div>
        </div>
      );
    } else if (cleanCmd === 'skills') {
      resultOutput = (
        <div className="space-y-2 text-xs font-code">
          <div className="text-[#8AE234] font-bold">Technical Skills & Proficiency:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {portfolioData.techStack.map((s) => (
              <div key={s.id} className="p-2 rounded bg-black/40 border border-white/10">
                <div className="flex justify-between font-bold text-white">
                  <span>{s.name}</span>
                  <span className="text-[#729FCF]">{s.proficiency}%</span>
                </div>
                <div className="text-[10px] text-slate-400">{s.category} • {s.description}</div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (cleanCmd === 'projects') {
      resultOutput = (
        <div className="space-y-2 text-xs font-code">
          <div className="text-[#729FCF] font-bold">Production Projects:</div>
          <div className="space-y-2">
            {portfolioData.projects.map((p) => (
              <div key={p.id} className="p-2.5 rounded bg-black/40 border border-white/10 space-y-1">
                <div className="flex justify-between font-bold text-white">
                  <span>{p.title}</span>
                  <span className="text-[#FCE94F] text-[10px]">{p.category}</span>
                </div>
                <div className="text-slate-400 text-[11px]">{p.shortDescription}</div>
                <div className="flex gap-3 pt-1 text-[11px]">
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#729FCF] underline hover:text-white">GitHub Repo</a>
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[#8AE234] underline hover:text-white">Live Demo</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (cleanCmd === 'contact') {
      resultOutput = (
        <div className="text-xs text-slate-300 space-y-1 font-code">
          <div>📧 Email: <a href={`mailto:${portfolioData.contactInfo.email}`} className="text-[#729FCF] underline">{portfolioData.contactInfo.email}</a></div>
          <div>📍 Location: <span className="text-white">{portfolioData.contactInfo.location}</span></div>
          <div>🕒 Timezone: <span className="text-white">{portfolioData.contactInfo.timezone}</span></div>
          <div className="pt-1 text-[#8AE234] font-bold">{portfolioData.contactInfo.availabilityMessage}</div>
        </div>
      );
    } else if (cleanCmd === 'resume') {
      resultOutput = (
        <div className="text-xs text-slate-300 space-y-2 font-code">
          <div className="text-rose-400 font-bold">Resume Overview:</div>
          <div>{portfolioData.personalInfo.name} — B.Tech Computer Science with 4+ Years Full-Stack Experience.</div>
          <a
            href="#contact"
            className="inline-block px-3 py-1 rounded bg-[#E95420] text-white font-bold text-xs hover:bg-rose-600 transition-colors"
          >
            📥 Download Full Resume
          </a>
        </div>
      );
    } else if (cleanCmd === 'bio') {
      resultOutput = (
        <div className="text-xs text-slate-300 space-y-1.5 font-code">
          {portfolioData.personalInfo.aboutBio.map((b, i) => (
            <p key={i}>{b}</p>
          ))}
        </div>
      );
    } else {
      resultOutput = (
        <div className="text-rose-400 text-xs font-code">
          Command not recognized: <span className="underline">{cleanCmd}</span>. Type <span className="text-[#FCE94F] font-bold">--help</span> for command list.
        </div>
      );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: resultOutput }]);
    setInputVal('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const quickPills = ['--help', 'whoami', 'cat info.txt', 'skills', 'projects', 'contact', 'resume', 'bio'];

  return (
    <div className="h-full flex flex-col font-code text-xs text-left bg-[#300A24] text-slate-100 rounded-lg overflow-hidden border border-white/10">
      
      {/* Real GNOME Terminal Header Tab Bar */}
      <div className="bg-[#24061B] px-3 py-1.5 border-b border-white/10 flex items-center justify-between shrink-0 select-none">
        <div className="flex items-center gap-2">
          <div className="px-3 py-0.5 rounded bg-[#300A24] text-[11px] font-bold text-white flex items-center gap-2 border-t-2 border-[#E95420]">
            <span>vivek@ubuntu: ~</span>
          </div>
          <button className="text-slate-400 hover:text-white p-0.5" title="New Tab">
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="text-[10px] font-bold text-[#8AE234] bg-[#8AE234]/10 px-2 py-0.5 rounded">
          Bash 5.2
        </div>
      </div>

      {/* Real GNOME Terminal Menu Bar (File Edit View Search Terminal Help) */}
      <div className="bg-[#2C001E] px-3 py-1 border-b border-white/10 text-[11px] text-slate-300 flex items-center gap-4 select-none shrink-0">
        <span className="hover:text-white cursor-pointer">File</span>
        <span className="hover:text-white cursor-pointer">Edit</span>
        <span className="hover:text-white cursor-pointer">View</span>
        <span className="hover:text-white cursor-pointer">Search</span>
        <span className="hover:text-white cursor-pointer">Terminal</span>
        <span className="hover:text-white cursor-pointer">Help</span>
      </div>

      {/* Terminal History Container */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 font-code text-[11px] sm:text-xs leading-relaxed">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-1.5 font-bold">
              <span className="text-[#8AE234]">vivek@ubuntu</span>
              <span className="text-white">:</span>
              <span className="text-[#729FCF]">~</span>
              <span className="text-white">$</span>
              <span className="text-[#FCE94F] pl-1">{item.command}</span>
            </div>
            <div className="pl-3">{item.output}</div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Command Pills */}
      <div className="px-3 py-1.5 bg-[#24061B] border-t border-white/10 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
        <span className="text-[10px] text-[#FCE94F] uppercase font-bold shrink-0 flex items-center gap-1">
          <HelpCircle className="w-3 h-3" /> Quick Cmds:
        </span>
        {quickPills.map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="px-2 py-0.5 rounded bg-white/10 hover:bg-[#E95420] text-[10px] text-[#729FCF] hover:text-white font-code transition-colors shrink-0"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Input Prompt Form */}
      <form onSubmit={handleFormSubmit} className="p-3 bg-[#24061B] border-t border-white/10 flex items-center gap-1.5 shrink-0">
        <span className="text-[#8AE234] font-bold">vivek@ubuntu</span>
        <span className="text-white">:</span>
        <span className="text-[#729FCF] font-bold">~</span>
        <span className="text-white">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type command or '--help'..."
          className="w-full bg-transparent text-xs text-white placeholder:text-slate-400 focus:outline-none font-code pl-1"
          autoFocus
        />
        <button type="submit" className="text-slate-400 hover:text-[#8AE234] p-1" title="Execute command">
          <CornerDownLeft className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
};
