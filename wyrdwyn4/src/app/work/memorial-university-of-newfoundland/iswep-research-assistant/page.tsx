import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Table2, SearchCode, CheckCircle2, Sigma } from "lucide-react";

export default function IswepPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 font-sans pb-20">
      
      {/* Hero Section */}
      <div className="relative w-full h-[45vh] min-h-[350px] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/20 to-[#0d1117] z-0" />
        
        <div className="absolute inset-0 z-0 opacity-40">
           <Image 
             src="/media/additional/memorial-university-of-newfoundland/iswep-research-assistant/snapshot.png"
             alt="Data Analysis"
             fill
             className="object-cover"
           />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 text-sm text-pink-400 hover:text-pink-300 mb-8 transition-colors"
            >
                <ArrowLeft size={16} /> Back to Work
            </Link>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                        ISWEP Research Assistant
                    </h1>
                    <h2 className="text-2xl text-gray-400 font-light">Memorial University</h2>
                </div>
                
                <div className="w-20 h-20 bg-white rounded-xl p-2 shadow-xl shadow-pink-900/20">
                    <div className="relative w-full h-full">
                         <Image 
                            src="/media/additional/memorial-university-of-newfoundland/iswep-research-assistant/logo.png"
                            alt="MUN Logo"
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
        <div className="space-y-12">
            
            <section className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Table2 className="text-pink-500" />
                    Office Automation & Analysis
                </h3>
                <p className="text-lg leading-relaxed text-gray-300">
                    In this role, I developed automation scripts to parse large volumes of Excel data for the Graduate Office. 
                    My work involved analyzing survey results, generating linear models, and creating bell curve visualizations to 
                    interpret student satisfaction trends.
                </p>
            </section>

             <section>
                <h3 className="text-xl font-bold text-white mb-6">Key Contributions</h3>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="bg-[#161b22] p-6 rounded-lg border border-white/5 hover:border-pink-500/30 transition-colors">
                        <h4 className="text-pink-400 font-bold mb-2 flex items-center gap-2">
                            <SearchCode size={18} /> 
                            Python Scripting
                        </h4>
                        <p className="text-sm text-gray-400">
                            Programmed custom Python scripts to automate selective internet searches and parse Excel datasets, saving hours of manual data entry.
                        </p>
                    </div>
                    <div className="bg-[#161b22] p-6 rounded-lg border border-white/5 hover:border-pink-500/30 transition-colors">
                        <h4 className="text-pink-400 font-bold mb-2 flex items-center gap-2">
                            <Sigma size={18} /> 
                            Statistical Models
                        </h4>
                        <p className="text-sm text-gray-400">
                            Generated linear regression models and bell curves to visualize statistical distributions in survey data.
                        </p>
                    </div>
                </div>
            </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
            <div className="bg-[#161b22] border border-white/10 rounded-xl p-6">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                    {["Python", "Excel Automation", "Data Analysis", "Statistics"].map(skill => (
                         <span key={skill} className="px-3 py-1 bg-pink-900/20 text-pink-300 border border-pink-500/20 rounded-md text-xs font-medium">
                            {skill}
                         </span>
                    ))}
                </div>
            </div>
            
             <div className="bg-[#161b22] border border-white/10 rounded-xl p-6">
                 <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Impact</h4>
                 <ul className="space-y-3">
                    {["Excel Parsing Automation", "Survey Analysis", "Statistical Modeling"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle2 size={16} className="text-pink-500 shrink-0 mt-0.5" />
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