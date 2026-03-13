'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown-dark.css';
import { motion } from 'framer-motion';
import rehypeRaw from 'rehype-raw';

export default function ProjectCard5() {
  const [open, setOpen] = useState(false);
  const [readme, setReadme] = useState('');

  useEffect(() => {
    fetch('/readme/README5.md')
      .then(res => res.text())
      .then(text => setReadme(text));
  }, []);

  return (
    <motion.div
      className="rounded-2xl p-6 flex flex-col gap-4 transition-colors"
      style={{
        background: 'linear-gradient(135deg, #1a0d14 0%, #1f0f18 50%, #14080f 100%)',
        border: '1px solid rgba(236,72,153,0.15)',
      }}
      whileHover={{
        y: -4,
        boxShadow: '0 20px 40px rgba(236,72,153,0.15), 0 0 0 1px rgba(236,72,153,0.25)',
      }}
      transition={{ duration: 0.25 }}
    >
      {/* Top row */}
      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-0 justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{background: 'rgba(236,72,153,0.15)', color: '#f9a8d4', border: '1px solid rgba(236,72,153,0.3)', fontFamily: 'monospace'}}>
              Web3
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{background: 'rgba(236,72,153,0.1)', color: '#fbcfe8', border: '1px solid rgba(236,72,153,0.2)', fontFamily: 'monospace'}}>
              Blockchain
            </span>
          </div>
          <h3 className="text-xl font-medium" style={{fontFamily: 'monospace', color: '#e2e8f0', letterSpacing: '0.02em'}}>
            Python Blockchain Implementation + Wallet Analytics
          </h3>
          <p style={{color: '#64748b', fontFamily: 'monospace'}} className="text-base">
            Blockchain from scratch & Ethereum on-chain wallet data analytics
          </p>
        </div>
        <a href="https://github.com/roybeey0/python-blockchain-analytics" target="_blank"
          className="flex items-center gap-1.5 text-sm rounded-lg px-3 py-1.5 shrink-0 sm:ml-4 transition-colors"
          style={{color: '#94a3b8', border: '1px solid rgba(236,72,153,0.2)', background: 'rgba(236,72,153,0.05)', fontFamily: 'monospace'}}
          onMouseEnter={e => (e.currentTarget.style.color = '#f9a8d4')}
          onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          View on GitHub
        </a>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Part', value: '2', sub: 'Blockchain + Analytics' },
          { label: 'Consensus', value: 'PoW', sub: 'SHA-256' },
          { label: 'Visualizations', value: '5', sub: 'Dark theme charts' },
          { label: 'API', value: 'ETH', sub: 'Etherscan' },
        ].map(m => (
          <div key={m.label} className="rounded-xl p-3 flex flex-col gap-1"
            style={{background: 'rgba(236,72,153,0.05)', border: '1px solid rgba(236,72,153,0.1)'}}>
            <span className="text-xs" style={{color: '#ec4899', fontFamily: 'monospace'}}>{m.label}</span>
            <span className="text-2xl font-light" style={{fontFamily: 'monospace', color: '#f9a8d4'}}>{m.value}</span>
            <span className="text-xs" style={{color: '#475569', fontFamily: 'monospace'}}>{m.sub}</span>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-2 text-sm">
        {['SHA-256 Hashing', 'Proof of Work', 'Merkle Tree', 'Chain Validation', 'Tamper Detection', 'Etherscan API', 'Gas Analytics', 'Wallet Tracking', 'On-chain Data'].map(f => (
          <span key={f} className="rounded-md px-2 py-1"
            style={{color: '#ec4899', border: '1px solid rgba(236,72,153,0.2)', background: 'rgba(236,72,153,0.05)', fontFamily: 'monospace'}}>
            {f}
          </span>
        ))}
      </div>

      {/* Tech stack */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm" style={{color: '#334155'}}>Stack:</span>
        {['Python 3.10', 'hashlib', 'Etherscan API', 'Pandas', 'Matplotlib', 'Seaborn', 'Requests'].map(t => (
          <span key={t} className="text-sm rounded px-2 py-0.5"
            style={{color: '#f9a8d4', background: 'rgba(236,72,153,0.08)', fontFamily: 'monospace'}}>
            {t}
          </span>
        ))}
      </div>

      {/* README */}
      {open && (
        <div className="border-t pt-4" style={{borderColor: 'rgba(236,72,153,0.15)'}}>
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
        style={{color: '#ec4899', border: '1px solid rgba(236,72,153,0.2)', background: 'rgba(236,72,153,0.05)', fontFamily: 'monospace'}}
        onMouseEnter={e => (e.currentTarget.style.color = '#f9a8d4')}
        onMouseLeave={e => (e.currentTarget.style.color = '#ec4899')}
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