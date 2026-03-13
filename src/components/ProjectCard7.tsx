'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown-dark.css';
import { motion } from 'framer-motion';
import rehypeRaw from 'rehype-raw';

const charts = [
  { file: '01_whale_activity_over_time.png', label: 'Whale Activity Over Time' },
  { file: '02_top_whales_by_volume.png', label: 'Top Whales by Volume' },
  { file: '03_transaction_size_distribution.png', label: 'Transaction Size Distribution' },
  { file: '04_whale_vs_retail_comparison.png', label: 'Whale vs Retail' },
  { file: '05_whale_flow_network.png', label: 'Whale Flow Network' },
  { file: '06_activity_heatmap.png', label: 'Activity Heatmap' },
];

export default function ProjectCard7() {
  const [open, setOpen] = useState(false);
  const [readme, setReadme] = useState('');
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    fetch('/readme/README7.md')
      .then(res => res.text())
      .then(text => setReadme(text));
  }, []);

  return (
    <motion.div
      className="rounded-2xl p-6 flex flex-col gap-4 transition-colors"
      style={{
        background: 'linear-gradient(135deg, #0a0d1a 0%, #0d1020 50%, #080a14 100%)',
        border: '1px solid rgba(98,126,234,0.15)',
      }}
      whileHover={{
        y: -4,
        boxShadow: '0 20px 40px rgba(98,126,234,0.15), 0 0 0 1px rgba(98,126,234,0.25)',
      }}
      transition={{ duration: 0.25 }}
    >
      {/* Top row */}
      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-0 justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{background: 'rgba(98,126,234,0.15)', color: '#a5b4fc', border: '1px solid rgba(98,126,234,0.3)', fontFamily: 'monospace'}}>
               Whale Tracker
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{background: 'rgba(98,126,234,0.1)', color: '#c7d2fe', border: '1px solid rgba(98,126,234,0.2)', fontFamily: 'monospace'}}>
              On-chain
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{background: 'rgba(98,126,234,0.1)', color: '#c7d2fe', border: '1px solid rgba(98,126,234,0.2)', fontFamily: 'monospace'}}>
              ERC-20
            </span>
          </div>
          <h3 className="text-xl font-medium" style={{fontFamily: 'monospace', color: '#e2e8f0', letterSpacing: '0.02em'}}>
            On-chain Whale Tracker
          </h3>
          <p style={{color: '#64748b', fontFamily: 'monospace'}} className="text-base">
            Monitor large Ethereum wallet movements & visualize whale activity from on-chain data
          </p>
        </div>
        <a href="https://github.com/roybeey0/onchain-whale-tracker" target="_blank"
          className="flex items-center gap-1.5 text-sm rounded-lg px-3 py-1.5 shrink-0 sm:ml-4 transition-colors"
          style={{color: '#94a3b8', border: '1px solid rgba(98,126,234,0.2)', background: 'rgba(98,126,234,0.05)', fontFamily: 'monospace'}}
          onMouseEnter={e => (e.currentTarget.style.color = '#a5b4fc')}
          onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          View on GitHub
        </a>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Transactions', value: '1,247', sub: 'Total fetched' },
          { label: 'Whales', value: '83', sub: '6.7% of all txs' },
          { label: 'Charts', value: '6', sub: 'Dark theme viz' },
          { label: 'Threshold', value: '$100K', sub: 'Whale filter' },
        ].map(m => (
          <div key={m.label} className="rounded-xl p-3 flex flex-col gap-1"
            style={{background: 'rgba(98,126,234,0.05)', border: '1px solid rgba(98,126,234,0.1)'}}>
            <span className="text-xs" style={{color: '#627EEA', fontFamily: 'monospace'}}>{m.label}</span>
            <span className="text-2xl font-light" style={{fontFamily: 'monospace', color: '#a5b4fc'}}>{m.value}</span>
            <span className="text-xs" style={{color: '#475569', fontFamily: 'monospace'}}>{m.sub}</span>
          </div>
        ))}
      </div>

      {/* Chart Gallery */}
      <div className="flex flex-col gap-3">
        <div
          className="relative rounded-xl overflow-hidden cursor-zoom-in group"
          style={{background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(98,126,234,0.1)'}}
          onClick={() => setLightbox(true)}
        >
          <img
            src={`/whale_charts/${charts[selected].file}`}
            alt={charts[selected].label}
            className="w-full object-contain max-h-72"
          />
          <div className="absolute inset-0 transition-all duration-200 flex items-center justify-center">
            <div className="hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm px-4 py-2 rounded-xl backdrop-blur-sm items-center gap-2"
              style={{background: 'rgba(98,126,234,0.8)', color: '#e2e8f0'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>
              Click to expand
            </div>
            <div className="md:hidden absolute top-2 left-2 text-xs px-2 py-1 rounded-md backdrop-blur-sm flex items-center gap-1.5"
              style={{background: 'rgba(98,126,234,0.7)', color: '#e2e8f0'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>
              Tap to expand
            </div>
          </div>
          <div className="absolute bottom-2 right-2 text-xs px-2 py-1 rounded-md backdrop-blur-sm"
            style={{background: 'rgba(98,126,234,0.6)', color: '#e2e8f0', fontFamily: 'monospace'}}>
            {charts[selected].label}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="thumb-scroll flex gap-2 overflow-x-auto pb-2"
          style={{scrollbarWidth: 'thin', scrollbarColor: '#3730a3 transparent'}}>
          {charts.map((c, i) => (
            <button
              key={c.file}
              onClick={() => setSelected(i)}
              className="shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all"
              style={{
                border: selected === i ? '1px solid rgba(98,126,234,0.8)' : '1px solid rgba(98,126,234,0.1)',
                opacity: selected === i ? 1 : 0.5,
              }}
            >
              <img src={`/whale_charts/${c.file}`} alt={c.label} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-2 text-sm">
        {['Whale Detection', 'Live On-chain Data', 'Rich Terminal UI', 'MEGA/LARGE Alerts', 'CSV Export', 'Demo Mode', 'Etherscan API', 'CoinGecko Prices', 'CLI Interface'].map(f => (
          <span key={f} className="rounded-md px-2 py-1"
            style={{color: '#627EEA', border: '1px solid rgba(98,126,234,0.2)', background: 'rgba(98,126,234,0.05)', fontFamily: 'monospace'}}>
            {f}
          </span>
        ))}
      </div>

      {/* Tech stack */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm" style={{color: '#334155', fontFamily: 'monospace'}}>Stack:</span>
        {['Python 3.10', 'Etherscan API', 'CoinGecko API', 'Pandas', 'Matplotlib', 'Seaborn', 'Rich'].map(t => (
          <span key={t} className="text-sm rounded px-2 py-0.5"
            style={{color: '#a5b4fc', background: 'rgba(98,126,234,0.08)', fontFamily: 'monospace'}}>
            {t}
          </span>
        ))}
      </div>

      {/* README */}
      {open && (
        <div className="border-t pt-4" style={{borderColor: 'rgba(98,126,234,0.15)'}}>
          <div className="markdown-body" style={{backgroundColor: 'transparent', fontFamily: 'monospace', fontSize: '14px', letterSpacing: '0.02em'}}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                div: ({node, ...props}: any) => {
                  const align = node?.properties?.align;
                  if (align === 'center') {
                    return <div style={{textAlign: 'center'}} {...props} />;
                  }
                  return <div {...props} />;
                },
                p: ({node, children, ...props}: any) => {
                  const align = node?.properties?.align;
                  const hasOnlyImages = node?.children?.every(
                    (child: any) => child.tagName === 'img' || (child.type === 'text' && child.value.trim() === '')
                  );
                  if (align === 'center' || hasOnlyImages) {
                    return <p style={{textAlign: 'center', display: 'block'}} {...props}>{children}</p>;
                  }
                  return <p {...props}>{children}</p>;
                }
              }}
               >
                 {readme}
            </ReactMarkdown>
          </div>
        </div>
      )}

      {/* Read More Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm w-fit rounded-lg px-3 py-1.5 transition-colors"
        style={{color: '#627EEA', border: '1px solid rgba(98,126,234,0.2)', background: 'rgba(98,126,234,0.05)', fontFamily: 'monospace'}}
        onMouseEnter={e => (e.currentTarget.style.color = '#a5b4fc')}
        onMouseLeave={e => (e.currentTarget.style.color = '#627EEA')}
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          style={{background: 'rgba(0,0,0,0.92)'}}
          onClick={() => setLightbox(false)}
        >
          <img
            src={`/whale_charts/${charts[selected].file}`}
            alt={charts[selected].label}
            className="max-w-full max-h-full object-contain rounded-xl"
          />
          <button className="absolute top-4 right-4 text-2xl" style={{color: '#a5b4fc'}}>✕</button>
        </div>
      )}
    </motion.div>
  );
}