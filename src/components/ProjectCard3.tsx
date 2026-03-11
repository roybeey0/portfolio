'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown-dark.css';
import { motion } from 'framer-motion';

export default function ProjectCard3() {
  const [open, setOpen] = useState(false);
  const [readme, setReadme] = useState('');

  useEffect(() => {
    fetch('/README3.md')
        .then(res => res.text())
        .then(text => {
        // Fix image paths dari results/ ke public/
        const fixed = text.replace(/results\//g, '/');
        setReadme(fixed);
        });
    }, []);

  return (
    <motion.div
      className="rounded-2xl bg-[#141414] border border-white/5 p-6 flex flex-col gap-4 transition-colors"
      whileHover={{ 
        y: -4,
        boxShadow: '0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)',
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
      }}
    >


      {/* Top row */}
      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-0 justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-zinc-300 text-xl font-medium" style={{fontFamily: 'Georgia, serif'}}>
            Genetic Algorithm for Trading Strategy Optimization
          </h3>
          <p className="text-zinc-600 text-base">
            Automatically discover optimal crypto trading parameters using evolutionary computation
          </p>
        </div>
        <a href="https://github.com/roybeey0/ga-trading-optimizer" target="_blank"
          className="flex items-center gap-1.5 text-zinc-600 hover:text-zinc-400 transition-colors text-sm border border-white/5 rounded-lg px-3 py-1.5 hover:border-white/10 shrink-0 ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          View on GitHub
        </a>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Total Return', value: '+7.27%' },
          { label: 'Win Rate', value: '90.9%' },
          { label: 'Sharpe Ratio', value: '1.6225' },
          { label: 'Max Drawdown', value: '0.81%' },
        ].map(m => (
          <div key={m.label} className="bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 flex flex-col gap-1">
            <span className="text-zinc-600 text-xs">{m.label}</span>
            <span className="text-zinc-300 text-lg font-light" style={{fontFamily: 'Georgia, serif'}}>{m.value}</span>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-2 text-sm text-zinc-600">
        <span className="border border-white/5 rounded-md px-2 py-1">Custom GA Engine</span>
        <span className="border border-white/5 rounded-md px-2 py-1">Multi-objective Fitness</span>
        <span className="border border-white/5 rounded-md px-2 py-1">Tournament Selection</span>
        <span className="border border-white/5 rounded-md px-2 py-1">Adaptive Mutation</span>
        <span className="border border-white/5 rounded-md px-2 py-1">Custom Backtest Engine</span>
        <span className="border border-white/5 rounded-md px-2 py-1">BTC-USD 2Y Data</span>
      </div>

      {/* Tech stack */}
      <div className="flex items-center gap-2">
        <span className="text-zinc-700 text-sm">Stack:</span>
        <div className="flex gap-2 flex-wrap">
          <span className="text-zinc-500 text-sm bg-white/[0.03] rounded px-2 py-0.5">Python</span>
          <span className="text-zinc-500 text-sm bg-white/[0.03] rounded px-2 py-0.5">yfinance</span>
          <span className="text-zinc-500 text-sm bg-white/[0.03] rounded px-2 py-0.5">Matplotlib</span>
          <span className="text-zinc-500 text-sm bg-white/[0.03] rounded px-2 py-0.5">Pandas</span>
          <span className="text-zinc-500 text-sm bg-white/[0.03] rounded px-2 py-0.5">NumPy</span>
        </div>
      </div>

      {/* README */}
      {open && (
        <div className="border-t border-white/5 pt-4">
          <div className="markdown-body" style={{ backgroundColor: 'transparent', fontSize: '15px' }}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {readme}
            </ReactMarkdown>
          </div>
        </div>
      )}

      {/* Read More Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-zinc-500 hover:text-zinc-300 transition-colors text-sm w-fit border border-white/5 rounded-lg px-3 py-1.5 hover:border-white/10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          style={{transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s'}}>
          <path d="m6 9 6 6 6-6"/>
        </svg>
        {open ? 'Show Less' : 'Read More'}
      </button>

    </motion.div>
  );
}