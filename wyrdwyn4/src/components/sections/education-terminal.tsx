"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal, Minus, Square, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function EducationTerminal() {
  const [status, setStatus] = useState<'waiting' | 'typing' | 'processing' | 'complete'>('waiting');
  const [typedText, setTypedText] = useState("");
  const [logs, setLogs] = useState<string[]>([]);
  
  const command = "sudo apt-get update && install core -y --verbose";
  const hasStartedRef = useRef(false);

  const INSTALL_LOGS = [
    "[+] Connecting to mun.ca repository...",
    "[+] Fetching academic_transcript.json...",
    "[+] Verifying checksum for 'Khan Sahb'...",
    "[+] Signature verified.",
    "[+] Compiling Computer_Engineering_Core...",
    "[+] Linking dependencies: Java, Python, C++, React...",
    "[+] Optimizing GPA (3.78) for performance...",
    "[+] Installation complete. Launching info..."
  ];

  const handleInteraction = () => {
    if (status === 'waiting' && !hasStartedRef.current) {
      hasStartedRef.current = true;
      setStatus('typing');
    }
  };

  useEffect(() => {
    if (status === 'typing') {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= command.length) {
          setTypedText(command.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
          setStatus('processing');
        }
      }, 40);
      return () => clearInterval(interval);
    }
  }, [status]);

  useEffect(() => {
    if (status === 'processing') {
      let i = 0;
      const interval = setInterval(() => {
        if (i < INSTALL_LOGS.length) {
          setLogs(prev => [...prev, INSTALL_LOGS[i]]);
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => setStatus('complete'), 600);
        }
      }, 300); 
      return () => clearInterval(interval);
    }
  }, [status]);

  const MUN_ASCII = `
    MM      MM  UU    UU  NN    NN
    MMMM  MMMM  UU    UU  NNN   NN
    MM  MM  MM  UU    UU  NN NN NN
    MM      MM  UU    UU  NN   NNN
    MM      MM   UUUUUU   NN    NN

  Memorial University of Newfoundland
  `;

  return (
    <section className="w-full max-w-7xl px-4 py-20 mx-auto" id="education">
      <div className="flex flex-col gap-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
          <Terminal className="text-green-400" size={32} />
          <span>system_info</span>
        </h2>
        <p className="text-gray-400 font-mono text-sm">
          // Initialize the terminal to view academic credentials.
        </p>
      </div>

      <div 
        className={cn(
          "w-full rounded-lg overflow-hidden border bg-black/80 backdrop-blur-md shadow-2xl font-mono text-sm md:text-base relative flex flex-col min-h-[450px] transition-colors outline-none",
          status === 'waiting' ? "border-white/10 cursor-pointer hover:border-white/30 focus:border-green-500/50" : "border-white/10"
        )}
        onClick={handleInteraction}
        onKeyDown={handleInteraction}
        tabIndex={0}
        role="button"
        aria-label="Terminal Interface"
      >
        
        <div className="bg-[#2d2d2d]/50 px-4 py-2 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-xs">khan@sahb:~</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center"><Minus size={8} /></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center"><Square size={6} /></div>
            <div className="w-3 h-3 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center"><X size={8} /></div>
          </div>
        </div>

        <div className="p-6 md:p-8 flex-1 text-gray-300 relative overflow-hidden">
           <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[1] bg-[length:100%_2px,3px_100%] opacity-20" />

          <div className="flex flex-wrap items-center gap-2 mb-4 relative z-10">
            <span className="text-green-400 font-bold drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">khan@sahb</span>
            <span className="text-white">:</span>
            <span className="text-blue-400 font-bold">~</span>
            <span className="text-white">$</span>
            <span>{typedText}</span>
            {(status === 'typing' || status === 'waiting') && (
              <span className="w-2 h-4 bg-gray-400 animate-pulse" />
            )}
          </div>

          {status === 'waiting' && (
             <div className="text-gray-500 text-xs mt-2 animate-pulse relative z-10">
               Press any key to initialize...
             </div>
          )}

          {(status === 'processing' || status === 'complete') && (
            <div className="mb-6 text-gray-400 text-xs md:text-sm font-mono space-y-1 relative z-10">
              {logs.map((log, idx) => (
                <div key={idx}>{log}</div>
              ))}
            </div>
          )}

          {status === 'complete' && (
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-2 duration-500 relative z-10 border-t border-white/10 pt-6">
              <div className="hidden sm:block text-white font-bold leading-tight select-none opacity-80 hover:text-red-900 transition-colors">
                <pre className="text-[10px] md:text-xs drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]">{MUN_ASCII}</pre>
              </div>

              <div className="space-y-2">
                <div className="grid grid-cols-[100px_1fr] gap-y-2 text-sm">
                  <span className="text-green-400 font-bold">OS</span>
                  <a href="https://www.mun.ca/undergrad/programs/engineering/computer-engineering/" className="text-white hover:text-blue-500">B.Eng (Computer Engineering)</a>
                  
                  <span className="text-green-400 font-bold">Kernel</span>
                  <span className="text-white">MunOS v4.5.2</span>
                  
                  <span className="text-green-400 font-bold">Uptime</span>
                  <span className="text-white">Class of 2026 (Term 8)</span>
                  
                  <span className="text-green-400 font-bold">Packages</span>
                  <a href="https://www.mun.ca/engineering/undergraduate/scholarships-and-awards/deans-list/deans-list---spring-2023/" className="text-white hover:text-blue-500">Dean's List (2022-2023)</a>
                  
                  <span className="text-green-400 font-bold">Resolution</span>
                  <span className="text-white">GPA: 3.78</span>

                  <span className="text-green-400 font-bold">CPU</span>
                  <span className="text-white">Neural Net (Coffee Overclocked)</span>

                  <span className="text-green-400 font-bold">GPU</span>
                  <span className="text-white">RTX On (AI Workloads)</span>
                </div>

                <div className="flex gap-2 mt-6">
                  {['bg-black', 'bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-blue-500', 'bg-purple-500', 'bg-cyan-500', 'bg-white'].map((bg, i) => (
                    <div key={i} className={`w-6 h-3 ${bg} rounded-sm`} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-[#252526] text-gray-500 text-[10px] py-1 px-3 flex justify-between items-center font-mono border-t border-white/5">
          <div className="flex gap-4">
            <span className="bg-blue-600 text-black px-1.5 font-bold">NORMAL</span>
            <span>master*</span>
          </div>
          <div className="flex gap-4">
            <span>utf-8</span>
            <span>100%</span>
            <span>Ln 24, Col 80</span>
          </div>
        </div>

      </div>
    </section>
  );
}