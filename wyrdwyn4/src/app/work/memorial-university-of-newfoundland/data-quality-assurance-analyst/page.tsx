import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ScanEye, Activity, CheckCircle2, FileSearch } from "lucide-react";

export default function DiagLabPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 font-sans pb-20">
      
      {/* Hero Section */}
      <div className="relative w-full h-[45vh] min-h-[350px] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-[#0d1117] z-0" />
        
        <div className="absolute inset-0 z-0 opacity-40">
           <Image 
             src="/media/additional/memorial-university-of-newfoundland/data-quality-assurance-analyst/snapshot.png"
             alt="Medical Imaging Analysis"
             fill
             className="object-cover"
           />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 mb-8 transition-colors"
            >
                <ArrowLeft size={16} /> Back to Work
            </Link>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                        Data QA Analyst
                    </h1>
                    <h2 className="text-2xl text-gray-400 font-light">DIAG Lab (MUN)</h2>
                </div>
                
                <div className="w-20 h-20 bg-white rounded-xl p-2 shadow-xl shadow-indigo-900/20">
                    <div className="relative w-full h-full">
                         <Image 
                            src="/media/additional/memorial-university-of-newfoundland/data-quality-assurance-analyst/logo.png"
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
                    <ScanEye className="text-indigo-500" />
                    Medical Imaging & Accuracy
                </h3>
                <p className="text-lg leading-relaxed text-gray-300">
                    Working within the DIAG Lab, I was responsible for analyzing and validating large datasets of medical images. 
                    I partnered with FAISAL Labs to ensure patient care metrics were accurately represented in machine learning training sets.
                </p>
            </section>

             <section>
                <h3 className="text-xl font-bold text-white mb-6">Key Responsibilities</h3>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="bg-[#161b22] p-6 rounded-lg border border-white/5 hover:border-indigo-500/30 transition-colors">
                        <h4 className="text-indigo-400 font-bold mb-2 flex items-center gap-2">
                            <Activity size={18} /> 
                            Metric Validation
                        </h4>
                        <p className="text-sm text-gray-400">
                            Validated image segmentation metrics to ensure AI models were training on correctly labeled anatomical features.
                        </p>
                    </div>
                    <div className="bg-[#161b22] p-6 rounded-lg border border-white/5 hover:border-indigo-500/30 transition-colors">
                        <h4 className="text-indigo-400 font-bold mb-2 flex items-center gap-2">
                            <FileSearch size={18} /> 
                            MATLAB Analysis
                        </h4>
                        <p className="text-sm text-gray-400">
                            Utilized MATLAB scripts to preprocess DICOM files and extract relevant statistical properties for research.
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
                    {["MATLAB", "DICOM", "Image Processing", "Data QA", "Research"].map(skill => (
                         <span key={skill} className="px-3 py-1 bg-indigo-900/20 text-indigo-300 border border-indigo-500/20 rounded-md text-xs font-medium">
                            {skill}
                         </span>
                    ))}
                </div>
            </div>
            
             <div className="bg-[#161b22] border border-white/10 rounded-xl p-6">
                 <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Impact</h4>
                 <ul className="space-y-3">
                    {["Validated ML Training Data", "Patient Care Metrics", "Automated Image Analysis"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle2 size={16} className="text-indigo-500 shrink-0 mt-0.5" />
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