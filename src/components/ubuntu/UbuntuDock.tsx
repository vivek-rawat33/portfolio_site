import React from 'react';
import { 
  Terminal, 
  Image, 
  FileText, 
  FileCode, 
  User, 
  Grid 
} from 'lucide-react';

interface UbuntuDockProps {
  activeAppId: string | null;
  onOpenApp: (appId: string) => void;
  onToggleLauncher: () => void;
}

export const UbuntuDock: React.FC<UbuntuDockProps> = ({ activeAppId, onOpenApp, onToggleLauncher }) => {
  const dockItems = [
    { id: 'terminal', name: 'Terminal', icon: <Terminal className="w-6 h-6 text-white" /> },
    { id: 'gallery', name: 'Projects Gallery', icon: <Image className="w-6 h-6 text-amber-400" /> },
    { id: 'info', name: 'About_Info.txt', icon: <FileText className="w-6 h-6 text-sky-400" /> },
    { id: 'resume', name: 'Resume.pdf', icon: <FileCode className="w-6 h-6 text-rose-400" /> },
    { id: 'bio', name: 'Personal_Bio.md', icon: <User className="w-6 h-6 text-emerald-400" /> },
  ];

  return (
    <aside className="w-14 bg-black/80 backdrop-blur-md flex flex-col items-center py-3 justify-between z-40 border-r border-white/10 select-none">
      
      {/* Dock Apps List */}
      <div className="flex flex-col items-center gap-3 w-full">
        {dockItems.map((item) => {
          const isActive = activeAppId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onOpenApp(item.id)}
              className="relative p-2.5 rounded-xl hover:bg-white/15 transition-all group"
              title={item.name}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r bg-[#E95420]" />
              )}
              {item.icon}

              <div className="absolute left-16 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded bg-[#2d2d2d] text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 border border-white/10 shadow-xl">
                {item.name}
              </div>
            </button>
          );
        })}
      </div>

      <button
        onClick={onToggleLauncher}
        className="p-2.5 rounded-xl hover:bg-white/15 text-white/70 hover:text-white transition-colors"
        title="Show Applications Grid"
      >
        <Grid className="w-6 h-6" />
      </button>

    </aside>
  );
};
