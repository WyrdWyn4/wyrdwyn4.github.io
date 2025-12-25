"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    FolderOpen,
    FileCode,
    Cpu,
    ChevronDown,
    X,
    ArrowUpRight,
    ImageIcon,
    Coffee,
    Hash,
    Code2,
    Maximize2,
    Plane,
    FileJson,
    BookOpen,
    Database,
    Sigma
} from "lucide-react";
import { WORK_TERMS, ADDITIONAL_EXPERIENCE, EXPERIENCE } from "@/data/experiences-ide";
import { cn } from "@/lib/utils";

const toSlug = (name: string) => name.toLowerCase().replace('&', "and").replace(/ /g, "-").replace(/,/g, "");

const getFileInfo = (index: number, companyName: string, role: string) => {
    const companySlug = toSlug(companyName);

    if (companyName.includes("Nasdaq") && role.includes("AI")) {
        return { name: "nasdaq-verafin.java", lang: "Java", icon: <Coffee size={14} className="text-red-400" /> };
    }
    if (companyName.includes("Nasdaq") && role.includes("Datalake")) {
        return { name: "nasdaq-verafin.scala", lang: "Scala", icon: <Hash size={14} className="text-green-400" /> };
    }
    if (companyName.includes("SDP")) {
        return { name: "sdp-gp.js", lang: "JavaScript", icon: <Cpu size={14} className="text-yellow-500" /> };
    }
    if (companyName.includes("Memorial") && role.includes("Robotics")) {
        return { name: "memorial-university.cpp", lang: "C++", icon: <Cpu size={14} className="text-blue-500" /> };
    }
    if (companyName.includes("Valiant")) {
        return { name: "valiant-aerotech.lua", lang: "Lua", icon: <Plane size={14} className="text-purple-500" /> };
    }
    if (companyName.includes("Memorial") && role.includes("Scientific")) {
        return { name: "memorial-university.ipynb", lang: "Python", icon: <BookOpen size={14} className="text-orange-400" /> };
    }
    if (companyName.includes("SiftMed")) {
        return { name: "siftmed.sql", lang: "SQL", icon: <FileJson size={14} className="text-teal-400" /> };
    }
    if (companyName.includes("Memorial") && role.includes("Quality")) {
        return { name: "memorial-university-diag.m", lang: "MATLAB", icon: <Hash size={14} className="text-indigo-400" /> };
    }
    if (companyName.includes("Memorial") && role.includes("ISWEP")) {
        return { name: "memorial-university-iswep.r", lang: "R", icon: <Hash size={14} className="text-pink-300" /> };
    }

    return { name: `${companySlug}.txt`, lang: 'Plain Text', icon: <FileCode size={14} className="text-white-400" /> };
};

function ExperienceImage({
    src,
    alt,
    iconSize = 32,
    onClick
}: {
    src: string;
    alt: string;
    iconSize?: number;
    onClick?: () => void;
}) {
    const [error, setError] = useState(false);

    useEffect(() => {
        setError(false);
    }, [src]);

    if (error) {
        return (
            <div className="flex items-center justify-center w-full h-full bg-gray-800/50 pointer-events-none">
                <ImageIcon className="text-gray-600 group-hover:scale-110 transition-transform duration-500" size={iconSize} />
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            fill
            className={cn(
                "object-cover group-hover:scale-110 transition-transform duration-700",
                onClick && "cursor-zoom-in"
            )}
            onError={() => setError(true)}
            onClick={onClick}
        />
    );
}

const buttonColors: Record<string, string> = {
    red: "bg-red-600 hover:bg-red-700",
    green: "bg-green-600 hover:bg-green-700",
    yellow: "bg-yellow-500 hover:bg-yellow-600",
    blue: "bg-blue-600 hover:bg-blue-700",
    purple: "bg-purple-600 hover:bg-purple-700",
    orange: "bg-orange-500 hover:bg-orange-600",
    teal: "bg-teal-600 hover:bg-teal-700",
    indigo: "bg-indigo-600 hover:bg-indigo-700",
    pink: "bg-pink-600 hover:bg-pink-700",
};

export function IdeExperience() {
    const [activeJobIndex, setActiveJobIndex] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [mobileView, setMobileView] = useState<'code' | 'preview'>('code');
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({
        "workterm": true,
        "additional": true
    });

    const toggleFolder = (folder: string) => {
        setOpenFolders(prev => ({ ...prev, [folder]: !prev[folder] }));
    };

    const activeJob = EXPERIENCE[activeJobIndex];
    const activeFileInfo = getFileInfo(activeJobIndex, activeJob.company, activeJob.role);

    const activeSlug = toSlug(activeJob.company) + "/" + toSlug(activeJob.role);
    const imageBasePath = `/media/${activeJob.type}/${activeSlug}`;

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setLightboxSrc(null);
        };
        if (lightboxSrc) window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxSrc]);

    const renderCodeContent = (index: number, job: typeof EXPERIENCE[0]) => {

        if (job.company.includes("Nasdaq") && job.role.includes("AI")) return (
            <div className="font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                <span className="text-orange-400">package</span> <span className="text-white">com.nasdaq.verafin.ai;</span><br /><br />
                <span className="text-gray-500">// Current Role: AI & Automation Developer</span><br />
                <span className="text-orange-400">public class</span> <span className="text-yellow-300">FeedbackAgent</span> <span className="text-orange-400">extends</span> <span className="text-white">MoEService</span> <span className="text-white">{`{`}</span><br />
                <div className="pl-4 md:pl-8 border-l border-white/5 ml-1">
                    <span className="text-orange-400">private final</span> <span className="text-blue-400">String</span> <span className="text-white">MODEL = </span> <span className="text-green-400">"WMK-4-Sher"</span>;<br /><br />
                    <span className="text-orange-400">public</span> <span className="text-blue-400">Feedback</span> <span className="text-yellow-300">generateReview</span><span className="text-white">(CodeContext ctx) {`{`}</span><br />
                    <div className="pl-4">
                        <span className="text-gray-500">// Orchestrating multiple specialized agents</span><br />
                        <span className="text-white">var riskScore = </span><span className="text-white">RiskAgent.evaluate(ctx);</span><br />
                        <span className="text-white">var quality = </span><span className="text-white">QA_Agent.inspect(ctx);</span><br /><br />
                        <span className="text-purple-400">if</span> <span className="text-white">(riskScore &gt; 0.8) {`{`}</span><br />
                        <div className="pl-4">
                            <span className="text-white">return </span><span className="text-orange-400">new</span> <span className="text-white">Feedback(</span><span className="text-green-400">"High Risk Detected"</span><span className="text-white">);</span>
                        </div>
                        <span className="text-white">{'}'}</span>
                    </div>
                    <span className="text-white">{'}'}</span>
                </div>
                <span className="text-white">{'}'}</span>
            </div>
        );

        if (job.company.includes("Nasdaq") && job.role.includes("Datalake")) return (
            <div className="font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                <span className="text-gray-500">// Term 1 (Summer '24): Initial Pipeline Development</span><br />
                <span className="text-gray-500">// Term 2 (Jan-Aug '25): Step Functions & Optimization</span><br /><br />
                <span className="text-orange-400">import</span> <span className="text-white">org.apache.spark.sql.functions._</span><br /><br />
                <span className="text-orange-400">object</span> <span className="text-yellow-300">DataLakeIngestion</span> <span className="text-white">{`{`}</span><br />
                <div className="pl-4 md:pl-8 border-l border-white/5 ml-1">
                    <span className="text-orange-400">def</span> <span className="text-yellow-300">processTelemetry</span><span className="text-white">(df: DataFrame): DataFrame = {`{`}</span><br />
                    <div className="pl-4">
                        <span className="text-gray-500">// Implemented database splitting logic</span><br />
                        <span className="text-orange-400">val</span> <span className="text-white">partitioned = df.withColumn(</span><span className="text-green-400">"region"</span><span className="text-white">, split_col(col(</span><span className="text-green-400">"source"</span><span className="text-white">)))</span><br /><br />
                        <span className="text-gray-500">// Validation via Spark & AWS Glue</span><br />
                        <span className="text-orange-400">if</span> <span className="text-white">(df.filter(col(</span><span className="text-green-400">"quality"</span><span className="text-white">) &lt; 0.9).count() &gt; 0) {`{`}</span><br />
                        <div className="pl-4">
                            <span className="text-orange-400">throw new</span> <span className="text-white">DataIntegrityException(</span><span className="text-green-400">"Pipeline Halted"</span><span className="text-white">)</span>
                        </div>
                        <span className="text-white">{'}'}</span><br />
                        <span className="text-white">partitioned</span>
                    </div>
                    <span className="text-white">{'}'}</span>
                </div>
                <span className="text-white">{'}'}</span>
            </div>
        );

        if (job.company.includes("SDP")) return (
            <div className="font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                <span className="text-gray-500">// Visualization: Python/JavaScript/Flask</span><br />
                <span className="text-purple-400">import</span> <span className="text-white">{`{ Chart }`}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'primavera-viz'</span><span className="text-white">;</span><br /><br />
                <span className="text-purple-400">const</span> <span className="text-yellow-300">renderCriticalPath</span> <span className="text-white">= (tasks) =&gt; {`{`}</span><br />
                <div className="pl-4 md:pl-8 border-l border-white/5 ml-1">
                    <span className="text-purple-400">const</span> <span className="text-white">critical = tasks.filter(t =&gt; t.float === 0);</span><br /><br />
                    <span className="text-purple-400">if</span> <span className="text-white">(critical.length &gt; 0) {`{`}</span><br />
                    <div className="pl-4">
                        <span className="text-white">console.log(</span><span className="text-green-400">`Found ${`{critical.length}`} delays`</span><span className="text-white">);</span><br />
                        <span className="text-gray-500">// Parsing data for PowerBI integration</span><br />
                        <span className="text-white">PowerBI.embed(critical, {`{`}</span><br />
                        <div className="pl-4">
                            <span className="text-white">viewMode: </span><span className="text-green-400">'Edit'</span><span className="text-white">,</span><br />
                            <span className="text-white">permissions: </span><span className="text-green-400">'All'</span>
                        </div>
                        <span className="text-white">{`}`});</span>
                    </div>
                    <span className="text-white">{`}`}</span>
                </div>
                <span className="text-white">{`}`}</span>
            </div>
        );

        if (job.role.includes("Robotics")) return (
            <div className="font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                <span className="text-purple-400">#include</span> <span className="text-green-400">&lt;zumo_bot.h&gt;</span><br />
                <span className="text-purple-400">#include</span> <span className="text-green-400">&lt;sensors.h&gt;</span><br /><br />
                <span className="text-blue-400">class</span> <span className="text-yellow-300">SwarmController</span> <span className="text-white">{`{`}</span><br />
                <div className="pl-4 md:pl-8 border-l border-white/5 ml-1">
                    <span className="text-blue-400">void</span> <span className="text-yellow-300">update_swarm</span>(<span className="text-white">Robot& bot</span>) <span className="text-white">{`{`}</span><br />
                    <div className="pl-4">
                        <span className="text-gray-500">// Integrated DekaBot sensors via I2C</span><br />
                        <span className="text-white">int line_pos = bot.readLineSensors();</span><br />

                        <span className="text-purple-400">if</span> <span className="text-white">(line_pos == CENTER) {`{`}</span><br />
                        <div className="pl-4">
                            <span className="text-white">bot.setMotors(100, 100);</span>
                        </div>
                        <span className="text-white">{'}'}</span> <span className="text-purple-400">else</span> <span className="text-white">{`{`}</span><br />
                        <div className="pl-4">
                            <span className="text-white">PID.correct(line_pos);</span>
                        </div>
                        <span className="text-white">{'}'}</span>
                    </div>
                    <span className="text-white">{'}'}</span>
                </div>
                <span className="text-white">{'}'}</span>
            </div>
        );

        if (job.company.includes("Valiant")) return (
            <div className="font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                <span className="text-gray-500">-- Autonomous Flight Script (ArduPilot/Betaflight)</span><br />
                <span className="text-purple-400">local</span> <span className="text-white">UAV = require(</span><span className="text-green-400">'flight_core'</span><span className="text-white">)</span><br /><br />
                <span className="text-purple-400">function</span> <span className="text-yellow-300">stabilize_payload</span><span className="text-white">()</span><br />
                <div className="pl-4 md:pl-8 border-l border-white/5 ml-1">
                    <span className="text-gray-500">-- Sensor fusion for fire-fighting prototype</span><br />
                    <span className="text-purple-400">local</span> <span className="text-white">thermal_data = i2c:read(0x68)</span><br />

                    <span className="text-purple-400">if</span> <span className="text-white">thermal_data.hotspot_detected</span> <span className="text-purple-400">then</span><br />
                    <div className="pl-4">
                        <span className="text-white">UAV.set_mode(</span><span className="text-green-400">'LOITER'</span><span className="text-white">)</span><br />
                        <span className="text-white">UAV.adjust_yaw(thermal_data.angle)</span>
                    </div>
                    <span className="text-purple-400">end</span>
                </div>
                <span className="text-purple-400">end</span>
            </div>
        );

        if (job.role.includes("Scientific")) return (
            <div className="font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                <span className="text-gray-500"># In [1]:</span><br />
                <span className="text-purple-400">import</span> <span className="text-white">crem</span><br />
                <span className="text-purple-400">import</span> <span className="text-white">pandas</span> <span className="text-purple-400">as</span> <span className="text-white">pd</span><br /><br />
                <span className="text-gray-500"># CREM Framework Implementation</span><br />
                <span className="text-purple-400">def</span> <span className="text-yellow-300">generate_analogues</span>(<span className="text-orange-400">molecule_smi</span>):<br />
                <div className="pl-4 md:pl-8 border-l border-white/5 ml-1">
                    <span className="text-white">context = crem.fragment(molecule_smi, radius=2)</span><br />
                    <span className="text-white">candidates = []</span><br /><br />
                    <span className="text-purple-400">for</span> <span className="text-white">frag</span> <span className="text-purple-400">in</span> <span className="text-white">context:</span><br />
                    <div className="pl-4">
                        <span className="text-white">new_mol = crem.mutate(frag, mode=</span><span className="text-green-400">"grow"</span><span className="text-white">)</span><br />
                        <span className="text-white">candidates.append(new_mol)</span>
                    </div>
                    <span className="text-purple-400">return</span> <span className="text-white">pd.DataFrame(candidates)</span>
                </div>
            </div>
        );

        if (job.company.includes("SiftMed")) return (
            <div className="font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                <span className="text-gray-500">-- Data Quality & Deduplication Logic</span><br />
                <span className="text-purple-400">SELECT</span> <span className="text-white">doc_id, group_hash,</span><br />
                <span className="text-purple-400">COUNT</span><span className="text-white">(*) OVER (</span><span className="text-purple-400">PARTITION BY</span> <span className="text-white">content_hash)</span> <span className="text-purple-400">as</span> <span className="text-white">dupe_count</span><br />
                <span className="text-purple-400">FROM</span> <span className="text-white">medical_records</span><br />
                <span className="text-purple-400">WHERE</span> <span className="text-white">upload_date &gt; </span><span className="text-green-400">'2024-05-01'</span><span className="text-white">;</span><br /><br />
                <span className="text-gray-500">-- Automated Tagging Update</span><br />
                <span className="text-purple-400">UPDATE</span> <span className="text-white">documents</span><br />
                <span className="text-purple-400">SET</span> <span className="text-white">status = </span><span className="text-green-400">'REVIEWED'</span><span className="text-white">, tags = JSON_ARRAY_APPEND(tags, </span><span className="text-green-400">'$.verified'</span><span className="text-white">)</span><br />
                <span className="text-purple-400">WHERE</span> <span className="text-white">confidence_score &gt; 0.95;</span>
            </div>
        );

        if (job.role.includes("Quality Assurance")) return (
            <div className="font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                <span className="text-gray-500">% Medical Image Analysis (DIAG & FAISAL Lab)</span><br />
                <span className="text-purple-400">function</span> <span className="text-white">metrics = </span><span className="text-yellow-300">analyze_scan</span><span className="text-white">(patientID)</span><br />
                <div className="pl-4 md:pl-8 border-l border-white/5 ml-1">
                    <span className="text-white">img = dicomread(patientID);</span><br />
                    <span className="text-gray-500">% Noise reduction & segmentation</span><br />
                    <span className="text-white">clean_img = medfilt2(img, [3 3]);</span><br />
                    <span className="text-white">bw = imbinarize(clean_img);</span><br /><br />
                    <span className="text-gray-500">% Calculate automated metrics</span><br />
                    <span className="text-white">stats = regionprops(bw, </span><span className="text-green-400">'Area'</span><span className="text-white">, </span><span className="text-green-400">'Centroid'</span><span className="text-white">);</span><br />
                    <span className="text-white">metrics = [stats.Area];</span>
                </div>
                <span className="text-purple-400">end</span>
            </div>
        );

        if (job.role.includes("ISWEP")) return (
            <div className="font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                <span className="text-gray-500"># Graduate Office Survey Analysis</span><br />
                <span className="text-purple-400">library</span><span className="text-white">(ggplot2)</span><br /><br />
                <span className="text-white">data &lt;- read.xlsx(</span><span className="text-green-400">"survey_data.xlsx"</span><span className="text-white">)</span><br /><br />
                <span className="text-gray-500"># Linear modeling of response trends</span><br />
                <span className="text-white">model &lt;- lm(satisfaction ~ year + department, data=data)</span><br />

                <span className="text-gray-500"># Bell curve visualization</span><br />
                <span className="text-white">ggplot(data, aes(x=score)) + </span><br />
                <div className="pl-4">
                    <span className="text-white">geom_density(fill=</span><span className="text-green-400">"blue"</span><span className="text-white">, alpha=0.2) +</span><br />
                    <span className="text-white">ggtitle(</span><span className="text-green-400">"Predicted Changes Distribution"</span><span className="text-white">)</span>
                </div>
            </div>
        );

        return <div className="text-gray-500">// Content loading...</div>;
    };

    return (
        <>
            <section className="w-full max-w-7xl px-4 py-35 mx-auto" id="workterm">
                <div className="flex flex-col gap-4 mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
                        <FolderOpen className="text-blue-400" size={32} />
                        <span>experience.log</span>
                    </h2>
                    <p className="text-gray-400 font-mono text-sm">
                        // Navigate the file explorer to view detailed experience logs.
                    </p>
                    <p className="text-gray-400 font-mono text-sm lg:hidden">
                        // Click on preview to see snapshots from each role.
                    </p>
                </div>

                <div className="w-full rounded-xl overflow-hidden border border-white/10 bg-[#1e1e1e] shadow-2xl font-mono text-sm h-[600px] flex flex-col md:flex-row relative">

                    <div className={cn(
                        "bg-[#252526] flex-shrink-0 transition-all duration-300 border-r border-white/5 flex flex-col absolute md:relative z-50 h-full",
                        isSidebarOpen ? "w-64" : "w-0 hidden"
                    )}>
                        <div className="p-3 text-xs font-bold text-gray-400 flex justify-between items-center tracking-wider bg-[#252526]">
                            <span>EXPLORER</span>
                            <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-1 hover:bg-white/10 rounded">
                                <X size={14} />
                            </button>
                        </div>

                        <div className="px-2 overflow-y-auto flex-1 bg-[#252526] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent pb-4">

                            <div
                                className="flex items-center gap-1 text-gray-300 py-1 cursor-pointer hover:bg-white/5 rounded mt-2"
                                onClick={() => toggleFolder('workterm')}
                            >
                                <ChevronDown size={14} className={cn("transition-transform", !openFolders['workterm'] && "-rotate-90")} />
                                <FolderOpen size={14} className="text-blue-400" />
                                <span className="font-bold">src/workterm</span>
                            </div>

                            {openFolders['workterm'] && (
                                <div className="pl-4 mt-1 space-y-1 border-l border-white/5 ml-3">
                                    {WORK_TERMS.map((job, idx) => {
                                        const globalIndex = idx;
                                        const info = getFileInfo(globalIndex, job.company, job.role);
                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => {
                                                    setActiveJobIndex(globalIndex);
                                                    if (window.innerWidth < 768) setIsSidebarOpen(false);
                                                }}
                                                className={cn(
                                                    "w-full text-left flex items-center gap-2 px-2 py-1.5 rounded transition-colors",
                                                    activeJobIndex === globalIndex
                                                        ? "bg-[#37373d] text-white"
                                                        : "text-gray-400 hover:text-gray-200 hover:bg-[#2a2d2e]"
                                                )}
                                            >
                                                {info.icon}
                                                <span className="truncate">{info.name}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            )}

                            <div
                                className="flex items-center gap-1 text-gray-300 py-1 cursor-pointer hover:bg-white/5 rounded mt-4"
                                onClick={() => toggleFolder('additional')}
                            >
                                <ChevronDown size={14} className={cn("transition-transform", !openFolders['additional'] && "-rotate-90")} />
                                <FolderOpen size={14} className="text-green-400" />
                                <span className="font-bold">src/additional</span>
                            </div>

                            {openFolders['additional'] && (
                                <div className="pl-4 mt-1 space-y-1 border-l border-white/5 ml-3">
                                    {ADDITIONAL_EXPERIENCE.map((job, idx) => {
                                        const globalIndex = idx + WORK_TERMS.length;
                                        const info = getFileInfo(globalIndex, job.company, job.role);
                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => {
                                                    setActiveJobIndex(globalIndex);
                                                    if (window.innerWidth < 768) setIsSidebarOpen(false);
                                                }}
                                                className={cn(
                                                    "w-full text-left flex items-center gap-2 px-2 py-1.5 rounded transition-colors",
                                                    activeJobIndex === globalIndex
                                                        ? "bg-[#37373d] text-white"
                                                        : "text-gray-400 hover:text-gray-200 hover:bg-[#2a2d2e]"
                                                )}
                                            >
                                                {info.icon}
                                                <span className="truncate">{info.name}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col min-w-0 bg-[#1e1e1e]">

                        <div className="flex bg-[#2d2d2d] overflow-hidden flex-shrink-0 items-center justify-between">

                            <div className="flex items-center min-w-0">
                                {!isSidebarOpen && (
                                    <button
                                        onClick={() => setIsSidebarOpen(true)}
                                        className="p-3 text-gray-400 hover:bg-white/5 border-r border-white/5 flex-shrink-0"
                                    >
                                        <FolderOpen size={14} />
                                    </button>
                                )}

                                <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1e1e1e] text-white border-t-2 border-t-blue-400 text-xs border-r border-white/5 min-w-0">
                                    <span className="flex-shrink-0">{activeFileInfo.icon}</span>
                                    <span className="truncate">{activeFileInfo.name}</span>
                                    <X size={12} className="ml-2 opacity-50 hover:opacity-100 cursor-pointer flex-shrink-0" />
                                </div>
                            </div>

                            <div className="ml-auto flex items-center gap-1 px-2 lg:hidden flex-shrink-0 bg-[#2d2d2d] z-10">
                                <button
                                    onClick={() => setMobileView('code')}
                                    className={cn(
                                        "p-1.5 rounded transition-colors flex items-center gap-1.5",
                                        mobileView === 'code' ? 'bg-blue-500/20 text-blue-400' : 'text-gray-400 hover:text-gray-200'
                                    )}
                                >
                                    <Code2 size={14} />
                                    <span className="text-[10px] font-medium">Code</span>
                                </button>
                                <div className="w-px h-4 bg-white/10 mx-1" />
                                <button
                                    onClick={() => setMobileView('preview')}
                                    className={cn(
                                        "p-1.5 rounded transition-colors flex items-center gap-1.5",
                                        mobileView === 'preview' ? 'bg-blue-500/20 text-blue-400' : 'text-gray-400 hover:text-gray-200'
                                    )}
                                >
                                    <ImageIcon size={14} />
                                    <span className="text-[10px] font-medium">Preview</span>
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">

                            <div className={cn(
                                "flex-1 p-4 md:p-8 relative group bg-[#1e1e1e] overflow-hidden",
                                mobileView === 'preview' ? "hidden lg:block" : "block"
                            )}>
                                <div className="absolute top-0 left-0 w-8 md:w-12 h-full bg-[#1e1e1e] border-r border-white/5 text-gray-600 text-right pr-2 md:pr-3 pt-4 md:pt-8 select-none text-xs md:text-sm leading-relaxed font-mono opacity-50">
                                    {Array.from({ length: 25 }).map((_, i) => (
                                        <div key={i}>{i + 1}</div>
                                    ))}
                                </div>

                                <div className="pl-8 md:pl-12 pt-2 md:pt-0 h-full overflow-y-auto scrollbar-hide">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeJobIndex}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {renderCodeContent(activeJobIndex, activeJob)}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className={cn(
                                "lg:w-[40%] bg-[#1e1e1e] flex flex-col border-l border-white/5",
                                mobileView === 'code' ? "hidden lg:flex" : "flex h-full"
                            )}>
                                <div className="px-4 py-2 border-b border-white/5 text-xs font-bold text-gray-500 uppercase tracking-wider flex justify-between items-center bg-[#252526]">
                                    <span>Preview: {activeJob.company}</span>
                                    <span className="text-[10px] bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded">LIVE</span>
                                </div>

                                <div className="p-4 md:p-6 flex-1 flex flex-col gap-6 overflow-y-auto bg-[#1e1e1e] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeJobIndex}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex flex-col gap-6 h-full"
                                        >
                                            <div className="grid grid-rows-2 gap-3 h-full min-h-[300px]">

                                                <div className="row-span-1 w-full bg-gray-800/30 rounded-lg border border-white/5 flex items-center justify-center group overflow-hidden relative cursor-zoom-in">
                                                    <ExperienceImage
                                                        src={`${imageBasePath}/snapshot.png`}
                                                        alt={`${activeJob.company} Highlight 1`}
                                                        iconSize={48}
                                                        onClick={() => setLightboxSrc(`${imageBasePath}/snapshot.png`)}
                                                    />
                                                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 p-1 rounded">
                                                        <Maximize2 size={16} className="text-white" />
                                                    </div>
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
                                                    <span className="absolute bottom-3 left-3 text-white text-xs z-20 font-medium pointer-events-none">
                                                        {activeJob.role}
                                                    </span>
                                                </div>

                                                <div className="row-span-1 grid grid-cols-2 gap-3">
                                                    <div className="bg-gray-800/30 rounded-lg border border-white/5 flex items-center justify-center group overflow-hidden relative cursor-zoom-in">
                                                        <ExperienceImage
                                                            src={`${imageBasePath}/logo.png`}
                                                            alt={`${activeJob.company} Highlight 2`}
                                                            iconSize={32}
                                                            onClick={() => setLightboxSrc(`${imageBasePath}/logo.png`)}
                                                        />
                                                    </div>
                                                    <div className="bg-gray-800/30 rounded-lg border border-white/5 flex items-center justify-center group overflow-hidden relative cursor-zoom-in">
                                                        <ExperienceImage
                                                            src={`${imageBasePath}/me.png`}
                                                            alt={`${activeJob.company} Highlight 3`}
                                                            iconSize={32}
                                                            onClick={() => setLightboxSrc(`${imageBasePath}/me.png`)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-auto pt-4 border-t border-white/5">
                                                <Link
                                                    href={activeJob.link}
                                                    className={cn(
                                                        "flex items-center justify-center gap-2 w-full transition-colors py-3 rounded-lg font-medium text-sm text-white",
                                                        buttonColors[activeJob.color] || "bg-gray-600 hover:bg-gray-700"
                                                    )}
                                                >
                                                    <span>More Information</span>
                                                    <ArrowUpRight size={16} />
                                                </Link>
                                                <p className="text-center text-xs text-gray-500 mt-3">
                                                    View full case study and technical details
                                                </p>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>

                        </div>

                        <div className="bg-[#007acc] text-white text-xs px-3 py-1 flex-shrink-0 flex justify-between items-center z-10 relative">
                            <div className="flex gap-4">
                                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-white" /> main*</span>
                                <span className="hidden sm:inline">0 errors, 0 warnings</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="hidden sm:inline">Ln 12, Col 46</span>
                                <span>UTF-8</span>
                                <span>{activeFileInfo.lang}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {lightboxSrc && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightboxSrc(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 backdrop-blur-sm cursor-pointer"
                    >
                        <button
                            onClick={() => setLightboxSrc(null)}
                            className="absolute top-4 right-4 p-2 text-white/50 hover:text-white bg-white/10 rounded-full transition-colors z-[110]"
                        >
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={lightboxSrc}
                                alt="Full screen preview"
                                fill
                                className="object-contain"
                                quality={100}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}