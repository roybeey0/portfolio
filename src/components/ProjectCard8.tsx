'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import 'github-markdown-css/github-markdown-dark.css';
import { motion } from 'framer-motion';

export default function ProjectCard8() {
  const [open, setOpen] = useState(false);
  const [readme, setReadme] = useState('');
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    fetch('/readme/README8.md')
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
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs px-2 py-0.5 rounded-full font-medium text-zinc-400"
              style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)'}}>
              🧠 AI Research
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full font-medium text-zinc-400"
              style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)'}}>
              Deep Learning
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full font-medium text-zinc-400"
              style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)'}}>
              NumPy Only
            </span>
          </div>
          <h3 className="text-xl font-medium text-zinc-300" style={{fontFamily: 'Georgia, serif'}}>
            Neural Network from Scratch — XOR & MNIST
          </h3>
          <p className="text-base text-zinc-500">
            Pure NumPy neural network — forward pass, backprop, and training implemented from first principles
          </p>
        </div>
        <a href="https://github.com/roybeey0/neural-network-scratch" target="_blank"
          className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 rounded-lg px-3 py-1.5 shrink-0 sm:ml-4 transition-colors border border-white/5 hover:border-white/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          View on GitHub
        </a>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'MNIST Accuracy', value: '98.43%', sub: 'Test set' },
          { label: 'XOR Accuracy', value: '100%', sub: 'Perfect solve' },
          { label: 'Training Time', value: '1.8min', sub: 'CPU only' },
          { label: 'Parameters', value: '234K', sub: 'Pure NumPy' },
        ].map(m => (
          <div key={m.label} className="rounded-xl p-3 flex flex-col gap-1 bg-white/[0.03] border border-white/5">
            <span className="text-xs text-zinc-600">{m.label}</span>
            <span className="text-2xl font-light text-zinc-300" style={{fontFamily: 'Georgia, serif'}}>{m.value}</span>
            <span className="text-xs text-zinc-600">{m.sub}</span>
          </div>
        ))}
      </div>

      {/* Chart Gallery */}
      <div className="flex flex-col gap-3">
        {/* Chart */}
        <div
          className="relative rounded-xl overflow-hidden cursor-zoom-in group bg-black/30 border border-white/5"
          onClick={() => setLightbox(true)}
        >
          <img
            src="/nn_charts/06_per_class_accuracy.png"
            alt="Per Class Accuracy"
            className="w-full object-contain max-h-72"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm px-4 py-2 rounded-xl backdrop-blur-sm items-center gap-2 bg-black/70 text-zinc-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>
              Click to expand
            </div>
            <div className="md:hidden absolute top-2 left-2 text-xs px-2 py-1 rounded-md backdrop-blur-sm flex items-center gap-1.5 bg-black/70 text-zinc-300">
             Tap to expand
            </div>
          </div>
          <div className="absolute bottom-2 right-2 text-xs px-2 py-1 rounded-md backdrop-blur-sm bg-black/60 text-zinc-400">
            Per Class Accuracy
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-2 text-sm">
        {['Backpropagation', 'XOR Problem', 'MNIST Classification', 'SGD + Momentum', 'Dropout', 'He Initialisation', 'ReLU + Softmax', 'No ML Libraries', 'Decision Boundary'].map(f => (
          <span key={f} className="rounded-md px-2 py-1 text-zinc-500 border border-white/5">
            {f}
          </span>
        ))}
      </div>

      {/* Tech stack */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm text-zinc-600">Stack:</span>
        {['Python 3.10', 'NumPy', 'Matplotlib', 'Seaborn', 'MNIST Dataset'].map(t => (
          <span key={t} className="text-sm rounded px-2 py-0.5 text-zinc-400 bg-white/[0.04]">
            {t}
          </span>
        ))}
      </div>

      {/* README */}
      {open && (
        <div className="border-t border-white/5 pt-4">
          <div className="markdown-body" style={{backgroundColor: 'transparent', fontSize: '15px'}}>
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
        className="flex items-center gap-1.5 text-sm w-fit text-zinc-500 hover:text-zinc-300 rounded-lg px-3 py-1.5 transition-colors border border-white/5 hover:border-white/10"
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
            src="/nn_charts/06_per_class_accuracy.png"
            alt="Per Class Accuracy"
            className="max-w-full max-h-full object-contain rounded-xl"
            />
            <button className="absolute top-4 right-4 text-2xl text-zinc-400">✕</button>
        </div>
        )}
    </motion.div>
  );
}