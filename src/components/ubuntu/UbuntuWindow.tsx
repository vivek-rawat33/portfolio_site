import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Minus, Square, Minimize2 } from 'lucide-react';

interface UbuntuWindowProps {
  id: string;
  title: string;
  icon?: React.ReactNode;
  isOpen: boolean;
  isFocused: boolean;
  onClose: () => void;
  onFocus: () => void;
  children: React.ReactNode;
}

export const UbuntuWindow: React.FC<UbuntuWindowProps> = ({
  id,
  title,
  icon,
  isOpen,
  isFocused,
  onClose,
  onFocus,
  children
}) => {
  const [isMaximized, setIsMaximized] = useState(false);

  if (!isOpen) return null;

  const isTerminal = id === 'terminal';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: 15 }}
      transition={{ type: 'spring', damping: 28, stiffness: 340 }}
      onClick={onFocus}
      className={`fixed ${
        isMaximized 
          ? 'top-7 left-0 right-0 bottom-0 w-full h-[calc(100vh-1.75rem)] max-h-[calc(100vh-1.75rem)] rounded-none border-none shadow-none' 
          : 'top-10 sm:top-12 left-1/2 -translate-x-1/2 w-[95vw] sm:w-[860px] max-w-[95vw] h-[78vh] sm:h-[580px] max-h-[calc(100vh-3.5rem)] rounded-xl'
      } ${
        isTerminal ? 'ubuntu-terminal-bg' : 'ubuntu-window'
      } flex flex-col z-${isFocused ? '30' : '20'} overflow-hidden shadow-2xl transition-all duration-200`}
    >
      
      {/* Ubuntu Yaru Header Title Bar */}
      <div 
        className={`${
          isTerminal ? 'ubuntu-terminal-header' : 'ubuntu-header'
        } h-9 px-3 flex items-center justify-between select-none shrink-0 border-b border-white/10`}
        onDoubleClick={() => setIsMaximized(!isMaximized)}
      >
        
        {/* Left: Window Title & Icon */}
        <div className="flex items-center gap-2 text-xs font-semibold text-white/90 truncate">
          {icon}
          <span className="truncate">{title}</span>
        </div>

        {/* Right: Window Control Buttons (Minimize, Maximize, Close) */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onClose}
            className="w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 transition-colors"
            title="Minimize"
          >
            <Minus className="w-3 h-3" />
          </button>

          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 transition-colors"
            title={isMaximized ? "Restore Window" : "Maximize Window"}
          >
            {isMaximized ? <Minimize2 className="w-3 h-3" /> : <Square className="w-2.5 h-2.5" />}
          </button>

          <button
            onClick={onClose}
            className="w-5 h-5 rounded-full bg-[#E95420] hover:bg-rose-600 flex items-center justify-center text-white font-bold transition-colors"
            title="Close Window"
          >
            <X className="w-3 h-3" />
          </button>
        </div>

      </div>

      {/* Window Body Container: flex-1 min-h-0 overflow-y-auto guarantees NO window height expansion or screen overflow */}
      <div className={`flex-1 min-h-0 overflow-y-auto ${
        isTerminal ? 'p-2 sm:p-3 text-slate-100' : 'bg-surface text-main p-4 sm:p-6 font-sans'
      }`}>
        {children}
      </div>

    </motion.div>
  );
};
