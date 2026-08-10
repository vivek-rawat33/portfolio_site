import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Play, RotateCcw } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div className="text-muted leading-relaxed">
          <span className="text-emerald-400 font-bold">Vivek Rawat CLI v2.4.0</span> — Type <span className="text-sky-400 font-bold font-code">'help'</span> or click quick pills below to execute commands.
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

    switch (cleanCmd) {
      case 'help':
        resultOutput = (
          <div className="space-y-1 text-xs">
            <div className="text-amber-300 font-bold">Available Commands:</div>
            <div className="grid grid-cols-2 gap-2 text-muted">
              <div><span className="text-sky-400">whoami</span> - Personal summary</div>
              <div><span className="text-sky-400">skills</span> - Core tech stack</div>
              <div><span className="text-sky-400">projects</span> - Production works</div>
              <div><span className="text-sky-400">contact</span> - Email & links</div>
              <div><span className="text-sky-400">stats</span> - Engineering metrics</div>
              <div><span className="text-sky-400">clear</span> - Clear screen</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        resultOutput = (
          <div className="text-muted leading-relaxed">
            <span className="text-main font-bold">{portfolioData.personalInfo.name}</span> — {portfolioData.personalInfo.title}.
            <br />
            {portfolioData.personalInfo.summary}
          </div>
        );
        break;

      case 'skills':
        resultOutput = (
          <div className="space-y-1">
            <div className="text-emerald-400 font-bold">Featured Stack:</div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {portfolioData.techStack.filter(s => s.featured).map(s => (
                <span key={s.id} className="px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-sky-300 text-[10px]">
                  {s.name} ({s.proficiency}%)
                </span>
              ))}
            </div>
          </div>
        );
        break;

      case 'projects':
        resultOutput = (
          <div className="space-y-1.5">
            <div className="text-indigo-400 font-bold">Recent Projects:</div>
            {portfolioData.projects.map(p => (
              <div key={p.id} className="text-xs text-muted flex items-center justify-between">
                <span>• <strong className="text-main">{p.title}</strong> ({p.category})</span>
                <a href="#projects" className="text-sky-400 underline text-[10px]">Inspect</a>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        resultOutput = (
          <div className="text-xs text-muted space-y-1">
            <div>✉️ Email: <a href={`mailto:${portfolioData.contactInfo.email}`} className="text-sky-400 underline">{portfolioData.contactInfo.email}</a></div>
            <div>📍 Location: <span className="text-main">{portfolioData.contactInfo.location}</span></div>
            <div>💼 Status: <span className="text-emerald-400">{portfolioData.personalInfo.availability}</span></div>
          </div>
        );
        break;

      case 'stats':
        resultOutput = (
          <div className="grid grid-cols-2 gap-2 text-xs">
            {portfolioData.stats.map((s, i) => (
              <div key={i} className="p-2 rounded bg-surface border border-border-color">
                <div className="text-sky-400 font-bold">{s.value}</div>
                <div className="text-muted text-[10px]">{s.label}</div>
              </div>
            ))}
          </div>
        );
        break;

      default:
        resultOutput = (
          <div className="text-rose-400 text-xs">
            Command not recognized: <span className="underline">{cleanCmd}</span>. Type <span className="text-sky-400 font-bold">'help'</span> for list of valid commands.
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

  const quickCmds = ['help', 'whoami', 'skills', 'projects', 'contact'];

  return (
    <div className="w-full max-w-md rounded-2xl glass-panel border border-border-color shadow-2xl overflow-hidden font-code text-xs text-left">
      
      {/* IDE Top Window Control Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-surface-elevated border-b border-border-color">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-muted font-medium">
          <TerminalIcon className="w-3.5 h-3.5 text-accent-primary animate-pulse" />
          <span>InteractiveCLI.ts</span>
        </div>
        <div className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md font-semibold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          Live Session
        </div>
      </div>

      {/* Terminal History Container */}
      <div className="p-4 space-y-3 bg-surface/90 font-code text-[11px] sm:text-xs leading-relaxed max-h-64 overflow-y-auto">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-1.5 text-sky-400 font-semibold">
              <span className="text-emerald-400">dev@vivek-rawat</span>
              <span className="text-muted">:~$</span>
              <span className="text-main">{item.command}</span>
            </div>
            <div className="pl-3">{item.output}</div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Click Command Pills Bar */}
      <div className="px-3 py-2 bg-surface-elevated/70 border-t border-border-color/60 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        <span className="text-[10px] text-muted uppercase font-bold shrink-0">Quick Cmds:</span>
        {quickCmds.map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="px-2 py-0.5 rounded bg-surface border border-border-color text-[10px] font-code text-sky-400 hover:bg-accent-primary/10 hover:border-accent-primary transition-colors shrink-0"
          >
            &gt; {cmd}
          </button>
        ))}
      </div>

      {/* Input Prompt Form */}
      <form onSubmit={handleFormSubmit} className="px-3.5 py-2.5 bg-surface-elevated border-t border-border-color flex items-center gap-2">
        <span className="text-emerald-400 font-bold text-xs">&gt;</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type 'help' or command..."
          className="w-full bg-transparent text-xs text-main placeholder:text-muted focus:outline-none font-code"
        />
        <button type="submit" className="text-muted hover:text-accent-primary transition-colors p-1" title="Execute command">
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>

    </div>
  );
};
