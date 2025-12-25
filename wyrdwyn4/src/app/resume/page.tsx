"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Check,
    MessageSquare,
    FileCode,
    GitMerge,
    GitBranch,
    GitCommit,
    ChevronDown,
    Download,
    Copy,
    MoreHorizontal,
    Paperclip,
    Plus,
    CircleDot,
    Folder,
    FileText,
    Eye,
    Filter
} from "lucide-react";
import { cn } from "@/lib/utils";

type Tab = "conversation" | "commits" | "checks" | "files";

const COMMITS = [
    {
        message: "Started Engineering Degree at MUN",
        date: "Sep 1, 2022",
        hash: "0a1b2c3",
        author: "WyrdWyn4"
    },
    {
        message: "Worked as Student Tutor at EO Success Centre",
        date: "Sep 15, 2022",
        hash: "j0k1l2m",
        author: "WyrdWyn4"
    },
    {
        message: "Worked as ISWEP Research Assistant",
        date: "Jan 4, 2023",
        hash: "f7g8h9i",
        author: "WyrdWyn4"
    },
    {
        message: "Worked as Robotics Research Intern",
        date: "Jan 4, 2023",
        hash: "b4c5d6e",
        author: "WyrdWyn4"
    },
    {
        message: "Joined BOTS - Bio-inspired Robotics Group",
        date: "Feb 1, 2023",
        hash: "x1y2z3a",
        author: "WyrdWyn4"
    },
    {
        message: "Joined CELC Committee as Director of Programming",
        date: "Feb 1, 2023",
        hash: "t8u9v0w",
        author: "WyrdWyn4"
    },
    {
        message: "Worked as Data Quality Assurance Analyst at MUN",
        date: "May 1, 2023",
        hash: "p5q6r7s",
        author: "WyrdWyn4"
    },
    {
        message: "Worked as Data Analytics and Project Control Intern at SDP-GP",
        date: "Sep 1, 2023",
        hash: "l2m3n4o",
        author: "WyrdWyn4"
    },
    {
        message: "Worked as Scientific Computing Research Assistant",
        date: "Sep 5, 2023",
        hash: "8i9j0k1",
        author: "WyrdWyn4"
    },
    {
        message: "Worked as Data Quality Specialist at SiftMed",
        date: "May 1, 2024",
        hash: "e5f6g7h",
        author: "WyrdWyn4"
    },
    {
        message: "Worked as Datalake Developer Intern at Nasdaq (Term 1)",
        date: "May 6, 2024",
        hash: "1b2c3d4",
        author: "WyrdWyn4"
    },
    {
        message: "Led Software Team at Valiant Aerotech",
        date: "Sep 1, 2024",
        hash: "5c4b3a2",
        author: "WyrdWyn4"
    },
    {
        message: "Returned as Datalake Developer Intern at Nasdaq (Term 2)",
        date: "Jan 6, 2025",
        hash: "a1b2c3d",
        author: "WyrdWyn4"
    },
    {
        message: "Started AI & Automation Developer Internship at Nasdaq",
        date: "Sep 1, 2025",
        hash: "9d8e7f6",
        author: "WyrdWyn4"
    }
];

const CHECKS = [
    { name: "ATS Keyword Matcher", status: "success", description: "98% match (Java, Python, AWS, Docker)" },
    { name: "Spell Check / Grammar Lint", status: "success", description: "No typos found in 5 files" },
    { name: "Link Validator", status: "success", description: "All external links are valid (200 OK)" },
    { name: "Background Check", status: "success", description: "Verified past employment at Nasdaq and MUN" },
    { name: "Graduation Requirement Check", status: "pending", description: "85% Complete. Expected: May 2026" },
];

const CHANGED_FILES = [
    { name: "src/data/experience.json", lang: "JSON", adds: 34, dels: 2, id: "diff-exp" },
    { name: "src/config/skills.ts", lang: "TypeScript", adds: 12, dels: 0, id: "diff-skills" },
    { name: "README.md", lang: "Markdown", adds: 5, dels: 1, id: "diff-readme" },
    { name: "package.json", lang: "JSON", adds: 1, dels: 1, id: "diff-package" }
];

const Badge = ({ children, color = "blue", className }: { children: React.ReactNode, color?: "blue" | "green" | "purple" | "gray" | "red", className?: string }) => {
    const colors = {
        blue: "bg-[#388bfd]/10 text-[#58a6ff] border-[#388bfd]/40",
        green: "bg-[#238636]/10 text-[#3fb950] border-[#238636]/40",
        purple: "bg-[#a371f7]/10 text-[#bc8cff] border-[#a371f7]/40",
        gray: "bg-[#6e7681]/10 text-[#8b949e] border-[#6e7681]/40",
        red: "bg-[#da3633]/10 text-[#f85149] border-[#da3633]/40",
    };
    return (
        <span className={cn("px-2 py-[2px] rounded-full text-xs border font-medium whitespace-nowrap", colors[color], className)}>
            {children}
        </span>
    );
};

const FileTreeItem = ({ name, active = false }: { name: string, active?: boolean }) => {
    return (
        <div className={cn(
            "flex items-center gap-2 px-2 py-1 rounded-sm cursor-pointer text-xs font-mono mb-0.5",
            active ? "bg-[#30363d]/50 text-[#c9d1d9]" : "text-[#8b949e] hover:bg-[#161b22] hover:text-[#c9d1d9]"
        )}>
            <FileText size={14} />
            <span className="truncate">{name}</span>
        </div>
    );
}

const FileTree = () => {
    return (
        <div className="text-sm">
            <div className="flex items-center justify-between mb-4 px-2">
                <h3 className="font-bold text-[#c9d1d9] text-xs">Filter changed files</h3>
                <Filter size={14} className="text-[#8b949e] cursor-pointer hover:text-[#58a6ff]" />
            </div>

            <div className="space-y-1">
                <div className="px-2">
                    <div className="flex items-center gap-2 text-[#c9d1d9] font-semibold mb-1 cursor-pointer group">
                        <ChevronDown size={14} className="group-hover:text-[#58a6ff]" />
                        <Folder size={14} className="text-[#8b949e] group-hover:text-[#58a6ff] fill-[#8b949e]/20" />
                        src
                    </div>
                    <div className="pl-4 border-l border-[#30363d] ml-2.5">
                        <div className="flex items-center gap-2 text-[#c9d1d9] font-semibold mb-1 mt-1 cursor-pointer group">
                            <ChevronDown size={14} className="group-hover:text-[#58a6ff]" />
                            <Folder size={14} className="text-[#8b949e] group-hover:text-[#58a6ff] fill-[#8b949e]/20" />
                            data
                        </div>
                        <div className="pl-4 border-l border-[#30363d] ml-2.5">
                            <FileTreeItem name="experience.json" active />
                        </div>

                        <div className="flex items-center gap-2 text-[#c9d1d9] font-semibold mb-1 mt-2 cursor-pointer group">
                            <ChevronDown size={14} className="group-hover:text-[#58a6ff]" />
                            <Folder size={14} className="text-[#8b949e] group-hover:text-[#58a6ff] fill-[#8b949e]/20" />
                            config
                        </div>
                        <div className="pl-4 border-l border-[#30363d] ml-2.5">
                            <FileTreeItem name="skills.ts" />
                        </div>
                    </div>
                </div>

                <div className="px-2 mt-2">
                    <div className="flex items-center gap-2 text-[#c9d1d9] font-semibold mb-1 mt-1 cursor-pointer group">
                        <ChevronDown size={14} className="group-hover:text-[#58a6ff]" />
                        <FileText size={14} className="text-[#8b949e] group-hover:text-[#58a6ff]" />
                        README.md
                    </div>
                </div>
                <div className="px-2 mt-1">
                    <div className="flex items-center gap-2 text-[#c9d1d9] font-semibold mb-1 mt-1 cursor-pointer group">
                        <ChevronDown size={14} className="group-hover:text-[#58a6ff]" />
                        <FileText size={14} className="text-[#8b949e] group-hover:text-[#58a6ff]" />
                        package.json
                    </div>
                </div>
            </div>
        </div>
    );
}

const FileDiff = ({ filename, lang, additions, deletions, children }: { filename: string, lang: string, additions: number, deletions: number, children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="border border-[#30363d] rounded-md bg-[#0d1117] overflow-hidden mb-6 shadow-sm">
            <div
                className="bg-[#161b22] px-3 py-2 border-b border-[#30363d] flex items-center justify-between cursor-pointer hover:bg-[#1c2128] transition-colors group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                    <ChevronDown size={16} className={cn("transition-transform text-[#8b949e]", !isOpen && "-rotate-90")} />
                    <span className="font-mono font-semibold text-[#c9d1d9] group-hover:text-[#58a6ff] hover:underline transition-colors">{filename}</span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center text-[#8b949e] font-mono gap-3">
                        <span className="flex items-center text-[#3fb950]"><Plus size={10} className="mr-0.5" /> {additions}</span>
                        <span className="flex items-center text-[#f85149]"><div className="w-2 h-0.5 bg-[#f85149] mr-1 rounded-full" /> {deletions}</span>
                    </div>
                    <div className="flex gap-0.5 font-mono items-center opacity-75">
                        <span className="w-1.5 h-1.5 rounded-[1px] bg-[#238636]"></span>
                        <span className="w-1.5 h-1.5 rounded-[1px] bg-[#238636]"></span>
                        <span className="w-1.5 h-1.5 rounded-[1px] bg-[#238636]"></span>
                        <span className="w-1.5 h-1.5 rounded-[1px] bg-[#238636]"></span>
                        <span className="w-1.5 h-1.5 rounded-[1px] bg-[#30363d]"></span>
                    </div>
                    <div className="flex items-center">
                        <div className="p-1.5 rounded-md hover:bg-[#30363d] text-[#c9d1d9] border border-[#30363d] bg-[#21262d] ml-2">
                            <Eye size={14} />
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="overflow-x-auto bg-[#0d1117] border-t border-[#30363d]">
                    <div className="min-w-[600px] text-xs md:text-sm font-mono leading-5 py-1">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

const CodeLine = ({ num, content, type = "neutral" }: { num: number, content: React.ReactNode, type?: "add" | "del" | "neutral" }) => {
    const bgClass = type === "add" ? "bg-[#2ea043]/15" : type === "del" ? "bg-[#da3633]/15" : "hover:bg-[#161b22]";
    const gutterClass = type === "add" ? "bg-[#2ea043]/15 text-[#c9d1d9]" : type === "del" ? "bg-[#da3633]/15 text-[#c9d1d9]" : "text-[#6e7681]";
    const marker = type === "add" ? "+" : type === "del" ? "-" : " ";

    return (
        <div className={cn("grid grid-cols-[44px_1fr] md:grid-cols-[60px_1fr]", bgClass)}>
            <div className={cn("select-none text-right pr-3 font-mono text-[11px] md:text-xs pt-0.5 leading-5 border-r border-transparent", gutterClass)}>
                {num}
            </div>
            <div className="pl-4 pr-4 whitespace-pre text-[#e6edf3] flex text-[11px] md:text-sm leading-5 font-mono">
                <span className="select-none text-[#6e7681] w-4 mr-1 inline-block text-center opacity-50">{marker}</span>
                <span>{content}</span>
            </div>
        </div>
    );
};

const TimelineItem = ({
    icon,
    children,
    isLast = false,
    pb = "pb-8"
}: {
    icon: React.ReactNode,
    children: React.ReactNode,
    isLast?: boolean,
    pb?: string
}) => {
    return (
        <div className={cn("flex gap-3 relative", pb)}>
            {!isLast && (
                <div className="absolute left-[15px] top-4 bottom-0 w-[2px] bg-[#30363d] -z-10" />
            )}

            <div className="flex-shrink-0 w-8 flex justify-center items-start z-10 bg-[#0d1117]">
                {icon}
            </div>

            <div className="flex-grow pt-0.5 text-sm text-[#c9d1d9] min-w-0">
                {children}
            </div>
        </div>
    );
}

export function MergeSuccessBox() {
    return (
        <div className="w-full max-w-4xl">
            <div className="flex items-start gap-4 p-4 rounded-md border border-[#8250df] bg-[#0d1117]">
                <div className="flex-shrink-0 bg-[#8250df] p-2 rounded-md flex items-center justify-center">
                    <GitMerge className="text-white w-5 h-5" />
                </div>

                <div className="flex flex-col justify-center">
                    <h3 className="text-[#e6edf3] font-semibold text-base leading-snug">
                        Pull request successfully merged and closed
                    </h3>
                    <p className="text-[#8b949e] text-sm mt-0.5">
                        You&apos;re all set — the branch has been merged.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function ResumePage() {
    const [activeTab, setActiveTab] = useState<Tab>("conversation");

    return (
        <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans selection:bg-[#1f6feb] selection:text-white">

            <div className="max-w-[1280px] mx-auto pt-6 px-4 md:px-6 lg:px-8">

                <div className="mb-4 border-b border-[#30363d] pb-2">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
                        <div className="space-y-1 w-full">
                            <div className="flex items-center gap-2 mb-2">
                                <h1 className="text-2xl md:text-3xl font-normal text-[#c9d1d9] tracking-tight">
                                    Resume <span className="text-[#8b949e] font-light">#21</span>
                                </h1>
                            </div>

                            <div className="flex items-center flex-wrap gap-2 text-sm text-[#8b949e]">
                                <div className="bg-[#8250df] text-white px-3 py-1.5 rounded-full flex items-center gap-1 font-medium border border-transparent leading-none">
                                    <GitMerge size={16} />
                                    Merged
                                </div>
                                <div className="flex items-center gap-1 ml-1">
                                    <span className="font-semibold text-[#c9d1d9] hover:text-[#58a6ff] hover:underline cursor-pointer">WyrdWyn4</span>
                                    <span>merged 1 commit into</span>
                                    <span className="bg-[#1f6feb]/20 text-[#58a6ff] px-1.5 py-0.5 rounded-[4px] font-mono text-xs cursor-pointer hover:underline hover:bg-[#1f6feb]/30 transition-colors">main</span>
                                    <span>from</span>
                                    <span className="bg-[#1f6feb]/20 text-[#58a6ff] px-1.5 py-0.5 rounded-[4px] font-mono text-xs cursor-pointer hover:underline hover:bg-[#1f6feb]/30 transition-colors">feature/khan-sahb</span>
                                    <span className="mx-1">•</span>
                                    <span className="hover:text-[#58a6ff] cursor-pointer">Feb 4, 2004</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2 self-start flex-shrink-0">
                            <a href="/media/personal/WMKSherwani - Resume.pdf" target="_blank" className="px-3 py-1.5 text-xs font-medium border border-[#30363d] rounded-md bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d] hover:border-[#8b949e] transition-colors flex items-center gap-2 shadow-sm">
                                <Download size={14} />
                                Raw PDF
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-b border-[#30363d] mb-6 overflow-x-auto sticky top-[60px] bg-[#0d1117] z-40 pt-2 -mx-4 md:mx-0 px-4 md:px-0">
                    <div className="flex gap-1 min-w-max">
                        <button
                            onClick={() => setActiveTab("conversation")}
                            className={cn(
                                "flex items-center gap-2 px-4 py-3 border-b-2 text-sm transition-colors rounded-t-md hover:bg-[#161b22]",
                                activeTab === "conversation"
                                    ? "border-[#fd8c73] text-[#c9d1d9] font-semibold"
                                    : "border-transparent text-[#c9d1d9] hover:text-[#c9d1d9] hover:border-[#8b949e]"
                            )}
                        >
                            <MessageSquare size={16} /> Conversation <span className="bg-[#30363d]/50 text-[#c9d1d9] rounded-full px-2 py-0.5 text-xs border border-transparent">2</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("commits")}
                            className={cn(
                                "flex items-center gap-2 px-4 py-3 border-b-2 text-sm transition-colors rounded-t-md hover:bg-[#161b22]",
                                activeTab === "commits"
                                    ? "border-[#fd8c73] text-[#c9d1d9] font-semibold"
                                    : "border-transparent text-[#c9d1d9] hover:text-[#c9d1d9] hover:border-[#8b949e]"
                            )}
                        >
                            <GitCommit size={16} /> Commits <span className="bg-[#30363d]/50 text-[#c9d1d9] rounded-full px-2 py-0.5 text-xs border border-transparent">{COMMITS.length}</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("checks")}
                            className={cn(
                                "flex items-center gap-2 px-4 py-3 border-b-2 text-sm transition-colors rounded-t-md hover:bg-[#161b22]",
                                activeTab === "checks"
                                    ? "border-[#fd8c73] text-[#c9d1d9] font-semibold"
                                    : "border-transparent text-[#c9d1d9] hover:text-[#c9d1d9] hover:border-[#8b949e]"
                            )}
                        >
                            <Check size={16} /> Checks <span className="bg-[#30363d]/50 text-[#c9d1d9] rounded-full px-2 py-0.5 text-xs border border-transparent">{CHECKS.length}</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("files")}
                            className={cn(
                                "flex items-center gap-2 px-4 py-3 border-b-2 text-sm transition-colors rounded-t-md hover:bg-[#161b22]",
                                activeTab === "files"
                                    ? "border-[#fd8c73] text-[#c9d1d9] font-semibold"
                                    : "border-transparent text-[#c9d1d9] hover:text-[#c9d1d9] hover:border-[#8b949e]"
                            )}
                        >
                            <FileCode size={16} /> Files changed <span className="bg-[#30363d]/50 text-[#c9d1d9] rounded-full px-2 py-0.5 text-xs border border-transparent">{CHANGED_FILES.length}</span>
                        </button>
                    </div>
                </div>

                <div className={cn("grid gap-6 lg:gap-8", activeTab === "files" ? "grid-cols-1 lg:grid-cols-[280px_1fr]" : "grid-cols-1 lg:grid-cols-[1fr_296px]")}>

                    {activeTab === "files" && (
                        <div className="hidden lg:block">
                            <div className="sticky top-[140px] space-y-4">
                                <FileTree />
                            </div>
                        </div>
                    )}

                    <div className="min-w-0">

                        {activeTab === "conversation" && (
                            <div className="space-y-4">
                                <div className="relative pl-12 md:pl-0">
                                    <div className="absolute -left-12 md:-left-14 top-0">
                                        <img src="https://avatars.githubusercontent.com/u/66204156?v=4" alt="WyrdWyn4" className="w-10 h-10 rounded-full border border-[#30363d]" />
                                    </div>

                                    <div className="border border-[#30363d] rounded-md bg-[#0d1117] relative before:block before:absolute before:top-4 before:-left-[7px] before:w-3.5 before:h-3.5 before:bg-[#161b22] before:border-l before:border-b before:border-[#30363d] before:rotate-45">
                                        <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex justify-between items-center rounded-t-md">
                                            <div className="flex items-center gap-2 text-xs md:text-sm">
                                                <span className="font-semibold text-[#c9d1d9] hover:text-[#58a6ff] hover:underline cursor-pointer">WyrdWyn4</span>
                                                <span className="text-[#8b949e]">commented <span className="cursor-pointer hover:text-[#58a6ff] hover:underline">Feb 4, 2004</span></span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="border border-[#30363d] rounded-full px-2 py-0.5 text-xs font-medium text-[#8b949e]">Owner</span>
                                                <div className="flex items-center justify-center w-6 h-6 text-[#8b949e] cursor-pointer hover:text-[#58a6ff]">
                                                    <MoreHorizontal size={16} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 text-sm leading-relaxed text-[#c9d1d9] bg-[#0d1117] rounded-b-md">
                                            <p className="mb-4">
                                                This PR updates the professional profile of Waleed Mannan Khan Sherwani. All relevant links are included for easy access to detailed information, along with a paper <a href="/media/personal/WMKSherwani%20-%20Resume.pdf" className="text-[#58a6ff] hover:underline">resume</a> on the <i>top right</i>.
                                            </p>

                                            <p className="mb-4">
                                                Most sections contain links to detailed pages about each experience, project, or certification. Feel free to explore these links for more in-depth information.
                                            </p>

                                            <h2 className="text-xl font-semibold text-[#c9d1d9] border-b border-[#30363d] pb-2 mb-2 mt-6">Work Experience:</h2>
                                            <div className="overflow-hidden rounded-md border border-[#30363d] mb-4">
                                                <table className="w-full text-sm text-left text-[#c9d1d9]">
                                                    <thead className="bg-[#161b22] border-b border-[#30363d] font-semibold text-[#c9d1d9]">
                                                        <tr>
                                                            <th className="px-3 py-2 border-r border-[#30363d]">Role</th>
                                                            <th className="px-3 py-2 border-r border-[#30363d]">Entity</th>
                                                            <th className="px-3 py-2">Date</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-[#30363d] bg-[#0d1117]">
                                                        <tr className="group hover:bg-[#161b22] transition-colors">
                                                            <td className="px-3 py-2 border-r border-[#30363d] font-medium">
                                                                <Link href="/work/nasdaq-verafin/ai-and-automation-developer-intern" className="hover:text-[#58a6ff] hover:underline">
                                                                    AI & Automation Developer Intern
                                                                </Link>
                                                            </td>
                                                            <td className="px-3 py-2 border-r border-[#30363d]"><code className="bg-[#6e7681]/40 px-1 py-0.5 rounded text-xs">Nasdaq</code></td>
                                                            <td className="px-3 py-2 text-[#8b949e] group-hover:text-[#c9d1d9]">Sep. 2025 - Present</td>
                                                        </tr>
                                                        <tr className="group hover:bg-[#161b22] transition-colors">
                                                            <td className="px-3 py-2 border-r border-[#30363d] font-medium">
                                                                <Link href="/work/nasdaq-verafin/datalake-developer-intern" className="hover:text-[#58a6ff] hover:underline">
                                                                    Datalake Developer Intern
                                                                </Link>
                                                            </td>
                                                            <td className="px-3 py-2 border-r border-[#30363d]"><code className="bg-[#6e7681]/40 px-1 py-0.5 rounded text-xs">Nasdaq</code></td>
                                                            <td className="px-3 py-2 text-[#8b949e] group-hover:text-[#c9d1d9]">May. 2024 - Aug. 2024 & Jan. 2025 - Aug. 2025</td>
                                                        </tr>
                                                        <tr className="group hover:bg-[#161b22] transition-colors">
                                                            <td className="px-3 py-2 border-r border-[#30363d] font-medium">
                                                                <Link href="/work/sdp-gp/data-analytics-and-project-control-intern" className="hover:text-[#58a6ff] hover:underline">
                                                                    Software Team Lead
                                                                </Link>
                                                            </td>
                                                            <td className="px-3 py-2 border-r border-[#30363d]"><code className="bg-[#6e7681]/40 px-1 py-0.5 rounded text-xs">SDP-GP</code></td>
                                                            <td className="px-3 py-2 text-[#8b949e] group-hover:text-[#c9d1d9]">Sep. 2023 - Dec. 2023</td>
                                                        </tr>
                                                        <tr className="group hover:bg-[#161b22] transition-colors">
                                                            <td className="px-3 py-2 border-r border-[#30363d] font-medium">
                                                                <Link href="/work/memorial-university-of-newfoundland/robotics-research-intern" className="hover:text-[#58a6ff] hover:underline">
                                                                    Robotics Research Intern
                                                                </Link>
                                                            </td>
                                                            <td className="px-3 py-2 border-r border-[#30363d]"><code className="bg-[#6e7681]/40 px-1 py-0.5 rounded text-xs">MUN</code></td>
                                                            <td className="px-3 py-2 text-[#8b949e] group-hover:text-[#c9d1d9]">Jan. 2023 - May. 2023</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <h2 className="text-xl font-semibold text-[#c9d1d9] border-b border-[#30363d] pb-2 mb-2 mt-6">Additional Experience:</h2>
                                            <div className="overflow-hidden rounded-md border border-[#30363d] mb-4">
                                                <table className="w-full text-sm text-left text-[#c9d1d9]">
                                                    <thead className="bg-[#161b22] border-b border-[#30363d] font-semibold text-[#c9d1d9]">
                                                        <tr>
                                                            <th className="px-3 py-2 border-r border-[#30363d]">Role</th>
                                                            <th className="px-3 py-2 border-r border-[#30363d]">Entity</th>
                                                            <th className="px-3 py-2">Date</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-[#30363d] bg-[#0d1117]">
                                                        <tr className="group hover:bg-[#161b22] transition-colors">
                                                            <td className="px-3 py-2 border-r border-[#30363d] font-medium">Software Team Lead</td>
                                                            <td className="px-3 py-2 border-r border-[#30363d]">Valiant Aerotech</td>
                                                            <td className="px-3 py-2 text-[#8b949e]">Sep. 2024 - Present</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="border-t border-[#30363d] px-4 py-2 flex items-center gap-2">
                                            <div className="border border-[#30363d] rounded-full bg-[#161b22] px-2 py-0.5 flex items-center gap-1 cursor-pointer hover:bg-[#30363d] transition-colors">
                                                <span className="text-xs">❤️</span>
                                                <span className="text-xs text-[#c9d1d9] ml-1">12</span>
                                            </div>
                                            <div className="border border-[#30363d] rounded-full bg-[#161b22] px-2 py-0.5 flex items-center gap-1 cursor-pointer hover:bg-[#30363d] transition-colors">
                                                <span className="text-xs">👍</span>
                                                <span className="text-xs text-[#c9d1d9] ml-1">8</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative pl-0 md:pl-0 pb-4 mt-6">

                                    <TimelineItem
                                        icon={
                                            <div className="w-8 h-8 rounded-full bg-[#8250df] flex items-center justify-center border-[4px] border-[#0d1117] relative -ml-1">
                                                <GitMerge size={14} className="text-white" />
                                            </div>
                                        }
                                        pb="pb-10"
                                    >
                                        <div className="flex items-center flex-wrap gap-1 mt-1.5 text-sm">
                                            <img src="https://avatars.githubusercontent.com/u/66204156?v=4" className="w-5 h-5 rounded-full border border-[#30363d] mr-1" alt="Avatar" />
                                            <span className="font-bold text-[#c9d1d9] hover:text-[#58a6ff] hover:underline cursor-pointer">WyrdWyn4</span>
                                            <span className="text-[#c9d1d9]">merged commit</span>
                                            <span className="font-mono text-[#c9d1d9] text-xs bg-[rgba(110,118,129,0.4)] px-1.5 py-0.5 rounded-md hover:text-[#58a6ff] hover:underline cursor-pointer">d030375</span>
                                            <span className="text-[#c9d1d9]">into</span>
                                            <span className="bg-[#1f6feb]/20 text-[#58a6ff] px-1.5 py-0.5 rounded-[4px] font-mono text-xs cursor-pointer hover:underline hover:bg-[#1f6feb]/30 transition-colors">main</span>
                                            <span className="text-[#7d8590] ml-1 hover:text-[#58a6ff] cursor-pointer hover:underline">on Feb 4</span>
                                        </div>
                                        <div className="hidden sm:block absolute right-0 top-1">
                                            <button className="text-xs font-medium text-[#ffffff] px-3 py-1 bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] hover:border-[#8b949e] transition-all">Revert</button>
                                        </div>
                                    </TimelineItem>

                                    <div className="absolute left-0 right-0 h-[1px] bg-[#30363d] my-0 top-[calc(100%-70px)]" />

                                    <TimelineItem
                                        isLast={true}
                                        pb="pb-0"
                                        icon={
                                            <div className="w-8 h-8 rounded-full bg-[#21262d] flex items-center justify-center border-[4px] border-[#0d1117] relative -ml-1 mt-3">
                                                <GitBranch size={14} className="text-[#7d8590]" />
                                            </div>
                                        }
                                    >
                                        <div className="flex items-center flex-wrap gap-1 mt-5 text-sm">
                                            <img src="https://avatars.githubusercontent.com/u/66204156?v=4" className="w-5 h-5 rounded-full border border-[#30363d] mr-1 opacity-60" alt="Avatar" />
                                            <span className="font-bold text-[#7d8590] cursor-pointer">WyrdWyn4</span>
                                            <span className="text-[#7d8590]">deleted the</span>
                                            <span className="bg-[#1f6feb]/10 text-[#58a6ff] px-1.5 py-0.5 rounded-[4px] font-mono text-xs opacity-75">media</span>
                                            <span className="text-[#7d8590]">branch</span>
                                            <span className="text-[#7d8590] ml-1">3 months ago</span>
                                        </div>
                                        <div className="hidden sm:block absolute right-0 top-4">
                                            <button className="text-xs font-medium text-[#ffffff] px-3 py-1 bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] hover:border-[#8b949e] transition-all">Restore branch</button>
                                        </div>
                                    </TimelineItem>
                                </div>

                                <MergeSuccessBox />

                                <div className="relative pl-12 md:pl-0 border-t border-[#30363d] pt-8 mt-8">
                                    <div className="absolute -left-12 md:-left-14 top-8">
                                        <img src="https://avatars.githubusercontent.com/u/66204156?v=4" alt="WyrdWyn4" className="w-10 h-10 rounded-full border border-[#30363d]" />
                                    </div>
                                    <div className="border border-[#30363d] rounded-md bg-[#0d1117] relative before:block before:absolute before:top-4 before:-left-[7px] before:w-3.5 before:h-3.5 before:bg-[#161b22] before:border-l before:border-b before:border-[#30363d] before:rotate-45">
                                        <div className="bg-[#161b22] px-2 pt-2 border-b border-[#30363d] rounded-t-md flex gap-2">
                                            <button className="text-[#c9d1d9] text-sm px-3 py-2 border-x border-t border-[#30363d] rounded-t-md bg-[#0d1117] -mb-[1px] z-10 font-medium">Write</button>
                                            <button className="text-[#8b949e] text-sm px-3 py-2 border border-transparent rounded-t-md hover:text-[#c9d1d9] transition-colors mb-0">Preview</button>
                                        </div>
                                        <div className="p-2">
                                            <textarea className="w-full bg-[#0d1117] border border-[#30363d] rounded-md p-3 text-[#c9d1d9] text-sm min-h-[120px] focus:outline-none focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] placeholder-[#6e7681]" placeholder="Add your comment here..." />
                                            <div className="mt-2 border border-dashed border-[#30363d] rounded-md p-4 flex items-center justify-center text-[#8b949e] text-xs bg-[#161b22]/50">
                                                <span className="cursor-pointer hover:text-[#58a6ff]">Attach files by dragging & dropping, selecting or pasting them.</span>
                                            </div>
                                        </div>
                                        <div className="px-2 pb-2 flex justify-between items-center">
                                            <div className="flex gap-1 text-[#8b949e]">
                                                <div className="p-1 hover:text-[#58a6ff] cursor-pointer"><Paperclip size={14} /></div>
                                            </div>
                                            <button className="bg-[#238636] hover:bg-[#2ea043] text-white px-4 py-1.5 rounded-md text-sm font-semibold border border-[rgba(240,246,252,0.1)] transition-colors">Comment</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "commits" && (
                            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <div className="border border-[#30363d] rounded-md bg-[#0d1117] overflow-hidden">
                                    <div className="bg-[#161b22] px-4 py-3 border-b border-[#30363d] flex justify-between items-center">
                                        <span className="text-sm font-semibold text-[#c9d1d9]">Commits</span>
                                    </div>
                                    <div className="divide-y divide-[#30363d]">
                                        {COMMITS.map((commit, idx) => (
                                            <div key={idx} className="px-4 py-3 hover:bg-[#161b22] transition-colors flex items-start gap-3 group">
                                                <div className="mt-1">
                                                    <GitCommit size={16} className="text-[#8b949e]" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-baseline gap-2">
                                                        <span className="text-[#c9d1d9] font-semibold text-sm truncate hover:text-[#58a6ff] cursor-pointer">{commit.message}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 mt-1 text-xs text-[#8b949e]">
                                                        <img src="https://avatars.githubusercontent.com/u/66204156?v=4" className="w-4 h-4 rounded-full border border-[#30363d]" alt={commit.author} />
                                                        <span className="font-semibold text-[#c9d1d9]">{commit.author}</span>
                                                        <span>committed on {commit.date}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="flex opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <button className="p-1.5 text-[#8b949e] hover:text-[#58a6ff] hover:bg-[#30363d] rounded-md" title="Copy full SHA"><Copy size={14} /></button>
                                                        <button className="p-1.5 text-[#8b949e] hover:text-[#58a6ff] hover:bg-[#30363d] rounded-md" title="View code"><FileCode size={14} /></button>
                                                    </div>
                                                    <div className="font-mono text-xs text-[#8b949e] group-hover:text-[#58a6ff] cursor-pointer">{commit.hash}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "checks" && (
                            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <div className="border border-[#30363d] rounded-md bg-[#0d1117] overflow-hidden">
                                    <div className="bg-[#161b22] px-4 py-3 border-b border-[#30363d] flex justify-between items-center">
                                        <span className="text-sm font-semibold text-[#c9d1d9]">Checks</span>
                                        <span className="text-xs text-[#8b949e]">All checks have passed</span>
                                    </div>
                                    <div className="divide-y divide-[#30363d]">
                                        {CHECKS.map((check, idx) => (
                                            <div key={idx} className="px-4 py-3 hover:bg-[#161b22] transition-colors flex items-center justify-between gap-3 group">
                                                <div className="flex items-center gap-3">
                                                    <div className={cn("flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center", check.status === "success" ? "text-[#3fb950]" : "text-[#d29922]")}>
                                                        {check.status === "success" ? <Check size={16} strokeWidth={3} /> : <CircleDot size={16} />}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-semibold text-[#c9d1d9]">{check.name}</div>
                                                        <div className="text-xs text-[#8b949e]">{check.description}</div>
                                                    </div>
                                                </div>
                                                <div className="text-xs text-[#8b949e] font-mono opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-[#58a6ff] hover:underline">Details</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "files" && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <FileDiff filename="src/data/experience.json" lang="JSON" additions={34} deletions={2}>
                                    <CodeLine num={18} content={<span className="text-[#8b949e]">{`{`}</span>} />
                                    <CodeLine num={19} content={<><span className="text-[#79c0ff]">  "company"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"Nasdaq Verafin"</span><span className="text-[#c9d1d9]">,</span></>} type="add" />
                                    <CodeLine num={20} content={<><span className="text-[#79c0ff]">  "role"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"AI & Automation Developer Intern"</span><span className="text-[#c9d1d9]">,</span></>} type="add" />
                                    <CodeLine num={21} content={<><span className="text-[#79c0ff]">  "location"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"St. John's, NL"</span><span className="text-[#c9d1d9]">,</span></>} type="add" />
                                    <CodeLine num={22} content={<><span className="text-[#79c0ff]">  "date"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"Sep. 2025 - Present"</span><span className="text-[#c9d1d9]">,</span></>} type="add" />
                                    <CodeLine num={23} content={<><span className="text-[#79c0ff]">  "highlights"</span><span className="text-[#c9d1d9]">: [</span></>} type="add" />
                                    <CodeLine num={24} content={<><span className="text-[#a5d6ff]">    "Designed architecture for AI 'Mixture-of-Experts' service."</span><span className="text-[#c9d1d9]">,</span></>} type="add" />
                                    <CodeLine num={25} content={<><span className="text-[#a5d6ff]">    "Orchestrated specialized LLM agents for code quality & risk."</span><span className="text-[#c9d1d9]">,</span></>} type="add" />
                                    <CodeLine num={26} content={<span className="text-[#a5d6ff]">    "Developed cloud-native analytics pipelines (AWS/Grafana)."</span>} type="add" />
                                    <CodeLine num={27} content={<span className="text-[#c9d1d9]">  ]</span>} type="add" />
                                    <CodeLine num={28} content={<span className="text-[#8b949e]">{"}"},</span>} type="add" />

                                    <CodeLine num={29} content={<span className="text-[#8b949e]">{`{`}</span>} />
                                    <CodeLine num={30} content={<><span className="text-[#79c0ff]">  "company"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"Nasdaq Verafin"</span><span className="text-[#c9d1d9]">,</span></>} />
                                    <CodeLine num={31} content={<><span className="text-[#79c0ff]">  "role"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"Datalake Developer Intern"</span><span className="text-[#c9d1d9]">,</span></>} />
                                    <CodeLine num={32} content={<><span className="text-[#79c0ff]">  "date"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"May 2024 - Aug 2024 & Jan 2025 - Aug 2025"</span><span className="text-[#c9d1d9]">,</span></>} type="add" />
                                    <CodeLine num={33} content={<><span className="text-[#79c0ff]">  "stack"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"Java, Scala, Spark, AWS Glue, Athena"</span><span className="text-[#c9d1d9]">,</span></>} />
                                    <CodeLine num={34} content={<span className="text-[#8b949e]">{"}"},</span>} />

                                    <CodeLine num={35} content={<span className="text-[#8b949e]">{`{`}</span>} />
                                    <CodeLine num={36} content={<><span className="text-[#79c0ff]">  "company"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"Valiant Aerotech"</span><span className="text-[#c9d1d9]">,</span></>} type="add" />
                                    <CodeLine num={37} content={<><span className="text-[#79c0ff]">  "role"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"Software Team Lead"</span><span className="text-[#c9d1d9]">,</span></>} type="add" />
                                    <CodeLine num={38} content={<><span className="text-[#79c0ff]">  "date"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"Sep. 2024 - Present"</span><span className="text-[#c9d1d9]">,</span></>} type="add" />
                                    <CodeLine num={39} content={<><span className="text-[#79c0ff]">  "note"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"Led 5 engineers for AEAC Competition (Alberta)"</span></>} type="add" />
                                    <CodeLine num={40} content={<span className="text-[#8b949e]">{"}"},</span>} type="add" />
                                </FileDiff>

                                <FileDiff filename="src/config/skills.ts" lang="TypeScript" additions={12} deletions={0}>
                                    <CodeLine num={1} content={<><span className="text-[#ff7b72]">export const</span><span className="text-[#c9d1d9]"> skills = {`{`}</span></>} />
                                    <CodeLine num={2} content={<><span className="text-[#79c0ff]">  languages</span><span className="text-[#c9d1d9]">: [</span><span className="text-[#a5d6ff]">"Java"</span><span className="text-[#c9d1d9]">, </span><span className="text-[#a5d6ff]">"Python"</span><span className="text-[#c9d1d9]">, </span><span className="text-[#a5d6ff]">"C++"</span><span className="text-[#c9d1d9]">, </span><span className="text-[#a5d6ff]">"Scala"</span><span className="text-[#c9d1d9]">, </span><span className="text-[#a5d6ff]">"JavaScript"</span><span className="text-[#c9d1d9]">],</span></>} type="add" />
                                    <CodeLine num={3} content={<><span className="text-[#79c0ff]">  cloud</span><span className="text-[#c9d1d9]">: [</span><span className="text-[#a5d6ff]">"AWS (Lambda, Glue, S3, Athena)"</span><span className="text-[#c9d1d9]">, </span><span className="text-[#a5d6ff]">"Docker"</span><span className="text-[#c9d1d9]">],</span></>} type="add" />
                                    <CodeLine num={4} content={<><span className="text-[#79c0ff]">  data</span><span className="text-[#c9d1d9]">: [</span><span className="text-[#a5d6ff]">"Spark"</span><span className="text-[#c9d1d9]">, </span><span className="text-[#a5d6ff]">"Pandas"</span><span className="text-[#c9d1d9]">, </span><span className="text-[#a5d6ff]">"NumPy"</span><span className="text-[#c9d1d9]">, </span><span className="text-[#a5d6ff]">"PostgreSQL"</span><span className="text-[#c9d1d9]">],</span></>} type="add" />
                                    <CodeLine num={5} content={<><span className="text-[#79c0ff]">  ai</span><span className="text-[#c9d1d9]">: [</span><span className="text-[#a5d6ff]">"TensorFlow"</span><span className="text-[#c9d1d9]">, </span><span className="text-[#a5d6ff]">"PyTorch"</span><span className="text-[#c9d1d9]">, </span><span className="text-[#a5d6ff]">"Tesseract"</span><span className="text-[#c9d1d9]">],</span></>} type="add" />
                                    <CodeLine num={6} content={<><span className="text-[#79c0ff]">  tools</span><span className="text-[#c9d1d9]">: [</span><span className="text-[#a5d6ff]">"Git"</span><span className="text-[#c9d1d9]">, </span><span className="text-[#a5d6ff]">"Grafana"</span><span className="text-[#c9d1d9]">, </span><span className="text-[#a5d6ff]">"Jupyter"</span><span className="text-[#c9d1d9]">]</span></>} type="add" />
                                    <CodeLine num={7} content={<span className="text-[#c9d1d9]">{"}"};</span>} />
                                </FileDiff>

                                <FileDiff filename="README.md" lang="Markdown" additions={5} deletions={1}>
                                    <CodeLine num={10} content={<span className="text-[#c9d1d9]">## Education</span>} />
                                    <CodeLine num={11} content={<span className="text-[#c9d1d9]">- **Memorial University of Newfoundland**</span>} />
                                    <CodeLine num={12} content={<span className="text-[#c9d1d9]">- Bachelor of Engineering (Computer Engineering)</span>} />
                                    <CodeLine num={13} content={<span className="text-[#c9d1d9]">- **GPA:** 3.78</span>} type="add" />
                                    <CodeLine num={14} content={<span className="text-[#c9d1d9]">- **Status:** Academic Term 7 (4th Year) | Class of 2026</span>} type="add" />
                                    <CodeLine num={15} content={<span className="text-[#c9d1d9]">- **Awards:** Dean's List (2022-2023)</span>} type="add" />
                                </FileDiff>

                                <FileDiff filename="package.json" lang="JSON" additions={1} deletions={1}>
                                    <CodeLine num={1} content={<span className="text-[#8b949e]">{`{`}</span>} />
                                    <CodeLine num={2} content={<><span className="text-[#79c0ff]">  "name"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"wyrdwyn4"</span><span className="text-[#c9d1d9]">,</span></>} />
                                    <CodeLine num={3} content={<><span className="text-[#79c0ff]">  "version"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"0.1.0"</span><span className="text-[#c9d1d9]">,</span></>} type="del" />
                                    <CodeLine num={3} content={<><span className="text-[#79c0ff]">  "version"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#a5d6ff]">"1.0.0"</span><span className="text-[#c9d1d9]">,</span></>} type="add" />
                                    <CodeLine num={4} content={<><span className="text-[#79c0ff]">  "private"</span><span className="text-[#c9d1d9]">: </span><span className="text-[#79c0ff]">true</span><span className="text-[#c9d1d9]">,</span></>} />
                                    <CodeLine num={5} content={<span className="text-[#8b949e]">...</span>} />
                                </FileDiff>
                            </div>
                        )}

                    </div>

                    {activeTab !== "files" && (
                        <div className="hidden lg:block space-y-4">

                            <div className="border-b border-[#30363d] pb-4">
                                <h3 className="text-xs font-bold text-[#8b949e] mb-2 flex justify-between items-center group cursor-pointer hover:text-[#58a6ff]">
                                    Reviewers <span className="font-normal opacity-0 group-hover:opacity-100 transition-opacity"><MoreHorizontal size={14} /></span>
                                </h3>
                                <div className="text-sm text-[#c9d1d9]">
                                    <span className="text-[#ffffff]">No reviews</span>
                                </div>
                            </div>

                            <div className="border-b border-[#30363d] pb-4">
                                <h3 className="text-xs font-bold text-[#8b949e] mb-2 flex justify-between items-center group cursor-pointer hover:text-[#58a6ff]">
                                    Assignees <span className="font-normal opacity-0 group-hover:opacity-100 transition-opacity"><MoreHorizontal size={14} /></span>
                                </h3>
                                <div className="flex items-center gap-1 text-sm text-[#ffffff] group cursor-pointer">
                                    <img src="https://avatars.githubusercontent.com/u/66204156?v=4" className="w-5 h-5 rounded-full border border-[#30363d] mr-1" />
                                    <span className="hover:text-[#ffffff] hover:underline font-semibold">WyrdWyn4</span>
                                </div>
                            </div>

                            <div className="border-b border-[#30363d] pb-4">
                                <h3 className="text-xs font-bold text-[#8b949e] mb-2 flex justify-between items-center group cursor-pointer hover:text-[#58a6ff]">
                                    Labels <span className="font-normal opacity-0 group-hover:opacity-100 transition-opacity"><MoreHorizontal size={14} /></span>
                                </h3>
                                <div className="flex flex-wrap gap-1">
                                    <Badge color="blue" className="hover:opacity-80 cursor-pointer">C++</Badge>
                                    <Badge color="green" className="hover:opacity-80 cursor-pointer">Python</Badge>
                                    <Badge color="red" className="hover:opacity-80 cursor-pointer">Java</Badge>
                                    <Badge color="purple" className="hover:opacity-80 cursor-pointer">C#</Badge>
                                    <Badge color="gray" className="hover:opacity-80 cursor-pointer">JavaScript</Badge>
                                    <Badge color="blue" className="hover:opacity-80 cursor-pointer">Django</Badge>
                                    <Badge color="green" className="hover:opacity-80 cursor-pointer">Flask</Badge>
                                    <Badge color="red" className="hover:opacity-80 cursor-pointer">MongoDB</Badge>
                                    <Badge color="purple" className="hover:opacity-80 cursor-pointer">SQL</Badge>
                                    <Badge color="gray" className="hover:opacity-80 cursor-pointer">NumPy</Badge>
                                    <Badge color="blue" className="hover:opacity-80 cursor-pointer">Pandas</Badge>
                                    <Badge color="green" className="hover:opacity-80 cursor-pointer">Matplotlib</Badge>
                                    <Badge color="red" className="hover:opacity-80 cursor-pointer">TensorFlow</Badge>
                                    <Badge color="purple" className="hover:opacity-80 cursor-pointer">PyTorch</Badge>
                                    <Badge color="gray" className="hover:opacity-80 cursor-pointer">Tesseract</Badge>
                                    <Badge color="blue" className="hover:opacity-80 cursor-pointer">Selenium</Badge>
                                    <Badge color="green" className="hover:opacity-80 cursor-pointer">BS4</Badge>
                                    <Badge color="red" className="hover:opacity-80 cursor-pointer">KiCAD</Badge>
                                    <Badge color="purple" className="hover:opacity-80 cursor-pointer">PSpice</Badge>
                                    <Badge color="gray" className="hover:opacity-80 cursor-pointer">MATLAB</Badge>
                                    <Badge color="blue" className="hover:opacity-80 cursor-pointer">AutoCAD</Badge>
                                    <Badge color="green" className="hover:opacity-80 cursor-pointer">Blender</Badge>
                                    <Badge color="red" className="hover:opacity-80 cursor-pointer">MS Office</Badge>
                                    <Badge color="purple" className="hover:opacity-80 cursor-pointer">Assembly</Badge>
                                    <Badge color="gray" className="hover:opacity-80 cursor-pointer">R</Badge>
                                </div>
                            </div>

                            <div className="border-b border-[#30363d] pb-4">
                                <h3 className="text-xs font-bold text-[#8b949e] mb-2 flex justify-between items-center group cursor-pointer hover:text-[#58a6ff]">
                                    Projects <span className="font-normal opacity-0 group-hover:opacity-100 transition-opacity"><MoreHorizontal size={14} /></span>
                                </h3>
                                <div className="text-xs text-[#c9d1d9] space-y-2">
                                    <div className="flex items-center gap-2 text-[#ffffff]">
                                        None yet
                                    </div>
                                </div>
                            </div>

                            <div className="border-b border-[#30363d] pb-4">
                                <h3 className="text-xs font-bold text-[#8b949e] mb-2 flex justify-between items-center group cursor-pointer hover:text-[#58a6ff]">
                                    Milestone <span className="font-normal opacity-0 group-hover:opacity-100 transition-opacity"><MoreHorizontal size={14} /></span>
                                </h3>
                                <div className="text-xs text-[#c9d1d9]">
                                    <div className="flex items-center gap-2 mb-1 group cursor-pointer">
                                        <span className="font-semibold hover:text-[#58a6ff] hover:underline">Graduation</span>
                                    </div>
                                    <div className="w-full bg-[#21262d] h-2 rounded-full overflow-hidden mb-1 mt-1">
                                        <div className="bg-[#238636] w-[85%] h-full" />
                                    </div>
                                    <span className="text-xs text-[#8b949e] hover:text-[#58a6ff] cursor-pointer">Due by May 2026</span>
                                </div>
                            </div>

                            <div className="border-b border-[#30363d] pb-4">
                                <h3 className="text-xs font-bold text-[#8b949e] mb-2 flex justify-between items-center group cursor-pointer hover:text-[#58a6ff]">
                                    Development <span className="font-normal opacity-0 group-hover:opacity-100 transition-opacity"><MoreHorizontal size={14} /></span>
                                </h3>
                                <div className="text-xs text-[#c9d1d9] space-y-2">
                                    <div className="flex items-start gap-2 text-[#ffffff]">
                                        <span className="leading-snug">Successfully merging this pull request may close these issues.</span>
                                    </div>
                                    <div className="text-[#ffffff]">None yet</div>
                                </div>
                            </div>

                            <div>
                                <div className="text-sm text-[#c9d1d9] space-y-3 mt-4">
                                    <div className="flex items-center justify-between font-bold text-[#8b949e] text-xs">
                                        <span className="cursor-pointer hover:text-[#58a6ff]">Notifications</span>
                                        <span className="hover:text-[#58a6ff] cursor-pointer font-normal">Customize</span>
                                    </div>
                                    <button className="w-full border border-[#30363d] bg-[#21262d] text-[#c9d1d9] text-xs font-medium py-1.5 rounded-md hover:bg-[#30363d] transition-colors flex items-center justify-center gap-2">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#58a6ff]"></span>
                                        </span>
                                        Unsubscribe
                                    </button>
                                    <p className="text-xs text-[#8b949e]">You're receiving notifications because you're watching this repository.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}