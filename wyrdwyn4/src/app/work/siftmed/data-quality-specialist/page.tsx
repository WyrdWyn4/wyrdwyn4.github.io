import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Database, CheckCircle2, ShieldCheck } from "lucide-react";

export default function SiftMedPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 font-sans pb-20">
      <div className="relative w-full h-[45vh] min-h-[350px] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 to-[#0d1117] z-0" />
        <div className="absolute inset-0 z-0 opacity-40">
           <Image src="/media/additional/siftmed/data-quality-specialist/snapshot.png" alt="SiftMed Data" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
            <Link href="/work" className="inline-flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 mb-8 transition-colors">
                <ArrowLeft size={16} /> Back to Work
            </Link>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">Data Quality Specialist</h1>
                    <h2 className="text-2xl text-gray-400 font-light">SiftMed</h2>
                </div>
                <div className="w-20 h-20 bg-white rounded-xl p-2 shadow-xl shadow-teal-900/20">
                    <div className="relative w-full h-full">
                         <Image src="/media/additional/siftmed/data-quality-specialist/logo.png" alt="SiftMed Logo" fill className="object-contain" />
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
        <div className="space-y-12">
            <section className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <ShieldCheck className="text-teal-500" />
                    Medical Data Integrity
                </h3>
                <p className="text-lg leading-relaxed text-gray-300">
                    Ensured high-fidelity data processing for complex medical records. I wrote Python automation scripts to resolve duplicate records and audited metadata accuracy to meet strict client delivery standards.
                </p>
            </section>
        </div>

        <div className="space-y-8">
            <div className="bg-[#161b22] border border-white/10 rounded-xl p-6">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                    {["SQL", "Python", "Data QA", "Medical Records"].map(skill => (
                         <span key={skill} className="px-3 py-1 bg-teal-900/20 text-teal-300 border border-teal-500/20 rounded-md text-xs font-medium">
                            {skill}
                         </span>
                    ))}
                </div>
            </div>
             <div className="bg-[#161b22] border border-white/10 rounded-xl p-6">
                 <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Outcomes</h4>
                 <ul className="space-y-3">
                    {["Automated workflows", "Duplicate Resolution Scripting", "Metadata Auditing"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle2 size={16} className="text-teal-500 shrink-0 mt-0.5" />
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