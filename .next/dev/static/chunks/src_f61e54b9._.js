(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ProjectCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rehype-raw/lib/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function ProjectCard() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "77c9e5132b0193904af112ac60f59ef975353e0b09bd582317429319c5e65e2e") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "77c9e5132b0193904af112ac60f59ef975353e0b09bd582317429319c5e65e2e";
    }
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [readme, setReadme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ProjectCard[useEffect()]": ()=>{
                fetch("/readme/README.md").then(_ProjectCardUseEffectAnonymous).then({
                    "ProjectCard[useEffect() > (anonymous)()]": (text)=>setReadme(text)
                }["ProjectCard[useEffect() > (anonymous)()]"]);
            }
        })["ProjectCard[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            y: -4,
            boxShadow: "0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)",
            transition: {
                duration: 0.3,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            }
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-zinc-300 text-xl font-medium",
                    style: {
                        fontFamily: "Georgia, serif"
                    },
                    children: "OKX Futures Automated Trading Bot - Demo Trading"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard.tsx",
                    lineNumber: 54,
                    columnNumber: 47
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-zinc-600 text-base",
                    children: "Automated crypto futures trading bot running 24/7 on Ubuntu VPS"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard.tsx",
                    lineNumber: 56,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row items-start gap-3 sm:gap-0 justify-between",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://github.com/roybeey0/trading_bot",
                    target: "_blank",
                    className: "flex items-center gap-1.5 text-zinc-600 hover:text-zinc-400 transition-colors text-sm border border-white/5 rounded-lg px-3 py-1.5 hover:border-white/10 shrink-0 ml-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "13",
                            height: "13",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCard.tsx",
                                    lineNumber: 63,
                                    columnNumber: 525
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M9 18c-4.51 2-5-2-7-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCard.tsx",
                                    lineNumber: 63,
                                    columnNumber: 786
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectCard.tsx",
                            lineNumber: 63,
                            columnNumber: 345
                        }, this),
                        "View on GitHub"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectCard.tsx",
                    lineNumber: 63,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2 text-sm text-zinc-600",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "border border-white/5 rounded-md px-2 py-1",
                    children: "Multi Timeframe Engine (4H/1H/15M)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard.tsx",
                    lineNumber: 70,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "border border-white/5 rounded-md px-2 py-1",
                    children: "Market Regime Detection"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard.tsx",
                    lineNumber: 70,
                    columnNumber: 172
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "border border-white/5 rounded-md px-2 py-1",
                    children: "Institutional Risk Framework"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard.tsx",
                    lineNumber: 70,
                    columnNumber: 263
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "border border-white/5 rounded-md px-2 py-1",
                    children: "Trailing Stop Loss"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard.tsx",
                    lineNumber: 70,
                    columnNumber: 359
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "border border-white/5 rounded-md px-2 py-1",
                    children: "Auto Restart on Crash"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard.tsx",
                    lineNumber: 70,
                    columnNumber: 445
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "border border-white/5 rounded-md px-2 py-1",
                    children: "Realtime Dashboard"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard.tsx",
                    lineNumber: 70,
                    columnNumber: 534
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-zinc-700 text-sm",
            children: "Stack:"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-zinc-500 text-sm bg-white/[0.03] rounded px-2 py-0.5",
                            children: "Python 3.12"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard.tsx",
                            lineNumber: 84,
                            columnNumber: 93
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-zinc-500 text-sm bg-white/[0.03] rounded px-2 py-0.5",
                            children: "OKX API"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard.tsx",
                            lineNumber: 84,
                            columnNumber: 187
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-zinc-500 text-sm bg-white/[0.03] rounded px-2 py-0.5",
                            children: "WebSocket"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard.tsx",
                            lineNumber: 84,
                            columnNumber: 277
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-zinc-500 text-sm bg-white/[0.03] rounded px-2 py-0.5",
                            children: "Ubuntu VPS"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard.tsx",
                            lineNumber: 84,
                            columnNumber: 369
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-zinc-500 text-sm bg-white/[0.03] rounded px-2 py-0.5",
                            children: "BTC · ETH · SOL · XAU · BNB · SUI"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard.tsx",
                            lineNumber: 84,
                            columnNumber: 462
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectCard.tsx",
                    lineNumber: 84,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] !== open || $[10] !== readme) {
        t8 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-white/5 pt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "markdown-body",
                style: {
                    backgroundColor: "transparent",
                    fontFamily: "Georgia, serif",
                    fontSize: "15px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                    remarkPlugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                    ],
                    rehypePlugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                    ],
                    components: {
                        div: _temp,
                        p: _temp2
                    },
                    children: readme
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard.tsx",
                    lineNumber: 95,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard.tsx",
                lineNumber: 91,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 91,
            columnNumber: 18
        }, this);
        $[9] = open;
        $[10] = readme;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== open) {
        t9 = ({
            "ProjectCard[<button>.onClick]": ()=>setOpen(!open)
        })["ProjectCard[<button>.onClick]"];
        $[12] = open;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    const t10 = open ? "rotate(180deg)" : "rotate(0deg)";
    let t11;
    if ($[14] !== t10) {
        t11 = {
            transform: t10,
            transition: "transform 0.2s"
        };
        $[14] = t10;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m6 9 6 6 6-6"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    if ($[17] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: t11,
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[17] = t11;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    const t14 = open ? "Show Less" : "Read More";
    let t15;
    if ($[19] !== t13 || $[20] !== t14 || $[21] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t9,
            className: "flex items-center gap-1.5 text-zinc-500 hover:text-zinc-300 transition-colors text-sm w-fit border border-white/5 rounded-lg px-3 py-1.5 hover:border-white/10",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[19] = t13;
        $[20] = t14;
        $[21] = t9;
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    let t16;
    if ($[23] !== t15 || $[24] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "rounded-2xl bg-[#141414] border border-white/5 p-6 flex flex-col gap-4 transition-colors",
            whileHover: t2,
            children: [
                t4,
                t5,
                t7,
                t8,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[23] = t15;
        $[24] = t8;
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    return t16;
}
_s(ProjectCard, "3f6O0xnOUgwkbcljmHoiyGkZpBY=");
_c = ProjectCard;
function _temp2(t0) {
    const { node: node_0, children, ...props_0 } = t0;
    const align_0 = node_0?.properties?.align;
    const hasOnlyImages = node_0?.children?.every(_ProjectCardAnonymousAnonymous);
    if (align_0 === "center" || hasOnlyImages) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                textAlign: "center",
                display: "block"
            },
            ...props_0,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 173,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ...props_0,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectCard.tsx",
        lineNumber: 178,
        columnNumber: 10
    }, this);
}
function _ProjectCardAnonymousAnonymous(child) {
    return child.tagName === "img" || child.type === "text" && child.value.trim() === "";
}
function _temp(t0) {
    const { node, ...props } = t0;
    const align = node?.properties?.align;
    if (align === "center") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: "center"
            },
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 190,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectCard.tsx",
        lineNumber: 194,
        columnNumber: 10
    }, this);
}
function _ProjectCardUseEffectAnonymous(res) {
    return res.text();
}
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectCard2.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rehype-raw/lib/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function ProjectCard2() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "e67c189384d5fec9f7cb79593f3e1ef3e1076857ef02288e0e070ddaba0086e7") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e67c189384d5fec9f7cb79593f3e1ef3e1076857ef02288e0e070ddaba0086e7";
    }
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [readme, setReadme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ProjectCard2[useEffect()]": ()=>{
                fetch("/readme/README2.md").then(_ProjectCard2UseEffectAnonymous).then({
                    "ProjectCard2[useEffect() > (anonymous)()]": (text)=>setReadme(text)
                }["ProjectCard2[useEffect() > (anonymous)()]"]);
            }
        })["ProjectCard2[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            y: -4,
            boxShadow: "0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)",
            transition: {
                duration: 0.3,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            }
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-zinc-300 text-xl font-medium",
                    style: {
                        fontFamily: "Georgia, serif"
                    },
                    children: "CodeT5 Python Code Generator"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard2.tsx",
                    lineNumber: 54,
                    columnNumber: 47
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-zinc-600 text-base",
                    children: "Fine-tuned CodeT5 Transformer for Python code generation from natural language docstrings"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard2.tsx",
                    lineNumber: 56,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard2.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://huggingface.co/roybeey/codet5-python-codegen",
            target: "_blank",
            className: "flex items-center gap-1.5 text-zinc-600 hover:text-zinc-400 transition-colors text-sm border border-white/5 rounded-lg px-3 py-1.5 hover:border-white/10",
            children: "HuggingFace"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard2.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row items-start gap-3 sm:gap-0 justify-between",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 shrink-0 sm:ml-4",
                    children: [
                        t4,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://github.com/roybeey0/codet5-python-codegen",
                            target: "_blank",
                            className: "flex items-center gap-1.5 text-zinc-600 hover:text-zinc-400 transition-colors text-sm border border-white/5 rounded-lg px-3 py-1.5 hover:border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "13",
                                    height: "13",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectCard2.tsx",
                                            lineNumber: 70,
                                            columnNumber: 570
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M9 18c-4.51 2-5-2-7-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectCard2.tsx",
                                            lineNumber: 70,
                                            columnNumber: 831
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProjectCard2.tsx",
                                    lineNumber: 70,
                                    columnNumber: 390
                                }, this),
                                "View on GitHub"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectCard2.tsx",
                            lineNumber: 70,
                            columnNumber: 149
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectCard2.tsx",
                    lineNumber: 70,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard2.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
            children: [
                {
                    label: "BLEU-4",
                    value: "54.66"
                },
                {
                    label: "ROUGE-1",
                    value: "0.611"
                },
                {
                    label: "ROUGE-L",
                    value: "0.594"
                },
                {
                    label: "Train Loss",
                    value: "1.071"
                }
            ].map(_ProjectCard2Anonymous)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard2.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2 text-sm text-zinc-600",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "border border-white/5 rounded-md px-2 py-1",
                    children: "CodeT5 Transformer"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard2.tsx",
                    lineNumber: 96,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "border border-white/5 rounded-md px-2 py-1",
                    children: "Seq2Seq Fine-tuning"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard2.tsx",
                    lineNumber: 96,
                    columnNumber: 156
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "border border-white/5 rounded-md px-2 py-1",
                    children: "Beam Search Decoding"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard2.tsx",
                    lineNumber: 96,
                    columnNumber: 243
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "border border-white/5 rounded-md px-2 py-1",
                    children: "CodeSearchNet Dataset"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard2.tsx",
                    lineNumber: 96,
                    columnNumber: 331
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "border border-white/5 rounded-md px-2 py-1",
                    children: "Gradio Web UI"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard2.tsx",
                    lineNumber: 96,
                    columnNumber: 420
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "border border-white/5 rounded-md px-2 py-1",
                    children: "50K Training Samples"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard2.tsx",
                    lineNumber: 96,
                    columnNumber: 501
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard2.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-zinc-700 text-sm",
            children: "Stack:"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard2.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-zinc-500 text-sm bg-white/[0.03] rounded px-2 py-0.5",
                            children: "Python 3.10"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard2.tsx",
                            lineNumber: 110,
                            columnNumber: 93
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-zinc-500 text-sm bg-white/[0.03] rounded px-2 py-0.5",
                            children: "PyTorch"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard2.tsx",
                            lineNumber: 110,
                            columnNumber: 187
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-zinc-500 text-sm bg-white/[0.03] rounded px-2 py-0.5",
                            children: "HuggingFace"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard2.tsx",
                            lineNumber: 110,
                            columnNumber: 277
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-zinc-500 text-sm bg-white/[0.03] rounded px-2 py-0.5",
                            children: "Gradio"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard2.tsx",
                            lineNumber: 110,
                            columnNumber: 371
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-zinc-500 text-sm bg-white/[0.03] rounded px-2 py-0.5",
                            children: "Kaggle P100"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard2.tsx",
                            lineNumber: 110,
                            columnNumber: 460
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectCard2.tsx",
                    lineNumber: 110,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard2.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] !== open || $[12] !== readme) {
        t10 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-white/5 pt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "markdown-body",
                style: {
                    backgroundColor: "transparent",
                    fontSize: "15px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                    remarkPlugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                    ],
                    rehypePlugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                    ],
                    components: {
                        div: _temp,
                        p: _temp2
                    },
                    children: readme
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard2.tsx",
                    lineNumber: 120,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard2.tsx",
                lineNumber: 117,
                columnNumber: 65
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard2.tsx",
            lineNumber: 117,
            columnNumber: 19
        }, this);
        $[11] = open;
        $[12] = readme;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== open) {
        t11 = ({
            "ProjectCard2[<button>.onClick]": ()=>setOpen(!open)
        })["ProjectCard2[<button>.onClick]"];
        $[14] = open;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    const t12 = open ? "rotate(180deg)" : "rotate(0deg)";
    let t13;
    if ($[16] !== t12) {
        t13 = {
            transform: t12,
            transition: "transform 0.2s"
        };
        $[16] = t12;
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    let t14;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m6 9 6 6 6-6"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard2.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    let t15;
    if ($[19] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: t13,
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard2.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[19] = t13;
        $[20] = t15;
    } else {
        t15 = $[20];
    }
    const t16 = open ? "Show Less" : "Read More";
    let t17;
    if ($[21] !== t11 || $[22] !== t15 || $[23] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t11,
            className: "flex items-center gap-1.5 text-zinc-500 hover:text-zinc-300 transition-colors text-sm w-fit border border-white/5 rounded-lg px-3 py-1.5 hover:border-white/10",
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard2.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[21] = t11;
        $[22] = t15;
        $[23] = t16;
        $[24] = t17;
    } else {
        t17 = $[24];
    }
    let t18;
    if ($[25] !== t10 || $[26] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "rounded-2xl bg-[#141414] border border-white/5 p-6 flex flex-col gap-4 transition-colors",
            whileHover: t2,
            children: [
                t5,
                t6,
                t7,
                t9,
                t10,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard2.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t17;
        $[27] = t18;
    } else {
        t18 = $[27];
    }
    return t18;
}
_s(ProjectCard2, "3f6O0xnOUgwkbcljmHoiyGkZpBY=");
_c = ProjectCard2;
function _temp2(t0) {
    const { node: node_0, children, ...props_0 } = t0;
    const align_0 = node_0?.properties?.align;
    const hasOnlyImages = node_0?.children?.every(_ProjectCard2AnonymousAnonymous);
    if (align_0 === "center" || hasOnlyImages) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                textAlign: "center",
                display: "block"
            },
            ...props_0,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard2.tsx",
            lineNumber: 198,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ...props_0,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectCard2.tsx",
        lineNumber: 203,
        columnNumber: 10
    }, this);
}
function _ProjectCard2AnonymousAnonymous(child) {
    return child.tagName === "img" || child.type === "text" && child.value.trim() === "";
}
function _temp(t0) {
    const { node, ...props } = t0;
    const align = node?.properties?.align;
    if (align === "center") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: "center"
            },
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard2.tsx",
            lineNumber: 215,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectCard2.tsx",
        lineNumber: 219,
        columnNumber: 10
    }, this);
}
function _ProjectCard2Anonymous(m) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 flex flex-col gap-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-zinc-600 text-xs",
                children: m.label
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard2.tsx",
                lineNumber: 222,
                columnNumber: 120
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-zinc-300 text-lg font-light",
                style: {
                    fontFamily: "Georgia, serif"
                },
                children: m.value
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard2.tsx",
                lineNumber: 222,
                columnNumber: 176
            }, this)
        ]
    }, m.label, true, {
        fileName: "[project]/src/components/ProjectCard2.tsx",
        lineNumber: 222,
        columnNumber: 10
    }, this);
}
function _ProjectCard2UseEffectAnonymous(res) {
    return res.text();
}
var _c;
__turbopack_context__.k.register(_c, "ProjectCard2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectCard3.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rehype-raw/lib/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function ProjectCard3() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "b77f6022fd765a30f7297ff45030e9ecd44d2989f76c89c91e434d1238ba5bfa") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b77f6022fd765a30f7297ff45030e9ecd44d2989f76c89c91e434d1238ba5bfa";
    }
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [readme, setReadme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ProjectCard3[useEffect()]": ()=>{
                fetch("/readme/README3.md").then(_ProjectCard3UseEffectAnonymous).then({
                    "ProjectCard3[useEffect() > (anonymous)()]": (text)=>{
                        const fixed = text.replace(/results\//g, "/");
                        setReadme(fixed);
                    }
                }["ProjectCard3[useEffect() > (anonymous)()]"]);
            }
        })["ProjectCard3[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            y: -4,
            boxShadow: "0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)",
            transition: {
                duration: 0.3,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            }
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-zinc-300 text-xl font-medium",
                    style: {
                        fontFamily: "Georgia, serif"
                    },
                    children: "Genetic Algorithm for Trading Strategy Optimization"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard3.tsx",
                    lineNumber: 57,
                    columnNumber: 47
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-zinc-600 text-base",
                    children: "Automatically discover optimal crypto trading parameters using evolutionary computation"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard3.tsx",
                    lineNumber: 59,
                    columnNumber: 66
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard3.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row items-start gap-3 sm:gap-0 justify-between",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://github.com/roybeey0/ga-trading-optimizer",
                    target: "_blank",
                    className: "flex items-center gap-1.5 text-zinc-600 hover:text-zinc-400 transition-colors text-sm border border-white/5 rounded-lg px-3 py-1.5 hover:border-white/10 shrink-0 ml-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "13",
                            height: "13",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCard3.tsx",
                                    lineNumber: 66,
                                    columnNumber: 534
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M9 18c-4.51 2-5-2-7-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCard3.tsx",
                                    lineNumber: 66,
                                    columnNumber: 795
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectCard3.tsx",
                            lineNumber: 66,
                            columnNumber: 354
                        }, this),
                        "View on GitHub"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectCard3.tsx",
                    lineNumber: 66,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard3.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
            children: [
                {
                    label: "Total Return",
                    value: "+7.27%"
                },
                {
                    label: "Win Rate",
                    value: "90.9%"
                },
                {
                    label: "Sharpe Ratio",
                    value: "1.6225"
                },
                {
                    label: "Max Drawdown",
                    value: "0.81%"
                }
            ].map(_ProjectCard3Anonymous)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard3.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2 text-sm text-zinc-600",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "border border-white/5 rounded-md px-2 py-1",
                    children: "Custom GA Engine"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard3.tsx",
                    lineNumber: 92,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "border border-white/5 rounded-md px-2 py-1",
                    children: "Multi-objective Fitness"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard3.tsx",
                    lineNumber: 92,
                    columnNumber: 154
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "border border-white/5 rounded-md px-2 py-1",
                    children: "Tournament Selection"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard3.tsx",
                    lineNumber: 92,
                    columnNumber: 245
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "border border-white/5 rounded-md px-2 py-1",
                    children: "Adaptive Mutation"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard3.tsx",
                    lineNumber: 92,
                    columnNumber: 333
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "border border-white/5 rounded-md px-2 py-1",
                    children: "Custom Backtest Engine"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard3.tsx",
                    lineNumber: 92,
                    columnNumber: 418
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "border border-white/5 rounded-md px-2 py-1",
                    children: "BTC-USD 2Y Data"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard3.tsx",
                    lineNumber: 92,
                    columnNumber: 508
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard3.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-zinc-700 text-sm",
            children: "Stack:"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard3.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-zinc-500 text-sm bg-white/[0.03] rounded px-2 py-0.5",
                            children: "Python"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard3.tsx",
                            lineNumber: 106,
                            columnNumber: 93
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-zinc-500 text-sm bg-white/[0.03] rounded px-2 py-0.5",
                            children: "yfinance"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard3.tsx",
                            lineNumber: 106,
                            columnNumber: 182
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-zinc-500 text-sm bg-white/[0.03] rounded px-2 py-0.5",
                            children: "Matplotlib"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard3.tsx",
                            lineNumber: 106,
                            columnNumber: 273
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-zinc-500 text-sm bg-white/[0.03] rounded px-2 py-0.5",
                            children: "Pandas"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard3.tsx",
                            lineNumber: 106,
                            columnNumber: 366
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-zinc-500 text-sm bg-white/[0.03] rounded px-2 py-0.5",
                            children: "NumPy"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard3.tsx",
                            lineNumber: 106,
                            columnNumber: 455
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectCard3.tsx",
                    lineNumber: 106,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard3.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== open || $[11] !== readme) {
        t9 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-white/5 pt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "markdown-body",
                style: {
                    backgroundColor: "transparent",
                    fontSize: "15px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                    remarkPlugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                    ],
                    rehypePlugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                    ],
                    components: {
                        div: _temp,
                        p: _temp2
                    },
                    children: readme
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard3.tsx",
                    lineNumber: 116,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard3.tsx",
                lineNumber: 113,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard3.tsx",
            lineNumber: 113,
            columnNumber: 18
        }, this);
        $[10] = open;
        $[11] = readme;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== open) {
        t10 = ({
            "ProjectCard3[<button>.onClick]": ()=>setOpen(!open)
        })["ProjectCard3[<button>.onClick]"];
        $[13] = open;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    const t11 = open ? "rotate(180deg)" : "rotate(0deg)";
    let t12;
    if ($[15] !== t11) {
        t12 = {
            transform: t11,
            transition: "transform 0.2s"
        };
        $[15] = t11;
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m6 9 6 6 6-6"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard3.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    let t14;
    if ($[18] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: t12,
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard3.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[18] = t12;
        $[19] = t14;
    } else {
        t14 = $[19];
    }
    const t15 = open ? "Show Less" : "Read More";
    let t16;
    if ($[20] !== t10 || $[21] !== t14 || $[22] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t10,
            className: "flex items-center gap-1.5 text-zinc-500 hover:text-zinc-300 transition-colors text-sm w-fit border border-white/5 rounded-lg px-3 py-1.5 hover:border-white/10",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard3.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t14;
        $[22] = t15;
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    let t17;
    if ($[24] !== t16 || $[25] !== t9) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "rounded-2xl bg-[#141414] border border-white/5 p-6 flex flex-col gap-4 transition-colors",
            whileHover: t2,
            children: [
                t4,
                t5,
                t6,
                t8,
                t9,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard3.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[24] = t16;
        $[25] = t9;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    return t17;
}
_s(ProjectCard3, "3f6O0xnOUgwkbcljmHoiyGkZpBY=");
_c = ProjectCard3;
function _temp2(t0) {
    const { node: node_0, children, ...props_0 } = t0;
    const align_0 = node_0?.properties?.align;
    const hasOnlyImages = node_0?.children?.every(_ProjectCard3AnonymousAnonymous);
    if (align_0 === "center" || hasOnlyImages) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                textAlign: "center",
                display: "block"
            },
            ...props_0,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard3.tsx",
            lineNumber: 194,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ...props_0,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectCard3.tsx",
        lineNumber: 199,
        columnNumber: 10
    }, this);
}
function _ProjectCard3AnonymousAnonymous(child) {
    return child.tagName === "img" || child.type === "text" && child.value.trim() === "";
}
function _temp(t0) {
    const { node, ...props } = t0;
    const align = node?.properties?.align;
    if (align === "center") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: "center"
            },
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard3.tsx",
            lineNumber: 211,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectCard3.tsx",
        lineNumber: 215,
        columnNumber: 10
    }, this);
}
function _ProjectCard3Anonymous(m) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 flex flex-col gap-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-zinc-600 text-xs",
                children: m.label
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard3.tsx",
                lineNumber: 218,
                columnNumber: 120
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-zinc-300 text-lg font-light",
                style: {
                    fontFamily: "Georgia, serif"
                },
                children: m.value
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard3.tsx",
                lineNumber: 218,
                columnNumber: 176
            }, this)
        ]
    }, m.label, true, {
        fileName: "[project]/src/components/ProjectCard3.tsx",
        lineNumber: 218,
        columnNumber: 10
    }, this);
}
function _ProjectCard3UseEffectAnonymous(res) {
    return res.text();
}
var _c;
__turbopack_context__.k.register(_c, "ProjectCard3");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectCard4.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rehype-raw/lib/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const charts = [
    {
        file: '01_price_history.png',
        label: 'Price History'
    },
    {
        file: '02_correlation.png',
        label: 'Correlation'
    },
    {
        file: '03_volatility.png',
        label: 'Volatility'
    },
    {
        file: '04_technical_indicators.png',
        label: 'Technical Indicators'
    },
    {
        file: '05_return_distribution.png',
        label: 'Return Distribution'
    },
    {
        file: '06_cumulative_returns.png',
        label: 'Cumulative Returns'
    },
    {
        file: '07_market_regime.png',
        label: 'Market Regime'
    },
    {
        file: '08_volume_analysis.png',
        label: 'Volume Analysis'
    },
    {
        file: '09_monthly_heatmap.png',
        label: 'Monthly Heatmap'
    },
    {
        file: '10_drawdown_risk_return.png',
        label: 'Drawdown & Risk-Return'
    }
];
function ProjectCard4() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(52);
    if ($[0] !== "4bb9eff63884bab4f8dda0f1471b83842e44206109af77faff65cc1d419b42f7") {
        for(let $i = 0; $i < 52; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4bb9eff63884bab4f8dda0f1471b83842e44206109af77faff65cc1d419b42f7";
    }
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [readme, setReadme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lightbox, setLightbox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ProjectCard4[useEffect()]": ()=>{
                fetch("/readme/README4.md").then(_ProjectCard4UseEffectAnonymous).then({
                    "ProjectCard4[useEffect() > (anonymous)()]": (text)=>setReadme(text)
                }["ProjectCard4[useEffect() > (anonymous)()]"]);
            }
        })["ProjectCard4[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            y: -4,
            boxShadow: "0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)"
        };
        t3 = {
            duration: 0.25
        };
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-zinc-300 text-xl font-medium",
                    style: {
                        fontFamily: "Georgia, serif"
                    },
                    children: "Crypto Market Analysis \u2014 EDA of Bitcoin & Major Altcoins"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard4.tsx",
                    lineNumber: 89,
                    columnNumber: 47
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-zinc-600 text-base",
                    children: "Exploratory Data Analysis of BTC, ETH, SOL, BNB — 2020 to 2024"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard4.tsx",
                    lineNumber: 91,
                    columnNumber: 80
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard4.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row items-start gap-3 sm:gap-0 justify-between",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://github.com/roybeey0/crypto-market-analysis",
                    target: "_blank",
                    className: "flex items-center gap-1.5 text-zinc-600 hover:text-zinc-400 transition-colors text-sm border border-white/5 rounded-lg px-3 py-1.5 hover:border-white/10 shrink-0 sm:ml-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "13",
                            height: "13",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCard4.tsx",
                                    lineNumber: 98,
                                    columnNumber: 539
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M9 18c-4.51 2-5-2-7-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCard4.tsx",
                                    lineNumber: 98,
                                    columnNumber: 800
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectCard4.tsx",
                            lineNumber: 98,
                            columnNumber: 359
                        }, this),
                        "View on GitHub"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectCard4.tsx",
                    lineNumber: 98,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard4.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
            children: [
                {
                    label: "Cryptos",
                    value: "4"
                },
                {
                    label: "Years of Data",
                    value: "5Y"
                },
                {
                    label: "Visualizations",
                    value: "10"
                },
                {
                    label: "Key Insights",
                    value: "10"
                }
            ].map(_ProjectCard4Anonymous)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard4.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "ProjectCard4[<div>.onClick]": ()=>setLightbox(true)
        })["ProjectCard4[<div>.onClick]"];
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const t8 = `/charts/${charts[selected].file}`;
    const t9 = charts[selected];
    let t10;
    if ($[9] !== t8 || $[10] !== t9.label) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: t8,
            alt: t9.label,
            className: "w-full object-contain max-h-72"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard4.tsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[9] = t8;
        $[10] = t9.label;
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/70 text-zinc-200 text-sm px-4 py-2 rounded-xl backdrop-blur-sm items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "11",
                            cy: "11",
                            r: "8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard4.tsx",
                            lineNumber: 144,
                            columnNumber: 380
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m21 21-4.35-4.35"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard4.tsx",
                            lineNumber: 144,
                            columnNumber: 412
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M11 8v6M8 11h6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard4.tsx",
                            lineNumber: 144,
                            columnNumber: 441
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectCard4.tsx",
                    lineNumber: 144,
                    columnNumber: 200
                }, this),
                "Click to expand"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard4.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-200 flex items-center justify-center",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden absolute top-2 left-2 bg-black/60 text-zinc-400 text-xs px-2 py-1 rounded-md backdrop-blur-sm flex items-center gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "11",
                            height: "11",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "11",
                                    cy: "11",
                                    r: "8"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCard4.tsx",
                                    lineNumber: 151,
                                    columnNumber: 473
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m21 21-4.35-4.35"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCard4.tsx",
                                    lineNumber: 151,
                                    columnNumber: 505
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M11 8v6M8 11h6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCard4.tsx",
                                    lineNumber: 151,
                                    columnNumber: 534
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectCard4.tsx",
                            lineNumber: 151,
                            columnNumber: 293
                        }, this),
                        "Tap to expand"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectCard4.tsx",
                    lineNumber: 151,
                    columnNumber: 146
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard4.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    const t13 = charts[selected];
    let t14;
    if ($[14] !== t13.label) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-2 right-2 bg-black/60 text-zinc-400 text-xs px-2 py-1 rounded-md backdrop-blur-sm",
            children: t13.label
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard4.tsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[14] = t13.label;
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] !== t10 || $[17] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative rounded-xl overflow-hidden bg-black/20 cursor-zoom-in border border-white/5 group",
            onClick: t7,
            children: [
                t10,
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard4.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t14;
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            scrollbarWidth: "thin",
            scrollbarColor: "#2a2a2a transparent"
        };
        $[19] = t16;
    } else {
        t16 = $[19];
    }
    let t17;
    if ($[20] !== selected) {
        t17 = charts.map({
            "ProjectCard4[charts.map()]": (c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "ProjectCard4[charts.map() > <button>.onClick]": ()=>setSelected(i)
                    }["ProjectCard4[charts.map() > <button>.onClick]"],
                    className: `shrink-0 w-16 h-12 rounded-lg overflow-hidden border transition-all ${selected === i ? "border-zinc-500" : "border-white/5 opacity-50 hover:opacity-80"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: `/charts/${c.file}`,
                        alt: c.label,
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectCard4.tsx",
                        lineNumber: 189,
                        columnNumber: 226
                    }, this)
                }, c.file, false, {
                    fileName: "[project]/src/components/ProjectCard4.tsx",
                    lineNumber: 187,
                    columnNumber: 47
                }, this)
        }["ProjectCard4[charts.map()]"]);
        $[20] = selected;
        $[21] = t17;
    } else {
        t17 = $[21];
    }
    let t18;
    if ($[22] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "thumb-scroll flex gap-2 overflow-x-auto pb-2",
            style: t16,
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard4.tsx",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[22] = t17;
        $[23] = t18;
    } else {
        t18 = $[23];
    }
    let t19;
    if ($[24] !== t15 || $[25] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3",
            children: [
                t15,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard4.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[24] = t15;
        $[25] = t18;
        $[26] = t19;
    } else {
        t19 = $[26];
    }
    let t20;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2 text-sm text-zinc-600",
            children: [
                "Price History & Events",
                "Correlation Heatmap",
                "Volatility Clustering",
                "Technical Indicators",
                "Return Distribution",
                "Market Regime Detection",
                "Volume & OBV",
                "Monthly Seasonality",
                "Max Drawdown",
                "Risk-Return Scatter"
            ].map(_ProjectCard4Anonymous2)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard4.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[27] = t20;
    } else {
        t20 = $[27];
    }
    let t21;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-zinc-700 text-sm",
            children: "Stack:"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard4.tsx",
            lineNumber: 222,
            columnNumber: 11
        }, this);
        $[28] = t21;
    } else {
        t21 = $[28];
    }
    let t22;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 flex-wrap",
                    children: [
                        "Python 3.10",
                        "yfinance",
                        "Pandas",
                        "Matplotlib",
                        "Seaborn",
                        "SciPy",
                        "Jupyter"
                    ].map(_ProjectCard4Anonymous3)
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard4.tsx",
                    lineNumber: 229,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard4.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[29] = t22;
    } else {
        t22 = $[29];
    }
    let t23;
    if ($[30] !== open || $[31] !== readme) {
        t23 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-white/5 pt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "markdown-body",
                style: {
                    backgroundColor: "transparent",
                    fontFamily: "Georgia, serif",
                    fontSize: "15px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                    remarkPlugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                    ],
                    rehypePlugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                    ],
                    components: {
                        div: _temp,
                        p: _temp2
                    },
                    children: readme
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard4.tsx",
                    lineNumber: 240,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard4.tsx",
                lineNumber: 236,
                columnNumber: 65
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard4.tsx",
            lineNumber: 236,
            columnNumber: 19
        }, this);
        $[30] = open;
        $[31] = readme;
        $[32] = t23;
    } else {
        t23 = $[32];
    }
    let t24;
    if ($[33] !== open) {
        t24 = ({
            "ProjectCard4[<button>.onClick]": ()=>setOpen(!open)
        })["ProjectCard4[<button>.onClick]"];
        $[33] = open;
        $[34] = t24;
    } else {
        t24 = $[34];
    }
    const t25 = open ? "rotate(180deg)" : "rotate(0deg)";
    let t26;
    if ($[35] !== t25) {
        t26 = {
            transform: t25,
            transition: "transform 0.2s"
        };
        $[35] = t25;
        $[36] = t26;
    } else {
        t26 = $[36];
    }
    let t27;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m6 9 6 6 6-6"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard4.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[37] = t27;
    } else {
        t27 = $[37];
    }
    let t28;
    if ($[38] !== t26) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: t26,
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard4.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[38] = t26;
        $[39] = t28;
    } else {
        t28 = $[39];
    }
    const t29 = open ? "Show Less" : "Read More";
    let t30;
    if ($[40] !== t24 || $[41] !== t28 || $[42] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t24,
            className: "flex items-center gap-1.5 text-zinc-500 hover:text-zinc-300 transition-colors text-sm w-fit border border-white/5 rounded-lg px-3 py-1.5 hover:border-white/10",
            children: [
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard4.tsx",
            lineNumber: 290,
            columnNumber: 11
        }, this);
        $[40] = t24;
        $[41] = t28;
        $[42] = t29;
        $[43] = t30;
    } else {
        t30 = $[43];
    }
    let t31;
    if ($[44] !== lightbox || $[45] !== selected) {
        t31 = lightbox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm",
            onClick: {
                "ProjectCard4[<div>.onClick]": ()=>setLightbox(false)
            }["ProjectCard4[<div>.onClick]"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: `/charts/${charts[selected].file}`,
                    alt: charts[selected].label,
                    className: "max-w-full max-h-full object-contain rounded-xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard4.tsx",
                    lineNumber: 302,
                    columnNumber: 39
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "absolute top-4 right-4 text-zinc-400 hover:text-white text-2xl",
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard4.tsx",
                    lineNumber: 302,
                    columnNumber: 176
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard4.tsx",
            lineNumber: 300,
            columnNumber: 23
        }, this);
        $[44] = lightbox;
        $[45] = selected;
        $[46] = t31;
    } else {
        t31 = $[46];
    }
    let t32;
    if ($[47] !== t19 || $[48] !== t23 || $[49] !== t30 || $[50] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "rounded-2xl bg-[#141414] border border-white/5 p-6 flex flex-col gap-4 transition-colors",
            whileHover: t2,
            transition: t3,
            children: [
                t5,
                t6,
                t19,
                t20,
                t22,
                t23,
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard4.tsx",
            lineNumber: 311,
            columnNumber: 11
        }, this);
        $[47] = t19;
        $[48] = t23;
        $[49] = t30;
        $[50] = t31;
        $[51] = t32;
    } else {
        t32 = $[51];
    }
    return t32;
}
_s(ProjectCard4, "ZR3cED1ARMxenWgadnhT+AWkjm0=");
_c = ProjectCard4;
function _temp2(t0) {
    const { node: node_0, children, ...props_0 } = t0;
    const align_0 = node_0?.properties?.align;
    const hasOnlyImages = node_0?.children?.every(_ProjectCard4AnonymousAnonymous);
    if (align_0 === "center" || hasOnlyImages) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                textAlign: "center",
                display: "block"
            },
            ...props_0,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard4.tsx",
            lineNumber: 331,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ...props_0,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectCard4.tsx",
        lineNumber: 336,
        columnNumber: 10
    }, this);
}
function _ProjectCard4AnonymousAnonymous(child) {
    return child.tagName === "img" || child.type === "text" && child.value.trim() === "";
}
function _temp(t0) {
    const { node, ...props } = t0;
    const align = node?.properties?.align;
    if (align === "center") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: "center"
            },
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard4.tsx",
            lineNumber: 348,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectCard4.tsx",
        lineNumber: 352,
        columnNumber: 10
    }, this);
}
function _ProjectCard4Anonymous3(t) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-zinc-500 text-sm bg-white/[0.03] rounded px-2 py-0.5",
        children: t
    }, t, false, {
        fileName: "[project]/src/components/ProjectCard4.tsx",
        lineNumber: 355,
        columnNumber: 10
    }, this);
}
function _ProjectCard4Anonymous2(f) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "border border-white/5 rounded-md px-2 py-1",
        children: f
    }, f, false, {
        fileName: "[project]/src/components/ProjectCard4.tsx",
        lineNumber: 358,
        columnNumber: 10
    }, this);
}
function _ProjectCard4Anonymous(m) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white/[0.03] rounded-xl p-3 flex flex-col gap-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-zinc-500 text-xs",
                children: m.label
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard4.tsx",
                lineNumber: 361,
                columnNumber: 92
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-zinc-200 text-2xl font-light",
                style: {
                    fontFamily: "Georgia, serif"
                },
                children: m.value
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard4.tsx",
                lineNumber: 361,
                columnNumber: 148
            }, this)
        ]
    }, m.label, true, {
        fileName: "[project]/src/components/ProjectCard4.tsx",
        lineNumber: 361,
        columnNumber: 10
    }, this);
}
function _ProjectCard4UseEffectAnonymous(res) {
    return res.text();
}
var _c;
__turbopack_context__.k.register(_c, "ProjectCard4");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectCard5.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rehype-raw/lib/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function ProjectCard5() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "3d234218b7c82955bd4a4847232504d177e123d45c07941d6d685c6aafc8b114") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3d234218b7c82955bd4a4847232504d177e123d45c07941d6d685c6aafc8b114";
    }
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [readme, setReadme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ProjectCard5[useEffect()]": ()=>{
                fetch("/readme/README5.md").then(_ProjectCard5UseEffectAnonymous).then({
                    "ProjectCard5[useEffect() > (anonymous)()]": (text)=>setReadme(text)
                }["ProjectCard5[useEffect() > (anonymous)()]"]);
            }
        })["ProjectCard5[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            background: "linear-gradient(135deg, #1a0d14 0%, #1f0f18 50%, #14080f 100%)",
            border: "1px solid rgba(236,72,153,0.15)"
        };
        t3 = {
            y: -4,
            boxShadow: "0 20px 40px rgba(236,72,153,0.15), 0 0 0 1px rgba(236,72,153,0.25)"
        };
        t4 = {
            duration: 0.25
        };
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs px-2 py-0.5 rounded-full font-medium",
            style: {
                background: "rgba(236,72,153,0.15)",
                color: "#f9a8d4",
                border: "1px solid rgba(236,72,153,0.3)",
                fontFamily: "monospace"
            },
            children: "Web3"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard5.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mb-1",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs px-2 py-0.5 rounded-full font-medium",
                    style: {
                        background: "rgba(236,72,153,0.1)",
                        color: "#fbcfe8",
                        border: "1px solid rgba(236,72,153,0.2)",
                        fontFamily: "monospace"
                    },
                    children: "Blockchain"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard5.tsx",
                    lineNumber: 75,
                    columnNumber: 60
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard5.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-medium",
                    style: {
                        fontFamily: "monospace",
                        color: "#e2e8f0",
                        letterSpacing: "0.02em"
                    },
                    children: "Python Blockchain Implementation + Wallet Analytics"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard5.tsx",
                    lineNumber: 87,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "#64748b",
                        fontFamily: "monospace"
                    },
                    className: "text-base",
                    children: "Blockchain from scratch & Ethereum on-chain wallet data analytics"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard5.tsx",
                    lineNumber: 91,
                    columnNumber: 66
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard5.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            color: "#94a3b8",
            border: "1px solid rgba(236,72,153,0.2)",
            background: "rgba(236,72,153,0.05)",
            fontFamily: "monospace"
        };
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row items-start gap-3 sm:gap-0 justify-between",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://github.com/roybeey0/python-blockchain-analytics",
                    target: "_blank",
                    className: "flex items-center gap-1.5 text-sm rounded-lg px-3 py-1.5 shrink-0 sm:ml-4 transition-colors",
                    style: t8,
                    onMouseEnter: _ProjectCard5AOnMouseEnter,
                    onMouseLeave: _ProjectCard5AOnMouseLeave,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "13",
                            height: "13",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCard5.tsx",
                                    lineNumber: 113,
                                    columnNumber: 561
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M9 18c-4.51 2-5-2-7-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCard5.tsx",
                                    lineNumber: 113,
                                    columnNumber: 822
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectCard5.tsx",
                            lineNumber: 113,
                            columnNumber: 381
                        }, this),
                        "View on GitHub"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectCard5.tsx",
                    lineNumber: 113,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard5.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
            children: [
                {
                    label: "Part",
                    value: "2",
                    sub: "Blockchain + Analytics"
                },
                {
                    label: "Consensus",
                    value: "PoW",
                    sub: "SHA-256"
                },
                {
                    label: "Visualizations",
                    value: "5",
                    sub: "Dark theme charts"
                },
                {
                    label: "API",
                    value: "ETH",
                    sub: "Etherscan"
                }
            ].map(_ProjectCard5Anonymous)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard5.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2 text-sm",
            children: [
                "SHA-256 Hashing",
                "Proof of Work",
                "Merkle Tree",
                "Chain Validation",
                "Tamper Detection",
                "Etherscan API",
                "Gas Analytics",
                "Wallet Tracking",
                "On-chain Data"
            ].map(_ProjectCard5Anonymous2)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard5.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 flex-wrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    style: {
                        color: "#334155"
                    },
                    children: "Stack:"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard5.tsx",
                    lineNumber: 150,
                    columnNumber: 62
                }, this),
                [
                    "Python 3.10",
                    "hashlib",
                    "Etherscan API",
                    "Pandas",
                    "Matplotlib",
                    "Seaborn",
                    "Requests"
                ].map(_ProjectCard5Anonymous3)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard5.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] !== open || $[15] !== readme) {
        t13 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t pt-4",
            style: {
                borderColor: "rgba(236,72,153,0.15)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "markdown-body",
                style: {
                    backgroundColor: "transparent",
                    fontFamily: "monospace",
                    fontSize: "14px",
                    letterSpacing: "0.02em"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                    remarkPlugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                    ],
                    rehypePlugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                    ],
                    components: {
                        div: _temp,
                        p: _temp2
                    },
                    children: readme
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard5.tsx",
                    lineNumber: 166,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard5.tsx",
                lineNumber: 161,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard5.tsx",
            lineNumber: 159,
            columnNumber: 19
        }, this);
        $[14] = open;
        $[15] = readme;
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] !== open) {
        t14 = ({
            "ProjectCard5[<button>.onClick]": ()=>setOpen(!open)
        })["ProjectCard5[<button>.onClick]"];
        $[17] = open;
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    let t15;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = {
            color: "#ec4899",
            border: "1px solid rgba(236,72,153,0.2)",
            background: "rgba(236,72,153,0.05)",
            fontFamily: "monospace"
        };
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    const t16 = open ? "rotate(180deg)" : "rotate(0deg)";
    let t17;
    if ($[20] !== t16) {
        t17 = {
            transform: t16,
            transition: "transform 0.2s"
        };
        $[20] = t16;
        $[21] = t17;
    } else {
        t17 = $[21];
    }
    let t18;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m6 9 6 6 6-6"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard5.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[22] = t18;
    } else {
        t18 = $[22];
    }
    let t19;
    if ($[23] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: t17,
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard5.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[23] = t17;
        $[24] = t19;
    } else {
        t19 = $[24];
    }
    const t20 = open ? "Show Less" : "Read More";
    let t21;
    if ($[25] !== t14 || $[26] !== t19 || $[27] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t14,
            className: "flex items-center gap-1.5 text-sm w-fit rounded-lg px-3 py-1.5 transition-colors",
            style: t15,
            onMouseEnter: _ProjectCard5ButtonOnMouseEnter,
            onMouseLeave: _ProjectCard5ButtonOnMouseLeave,
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard5.tsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[25] = t14;
        $[26] = t19;
        $[27] = t20;
        $[28] = t21;
    } else {
        t21 = $[28];
    }
    let t22;
    if ($[29] !== t13 || $[30] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "rounded-2xl p-6 flex flex-col gap-4 transition-colors",
            style: t2,
            whileHover: t3,
            transition: t4,
            children: [
                t9,
                t10,
                t11,
                t12,
                t13,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard5.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[29] = t13;
        $[30] = t21;
        $[31] = t22;
    } else {
        t22 = $[31];
    }
    return t22;
}
_s(ProjectCard5, "3f6O0xnOUgwkbcljmHoiyGkZpBY=");
_c = ProjectCard5;
function _ProjectCard5ButtonOnMouseLeave(e_2) {
    return e_2.currentTarget.style.color = "#ec4899";
}
function _ProjectCard5ButtonOnMouseEnter(e_1) {
    return e_1.currentTarget.style.color = "#f9a8d4";
}
function _temp2(t0) {
    const { node: node_0, children, ...props_0 } = t0;
    const align_0 = node_0?.properties?.align;
    const hasOnlyImages = node_0?.children?.every(_ProjectCard5AnonymousAnonymous);
    if (align_0 === "center" || hasOnlyImages) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                textAlign: "center",
                display: "block"
            },
            ...props_0,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard5.tsx",
            lineNumber: 262,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ...props_0,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectCard5.tsx",
        lineNumber: 267,
        columnNumber: 10
    }, this);
}
function _ProjectCard5AnonymousAnonymous(child) {
    return child.tagName === "img" || child.type === "text" && child.value.trim() === "";
}
function _temp(t0) {
    const { node, ...props } = t0;
    const align = node?.properties?.align;
    if (align === "center") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: "center"
            },
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard5.tsx",
            lineNumber: 279,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectCard5.tsx",
        lineNumber: 283,
        columnNumber: 10
    }, this);
}
function _ProjectCard5Anonymous3(t) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-sm rounded px-2 py-0.5",
        style: {
            color: "#f9a8d4",
            background: "rgba(236,72,153,0.08)",
            fontFamily: "monospace"
        },
        children: t
    }, t, false, {
        fileName: "[project]/src/components/ProjectCard5.tsx",
        lineNumber: 286,
        columnNumber: 10
    }, this);
}
function _ProjectCard5Anonymous2(f) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded-md px-2 py-1",
        style: {
            color: "#ec4899",
            border: "1px solid rgba(236,72,153,0.2)",
            background: "rgba(236,72,153,0.05)",
            fontFamily: "monospace"
        },
        children: f
    }, f, false, {
        fileName: "[project]/src/components/ProjectCard5.tsx",
        lineNumber: 293,
        columnNumber: 10
    }, this);
}
function _ProjectCard5Anonymous(m) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl p-3 flex flex-col gap-1",
        style: {
            background: "rgba(236,72,153,0.05)",
            border: "1px solid rgba(236,72,153,0.1)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs",
                style: {
                    color: "#ec4899",
                    fontFamily: "monospace"
                },
                children: m.label
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard5.tsx",
                lineNumber: 304,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl font-light",
                style: {
                    fontFamily: "monospace",
                    color: "#f9a8d4"
                },
                children: m.value
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard5.tsx",
                lineNumber: 307,
                columnNumber: 24
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs",
                style: {
                    color: "#475569",
                    fontFamily: "monospace"
                },
                children: m.sub
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard5.tsx",
                lineNumber: 310,
                columnNumber: 24
            }, this)
        ]
    }, m.label, true, {
        fileName: "[project]/src/components/ProjectCard5.tsx",
        lineNumber: 301,
        columnNumber: 10
    }, this);
}
function _ProjectCard5AOnMouseLeave(e_0) {
    return e_0.currentTarget.style.color = "#94a3b8";
}
function _ProjectCard5AOnMouseEnter(e) {
    return e.currentTarget.style.color = "#f9a8d4";
}
function _ProjectCard5UseEffectAnonymous(res) {
    return res.text();
}
var _c;
__turbopack_context__.k.register(_c, "ProjectCard5");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectCard6.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rehype-raw/lib/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function ProjectCard6() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "42b45265db6e23289bf8c7f03e83898f7d49deaef0fe00b7e3aa086b6e3a9437") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42b45265db6e23289bf8c7f03e83898f7d49deaef0fe00b7e3aa086b6e3a9437";
    }
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [readme, setReadme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ProjectCard6[useEffect()]": ()=>{
                fetch("/readme/README6.md").then(_ProjectCard6UseEffectAnonymous).then({
                    "ProjectCard6[useEffect() > (anonymous)()]": (text)=>setReadme(text)
                }["ProjectCard6[useEffect() > (anonymous)()]"]);
            }
        })["ProjectCard6[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            background: "linear-gradient(135deg, #0a0d1a 0%, #0d1020 50%, #080a14 100%)",
            border: "1px solid rgba(98,126,234,0.15)"
        };
        t3 = {
            y: -4,
            boxShadow: "0 20px 40px rgba(98,126,234,0.15), 0 0 0 1px rgba(98,126,234,0.25)"
        };
        t4 = {
            duration: 0.25
        };
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs px-2 py-0.5 rounded-full font-medium",
            style: {
                background: "rgba(98,126,234,0.15)",
                color: "#a5b4fc",
                border: "1px solid rgba(98,126,234,0.3)",
                fontFamily: "monospace"
            },
            children: "⟠ Ethereum"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard6.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs px-2 py-0.5 rounded-full font-medium",
            style: {
                background: "rgba(98,126,234,0.1)",
                color: "#c7d2fe",
                border: "1px solid rgba(98,126,234,0.2)",
                fontFamily: "monospace"
            },
            children: "ERC-20"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard6.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mb-1",
            children: [
                t5,
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs px-2 py-0.5 rounded-full font-medium",
                    style: {
                        background: "rgba(98,126,234,0.1)",
                        color: "#c7d2fe",
                        border: "1px solid rgba(98,126,234,0.2)",
                        fontFamily: "monospace"
                    },
                    children: "Web3"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard6.tsx",
                    lineNumber: 87,
                    columnNumber: 64
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard6.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-medium",
                    style: {
                        fontFamily: "monospace",
                        color: "#e2e8f0",
                        letterSpacing: "0.02em"
                    },
                    children: "Smart Contract Interaction via Web3.py"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard6.tsx",
                    lineNumber: 99,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "#64748b",
                        fontFamily: "monospace"
                    },
                    className: "text-base",
                    children: "Read ERC-20 token data & visualize on-chain Transfer events \u2014 no API key required"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard6.tsx",
                    lineNumber: 103,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard6.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            color: "#94a3b8",
            border: "1px solid rgba(98,126,234,0.2)",
            background: "rgba(98,126,234,0.05)",
            fontFamily: "monospace"
        };
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row items-start gap-3 sm:gap-0 justify-between",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://github.com/roybeey0/smart-contract-interaction",
                    target: "_blank",
                    className: "flex items-center gap-1.5 text-sm rounded-lg px-3 py-1.5 shrink-0 sm:ml-4 transition-colors",
                    style: t9,
                    onMouseEnter: _ProjectCard6AOnMouseEnter,
                    onMouseLeave: _ProjectCard6AOnMouseLeave,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "13",
                            height: "13",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCard6.tsx",
                                    lineNumber: 125,
                                    columnNumber: 561
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M9 18c-4.51 2-5-2-7-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCard6.tsx",
                                    lineNumber: 125,
                                    columnNumber: 822
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectCard6.tsx",
                            lineNumber: 125,
                            columnNumber: 381
                        }, this),
                        "View on GitHub"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectCard6.tsx",
                    lineNumber: 125,
                    columnNumber: 101
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard6.tsx",
            lineNumber: 125,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
            children: [
                {
                    label: "Events",
                    value: "1,538",
                    sub: "LINK Transfers"
                },
                {
                    label: "Blocks",
                    value: "1K",
                    sub: "Block range scanned"
                },
                {
                    label: "Charts",
                    value: "5",
                    sub: "Dark theme viz"
                },
                {
                    label: "RPC",
                    value: "Free",
                    sub: "No API key needed"
                }
            ].map(_ProjectCard6Anonymous)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard6.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2 text-sm",
            children: [
                "Token Metadata",
                "Balance Checker",
                "Transfer Events",
                "ERC-20 ABI",
                "Web3.py",
                "Public RPC",
                "CLI Interface",
                "Interactive Menu",
                "No API Key"
            ].map(_ProjectCard6Anonymous2)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard6.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 flex-wrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    style: {
                        color: "#334155",
                        fontFamily: "monospace"
                    },
                    children: "Stack:"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard6.tsx",
                    lineNumber: 162,
                    columnNumber: 62
                }, this),
                [
                    "Python 3.12",
                    "Web3.py",
                    "Pandas",
                    "Matplotlib",
                    "Seaborn",
                    "Ethereum Mainnet"
                ].map(_ProjectCard6Anonymous3)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard6.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] !== open || $[16] !== readme) {
        t14 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t pt-4",
            style: {
                borderColor: "rgba(98,126,234,0.15)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "markdown-body",
                style: {
                    backgroundColor: "transparent",
                    fontFamily: "monospace",
                    fontSize: "14px",
                    letterSpacing: "0.02em"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                    remarkPlugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                    ],
                    rehypePlugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                    ],
                    components: {
                        div: _temp,
                        p: _temp2
                    },
                    children: readme
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard6.tsx",
                    lineNumber: 179,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard6.tsx",
                lineNumber: 174,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard6.tsx",
            lineNumber: 172,
            columnNumber: 19
        }, this);
        $[15] = open;
        $[16] = readme;
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    let t15;
    if ($[18] !== open) {
        t15 = ({
            "ProjectCard6[<button>.onClick]": ()=>setOpen(!open)
        })["ProjectCard6[<button>.onClick]"];
        $[18] = open;
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    let t16;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            color: "#627EEA",
            border: "1px solid rgba(98,126,234,0.2)",
            background: "rgba(98,126,234,0.05)",
            fontFamily: "monospace"
        };
        $[20] = t16;
    } else {
        t16 = $[20];
    }
    const t17 = open ? "rotate(180deg)" : "rotate(0deg)";
    let t18;
    if ($[21] !== t17) {
        t18 = {
            transform: t17,
            transition: "transform 0.2s"
        };
        $[21] = t17;
        $[22] = t18;
    } else {
        t18 = $[22];
    }
    let t19;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m6 9 6 6 6-6"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard6.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[23] = t19;
    } else {
        t19 = $[23];
    }
    let t20;
    if ($[24] !== t18) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: t18,
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard6.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[24] = t18;
        $[25] = t20;
    } else {
        t20 = $[25];
    }
    const t21 = open ? "Show Less" : "Read More";
    let t22;
    if ($[26] !== t15 || $[27] !== t20 || $[28] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t15,
            className: "flex items-center gap-1.5 text-sm w-fit rounded-lg px-3 py-1.5 transition-colors",
            style: t16,
            onMouseEnter: _ProjectCard6ButtonOnMouseEnter,
            onMouseLeave: _ProjectCard6ButtonOnMouseLeave,
            children: [
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard6.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[26] = t15;
        $[27] = t20;
        $[28] = t21;
        $[29] = t22;
    } else {
        t22 = $[29];
    }
    let t23;
    if ($[30] !== t14 || $[31] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "rounded-2xl p-6 flex flex-col gap-4 transition-colors",
            style: t2,
            whileHover: t3,
            transition: t4,
            children: [
                t10,
                t11,
                t12,
                t13,
                t14,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard6.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[30] = t14;
        $[31] = t22;
        $[32] = t23;
    } else {
        t23 = $[32];
    }
    return t23;
}
_s(ProjectCard6, "3f6O0xnOUgwkbcljmHoiyGkZpBY=");
_c = ProjectCard6;
function _ProjectCard6ButtonOnMouseLeave(e_2) {
    return e_2.currentTarget.style.color = "#627EEA";
}
function _ProjectCard6ButtonOnMouseEnter(e_1) {
    return e_1.currentTarget.style.color = "#a5b4fc";
}
function _temp2(t0) {
    const { node: node_0, children, ...props_0 } = t0;
    const align_0 = node_0?.properties?.align;
    const hasOnlyImages = node_0?.children?.every(_ProjectCard6AnonymousAnonymous);
    if (align_0 === "center" || hasOnlyImages) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                textAlign: "center",
                display: "block"
            },
            ...props_0,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard6.tsx",
            lineNumber: 275,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ...props_0,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectCard6.tsx",
        lineNumber: 280,
        columnNumber: 10
    }, this);
}
function _ProjectCard6AnonymousAnonymous(child) {
    return child.tagName === "img" || child.type === "text" && child.value.trim() === "";
}
function _temp(t0) {
    const { node, ...props } = t0;
    const align = node?.properties?.align;
    if (align === "center") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: "center"
            },
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard6.tsx",
            lineNumber: 292,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectCard6.tsx",
        lineNumber: 296,
        columnNumber: 10
    }, this);
}
function _ProjectCard6Anonymous3(t) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-sm rounded px-2 py-0.5",
        style: {
            color: "#a5b4fc",
            background: "rgba(98,126,234,0.08)",
            fontFamily: "monospace"
        },
        children: t
    }, t, false, {
        fileName: "[project]/src/components/ProjectCard6.tsx",
        lineNumber: 299,
        columnNumber: 10
    }, this);
}
function _ProjectCard6Anonymous2(f) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded-md px-2 py-1",
        style: {
            color: "#627EEA",
            border: "1px solid rgba(98,126,234,0.2)",
            background: "rgba(98,126,234,0.05)",
            fontFamily: "monospace"
        },
        children: f
    }, f, false, {
        fileName: "[project]/src/components/ProjectCard6.tsx",
        lineNumber: 306,
        columnNumber: 10
    }, this);
}
function _ProjectCard6Anonymous(m) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl p-3 flex flex-col gap-1",
        style: {
            background: "rgba(98,126,234,0.05)",
            border: "1px solid rgba(98,126,234,0.1)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs",
                style: {
                    color: "#627EEA",
                    fontFamily: "monospace"
                },
                children: m.label
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard6.tsx",
                lineNumber: 317,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl font-light",
                style: {
                    fontFamily: "monospace",
                    color: "#a5b4fc"
                },
                children: m.value
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard6.tsx",
                lineNumber: 320,
                columnNumber: 24
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs",
                style: {
                    color: "#475569",
                    fontFamily: "monospace"
                },
                children: m.sub
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard6.tsx",
                lineNumber: 323,
                columnNumber: 24
            }, this)
        ]
    }, m.label, true, {
        fileName: "[project]/src/components/ProjectCard6.tsx",
        lineNumber: 314,
        columnNumber: 10
    }, this);
}
function _ProjectCard6AOnMouseLeave(e_0) {
    return e_0.currentTarget.style.color = "#94a3b8";
}
function _ProjectCard6AOnMouseEnter(e) {
    return e.currentTarget.style.color = "#a5b4fc";
}
function _ProjectCard6UseEffectAnonymous(res) {
    return res.text();
}
var _c;
__turbopack_context__.k.register(_c, "ProjectCard6");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectCard7.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard7
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rehype-raw/lib/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const charts = [
    {
        file: '01_whale_activity_over_time.png',
        label: 'Whale Activity Over Time'
    },
    {
        file: '02_top_whales_by_volume.png',
        label: 'Top Whales by Volume'
    },
    {
        file: '03_transaction_size_distribution.png',
        label: 'Transaction Size Distribution'
    },
    {
        file: '04_whale_vs_retail_comparison.png',
        label: 'Whale vs Retail'
    },
    {
        file: '05_whale_flow_network.png',
        label: 'Whale Flow Network'
    },
    {
        file: '06_activity_heatmap.png',
        label: 'Activity Heatmap'
    }
];
function ProjectCard7() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(61);
    if ($[0] !== "185c5e951d2464ce80015dd106cdda59444ebb0a673492aca00c2d8d4a369e74") {
        for(let $i = 0; $i < 61; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "185c5e951d2464ce80015dd106cdda59444ebb0a673492aca00c2d8d4a369e74";
    }
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [readme, setReadme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lightbox, setLightbox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ProjectCard7[useEffect()]": ()=>{
                fetch("/readme/README7.md").then(_ProjectCard7UseEffectAnonymous).then({
                    "ProjectCard7[useEffect() > (anonymous)()]": (text)=>setReadme(text)
                }["ProjectCard7[useEffect() > (anonymous)()]"]);
            }
        })["ProjectCard7[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            background: "linear-gradient(135deg, #0a0d1a 0%, #0d1020 50%, #080a14 100%)",
            border: "1px solid rgba(98,126,234,0.15)"
        };
        t3 = {
            y: -4,
            boxShadow: "0 20px 40px rgba(98,126,234,0.15), 0 0 0 1px rgba(98,126,234,0.25)"
        };
        t4 = {
            duration: 0.25
        };
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs px-2 py-0.5 rounded-full font-medium",
            style: {
                background: "rgba(98,126,234,0.15)",
                color: "#a5b4fc",
                border: "1px solid rgba(98,126,234,0.3)",
                fontFamily: "monospace"
            },
            children: "Whale Tracker"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs px-2 py-0.5 rounded-full font-medium",
            style: {
                background: "rgba(98,126,234,0.1)",
                color: "#c7d2fe",
                border: "1px solid rgba(98,126,234,0.2)",
                fontFamily: "monospace"
            },
            children: "On-chain"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mb-1",
            children: [
                t5,
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs px-2 py-0.5 rounded-full font-medium",
                    style: {
                        background: "rgba(98,126,234,0.1)",
                        color: "#c7d2fe",
                        border: "1px solid rgba(98,126,234,0.2)",
                        fontFamily: "monospace"
                    },
                    children: "ERC-20"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard7.tsx",
                    lineNumber: 108,
                    columnNumber: 64
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 108,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-medium",
                    style: {
                        fontFamily: "monospace",
                        color: "#e2e8f0",
                        letterSpacing: "0.02em"
                    },
                    children: "On-chain Whale Tracker"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard7.tsx",
                    lineNumber: 120,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "#64748b",
                        fontFamily: "monospace"
                    },
                    className: "text-base",
                    children: "Monitor large Ethereum wallet movements & visualize whale activity from on-chain data"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard7.tsx",
                    lineNumber: 124,
                    columnNumber: 37
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            color: "#94a3b8",
            border: "1px solid rgba(98,126,234,0.2)",
            background: "rgba(98,126,234,0.05)",
            fontFamily: "monospace"
        };
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row items-start gap-3 sm:gap-0 justify-between",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://github.com/roybeey0/onchain-whale-tracker",
                    target: "_blank",
                    className: "flex items-center gap-1.5 text-sm rounded-lg px-3 py-1.5 shrink-0 sm:ml-4 transition-colors",
                    style: t9,
                    onMouseEnter: _ProjectCard7AOnMouseEnter,
                    onMouseLeave: _ProjectCard7AOnMouseLeave,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "13",
                            height: "13",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCard7.tsx",
                                    lineNumber: 146,
                                    columnNumber: 556
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M9 18c-4.51 2-5-2-7-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCard7.tsx",
                                    lineNumber: 146,
                                    columnNumber: 817
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectCard7.tsx",
                            lineNumber: 146,
                            columnNumber: 376
                        }, this),
                        "View on GitHub"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectCard7.tsx",
                    lineNumber: 146,
                    columnNumber: 101
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
            children: [
                {
                    label: "Transactions",
                    value: "1,247",
                    sub: "Total fetched"
                },
                {
                    label: "Whales",
                    value: "83",
                    sub: "6.7% of all txs"
                },
                {
                    label: "Charts",
                    value: "6",
                    sub: "Dark theme viz"
                },
                {
                    label: "Threshold",
                    value: "$100K",
                    sub: "Whale filter"
                }
            ].map(_ProjectCard7Anonymous)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    let t13;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            background: "rgba(0,0,0,0.3)",
            border: "1px solid rgba(98,126,234,0.1)"
        };
        t13 = ({
            "ProjectCard7[<div>.onClick]": ()=>setLightbox(true)
        })["ProjectCard7[<div>.onClick]"];
        $[13] = t12;
        $[14] = t13;
    } else {
        t12 = $[13];
        t13 = $[14];
    }
    const t14 = `/whale_charts/${charts[selected].file}`;
    const t15 = charts[selected];
    let t16;
    if ($[15] !== t14 || $[16] !== t15.label) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: t14,
            alt: t15.label,
            className: "w-full object-contain max-h-72"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[15] = t14;
        $[16] = t15.label;
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = {
            background: "rgba(98,126,234,0.8)",
            color: "#e2e8f0"
        };
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm px-4 py-2 rounded-xl backdrop-blur-sm items-center gap-2",
            style: t17,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "11",
                            cy: "11",
                            r: "8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard7.tsx",
                            lineNumber: 213,
                            columnNumber: 366
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m21 21-4.35-4.35"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard7.tsx",
                            lineNumber: 213,
                            columnNumber: 398
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M11 8v6M8 11h6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectCard7.tsx",
                            lineNumber: 213,
                            columnNumber: 427
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectCard7.tsx",
                    lineNumber: 213,
                    columnNumber: 186
                }, this),
                "Click to expand"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    let t19;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = {
            background: "rgba(98,126,234,0.7)",
            color: "#e2e8f0"
        };
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 transition-all duration-200 flex items-center justify-center",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden absolute top-2 left-2 text-xs px-2 py-1 rounded-md backdrop-blur-sm flex items-center gap-1.5",
                    style: t19,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "11",
                            height: "11",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "11",
                                    cy: "11",
                                    r: "8"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCard7.tsx",
                                    lineNumber: 230,
                                    columnNumber: 424
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "m21 21-4.35-4.35"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCard7.tsx",
                                    lineNumber: 230,
                                    columnNumber: 456
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M11 8v6M8 11h6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCard7.tsx",
                                    lineNumber: 230,
                                    columnNumber: 485
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectCard7.tsx",
                            lineNumber: 230,
                            columnNumber: 244
                        }, this),
                        "Tap to expand"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectCard7.tsx",
                    lineNumber: 230,
                    columnNumber: 111
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    let t21;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = {
            background: "rgba(98,126,234,0.6)",
            color: "#e2e8f0",
            fontFamily: "monospace"
        };
        $[22] = t21;
    } else {
        t21 = $[22];
    }
    const t22 = charts[selected];
    let t23;
    if ($[23] !== t22.label) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-2 right-2 text-xs px-2 py-1 rounded-md backdrop-blur-sm",
            style: t21,
            children: t22.label
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[23] = t22.label;
        $[24] = t23;
    } else {
        t23 = $[24];
    }
    let t24;
    if ($[25] !== t16 || $[26] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative rounded-xl overflow-hidden cursor-zoom-in group",
            style: t12,
            onClick: t13,
            children: [
                t16,
                t20,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        $[25] = t16;
        $[26] = t23;
        $[27] = t24;
    } else {
        t24 = $[27];
    }
    let t25;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = {
            scrollbarWidth: "thin",
            scrollbarColor: "#3730a3 transparent"
        };
        $[28] = t25;
    } else {
        t25 = $[28];
    }
    let t26;
    if ($[29] !== selected) {
        t26 = charts.map({
            "ProjectCard7[charts.map()]": (c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "ProjectCard7[charts.map() > <button>.onClick]": ()=>setSelected(i)
                    }["ProjectCard7[charts.map() > <button>.onClick]"],
                    className: "shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all",
                    style: {
                        border: selected === i ? "1px solid rgba(98,126,234,0.8)" : "1px solid rgba(98,126,234,0.1)",
                        opacity: selected === i ? 1 : 0.5
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: `/whale_charts/${c.file}`,
                        alt: c.label,
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectCard7.tsx",
                        lineNumber: 282,
                        columnNumber: 10
                    }, this)
                }, c.file, false, {
                    fileName: "[project]/src/components/ProjectCard7.tsx",
                    lineNumber: 277,
                    columnNumber: 47
                }, this)
        }["ProjectCard7[charts.map()]"]);
        $[29] = selected;
        $[30] = t26;
    } else {
        t26 = $[30];
    }
    let t27;
    if ($[31] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "thumb-scroll flex gap-2 overflow-x-auto pb-2",
            style: t25,
            children: t26
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[31] = t26;
        $[32] = t27;
    } else {
        t27 = $[32];
    }
    let t28;
    if ($[33] !== t24 || $[34] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3",
            children: [
                t24,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 299,
            columnNumber: 11
        }, this);
        $[33] = t24;
        $[34] = t27;
        $[35] = t28;
    } else {
        t28 = $[35];
    }
    let t29;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2 text-sm",
            children: [
                "Whale Detection",
                "Live On-chain Data",
                "Rich Terminal UI",
                "MEGA/LARGE Alerts",
                "CSV Export",
                "Demo Mode",
                "Etherscan API",
                "CoinGecko Prices",
                "CLI Interface"
            ].map(_ProjectCard7Anonymous2)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 308,
            columnNumber: 11
        }, this);
        $[36] = t29;
    } else {
        t29 = $[36];
    }
    let t30;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 flex-wrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    style: {
                        color: "#334155",
                        fontFamily: "monospace"
                    },
                    children: "Stack:"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard7.tsx",
                    lineNumber: 315,
                    columnNumber: 62
                }, this),
                [
                    "Python 3.10",
                    "Etherscan API",
                    "CoinGecko API",
                    "Pandas",
                    "Matplotlib",
                    "Seaborn",
                    "Rich"
                ].map(_ProjectCard7Anonymous3)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[37] = t30;
    } else {
        t30 = $[37];
    }
    let t31;
    if ($[38] !== open || $[39] !== readme) {
        t31 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t pt-4",
            style: {
                borderColor: "rgba(98,126,234,0.15)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "markdown-body",
                style: {
                    backgroundColor: "transparent",
                    fontFamily: "monospace",
                    fontSize: "14px",
                    letterSpacing: "0.02em"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                    remarkPlugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                    ],
                    rehypePlugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                    ],
                    components: {
                        div: _temp,
                        p: _temp2
                    },
                    children: readme
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard7.tsx",
                    lineNumber: 332,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard7.tsx",
                lineNumber: 327,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 325,
            columnNumber: 19
        }, this);
        $[38] = open;
        $[39] = readme;
        $[40] = t31;
    } else {
        t31 = $[40];
    }
    let t32;
    if ($[41] !== open) {
        t32 = ({
            "ProjectCard7[<button>.onClick]": ()=>setOpen(!open)
        })["ProjectCard7[<button>.onClick]"];
        $[41] = open;
        $[42] = t32;
    } else {
        t32 = $[42];
    }
    let t33;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = {
            color: "#627EEA",
            border: "1px solid rgba(98,126,234,0.2)",
            background: "rgba(98,126,234,0.05)",
            fontFamily: "monospace"
        };
        $[43] = t33;
    } else {
        t33 = $[43];
    }
    const t34 = open ? "rotate(180deg)" : "rotate(0deg)";
    let t35;
    if ($[44] !== t34) {
        t35 = {
            transform: t34,
            transition: "transform 0.2s"
        };
        $[44] = t34;
        $[45] = t35;
    } else {
        t35 = $[45];
    }
    let t36;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m6 9 6 6 6-6"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 378,
            columnNumber: 11
        }, this);
        $[46] = t36;
    } else {
        t36 = $[46];
    }
    let t37;
    if ($[47] !== t35) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: t35,
            children: t36
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 385,
            columnNumber: 11
        }, this);
        $[47] = t35;
        $[48] = t37;
    } else {
        t37 = $[48];
    }
    const t38 = open ? "Show Less" : "Read More";
    let t39;
    if ($[49] !== t32 || $[50] !== t37 || $[51] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t32,
            className: "flex items-center gap-1.5 text-sm w-fit rounded-lg px-3 py-1.5 transition-colors",
            style: t33,
            onMouseEnter: _ProjectCard7ButtonOnMouseEnter,
            onMouseLeave: _ProjectCard7ButtonOnMouseLeave,
            children: [
                t37,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 394,
            columnNumber: 11
        }, this);
        $[49] = t32;
        $[50] = t37;
        $[51] = t38;
        $[52] = t39;
    } else {
        t39 = $[52];
    }
    let t40;
    if ($[53] !== lightbox || $[54] !== selected) {
        t40 = lightbox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm",
            style: {
                background: "rgba(0,0,0,0.92)"
            },
            onClick: {
                "ProjectCard7[<div>.onClick]": ()=>setLightbox(false)
            }["ProjectCard7[<div>.onClick]"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: `/whale_charts/${charts[selected].file}`,
                    alt: charts[selected].label,
                    className: "max-w-full max-h-full object-contain rounded-xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard7.tsx",
                    lineNumber: 408,
                    columnNumber: 39
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "absolute top-4 right-4 text-2xl",
                    style: {
                        color: "#a5b4fc"
                    },
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard7.tsx",
                    lineNumber: 408,
                    columnNumber: 182
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 404,
            columnNumber: 23
        }, this);
        $[53] = lightbox;
        $[54] = selected;
        $[55] = t40;
    } else {
        t40 = $[55];
    }
    let t41;
    if ($[56] !== t28 || $[57] !== t31 || $[58] !== t39 || $[59] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "rounded-2xl p-6 flex flex-col gap-4 transition-colors",
            style: t2,
            whileHover: t3,
            transition: t4,
            children: [
                t10,
                t11,
                t28,
                t29,
                t30,
                t31,
                t39,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 419,
            columnNumber: 11
        }, this);
        $[56] = t28;
        $[57] = t31;
        $[58] = t39;
        $[59] = t40;
        $[60] = t41;
    } else {
        t41 = $[60];
    }
    return t41;
}
_s(ProjectCard7, "ZR3cED1ARMxenWgadnhT+AWkjm0=");
_c = ProjectCard7;
function _ProjectCard7ButtonOnMouseLeave(e_2) {
    return e_2.currentTarget.style.color = "#627EEA";
}
function _ProjectCard7ButtonOnMouseEnter(e_1) {
    return e_1.currentTarget.style.color = "#a5b4fc";
}
function _temp2(t0) {
    const { node: node_0, children, ...props_0 } = t0;
    const align_0 = node_0?.properties?.align;
    const hasOnlyImages = node_0?.children?.every(_ProjectCard7AnonymousAnonymous);
    if (align_0 === "center" || hasOnlyImages) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                textAlign: "center",
                display: "block"
            },
            ...props_0,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 445,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ...props_0,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectCard7.tsx",
        lineNumber: 450,
        columnNumber: 10
    }, this);
}
function _ProjectCard7AnonymousAnonymous(child) {
    return child.tagName === "img" || child.type === "text" && child.value.trim() === "";
}
function _temp(t0) {
    const { node, ...props } = t0;
    const align = node?.properties?.align;
    if (align === "center") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: "center"
            },
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard7.tsx",
            lineNumber: 462,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectCard7.tsx",
        lineNumber: 466,
        columnNumber: 10
    }, this);
}
function _ProjectCard7Anonymous3(t) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-sm rounded px-2 py-0.5",
        style: {
            color: "#a5b4fc",
            background: "rgba(98,126,234,0.08)",
            fontFamily: "monospace"
        },
        children: t
    }, t, false, {
        fileName: "[project]/src/components/ProjectCard7.tsx",
        lineNumber: 469,
        columnNumber: 10
    }, this);
}
function _ProjectCard7Anonymous2(f) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded-md px-2 py-1",
        style: {
            color: "#627EEA",
            border: "1px solid rgba(98,126,234,0.2)",
            background: "rgba(98,126,234,0.05)",
            fontFamily: "monospace"
        },
        children: f
    }, f, false, {
        fileName: "[project]/src/components/ProjectCard7.tsx",
        lineNumber: 476,
        columnNumber: 10
    }, this);
}
function _ProjectCard7Anonymous(m) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl p-3 flex flex-col gap-1",
        style: {
            background: "rgba(98,126,234,0.05)",
            border: "1px solid rgba(98,126,234,0.1)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs",
                style: {
                    color: "#627EEA",
                    fontFamily: "monospace"
                },
                children: m.label
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard7.tsx",
                lineNumber: 487,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl font-light",
                style: {
                    fontFamily: "monospace",
                    color: "#a5b4fc"
                },
                children: m.value
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard7.tsx",
                lineNumber: 490,
                columnNumber: 24
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs",
                style: {
                    color: "#475569",
                    fontFamily: "monospace"
                },
                children: m.sub
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard7.tsx",
                lineNumber: 493,
                columnNumber: 24
            }, this)
        ]
    }, m.label, true, {
        fileName: "[project]/src/components/ProjectCard7.tsx",
        lineNumber: 484,
        columnNumber: 10
    }, this);
}
function _ProjectCard7AOnMouseLeave(e_0) {
    return e_0.currentTarget.style.color = "#94a3b8";
}
function _ProjectCard7AOnMouseEnter(e) {
    return e.currentTarget.style.color = "#a5b4fc";
}
function _ProjectCard7UseEffectAnonymous(res) {
    return res.text();
}
var _c;
__turbopack_context__.k.register(_c, "ProjectCard7");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectCard8.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard8
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rehype-raw/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$math$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-math/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$katex$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rehype-katex/lib/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
function ProjectCard8() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(36);
    if ($[0] !== "9a7b5989755feab34cfbecbc78c66f001ab717369d7140ed85eb7cc2b04fa61e") {
        for(let $i = 0; $i < 36; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9a7b5989755feab34cfbecbc78c66f001ab717369d7140ed85eb7cc2b04fa61e";
    }
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [readme, setReadme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [lightbox, setLightbox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ProjectCard8[useEffect()]": ()=>{
                fetch("/readme/README8.md").then(_ProjectCard8UseEffectAnonymous).then({
                    "ProjectCard8[useEffect() > (anonymous)()]": (text)=>setReadme(text)
                }["ProjectCard8[useEffect() > (anonymous)()]"]);
            }
        })["ProjectCard8[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            y: -4,
            boxShadow: "0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)"
        };
        t3 = {
            duration: 0.25
        };
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs px-2 py-0.5 rounded-full font-medium text-zinc-400",
            style: {
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)"
            },
            children: "AI Research"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard8.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs px-2 py-0.5 rounded-full font-medium text-zinc-400",
            style: {
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)"
            },
            children: "Deep Learning"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard8.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 mb-1",
            children: [
                t4,
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs px-2 py-0.5 rounded-full font-medium text-zinc-400",
                    style: {
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.08)"
                    },
                    children: "NumPy Only"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard8.tsx",
                    lineNumber: 80,
                    columnNumber: 64
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard8.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-medium text-zinc-300",
                    style: {
                        fontFamily: "Georgia, serif"
                    },
                    children: "Neural Network from Scratch \u2014 XOR & MNIST"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard8.tsx",
                    lineNumber: 90,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base text-zinc-500",
                    children: "Pure NumPy neural network — forward pass, backprop, and training implemented from first principles"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard8.tsx",
                    lineNumber: 92,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard8.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row items-start gap-3 sm:gap-0 justify-between",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://github.com/roybeey0/neural-network-scratch",
                    target: "_blank",
                    className: "flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 rounded-lg px-3 py-1.5 shrink-0 sm:ml-4 transition-colors border border-white/5 hover:border-white/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "13",
                            height: "13",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCard8.tsx",
                                    lineNumber: 99,
                                    columnNumber: 539
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M9 18c-4.51 2-5-2-7-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectCard8.tsx",
                                    lineNumber: 99,
                                    columnNumber: 800
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectCard8.tsx",
                            lineNumber: 99,
                            columnNumber: 359
                        }, this),
                        "View on GitHub"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProjectCard8.tsx",
                    lineNumber: 99,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard8.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
            children: [
                {
                    label: "MNIST Accuracy",
                    value: "98.43%",
                    sub: "Test set"
                },
                {
                    label: "XOR Accuracy",
                    value: "100%",
                    sub: "Perfect solve"
                },
                {
                    label: "Training Time",
                    value: "1.8min",
                    sub: "CPU only"
                },
                {
                    label: "Parameters",
                    value: "234K",
                    sub: "Pure NumPy"
                }
            ].map(_ProjectCard8Anonymous)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard8.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    let t11;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "ProjectCard8[<div>.onClick]": ()=>setLightbox(true)
        })["ProjectCard8[<div>.onClick]"];
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/nn_charts/06_per_class_accuracy.png",
            alt: "Per Class Accuracy",
            className: "w-full object-contain max-h-72"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard8.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[11] = t10;
        $[12] = t11;
    } else {
        t10 = $[11];
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative rounded-xl overflow-hidden cursor-zoom-in group bg-black/30 border border-white/5",
                onClick: t10,
                children: [
                    t11,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm px-4 py-2 rounded-xl backdrop-blur-sm items-center gap-2 bg-black/70 text-zinc-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "11",
                                                cy: "11",
                                                r: "8"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectCard8.tsx",
                                                lineNumber: 142,
                                                columnNumber: 611
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m21 21-4.35-4.35"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectCard8.tsx",
                                                lineNumber: 142,
                                                columnNumber: 643
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M11 8v6M8 11h6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectCard8.tsx",
                                                lineNumber: 142,
                                                columnNumber: 672
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectCard8.tsx",
                                        lineNumber: 142,
                                        columnNumber: 431
                                    }, this),
                                    "Click to expand"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectCard8.tsx",
                                lineNumber: 142,
                                columnNumber: 242
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:hidden absolute top-2 left-2 text-xs px-2 py-1 rounded-md backdrop-blur-sm flex items-center gap-1.5 bg-black/70 text-zinc-300",
                                children: "Tap to expand"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectCard8.tsx",
                                lineNumber: 142,
                                columnNumber: 726
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectCard8.tsx",
                        lineNumber: 142,
                        columnNumber: 175
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-2 right-2 text-xs px-2 py-1 rounded-md backdrop-blur-sm bg-black/60 text-zinc-400",
                        children: "Per Class Accuracy"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectCard8.tsx",
                        lineNumber: 142,
                        columnNumber: 898
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectCard8.tsx",
                lineNumber: 142,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard8.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2 text-sm",
            children: [
                "Backpropagation",
                "XOR Problem",
                "MNIST Classification",
                "SGD + Momentum",
                "Dropout",
                "He Initialisation",
                "ReLU + Softmax",
                "No ML Libraries",
                "Decision Boundary"
            ].map(_ProjectCard8Anonymous2)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard8.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 flex-wrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-zinc-600",
                    children: "Stack:"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard8.tsx",
                    lineNumber: 156,
                    columnNumber: 62
                }, this),
                [
                    "Python 3.10",
                    "NumPy",
                    "Matplotlib",
                    "Seaborn",
                    "MNIST Dataset"
                ].map(_ProjectCard8Anonymous3)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard8.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] !== open || $[17] !== readme) {
        t15 = open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-white/5 pt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "markdown-body",
                style: {
                    backgroundColor: "transparent",
                    fontSize: "15px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                    remarkPlugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$math$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                    ],
                    rehypePlugins: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$raw$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$katex$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                    ],
                    components: {
                        div: _temp,
                        p: _temp2
                    },
                    children: readme
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard8.tsx",
                    lineNumber: 166,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard8.tsx",
                lineNumber: 163,
                columnNumber: 65
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard8.tsx",
            lineNumber: 163,
            columnNumber: 19
        }, this);
        $[16] = open;
        $[17] = readme;
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] !== open) {
        t16 = ({
            "ProjectCard8[<button>.onClick]": ()=>setOpen(!open)
        })["ProjectCard8[<button>.onClick]"];
        $[19] = open;
        $[20] = t16;
    } else {
        t16 = $[20];
    }
    const t17 = open ? "rotate(180deg)" : "rotate(0deg)";
    let t18;
    if ($[21] !== t17) {
        t18 = {
            transform: t17,
            transition: "transform 0.2s"
        };
        $[21] = t17;
        $[22] = t18;
    } else {
        t18 = $[22];
    }
    let t19;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m6 9 6 6 6-6"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard8.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[23] = t19;
    } else {
        t19 = $[23];
    }
    let t20;
    if ($[24] !== t18) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: t18,
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard8.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[24] = t18;
        $[25] = t20;
    } else {
        t20 = $[25];
    }
    const t21 = open ? "Show Less" : "Read More";
    let t22;
    if ($[26] !== t16 || $[27] !== t20 || $[28] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t16,
            className: "flex items-center gap-1.5 text-sm w-fit text-zinc-500 hover:text-zinc-300 rounded-lg px-3 py-1.5 transition-colors border border-white/5 hover:border-white/10",
            children: [
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard8.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[26] = t16;
        $[27] = t20;
        $[28] = t21;
        $[29] = t22;
    } else {
        t22 = $[29];
    }
    let t23;
    if ($[30] !== lightbox) {
        t23 = lightbox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm",
            style: {
                background: "rgba(0,0,0,0.92)"
            },
            onClick: {
                "ProjectCard8[<div>.onClick]": ()=>setLightbox(false)
            }["ProjectCard8[<div>.onClick]"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/nn_charts/06_per_class_accuracy.png",
                    alt: "Per Class Accuracy",
                    className: "max-w-full max-h-full object-contain rounded-xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard8.tsx",
                    lineNumber: 230,
                    columnNumber: 39
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "absolute top-4 right-4 text-2xl text-zinc-400",
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectCard8.tsx",
                    lineNumber: 230,
                    columnNumber: 174
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard8.tsx",
            lineNumber: 226,
            columnNumber: 23
        }, this);
        $[30] = lightbox;
        $[31] = t23;
    } else {
        t23 = $[31];
    }
    let t24;
    if ($[32] !== t15 || $[33] !== t22 || $[34] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "rounded-2xl bg-[#141414] border border-white/5 p-6 flex flex-col gap-4 transition-colors",
            whileHover: t2,
            transition: t3,
            children: [
                t8,
                t9,
                t12,
                t13,
                t14,
                t15,
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard8.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[32] = t15;
        $[33] = t22;
        $[34] = t23;
        $[35] = t24;
    } else {
        t24 = $[35];
    }
    return t24;
}
_s(ProjectCard8, "TtN/GLUKo008/x7AMZOcwCxh0AM=");
_c = ProjectCard8;
function _temp2(t0) {
    const { node: node_0, children, ...props_0 } = t0;
    const align_0 = node_0?.properties?.align;
    const hasOnlyImages = node_0?.children?.every(_ProjectCard8AnonymousAnonymous);
    if (align_0 === "center" || hasOnlyImages) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                textAlign: "center",
                display: "block"
            },
            ...props_0,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard8.tsx",
            lineNumber: 257,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ...props_0,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectCard8.tsx",
        lineNumber: 262,
        columnNumber: 10
    }, this);
}
function _ProjectCard8AnonymousAnonymous(child) {
    return child.tagName === "img" || child.type === "text" && child.value.trim() === "";
}
function _temp(t0) {
    const { node, ...props } = t0;
    const align = node?.properties?.align;
    if (align === "center") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: "center"
            },
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard8.tsx",
            lineNumber: 274,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectCard8.tsx",
        lineNumber: 278,
        columnNumber: 10
    }, this);
}
function _ProjectCard8Anonymous3(t) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-sm rounded px-2 py-0.5 text-zinc-400 bg-white/[0.04]",
        children: t
    }, t, false, {
        fileName: "[project]/src/components/ProjectCard8.tsx",
        lineNumber: 281,
        columnNumber: 10
    }, this);
}
function _ProjectCard8Anonymous2(f) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded-md px-2 py-1 text-zinc-500 border border-white/5",
        children: f
    }, f, false, {
        fileName: "[project]/src/components/ProjectCard8.tsx",
        lineNumber: 284,
        columnNumber: 10
    }, this);
}
function _ProjectCard8Anonymous(m) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl p-3 flex flex-col gap-1 bg-white/[0.03] border border-white/5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-zinc-600",
                children: m.label
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard8.tsx",
                lineNumber: 287,
                columnNumber: 114
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl font-light text-zinc-300",
                style: {
                    fontFamily: "Georgia, serif"
                },
                children: m.value
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard8.tsx",
                lineNumber: 287,
                columnNumber: 170
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-zinc-600",
                children: m.sub
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectCard8.tsx",
                lineNumber: 289,
                columnNumber: 24
            }, this)
        ]
    }, m.label, true, {
        fileName: "[project]/src/components/ProjectCard8.tsx",
        lineNumber: 287,
        columnNumber: 10
    }, this);
}
function _ProjectCard8UseEffectAnonymous(res) {
    return res.text();
}
var _c;
__turbopack_context__.k.register(_c, "ProjectCard8");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectCard2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectCard2.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectCard3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectCard3.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectCard4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectCard4.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectCard5$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectCard5.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectCard6$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectCard6.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectCard7$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectCard7.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectCard8$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectCard8.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
function Home() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "a72c51878f62816f1d8c1d1e9c7624c38164bd781e7e296340676d16b81ed9a4") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a72c51878f62816f1d8c1d1e9c7624c38164bd781e7e296340676d16b81ed9a4";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
            children: "\n        .thumb-scroll::-webkit-scrollbar { height: 3px; }\n        .thumb-scroll::-webkit-scrollbar-track { background: transparent; }\n        .thumb-scroll::-webkit-scrollbar-thumb { background: #2a2a2a; border-radius: 999px; }\n        .thumb-scroll::-webkit-scrollbar-thumb:hover { background: #3a3a3a; }\n      "
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-28 h-28 md:w-85 md:h-85 rounded-full overflow-hidden border-2 border-white/10 shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/profile.webp",
                alt: "Profile",
                className: "w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 29,
                columnNumber: 116
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-zinc-400 text-3xl sm:text-4xl md:text-6xl font-light tracking-wide",
            style: {
                fontFamily: "Georgia, serif"
            },
            children: "Raphael Roybee Salim"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center justify-center md:justify-start gap-2 text-zinc-600 text-sm md:text-base",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontFamily: "Georgia, serif"
                    },
                    children: "University of Surabaya (UBAYA)"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 45,
                    columnNumber: 128
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-zinc-700 hidden sm:inline",
                    children: "|"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 47,
                    columnNumber: 47
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontFamily: "Georgia, serif"
                    },
                    children: "Data Science & Artificial Intelligence"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 47,
                    columnNumber: 104
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "mailto:roybeey0@gmail.com",
            className: "flex items-center gap-1.5 text-zinc-600 hover:text-zinc-400 transition-colors",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            width: "20",
                            height: "16",
                            x: "2",
                            y: "4",
                            rx: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 57,
                            columnNumber: 316
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 57,
                            columnNumber: 366
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 57,
                    columnNumber: 136
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "hidden md:inline",
                    children: "roybeey0@gmail.com"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 57,
                    columnNumber: 426
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-zinc-700 hidden md:inline",
            children: "|"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://instagram.com/roybeey",
            target: "_blank",
            className: "flex items-center gap-1.5 text-zinc-600 hover:text-zinc-400 transition-colors",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            width: "20",
                            height: "20",
                            x: "2",
                            y: "2",
                            rx: "5",
                            ry: "5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 68,
                            columnNumber: 336
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 68,
                            columnNumber: 393
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "17.5",
                            x2: "17.51",
                            y1: "6.5",
                            y2: "6.5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 68,
                            columnNumber: 453
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 68,
                    columnNumber: 156
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "hidden md:inline",
                    children: "roybeey"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 68,
                    columnNumber: 506
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-zinc-700 hidden md:inline",
            children: "|"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[7] = t6;
        $[8] = t7;
    } else {
        t6 = $[7];
        t7 = $[8];
    }
    let t8;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://github.com/roybeey0",
            target: "_blank",
            className: "flex items-center gap-1.5 text-zinc-600 hover:text-zinc-400 transition-colors",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 79,
                            columnNumber: 334
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M9 18c-4.51 2-5-2-7-2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 79,
                            columnNumber: 595
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 79,
                    columnNumber: 154
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "hidden md:inline",
                    children: "roybeey0"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 79,
                    columnNumber: 635
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-zinc-700 hidden md:inline",
            children: "|"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[9] = t8;
        $[10] = t9;
    } else {
        t8 = $[9];
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm md:text-base",
            children: [
                t4,
                t5,
                t6,
                t7,
                t8,
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://www.linkedin.com/in/raphael-roybee-salim-47bbaa3b5",
                    target: "_blank",
                    className: "flex items-center gap-1.5 text-zinc-600 hover:text-zinc-400 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 494
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    width: "4",
                                    height: "12",
                                    x: "2",
                                    y: "9"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 585
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "4",
                                    cy: "4",
                                    r: "2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 627
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 89,
                            columnNumber: 314
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden md:inline",
                            children: "Raphael Roybee Salim"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 89,
                            columnNumber: 663
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 89,
                    columnNumber: 139
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 89,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row items-center gap-6 md:gap-8 pb-6 md:pb-8 border-b border-white/5 md:justify-center",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 items-center md:items-start text-center md:text-left",
                    children: [
                        t2,
                        t3,
                        t10,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 flex-wrap justify-center md:justify-start mt-1",
                            children: [
                                "Python",
                                "Machine Learning",
                                "Deep Learning",
                                "Pandas",
                                "Numpy",
                                "TensorFlow",
                                "Next.js"
                            ].map(_HomeAnonymous)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 96,
                            columnNumber: 244
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 96,
                    columnNumber: 141
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 96,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 md:mt-8 flex flex-col gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-zinc-500 text-xs uppercase tracking-widest",
                    style: {
                        fontFamily: "Georgia, serif"
                    },
                    children: "Projects"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 103,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 105,
                    columnNumber: 23
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectCard2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 105,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectCard3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 105,
                    columnNumber: 54
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectCard4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 105,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectCard5$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 105,
                    columnNumber: 86
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectCard6$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 105,
                    columnNumber: 102
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectCard7$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 105,
                    columnNumber: 118
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectCard8$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 105,
                    columnNumber: 134
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            fontFamily: "Georgia, serif"
        };
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-h-screen bg-[#0f0f0f] flex flex-col items-center py-6 px-4 md:py-10 md:px-6 overflow-x-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-[1300px] h-fit rounded-2xl md:rounded-3xl bg-[#1a1a1a] shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.06)] p-6 md:p-10 overflow-hidden",
                        children: [
                            t11,
                            t12,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 pt-6 border-t border-white/5 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-zinc-400 text-sm md:text-base",
                                    style: t13,
                                    children: [
                                        "© ",
                                        new Date().getFullYear(),
                                        " Raphael Roybee Salim. All rights reserved."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 388
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 121,
                                columnNumber: 325
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 121,
                        columnNumber: 132
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 121,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    return t14;
}
_c = Home;
function _HomeAnonymous(skill) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-zinc-600 text-xs border border-white/5 rounded-full px-3 py-1 hover:border-white/10 hover:text-zinc-400 transition-colors cursor-default",
        children: skill
    }, skill, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 129,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_f61e54b9._.js.map