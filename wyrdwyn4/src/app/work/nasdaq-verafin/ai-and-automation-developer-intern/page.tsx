import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Terminal, CheckCircle2, Cpu } from "lucide-react";

export default function NasdaqAIPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 font-sans pb-20">
      
      {/* 1. Custom Hero Section */}
      <div className="relative w-full h-[50vh] min-h-[400px] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-[#0d1117] z-0" />
        
        <div className="absolute inset-0 z-0 opacity-30">
           <Image 
             src="/media/workterm/nasdaq-verafin/ai-and-automation-developer-intern/snapshot.png"
             alt="AI Architecture"
             fill
             className="object-cover blur-sm"
             priority
           />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 mb-8 transition-colors"
            >
                <ArrowLeft size={16} /> Back to Work
            </Link>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-mono font-bold">
                            CONFIDENTIAL PROJECT
                        </div>
                        <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-mono font-bold">
                            AI AGENTS
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                        AI & Automation Developer
                    </h1>
                    <h2 className="text-2xl text-gray-400 font-light">Nasdaq Verafin</h2>
                </div>
                
                {/* Company Logo Custom Styling */}
                <div className="w-20 h-20 bg-white rounded-xl p-2 shadow-xl shadow-blue-900/20">
                    <div className="relative w-full h-full">
                         <Image 
                            src="/media/workterm/nasdaq-verafin/ai-and-automation-developer-intern/logo.png"
                            alt="Nasdaq Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
        
        {/* Main Content */}
        <div className="space-y-16">
            
            {/* Description */}
            <section className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Cpu className="text-blue-500" />
                    The Mission
                </h3>
                <p className="text-lg leading-relaxed text-gray-300">
                    I am currently designing the architecture for an internal <strong>"Mixture-of-Experts" (MoE)</strong> service. 
                    The goal is to orchestrate specialized LLM agents that can autonomously review code for quality assurance 
                    and perform risk assessments before deployment.
                </p>
                <p className="text-lg leading-relaxed text-gray-300 mt-4">
                    This system moves beyond simple chatbots by integrating directly into the CI/CD pipeline, 
                    providing actionable feedback to developers in real-time.
                </p>
            </section>

            {/* Code Snippet - Specific to this page */}
            <section className="bg-[#161b22] border border-white/10 rounded-xl overflow-hidden">
                <div className="bg-[#21262d] px-4 py-2 border-b border-white/5 flex justify-between items-center">
                    <span className="text-xs font-mono text-gray-400">src/agents/FeedbackAgent.java</span>
                    <Terminal size={14} className="text-gray-500" />
                </div>
                <div className="p-6 overflow-x-auto">
                    <pre className="font-mono text-sm leading-relaxed">
                        <code className="text-gray-300">
<span className="text-orange-400">public class</span> <span className="text-yellow-300">FeedbackAgent</span> <span className="text-orange-400">extends</span> <span className="text-white">MoEService</span> {'{'}{'\n'}
{'  '}<span className="text-orange-400">private final</span> <span className="text-blue-400">String</span> <span className="text-white">MODEL = </span> <span className="text-green-400">"WMK-4-Sher"</span>;{'\n\n'}
{'  '}<span className="text-orange-400">public</span> <span className="text-blue-400">Feedback</span> <span className="text-yellow-300">generateReview</span><span className="text-white">(CodeContext ctx) {'{'}</span>{'\n'}
{'    '}<span className="text-gray-500">// Orchestrating specialized agents</span>{'\n'}
{'    '}<span className="text-white">var riskScore = </span><span className="text-white">RiskAgent.evaluate(ctx);</span>{'\n'}
{'    '}<span className="text-purple-400">if</span> <span className="text-white">(riskScore {'>'} 0.8) {'{'}</span>{'\n'}
{'      '}<span className="text-white">return </span><span className="text-orange-400">new</span> <span className="text-white">Feedback(</span><span className="text-green-400">"High Risk Detected"</span><span className="text-white">);</span>{'\n'}
{'    '}<span className="text-white">{'}'}</span>{'\n'}
{'  '}<span className="text-white">{'}'}</span>{'\n'}
<span className="text-white">{'}'}</span>
                        </code>
                    </pre>
                </div>
            </section>

            {/* Gallery - Hardcoded for AI */}
            <section>
                <h3 className="text-2xl font-bold text-white mb-6">Visuals</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="relative aspect-video bg-[#161b22] rounded-lg border border-white/10 overflow-hidden group">
                        <Image 
                            src="/media/workterm/nasdaq-verafin/ai-and-automation-developer-intern/snapshot.png"
                            alt="Architecture Diagram"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-xs text-center text-white backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform">
                            System Architecture
                        </div>
                     </div>
                     <div className="relative aspect-video bg-[#161b22] rounded-lg border border-white/10 overflow-hidden group">
                        <Image 
                            src="/media/workterm/nasdaq-verafin/ai-and-automation-developer-intern/me.png"
                            alt="At the office"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                     </div>
                </div>
            </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
            
            {/* Info Card */}
            <div className="bg-[#161b22] border border-white/10 rounded-xl p-6">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Details</h4>
                <ul className="space-y-4 text-sm">
                    <li className="flex justify-between items-center border-b border-white/5 pb-2">
                        <span className="text-gray-400 flex items-center gap-2"><Calendar size={14}/> Date</span>
                        <span className="text-white">Sep 2025 - Present</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-white/5 pb-2">
                        <span className="text-gray-400 flex items-center gap-2"><MapPin size={14}/> Location</span>
                        <span className="text-white">St. John's, NL</span>
                    </li>
                </ul>
            </div>

            {/* Tech Stack - Badges */}
            <div className="bg-[#161b22] border border-white/10 rounded-xl p-6">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                    {["Python", "LangChain", "AWS Bedrock", "Docker", "Grafana", "Java"].map(skill => (
                         <span key={skill} className="px-3 py-1 bg-blue-900/20 text-blue-300 border border-blue-500/20 rounded-md text-xs font-medium hover:bg-blue-900/30 transition-colors cursor-default">
                            {skill}
                         </span>
                    ))}
                </div>
            </div>

            {/* Key Outcomes */}
            <div className="bg-[#161b22] border border-white/10 rounded-xl p-6">
                 <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Key Outcomes</h4>
                 <ul className="space-y-3">
                    {["Designed MoE Architecture", "Orchestrated LLM Agents", "Implemented SPACE Metrics", "Cloud-native Analytics"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                 </ul>
            </div>

        </div>

      </div>
    </div>
  );
}