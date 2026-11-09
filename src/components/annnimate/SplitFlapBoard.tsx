import React, { useEffect, useState } from 'react';

const CHAR_SET = ' 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-•:';

const SplitFlapTile: React.FC<{ targetChar: string; delay?: number }> = ({ targetChar, delay = 0 }) => {
  const [displayChar, setDisplayChar] = useState(' ');
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    let currentIdx = 0;
    const target = targetChar.toUpperCase();
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setIsFlipping(true);
        currentIdx = (currentIdx + 1) % CHAR_SET.length;
        const nextChar = CHAR_SET[currentIdx];
        setDisplayChar(nextChar);

        if (nextChar === target || currentIdx >= 12) {
          setDisplayChar(target);
          setIsFlipping(false);
          clearInterval(interval);
        }
      }, 45);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [targetChar, delay]);

  return (
    <div className="relative inline-flex flex-col items-center justify-center w-5 sm:w-6 h-8 sm:h-9 bg-[#111013] text-[#F5F1E9] font-mono text-xs sm:text-sm font-bold border border-[#B49A68]/30 rounded-[3px] shadow-inner select-none overflow-hidden mx-[1px]">
      {/* Top Half */}
      <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden flex items-start justify-center pt-0.5 bg-[#1a181e] border-b border-black/80">
        <span>{displayChar}</span>
      </div>

      {/* Bottom Half */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden flex items-end justify-center pb-0.5 bg-[#141216]">
        <span>{displayChar}</span>
      </div>

      {/* Center Hinge Crease */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black/90 shadow-[0_1px_1px_rgba(255,255,255,0.08)] z-10" />

      {/* Flap Flip Animation Shadow */}
      {isFlipping && (
        <div className="absolute inset-0 bg-white/10 animate-pulse pointer-events-none z-20" />
      )}
    </div>
  );
};

export const SplitFlapBoard: React.FC<{
  orderId: string;
  clientName: string;
  stageName: string;
  eta: string;
}> = ({ orderId, clientName, stageName, eta }) => {
  const pad = (str: string, len: number) => (str || '').padEnd(len, ' ').slice(0, len);

  const rows = [
    { label: 'ORDER REF', text: pad(orderId, 16) },
    { label: 'PATRON   ', text: pad(clientName, 16) },
    { label: 'MILESTONE', text: pad(stageName, 16) },
    { label: 'EST FLIGHT', text: pad(eta, 16) },
  ];

  return (
    <div className="rounded-2xl border-2 border-[#B49A68]/50 bg-[#0d0c0e] p-4 sm:p-6 shadow-2xl max-w-xl mx-auto my-6">
      {/* Board Top Header */}
      <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-[#B49A68] border-b border-[#B49A68]/20 pb-2.5 mb-4">
        <span>✦ SOLARI SPLIT-FLAP TELEMETRY</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>LIVE ATELIER SYNCHRONIZED</span>
        </span>
      </div>

      {/* Flap Rows */}
      <div className="space-y-2.5">
        {rows.map((row, rIdx) => (
          <div key={row.label} className="flex items-center justify-between gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#77716B] w-20 flex-shrink-0">
              {row.label}
            </span>
            <div className="flex items-center">
              {row.text.split('').map((char, cIdx) => (
                <SplitFlapTile
                  key={`${rIdx}-${cIdx}-${char}`}
                  targetChar={char}
                  delay={(rIdx * 120) + (cIdx * 25)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
