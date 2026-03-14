'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import 'github-markdown-css/github-markdown-dark.css';
import { motion } from 'framer-motion';

export default function ProjectCard9() {
  const [open, setOpen] = useState(false);
  const [readme, setReadme] = useState('');

  useEffect(() => {
    fetch('/readme/README9.md')
      .then(res => res.text())
      .then(text => setReadme(text));
  }, []);

  const accent = '#9945FF';
  const accentMid = 'rgba(153,69,255,0.15)';
  const accentBorder = 'rgba(153,69,255,0.25)';

  return (
    <motion.div
      className="rounded-2xl p-6 flex flex-col gap-4"
      style={{
        background: 'linear-gradient(135deg, #0d0a1a 0%, #110d20 50%, #0a0814 100%)',
        border: `1px solid ${accentBorder}`,
      }}
      whileHover={{
        y: -4,
        boxShadow: `0 20px 40px rgba(153,69,255,0.15), 0 0 0 1px rgba(153,69,255,0.3)`,
      }}
      transition={{ duration: 0.25 }}
    >
      {/* Top row */}
      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-0 justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            {['Rust', 'Solana', 'CLI Tool'].map(b => (
              <span key={b} className="text-xs px-2 py-0.5 rounded-full font-mono font-medium"
                style={{background: accentMid, border: `1px solid ${accentBorder}`, color: '#c084fc'}}>
                {b}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-medium font-mono" style={{color: '#e9d5ff'}}>
            Solana Wallet Tracker
          </h3>
          <p className="text-base font-mono" style={{color: 'rgba(192,132,252,0.6)'}}>
            Real-time SOL transaction monitor built with Rust — no third-party SDK at runtime
          </p>
        </div>
        <a href="https://github.com/roybeey0/solana-wallet-tracker" target="_blank"
          className="flex items-center gap-1.5 text-sm rounded-lg px-3 py-1.5 shrink-0 sm:ml-4 transition-colors font-mono"
          style={{color: '#c084fc', border: `1px solid ${accentBorder}`, background: accentMid}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          View on GitHub
        </a>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Language', value: 'Rust', sub: '1.94.0' },
          { label: 'Network', value: 'Solana', sub: 'Mainnet + Devnet' },
          { label: 'TX Types', value: '3', sub: 'SOL / SPL / Program' },
          { label: 'Output', value: 'CSV', sub: '+ CLI + Charts' },
        ].map(m => (
          <div key={m.label} className="rounded-xl p-3 flex flex-col gap-1"
            style={{background: accentMid, border: `1px solid ${accentBorder}`}}>
            <span className="text-xs font-mono" style={{color: 'rgba(192,132,252,0.5)'}}>{m.label}</span>
            <span className="text-2xl font-light font-mono" style={{color: '#e9d5ff'}}>{m.value}</span>
            <span className="text-xs font-mono" style={{color: 'rgba(192,132,252,0.5)'}}>{m.sub}</span>
          </div>
        ))}
      </div>

      {/* CLI Demo */}
      <div className="rounded-xl p-4 font-mono text-xs leading-relaxed overflow-x-auto"
        style={{background: 'rgba(0,0,0,0.4)', border: `1px solid ${accentBorder}`}}>
        <div className="mb-2" style={{color: accent}}>$ cargo run -- vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg --limit 10</div>
        <div style={{color: '#a78bfa'}}>  SUMMARY</div>
        <div style={{color: 'rgba(192,132,252,0.7)'}}>  Wallet        : vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg</div>
        <div style={{color: 'rgba(192,132,252,0.7)'}}>  Total Txns    : 10</div>
        <div style={{color: 'rgba(192,132,252,0.7)'}}>  Status        : <span style={{color:'#4ade80'}}>9 SUCCESS</span>  |  <span style={{color:'#f87171'}}>1 FAILED</span></div>
        <div style={{color: 'rgba(192,132,252,0.7)'}}>  Total IN      : <span style={{color:'#4ade80'}}>4.015860 SOL</span></div>
        <div style={{color: 'rgba(192,132,252,0.7)'}}>  Net           : <span style={{color:'#4ade80'}}>+4.015860 SOL</span></div>
        <div style={{color: 'rgba(192,132,252,0.7)'}}>  Total Fees    : 0.000056 SOL</div>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-2 text-sm">
        {['Balance Fetch', 'TX History', 'SOL Transfer', 'SPL Token', 'CSV Export', 'Python Charts', 'Async/Await', 'Custom RPC', 'Rate Limiting'].map(f => (
          <span key={f} className="rounded-md px-2 py-1 font-mono text-xs"
            style={{color: '#c084fc', border: `1px solid ${accentBorder}`, background: accentMid}}>
            {f}
          </span>
        ))}
      </div>

      {/* Tech stack */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm font-mono" style={{color: 'rgba(192,132,252,0.4)'}}>Stack:</span>
        {['Rust', 'reqwest', 'tokio', 'serde_json', 'csv', 'colored', 'Python', 'matplotlib'].map(t => (
          <span key={t} className="text-xs rounded px-2 py-0.5 font-mono"
            style={{color: '#c084fc', background: 'rgba(153,69,255,0.1)'}}>
            {t}
          </span>
        ))}
      </div>

      {/* README */}
      {open && (
        <div className="border-t pt-4" style={{borderColor: accentBorder}}>
          <div className="markdown-body" style={{backgroundColor: 'transparent', fontSize: '15px', fontFamily: 'monospace'}}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                div: ({node, ...props}: any) => {
                  const align = node?.properties?.align;
                  if (align === 'center') return <div style={{textAlign: 'center'}} {...props} />;
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
        className="flex items-center gap-1.5 text-sm w-fit rounded-lg px-3 py-1.5 transition-colors font-mono"
        style={{color: '#c084fc', border: `1px solid ${accentBorder}`, background: accentMid}}
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