import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Beaker, Code2, CheckCircle2, FlaskConical } from "lucide-react";

export default function ScientificComputingPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 font-sans pb-20">
      
      {/* Hero Section */}
      <div className="relative w-full h-[45vh] min-h-[350px] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 to-[#0d1117] z-0" />
        
        <div className="absolute inset-0 z-0 opacity-40">
           <Image 
             src="/media/additional/memorial-university-of-newfoundland/scientific-computing-research-assistant/snapshot.png"
             alt="Molecular Simulation"
             fill
             className="object-cover"
           />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 mb-8 transition-colors"
            >
                <ArrowLeft size={16} /> Back to Work
            </Link>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                        Scientific Computing RA
                    </h1>
                    <h2 className="text-2xl text-gray-400 font-light">Memorial University</h2>
                </div>
                
                <div className="w-20 h-20 bg-white rounded-xl p-2 shadow-xl shadow-orange-900/20">
                    <div className="relative w-full h-full">
                         <Image 
                            src="/media/additional/memorial-university-of-newfoundland/scientific-computing-research-assistant/logo.png"
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
                    <FlaskConical className="text-orange-500" />
                    Computational Chemistry
                </h3>
                <p className="text-lg leading-relaxed text-gray-300">
                    I implemented the <strong>CREM framework</strong> (Chemically Reasonable Mutations) to simulate and generate bonded molecular structures. 
                    Using Python and Jupyter Notebooks, I developed pipelines to process SMILES strings and visualize potential molecular analogues for research analysis.
                </p>
            </section>

             <section>
                <h3 className="text-xl font-bold text-white mb-6">Research Highlights</h3>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="bg-[#161b22] p-6 rounded-lg border border-white/5 hover:border-orange-500/30 transition-colors">
                        <h4 className="text-orange-400 font-bold mb-2 flex items-center gap-2">
                            <Code2 size={18} /> 
                            Generative Pipelines
                        </h4>
                        <p className="text-sm text-gray-400">
                            Scripted automated mutation loops to generate thousands of valid molecular candidates from a single parent structure.
                        </p>
                    </div>
                    <div className="bg-[#161b22] p-6 rounded-lg border border-white/5 hover:border-orange-500/30 transition-colors">
                        <h4 className="text-orange-400 font-bold mb-2 flex items-center gap-2">
                            <Beaker size={18} /> 
                            Data Visualization
                        </h4>
                        <p className="text-sm text-gray-400">
                            Utilized Pandas and RDKit to render 2D molecular structures directly within analytics dashboards for rapid assessment.
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
                    {["Python", "Cheminformatics", "Pandas", "Jupyter", "RDKit"].map(skill => (
                         <span key={skill} className="px-3 py-1 bg-orange-900/20 text-orange-300 border border-orange-500/20 rounded-md text-xs font-medium">
                            {skill}
                         </span>
                    ))}
                </div>
            </div>
            
             <div className="bg-[#161b22] border border-white/10 rounded-xl p-6">
                 <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Impact</h4>
                 <ul className="space-y-3">
                    {["Bonded molecular generation", "Automated mutation testing", "Simulation analytics"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" />
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