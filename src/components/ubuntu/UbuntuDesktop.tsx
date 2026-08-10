import React, { useState } from 'react';
import { 
  Terminal as TerminalIcon, 
  Image as GalleryIcon, 
  FileText, 
  FileCode, 
  User, 
  X, 
  Grid 
} from 'lucide-react';
import { UbuntuTopBar } from './UbuntuTopBar';
import { UbuntuDock } from './UbuntuDock';
import { UbuntuWindow } from './UbuntuWindow';
import { TerminalApp } from './apps/TerminalApp';
import { GalleryApp } from './apps/GalleryApp';
import { TextEditorApp } from './apps/TextEditorApp';
import { ResumeViewerApp } from './apps/ResumeViewerApp';
import { BioApp } from './apps/BioApp';
import { portfolioData } from '../../data/portfolioData';

interface OpenWindow {
  id: string;
  title: string;
  icon: React.ReactNode;
}

export const UbuntuDesktop: React.FC = () => {
  const [openWindows, setOpenWindows] = useState<OpenWindow[]>([
    { id: 'terminal', title: 'Ubuntu Terminal (vivek@ubuntu)', icon: <TerminalIcon className="w-4 h-4 text-emerald-400" /> },
    { id: 'info', title: 'About_Info.txt (Text Editor)', icon: <FileText className="w-4 h-4 text-sky-400" /> }
  ]);
  const [activeAppId, setActiveAppId] = useState<string | null>('terminal');
  const [launcherOpen, setLauncherOpen] = useState(false);

  const desktopIcons = [
    { id: 'info', name: 'About_Info.txt', type: 'file', icon: <FileText className="w-10 h-10 text-sky-400" />, title: 'About_Info.txt (Text Editor)' },
    { id: 'resume', name: 'Resume.pdf', type: 'file', icon: <FileCode className="w-10 h-10 text-rose-400" />, title: 'Resume.pdf (Evince Reader)' },
    { id: 'bio', name: 'Personal_Bio.md', type: 'file', icon: <User className="w-10 h-10 text-emerald-400" />, title: 'Personal_Bio.md (Markdown)' },
    { id: 'terminal', name: 'Terminal', type: 'app', icon: <TerminalIcon className="w-10 h-10 text-[#E95420]" />, title: 'Ubuntu Terminal (vivek@ubuntu)' },
    { id: 'gallery', name: 'Projects Gallery', type: 'app', icon: <GalleryIcon className="w-10 h-10 text-amber-400" />, title: 'Projects Gallery (Gnome Photos)' },
  ];

  const handleOpenApp = (id: string) => {
    const target = desktopIcons.find(item => item.id === id);
    if (!target) return;

    if (!openWindows.some(w => w.id === id)) {
      setOpenWindows(prev => [...prev, { id: target.id, title: target.title, icon: target.icon }]);
    }
    setActiveAppId(id);
    setLauncherOpen(false);
  };

  const handleCloseWindow = (id: string) => {
    setOpenWindows(prev => prev.filter(w => w.id !== id));
    if (activeAppId === id) {
      const remaining = openWindows.filter(w => w.id !== id);
      setActiveAppId(remaining.length > 0 ? remaining[remaining.length - 1].id : null);
    }
  };

  const activeWindowObj = openWindows.find(w => w.id === activeAppId);

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden ubuntu-wallpaper relative select-none font-sans">
      
      {/* Top Panel Bar */}
      <UbuntuTopBar
        activeAppTitle={activeWindowObj?.title || 'Desktop'}
        onToggleLauncher={() => setLauncherOpen(!launcherOpen)}
      />

      {/* Main Workspace (Dock + Desktop Grid) */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Left Ubuntu Dock */}
        <UbuntuDock
          activeAppId={activeAppId}
          onOpenApp={handleOpenApp}
          onToggleLauncher={() => setLauncherOpen(!launcherOpen)}
        />

        {/* Desktop Files Grid */}
        <div className="flex-1 p-6 relative overflow-hidden">
          
          {/* Desktop Files & Apps Grid Icons */}
          <div className="grid grid-flow-col grid-rows-6 gap-6 w-max">
            {desktopIcons.map((item) => (
              <button
                key={item.id}
                onClick={() => handleOpenApp(item.id)}
                className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-white/15 focus:bg-white/20 transition-colors w-24 group text-center"
              >
                <div className="p-2 rounded-xl bg-black/40 border border-white/10 group-hover:scale-105 transition-transform shadow-lg">
                  {item.icon}
                </div>
                <span className="text-xs font-semibold text-white mt-1.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] truncate max-w-full">
                  {item.name}
                </span>
              </button>
            ))}
          </div>

          {/* Quick Welcome Desktop Watermark */}
          <div className="absolute bottom-6 right-6 text-right pointer-events-none text-white/30 hidden sm:block">
            <div className="text-2xl font-bold font-heading">{portfolioData.personalInfo.name}</div>
            <div className="text-xs font-code">Ubuntu 24.04 LTS GUI Portfolio • React 19</div>
          </div>

          {/* Open Ubuntu Windows */}
          {openWindows.map((win) => (
            <UbuntuWindow
              key={win.id}
              id={win.id}
              title={win.title}
              icon={win.icon}
              isOpen={true}
              isFocused={activeAppId === win.id}
              onClose={() => handleCloseWindow(win.id)}
              onFocus={() => setActiveAppId(win.id)}
            >
              {win.id === 'terminal' && <TerminalApp />}
              {win.id === 'gallery' && <GalleryApp />}
              {win.id === 'info' && <TextEditorApp />}
              {win.id === 'resume' && <ResumeViewerApp />}
              {win.id === 'bio' && <BioApp />}
            </UbuntuWindow>
          ))}

        </div>

      </div>

      {/* Fullscreen Ubuntu Activities Launcher Grid Modal */}
      {launcherOpen && (
        <div className="fixed inset-0 top-7 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-6 space-y-8 animate-fade-in">
          <div className="flex items-center justify-between w-full max-w-3xl pb-4 border-b border-white/15">
            <div className="flex items-center gap-2 text-white text-lg font-bold font-heading">
              <Grid className="w-6 h-6 text-[#E95420]" />
              <span>Ubuntu Applications Launcher</span>
            </div>
            <button
              onClick={() => setLauncherOpen(false)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl w-full">
            {desktopIcons.map((item) => (
              <button
                key={item.id}
                onClick={() => handleOpenApp(item.id)}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#E95420]/20 hover:border-[#E95420] transition-all group text-center"
              >
                <div className="p-3 rounded-2xl bg-black/50 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-sm font-bold text-white">{item.name}</span>
                <span className="text-[10px] text-white/60 uppercase">{item.type}</span>
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
