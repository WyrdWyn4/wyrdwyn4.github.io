import Link from "next/link";
import { AlertTriangle, Terminal } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full bg-[#0d0d0d] text-gray-300 font-mono p-4 md:p-12 flex flex-col justify-center items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[0] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />

            <div className="max-w-3xl w-full z-10 space-y-8">

                <div className="border-l-4 border-red-600 pl-6 py-2">
                    <h1 className="text-4xl md:text-6xl font-bold text-red-600 tracking-tighter flex items-center gap-4">
                        <AlertTriangle size={48} className="animate-pulse" />
                        RUNTIME ERROR
                    </h1>
                    <p className="text-xl md:text-2xl text-red-400 mt-2 font-bold opacity-80">
                        404_PAGE_NOT_FOUND
                    </p>
                </div>

                <div className="bg-black/50 border border-red-900/30 rounded-lg p-6 backdrop-blur-sm shadow-2xl overflow-x-auto">
                    <div className="flex items-center gap-2 text-gray-500 text-xs mb-4 border-b border-white/5 pb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        <span className="ml-auto">stderr.log</span>
                    </div>

                    <div className="space-y-1 text-sm md:text-base leading-relaxed whitespace-nowrap font-mono">

                        <p className="text-red-400/90 font-bold">
                            Exception in thread "main" java.lang.RuntimeException: 404_PAGE_NOT_FOUND
                        </p>

                        <div className="pl-4 border-l border-white/10 ml-1 mt-1 text-gray-500">
                            <p>at <span className="text-gray-300">com.wyrdwyn.app.Main.route(Main.java:404)</span></p>
                            <p>at <span className="text-gray-300">com.wyrdwyn.app.Server.handle(Server.java:128)</span></p>
                            <p>at <span className="text-gray-300">java.base/java.lang.Thread.run(Thread.java:833)</span></p>
                        </div>

                        <p className="text-yellow-500/80 mt-2">
                            Caused by: java.io.FileNotFoundException: Target resource does not exist.
                        </p>
                    </div>
                </div>

                <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-2 text-green-400 mb-2">
                        <Terminal size={18} />
                        <span className="font-bold">RECOVERY_CONSOLE</span>
                    </div>

                    <div className="bg-[#1a1a1a] rounded p-4 font-mono text-sm border-l-2 border-green-500/50">
                        <div className="flex flex-col gap-3">
                            <div className="group">
                                <span className="text-green-500 select-none">$ </span>
                                <span className="text-white">try </span>
                                <Link href="/" className="inline-block text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                                    cd /home
                                </Link>
                                <span className="text-gray-600 ml-3 hidden sm:inline select-none">// Return to main dashboard</span>
                            </div>

                            <div className="group">
                                <span className="text-green-500 select-none">$ </span>
                                <span className="text-white">try </span>
                                <a href="mailto:wmksherwani@mun.ca" className="inline-block text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
                                    git blame
                                </a>
                                <span className="text-gray-600 ml-3 hidden sm:inline select-none">// Contact the developer</span>
                            </div>

                            <div className="animate-pulse mt-2">
                                <span className="text-green-500">$ </span>
                                <span className="w-2 h-4 bg-green-500 inline-block align-middle" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}