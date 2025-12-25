import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Plane, Cpu, CheckCircle2 } from "lucide-react";

export default function ValiantPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 font-sans pb-20">
      <div className="relative w-full h-[45vh] min-h-[350px] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-[#0d1117] z-0" />
        <div className="absolute inset-0 z-0 opacity-40">
           <Image src="/media/additional/valiant-aerotech/software-team-lead/snapshot.png" alt="Drone Flight" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
            <Link href="/work" className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 mb-8 transition-colors">
                <ArrowLeft size={16} /> Back to Work
            </Link>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">Software Team Lead</h1>
                    <h2 className="text-2xl text-gray-400 font-light">Valiant Aerotech</h2>
                </div>
                <div className="w-20 h-20 bg-white rounded-xl p-2 shadow-xl shadow-purple-900/20">
                    <div className="relative w-full h-full">
                         <Image src="/media/additional/valiant-aerotech/software-team-lead/logo.png" alt="Valiant Logo" fill className="object-contain" />
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
        <div className="space-y-12">
            <section className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Plane className="text-purple-500" />
                    Autonomous Aerial Systems
                </h3>
                <p className="text-lg leading-relaxed text-gray-300">
                    Leading a team of 5 engineers to develop autonomous flight software for the AEAC Annual Competition. 
                    My role involves architecting the sensor fusion capability using ArduPilot and Lua scripting to enable precise payload delivery.
                </p>
            </section>
            
            <section className="bg-black/30 border border-white/10 rounded-xl p-6">
                 <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                        <div className="text-2xl font-bold text-white">5</div>
                        <div className="text-xs text-gray-500">Engineers Led</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white">AEAC</div>
                        <div className="text-xs text-gray-500">National Competition</div>
                    </div>
                 </div>
            </section>
        </div>

        <div className="space-y-8">
            <div className="bg-[#161b22] border border-white/10 rounded-xl p-6">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                    {["Lua", "ArduPilot", "C++", "MavLink", "Python"].map(skill => (
                         <span key={skill} className="px-3 py-1 bg-purple-900/20 text-purple-300 border border-purple-500/20 rounded-md text-xs font-medium">
                            {skill}
                         </span>
                    ))}
                </div>
            </div>
             <div className="bg-[#161b22] border border-white/10 rounded-xl p-6">
                 <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Impact</h4>
                 <ul className="space-y-3">
                    {["Autonomous Flight Prototyping", "Sensor Fusion Implementation", "Flight Controller Calibration"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle2 size={16} className="text-purple-500 shrink-0 mt-0.5" />
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