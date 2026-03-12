'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown-dark.css';
import { motion } from 'framer-motion';

const charts = [
  { file: '01_price_history.png', label: 'Price History' },
  { file: '02_correlation.png', label: 'Correlation' },
  { file: '03_volatility.png', label: 'Volatility' },
  { file: '04_technical_indicators.png', label: 'Technical Indicators' },
  { file: '05_return_distribution.png', label: 'Return Distribution' },
  { file: '06_cumulative_returns.png', label: 'Cumulative Returns' },
  { file: '07_market_regime.png', label: 'Market Regime' },
  { file: '08_volume_analysis.png', label: 'Volume Analysis' },
  { file: '09_monthly_heatmap.png', label: 'Monthly Heatmap' },
  { file: '10_drawdown_risk_return.png', label: 'Drawdown & Risk-Return' },
];

export default function ProjectCard4() {
  const [open, setOpen] = useState(false);
  const [readme, setReadme] = useState('');
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    fetch('/README4.md')
      .then(res => res.text())
      .then(text => setReadme(text));
  }, []);

  return (
    <motion.div
      className="rounded-2xl bg-[#141414] border border-white/5 p-6 flex flex-col gap-4 transition-colors"
      whileHover={{
        y: -4,
        boxShadow: '0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)',
      }}
      transition={{ duration: 0.25 }}
    >
      {/* Top row */}
      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-0 justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-zinc-300 text-xl font-medium" style={{fontFamily: 'Georgia, serif'}}>
            Crypto Market Analysis — EDA of Bitcoin & Major Altcoins
          </h3>
          <p className="text-zinc-600 text-base">
            Exploratory Data Analysis of BTC, ETH, SOL, BNB — 2020 to 2024
          </p>
        </div>
        <a href="https://github.com/roybeey0/crypto-market-analysis" target="_blank"
          className="flex items-center gap-1.5 text-zinc-600 hover:text-zinc-400 transition-colors text-sm border border-white/5 rounded-lg px-3 py-1.5 hover:border-white/10 shrink-0 sm:ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          View on GitHub
        </a>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Cryptos', value: '4' },
          { label: 'Years of Data', value: '5Y' },
          { label: 'Visualizations', value: '10' },
          { label: 'Key Insights', value: '10' },
        ].map(m => (
          <div key={m.label} className="bg-white/[0.03] rounded-xl p-3 flex flex-col gap-1">
            <span className="text-zinc-500 text-xs">{m.label}</span>
            <span className="text-zinc-200 text-2xl font-light" style={{fontFamily: 'Georgia, serif'}}>{m.value}</span>
          </div>
        ))}
      </div>

      {/* Chart Gallery */}
      <div className="flex flex-col gap-3">
        {/* Main chart display */}
        <div
          className="relative rounded-xl overflow-hidden bg-black/20 cursor-zoom-in border border-white/5 group"
          onClick={() => setLightbox(true)}
        >
          <img
            src={`/charts/${charts[selected].file}`}
            alt={charts[selected].label}
            className="w-full object-contain max-h-72"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-200 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/70 text-zinc-200 text-sm px-4 py-2 rounded-xl backdrop-blur-sm flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>
              Click to expand
            </div>
          </div>
          <div className="absolute bottom-2 right-2 bg-black/60 text-zinc-400 text-xs px-2 py-1 rounded-md backdrop-blur-sm">
            {charts[selected].label}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="thumb-scroll flex gap-2 overflow-x-auto pb-2" style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#2a2a2a transparent',
        }}>
          {charts.map((c, i) => (
            <button
              key={c.file}
              onClick={() => setSelected(i)}
              className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden border transition-all ${
                selected === i ? 'border-zinc-500' : 'border-white/5 opacity-50 hover:opacity-80'
              }`}
            >
              <img src={`/charts/${c.file}`} alt={c.label} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-2 text-sm text-zinc-600">
        {['Price History & Events', 'Correlation Heatmap', 'Volatility Clustering', 'Technical Indicators', 'Return Distribution', 'Market Regime Detection', 'Volume & OBV', 'Monthly Seasonality', 'Max Drawdown', 'Risk-Return Scatter'].map(f => (
          <span key={f} className="border border-white/5 rounded-md px-2 py-1">{f}</span>
        ))}
      </div>

      {/* Tech stack */}
      <div className="flex items-center gap-2">
        <span className="text-zinc-700 text-sm">Stack:</span>
        <div className="flex gap-2 flex-wrap">
          {['Python 3.10', 'yfinance', 'Pandas', 'Matplotlib', 'Seaborn', 'SciPy', 'Jupyter'].map(t => (
            <span key={t} className="text-zinc-500 text-sm bg-white/[0.03] rounded px-2 py-0.5">{t}</span>
          ))}
        </div>
      </div>

      {/* README */}
      {open && (
        <div className="border-t border-white/5 pt-4">
          <div className="markdown-body" style={{ backgroundColor: 'transparent', fontFamily: 'Georgia, serif', fontSize: '15px' }}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{readme}</ReactMarkdown>
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

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightbox(false)}
        >
          <img
            src={`/charts/${charts[selected].file}`}
            alt={charts[selected].label}
            className="max-w-full max-h-full object-contain rounded-xl"
          />
          <button className="absolute top-4 right-4 text-zinc-400 hover:text-white text-2xl">✕</button>
        </div>
      )}
    </motion.div>
  );
}