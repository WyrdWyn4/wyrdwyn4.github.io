import Link from "next/link";
import Image from "next/image";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function WorkIndex() {
    return (
        <div className="min-h-screen bg-[#0d1117] text-gray-300 font-sans pt-24 px-6 pb-20">
            <div className="max-w-5xl mx-auto space-y-12">

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-3">
                        <Briefcase className="text-blue-400" size={40} />
                        Work Experience
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        A collection of engineering roles focused on Cloud Infrastructure, AI Agents, and Data Systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8">

                    <Link
                        href="/work/nasdaq-verafin/ai-and-automation-developer-intern"
                        className="group relative bg-[#161b22] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-900/10 flex flex-col md:flex-row"
                    >
                        <div className="w-full md:w-2/5 relative h-48 md:h-auto overflow-hidden">
                            <Image
                                src="/media/workterm/nasdaq-verafin/ai-and-automation-developer-intern/snapshot.png"
                                alt="Nasdaq AI"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        </div>
                        <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-3/5">
                            <div className="flex justify-between items-start mb-2">
                                <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                    AI & Automation Developer
                                </h2>
                                <span className="bg-red-500/10 text-red-400 text-xs font-mono px-2 py-1 rounded border border-red-500/20">
                                    Current
                                </span>
                            </div>
                            <h3 className="text-lg text-gray-400 mb-4">Nasdaq Verafin</h3>
                            <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                                Architecting a "Mixture-of-Experts" service to orchestrate LLM agents for automated code quality and risk assessment.
                            </p>
                            <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mt-auto">
                                <span className="flex items-center gap-1"><Calendar size={12} /> Sep 2025 - Present</span>
                                <span className="flex items-center gap-1"><MapPin size={12} /> St. John's, NL</span>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="/work/valiant-aerotech/software-team-lead"
                        className="group relative bg-[#161b22] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-900/10 flex flex-col md:flex-row"
                    >
                        <div className="w-full md:w-2/5 relative h-48 md:h-auto overflow-hidden">
                            <Image
                                src="/media/additional/valiant-aerotech/software-team-lead/snapshot.png"
                                alt="Valiant Aerotech"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-3/5">
                            <div className="flex justify-between items-start mb-2">
                                <h2 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                    Software Team Lead
                                </h2>
                                <span className="bg-purple-500/10 text-purple-400 text-xs font-mono px-2 py-1 rounded border border-purple-500/20">
                                    Current
                                </span>
                            </div>
                            <h3 className="text-lg text-gray-400 mb-4">Valiant Aerotech</h3>
                            <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                                Leading a team of 5 engineers to develop autonomous flight software and sensor fusion systems for national competitions.
                            </p>
                            <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mt-auto">
                                <span className="flex items-center gap-1"><Calendar size={12} /> Sep 2024 - Present</span>
                                <span className="flex items-center gap-1"><MapPin size={12} /> St. John's, NL</span>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="/work/nasdaq-verafin/datalake-developer-intern"
                        className="group relative bg-[#161b22] border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all hover:shadow-2xl hover:shadow-green-900/10 flex flex-col md:flex-row"
                    >
                        <div className="w-full md:w-2/5 relative h-48 md:h-auto overflow-hidden">
                            <Image
                                src="/media/workterm/nasdaq-verafin/datalake-developer-intern/snapshot.png"
                                alt="Nasdaq Datalake"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-3/5">
                            <h2 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors mb-2">
                                Datalake Developer Intern
                            </h2>
                            <h3 className="text-lg text-gray-400 mb-4">Nasdaq Verafin</h3>
                            <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                                Optimized Spark and AWS Glue pipelines to handle high-volume telemetry data with strict integrity checks.
                            </p>
                            <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mt-auto">
                                <span className="flex items-center gap-1"><Calendar size={12} /> Jan 2025 - Aug 2025</span>
                                <span className="flex items-center gap-1"><MapPin size={12} /> St. John's, NL</span>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="/work/memorial-university-of-newfoundland/scientific-computing-research-assistant"
                        className="group relative bg-[#161b22] border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all hover:shadow-2xl hover:shadow-orange-900/10 flex flex-col md:flex-row"
                    >
                        <div className="w-full md:w-2/5 relative h-48 md:h-auto overflow-hidden">
                            <Image
                                src="/media/additional/memorial-university-of-newfoundland/scientific-computing-research-assistant/snapshot.png"
                                alt="Scientific Computing"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-3/5">
                            <h2 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                                Scientific Computing RA
                            </h2>
                            <h3 className="text-lg text-gray-400 mb-4">Memorial University</h3>
                            <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                                Implemented generative chemistry frameworks (CREM) to simulate and analyze bonded molecular structures using Python.
                            </p>
                            <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mt-auto">
                                <span className="flex items-center gap-1"><Calendar size={12} /> Sep 2024 - Feb 2025</span>
                                <span className="flex items-center gap-1"><MapPin size={12} /> St. John's, NL</span>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="/work/siftmed/data-quality-specialist"
                        className="group relative bg-[#161b22] border border-white/10 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all hover:shadow-2xl hover:shadow-teal-900/10 flex flex-col md:flex-row"
                    >
                        <div className="w-full md:w-2/5 relative h-48 md:h-auto overflow-hidden">
                            <Image
                                src="/media/additional/siftmed/data-quality-specialist/snapshot.png"
                                alt="SiftMed"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-3/5">
                            <h2 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors mb-2">
                                Data Quality Specialist
                            </h2>
                            <h3 className="text-lg text-gray-400 mb-4">SiftMed</h3>
                            <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                                Automated document processing workflows and audited medical metadata accuracy using Python and SQL.
                            </p>
                            <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mt-auto">
                                <span className="flex items-center gap-1"><Calendar size={12} /> May 2024 - Aug 2024</span>
                                <span className="flex items-center gap-1"><MapPin size={12} /> St. John's, NL</span>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="/work/sdp-gp/data-analytics-and-project-control-intern"
                        className="group relative bg-[#161b22] border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-all hover:shadow-2xl hover:shadow-yellow-900/10 flex flex-col md:flex-row"
                    >
                        <div className="w-full md:w-2/5 relative h-48 md:h-auto overflow-hidden">
                            <Image
                                src="/media/workterm/sdp-gp/data-analytics-and-project-control-intern/snapshot.png"
                                alt="SDP-GP Analytics"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-3/5">
                            <h2 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors mb-2">
                                Data Analytics Intern
                            </h2>
                            <h3 className="text-lg text-gray-400 mb-4">SDP-GP</h3>
                            <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                                Automated critical path analysis using Python, reducing reporting time by 40% and enhancing project visualization.
                            </p>
                            <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mt-auto">
                                <span className="flex items-center gap-1"><Calendar size={12} /> Sep 2023 - Dec 2023</span>
                                <span className="flex items-center gap-1"><MapPin size={12} /> St. John's, NL</span>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="/work/memorial-university-of-newfoundland/data-quality-assurance-analyst"
                        className="group relative bg-[#161b22] border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all hover:shadow-2xl hover:shadow-indigo-900/10 flex flex-col md:flex-row"
                    >
                        <div className="w-full md:w-2/5 relative h-48 md:h-auto overflow-hidden">
                            <Image
                                src="/media/additional/memorial-university-of-newfoundland/data-quality-assurance-analyst/snapshot.png"
                                alt="DIAG Lab"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-3/5">
                            <h2 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors mb-2">
                                Data QA Analyst
                            </h2>
                            <h3 className="text-lg text-gray-400 mb-4">DIAG Lab (MUN)</h3>
                            <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                                Analyzed medical imaging data and validated segmentation metrics for machine learning training sets.
                            </p>
                            <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mt-auto">
                                <span className="flex items-center gap-1"><Calendar size={12} /> May 2023 - Sep 2023</span>
                                <span className="flex items-center gap-1"><MapPin size={12} /> St. John's, NL</span>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="/work/memorial-university-of-newfoundland/robotics-research-intern"
                        className="group relative bg-[#161b22] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-900/10 flex flex-col md:flex-row"
                    >
                        <div className="w-full md:w-2/5 relative h-48 md:h-auto overflow-hidden">
                            <Image
                                src="/media/workterm/memorial-university-of-newfoundland/robotics-research-intern/snapshot.png"
                                alt="Robotics"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-3/5">
                            <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                                Robotics Research Intern
                            </h2>
                            <h3 className="text-lg text-gray-400 mb-4">Memorial University</h3>
                            <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                                Engineered embedded systems and sensor fusion algorithms (C++) for the "ZumoBot" swarm robotics project.
                            </p>
                            <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mt-auto">
                                <span className="flex items-center gap-1"><Calendar size={12} /> Jan 2023 - May 2023</span>
                                <span className="flex items-center gap-1"><MapPin size={12} /> St. John's, NL</span>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href="/work/memorial-university-of-newfoundland/iswep-research-assistant"
                        className="group relative bg-[#161b22] border border-white/10 rounded-2xl overflow-hidden hover:border-pink-500/50 transition-all hover:shadow-2xl hover:shadow-pink-900/10 flex flex-col md:flex-row"
                    >
                        <div className="w-full md:w-2/5 relative h-48 md:h-auto overflow-hidden">
                            <Image
                                src="/media/additional/memorial-university-of-newfoundland/iswep-research-assistant/snapshot.png"
                                alt="ISWEP"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-3/5">
                            <h2 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors mb-2">
                                ISWEP Research Assistant
                            </h2>
                            <h3 className="text-lg text-gray-400 mb-4">Memorial University</h3>
                            <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                                Developed automation scripts to parse Excel data and analyze graduate survey results.
                            </p>
                            <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mt-auto">
                                <span className="flex items-center gap-1"><Calendar size={12} /> Jun 2022 - Sep 2022</span>
                                <span className="flex items-center gap-1"><MapPin size={12} /> St. John's, NL</span>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
}