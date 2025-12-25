"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Check,
    Loader2,
    GitBranch,
    Calendar,
    Server,
    Lock,
    Clock,
    ChevronRight,
    ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";
import { NODES } from "@/data/experiences-career-pipeline";

type NodeType = 'serial' | 'top' | 'bottom';

interface NodeData {
    id: string;
    stage: number;
    type: NodeType;
    label: string;
    title: string;
    date: string;
    status: 'success' | 'processing' | 'pending';
    link?: string;
    logs: string[];
}

const CONFIG = {
    colWidth: 120,
    rowHeight: 60,
    baseY: 80,
    markerRadius: 18,
    colors: {
        success: "#52c41a",
        running: "#1890ff",
        pending: "#8c8c8c",
        line: "#4a4a4a",
        white: "#ffffff"
    }
};

export function CareerPipeline() {
    const [activeNode, setActiveNode] = useState(NODES[NODES.length - 2]);
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const targetDate = new Date("2026-05-25T00:00:00");
        const interval = setInterval(() => {
            const now = new Date();
            const diff = targetDate.getTime() - now.getTime();
            if (diff <= 0) {
                setTimeLeft("Unlocked");
                clearInterval(interval);
            } else {
                const d = Math.floor(diff / (1000 * 60 * 60 * 24));
                const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                setTimeLeft(`${d}d ${h}h ${m}m`);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const getNodePosition = (node: NodeData) => {
        const x = 50 + (node.stage * CONFIG.colWidth);
        let y = CONFIG.baseY;
        if (node.type === 'top') y -= 40;
        if (node.type === 'bottom') y += 40;
        return { x, y };
    };

    const pathString = useMemo(() => {
        let d = "";
        const maxStage = Math.max(...NODES.map(n => n.stage));

        for (let i = 0; i < maxStage; i++) {
            const currentNodes = NODES.filter(n => n.stage === i);
            const nextNodes = NODES.filter(n => n.stage === i + 1);

            currentNodes.forEach(src => {
                const srcPos = getNodePosition(src);

                nextNodes.forEach(dst => {
                    const dstPos = getNodePosition(dst);
                    let drawConnection = false;

                    if (src.type === 'serial' && dst.type === 'serial') drawConnection = true;
                    else if (src.type === 'serial') drawConnection = true;
                    else if (dst.type === 'serial') drawConnection = true;
                    else if (src.type === dst.type) drawConnection = true;

                    if (drawConnection) {
                        if (d === "") d += `M ${srcPos.x} ${srcPos.y}`;
                        else d += ` M ${srcPos.x} ${srcPos.y}`;

                        const midX = (srcPos.x + dstPos.x) / 2;
                        d += ` L ${midX} ${srcPos.y}`;
                        d += ` L ${midX} ${dstPos.y}`;
                        d += ` L ${dstPos.x} ${dstPos.y}`;
                    }
                });
            });
        }
        return d;
    }, []);

    const totalStages = 9;
    const viewBoxWidth = 50 + (totalStages * CONFIG.colWidth);
    const viewBoxHeight = 160;

    return (
        <section className="w-full max-w-7xl px-4 py-20 mx-auto font-sans" id="pipeline">
            <div className="flex flex-col gap-4 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
                    <GitBranch className="text-[#1890ff]" size={32} />
                    <span>career_pipeline</span>
                </h2>
                <p className="text-gray-400 font-mono text-sm">
                </p>
            </div>

            <div className="w-full bg-[#1e1e1e] rounded-t-lg border border-white/10 p-4 md:p-8 overflow-hidden">
                <div className="w-full">
                    <svg
                        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
                        className="w-full h-auto select-none"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            <linearGradient id="line-progress" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor={CONFIG.colors.success} />
                                <stop offset="50%" stopColor={CONFIG.colors.success} />
                                <stop offset="65%" stopColor={CONFIG.colors.running} />
                                <stop offset="70%" stopColor={CONFIG.colors.success} />
                                <stop offset="85%" stopColor={CONFIG.colors.running} />
                                <stop offset="100%" stopColor={CONFIG.colors.white} />
                            </linearGradient>
                        </defs>

                        <path
                            d={pathString}
                            fill="none"
                            stroke={CONFIG.colors.line}
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <motion.path
                            d={pathString}
                            fill="none"
                            stroke="url(#line-progress)"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ strokeDasharray: "10 5", strokeDashoffset: 0 }}
                            animate={{
                                strokeDashoffset: -200
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />

                        {NODES.map((node) => {
                            const pos = getNodePosition(node);
                            const isActive = activeNode.id === node.id;
                            const isProcessing = node.status === "processing";
                            const isPending = node.status === "pending";

                            let strokeColor = CONFIG.colors.success;
                            if (isProcessing) strokeColor = CONFIG.colors.running;
                            if (node.id === "grad") strokeColor = CONFIG.colors.white;
                            else if (isPending) strokeColor = CONFIG.colors.pending;

                            return (
                                <g
                                    key={node.id}
                                    onClick={() => setActiveNode(node)}
                                    className="cursor-pointer group"
                                >
                                    <circle cx={pos.x} cy={pos.y} r={30} fill="transparent" />

                                    <circle
                                        cx={pos.x}
                                        cy={pos.y}
                                        r={CONFIG.markerRadius}
                                        fill={isProcessing || isPending ? "#1e1e1e" : CONFIG.colors.success}
                                        stroke={strokeColor}
                                        strokeWidth="3"
                                        className={cn(
                                            "transition-all duration-300",
                                            isActive && "stroke-[3px] shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                                        )}
                                    />

                                    {isActive && (
                                        <circle cx={pos.x} cy={pos.y} r={CONFIG.markerRadius + 4} fill="none" stroke="white" strokeWidth="2" />
                                    )}

                                    <foreignObject x={pos.x - 9} y={pos.y - 9} width="18" height="18">
                                        <div className="flex items-center justify-center w-full h-full">
                                            {isProcessing ? (
                                                <Loader2 size={18} className="text-[#1890ff] animate-spin" />
                                            ) : isPending ? (
                                                <div className={cn("w-2.5 h-2.5 rounded-full", node.id === "grad" ? "bg-white" : "bg-gray-500")} />
                                            ) : (
                                                <Check size={16} className="text-[#1e1e1e] stroke-[4px]" />
                                            )}
                                        </div>
                                    </foreignObject>

                                    <text
                                        x={pos.x}
                                        y={pos.y - 28}
                                        textAnchor="middle"
                                        fill={isActive ? "white" : "#6b7280"}
                                        className="text-[10px] md:text-xs font-bold font-mono uppercase tracking-wide transition-colors"
                                    >
                                        {node.label}
                                    </text>
                                </g>
                            );
                        })}
                    </svg>
                </div>
            </div>

            <div className="bg-[#141414] border-x border-b border-white/10 rounded-b-lg overflow-hidden shadow-2xl mx-auto">
                <div className="bg-[#262626] px-6 py-4 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-4">
                        <div className={cn(
                            "p-2 rounded-full border-2",
                            activeNode.status === "processing" ? "border-[#1890ff] text-[#1890ff]" :
                                activeNode.status === "pending" ? "border-gray-600 text-gray-600" : "border-[#52c41a] text-[#52c41a]"
                        )}>
                            {activeNode.status === "processing" ? <Loader2 className="animate-spin" size={18} /> :
                                activeNode.status === "pending" ? <Lock size={18} /> : <Check size={18} strokeWidth={3} />}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                                {activeNode.title}
                                <span className="text-[10px] font-normal text-gray-500 border border-gray-600 px-1.5 py-0.5 rounded ml-2">
                                    #{activeNode.id.toUpperCase()}
                                </span>
                            </h3>
                            <div className="flex items-center gap-4 text-xs text-gray-500 font-medium mt-1">
                                <span className="flex items-center gap-1"><Calendar size={12} /> {activeNode.date}</span>
                                <span className="flex items-center gap-1">
                                    <Server size={12} />
                                    {activeNode.status === 'processing' ? 'Building...' : activeNode.status === 'pending' ? 'Queued' : 'Success'}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex gap-2 text-xs font-mono text-gray-500">
                        <span>commit: 8f4d2a</span>
                        <span>|</span>
                        <span>branch: master</span>
                    </div>
                </div>

                <div className="p-6 font-mono text-sm bg-[#0d0d0d] min-h-[220px] text-gray-300 relative">
                    <div className="absolute top-0 left-0 bottom-0 w-12 bg-[#1a1a1a] border-r border-white/5 flex flex-col items-end pr-3 pt-6 text-gray-600 select-none text-xs leading-6">
                        {Array.from({ length: 7 }).map((_, i) => <div key={i}>{i + 1}</div>)}
                    </div>

                    <div className="pl-10 space-y-1.5 leading-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeNode.id}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                {activeNode.logs.map((log, i) => (
                                    <div key={i} className="group flex items-start hover:bg-white/5 -ml-4 pl-4 rounded">
                                        <span className={cn(
                                            "break-words w-full",
                                            log.includes("[INFO]") && "text-blue-400",
                                            log.includes("[RUN]") && "text-yellow-400",
                                            log.includes("[AWS]") && "text-[#ff9900]",
                                            log.includes("[PROD]") && "text-purple-400 font-bold",
                                            log.includes("[SUCCESS]") && "text-green-400",
                                            log.includes("[PASS]") && "text-green-400",
                                            log.includes("[OK]") && "text-green-400",
                                            log.includes("[PENDING]") && "text-gray-500 italic",
                                            log.includes("[WAIT]") && "text-blue-300 animate-pulse",
                                            log.startsWith(">") && "text-gray-400 pl-4 border-l-2 border-white/10 ml-1"
                                        )}>
                                            {log}
                                        </span>
                                    </div>
                                ))}

                                {activeNode.status === "processing" && (
                                    <div className="flex gap-2 items-center mt-4 pl-1 animate-pulse text-[#1890ff]">
                                        <span className="w-1.5 h-3 bg-[#1890ff] block" />
                                        <span className="text-xs">Processing steps...</span>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {activeNode.id === "grad" ? (
                    <div className="bg-[#262626] border-t border-white/5 p-4">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-black/40 rounded text-gray-500"><Lock size={16} /></div>
                                <div>
                                    <div className="text-sm font-bold text-gray-300">Promotion Locked</div>
                                    <div className="text-xs text-gray-500 font-mono">Unlock Date: 2026-05-25</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 w-full sm:w-auto">
                                <div className="text-xs font-mono text-gray-500 bg-black/30 px-3 py-1.5 rounded border border-white/5 flex items-center gap-2 flex-1 sm:flex-initial justify-center">
                                    <Clock size={12} />
                                    <span>T-MINUS:</span>
                                    <span className="text-[#1890ff] font-bold">{timeLeft}</span>
                                </div>
                                <button disabled className="bg-[#303030] text-gray-500 text-xs font-bold px-4 py-2 rounded cursor-not-allowed opacity-70 flex items-center gap-2">
                                    PROCEED <ChevronRight size={12} />
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-[#262626] border-t border-white/5 p-3 flex justify-between items-center">
                        <div className="px-3 py-1 bg-[#52c41a]/10 text-[#52c41a] text-xs font-bold rounded border border-[#52c41a]/20 flex items-center gap-2">
                            <Check size={12} strokeWidth={3} />
                            BUILD SUCCESS
                        </div>

                        {activeNode.link && (
                            <Link
                                href={activeNode.link}
                                className="flex items-center gap-2 px-4 py-1.5 bg-[#1890ff] hover:bg-[#1890ff]/90 text-white text-xs font-bold rounded transition-colors shadow-lg shadow-blue-900/20"
                            >
                                CHECK LOGS
                                <ExternalLink size={12} />
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}