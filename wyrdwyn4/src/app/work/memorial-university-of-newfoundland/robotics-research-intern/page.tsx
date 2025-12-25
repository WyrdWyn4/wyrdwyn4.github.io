import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Cpu, Bot, CheckCircle2, CircuitBoard } from "lucide-react";

export default function RoboticsPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 font-sans pb-20">
      
      {/* Hero Section */}
      <div className="relative w-full h-[45vh] min-h-[350px] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-[#0d1117] z-0" />
        
        <div className="absolute inset-0 z-0 opacity-40">
           <Image 
             src="/media/workterm/memorial-university-of-newfoundland/robotics-research-intern/snapshot.png"
             alt="ZumoBot Swarm"
             fill
             className="object-cover"
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
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                        Robotics Research Intern
                    </h1>
                    <h2 className="text-2xl text-gray-400 font-light">Memorial University</h2>
                </div>
                
                <div className="w-20 h-20 bg-white rounded-xl p-2 shadow-xl shadow-blue-900/20">
                    <div className="relative w-full h-full">
                         <Image 
                            src="/media/workterm/memorial-university-of-newfoundland/robotics-research-intern/logo.png"
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
                    <Bot className="text-blue-500" />
                    Swarm Robotics & Embedded Systems
                </h3>
                <p className="text-lg leading-relaxed text-gray-300">
                    I engineered embedded systems for the <strong>"ZumoBot"</strong> swarm robotics project. 
                    My work focused on low-level C++ programming to enable sensor fusion between DekaBot hardware and 
                    Adafruit color sensors, allowing the robots to make autonomous decisions based on their environment.
                </p>
            </section>

             <section>
                <h3 className="text-xl font-bold text-white mb-6">Technical Deep Dive</h3>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="bg-[#161b22] p-6 rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors">
                        <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                            <CircuitBoard size={18} /> 
                            I2C Protocol
                        </h4>
                        <p className="text-sm text-gray-400">
                            Developed a custom I2C communication protocol to synchronize data transfer between the main flight controller and peripheral sensors with minimal latency.
                        </p>
                    </div>
                    <div className="bg-[#161b22] p-6 rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors">
                        <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                            <Cpu size={18} /> 
                            PID Control
                        </h4>
                        <p className="text-sm text-gray-400">
                            Implemented PID (Proportional-Integral-Derivative) control loops to ensure smooth motor response and precise line-following capabilities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Snippet / Stats Area */}
            <section className="bg-black/30 border border-white/10 rounded-xl p-6">
                 <h4 className="text-sm font-mono text-gray-500 mb-4">Project Stats</h4>
                 <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <div className="text-2xl font-bold text-white">C++</div>
                        <div className="text-xs text-gray-500">Core Language</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white">I2C</div>
                        <div className="text-xs text-gray-500">Protocol</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white">v1.0</div>
                        <div className="text-xs text-gray-500">Swarm Version</div>
                    </div>
                 </div>
            </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
            <div className="bg-[#161b22] border border-white/10 rounded-xl p-6">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                    {["C++", "Embedded Systems", "I2C", "PID Control", "Robotics", "Arduino"].map(skill => (
                         <span key={skill} className="px-3 py-1 bg-blue-900/20 text-blue-300 border border-blue-500/20 rounded-md text-xs font-medium">
                            {skill}
                         </span>
                    ))}
                </div>
            </div>
            
             <div className="bg-[#161b22] border border-white/10 rounded-xl p-6">
                 <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Key Achievements</h4>
                 <ul className="space-y-3">
                    {["Integrated DekaBot & Adafruit Sensors", "Custom I2C Protocol", "PID Control Implementation", "Deployed Swarm v1 Behavior"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
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