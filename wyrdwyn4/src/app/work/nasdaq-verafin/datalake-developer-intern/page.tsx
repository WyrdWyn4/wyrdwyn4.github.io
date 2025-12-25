import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Database, CheckCircle2, Server } from "lucide-react";

export default function NasdaqDatalakePage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 font-sans pb-20">
      
      {/* Hero: Green Theme */}
      <div className="relative w-full h-[45vh] min-h-[350px] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-[#0d1117] z-0" />
        
        <div className="absolute inset-0 z-0 opacity-40">
           <Image 
             src="/media/workterm/nasdaq-verafin/datalake-developer-intern/snapshot.png"
             alt="Datalake"
             fill
             className="object-cover"
           />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 mb-8 transition-colors"
            >
                <ArrowLeft size={16} /> Back to Work
            </Link>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                        Datalake Developer
                    </h1>
                    <h2 className="text-2xl text-gray-400 font-light">Nasdaq Verafin</h2>
                </div>
                
                <div className="w-20 h-20 bg-white rounded-xl p-2 shadow-xl shadow-green-900/20">
                    <div className="relative w-full h-full">
                         <Image 
                            src="/media/workterm/nasdaq-verafin/datalake-developer-intern/logo.png"
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
        
        <div className="space-y-12">
            
            <section className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Server className="text-green-500" />
                    Engineering High-Volume Pipelines
                </h3>
                <p className="text-lg leading-relaxed text-gray-300">
                    During my two terms as a Datalake Developer, I was responsible for the ingestion and processing of massive telemetry datasets.
                    My primary focus was optimizing <strong>Apache Spark</strong> jobs running on AWS Glue to ensure data integrity and reduce processing time.
                </p>
            </section>

             <section>
                <h3 className="text-xl font-bold text-white mb-6">Technical Highlights</h3>
                <div className="grid gap-4">
                    <div className="bg-[#161b22] p-6 rounded-lg border border-white/5 hover:border-green-500/30 transition-colors">
                        <h4 className="text-green-400 font-bold mb-2">Database Splitting Logic</h4>
                        <p className="text-sm text-gray-400">Implemented complex logic in Scala to split incoming streams into region-specific databases, ensuring compliance with data residency laws.</p>
                    </div>
                    <div className="bg-[#161b22] p-6 rounded-lg border border-white/5 hover:border-green-500/30 transition-colors">
                        <h4 className="text-green-400 font-bold mb-2">AWS Step Functions</h4>
                        <p className="text-sm text-gray-400">Orchestrated multi-stage ETL processes using Step Functions, improving error handling and retries for nightly batch jobs.</p>
                    </div>
                </div>
            </section>

            <section className="bg-black/30 border border-white/10 rounded-xl p-6">
                 <h4 className="text-sm font-mono text-gray-500 mb-2">Stats</h4>
                 <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <div className="text-2xl font-bold text-white">2</div>
                        <div className="text-xs text-gray-500">Work Terms</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white">Scala</div>
                        <div className="text-xs text-gray-500">Primary Language</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white">AWS</div>
                        <div className="text-xs text-gray-500">Infrastructure</div>
                    </div>
                 </div>
            </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
            <div className="bg-[#161b22] border border-white/10 rounded-xl p-6">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                    {["Scala", "Apache Spark", "AWS Glue", "Athena", "Java", "S3"].map(skill => (
                         <span key={skill} className="px-3 py-1 bg-green-900/20 text-green-300 border border-green-500/20 rounded-md text-xs font-medium">
                            {skill}
                         </span>
                    ))}
                </div>
            </div>
            
             <div className="bg-[#161b22] border border-white/10 rounded-xl p-6">
                 <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Impact</h4>
                 <ul className="space-y-3">
                    {["Reduced pipeline latency", "Enforced Data Integrity", "Optimized Storage Costs"].map((item, i) => (
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