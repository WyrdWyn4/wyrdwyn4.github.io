import Link from "next/link";
import { MoveRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-gray-400 mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for new projects
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
          Code, systems, & things<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            that actually work
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-400 font-light leading-relaxed pt-4">
          Hi, I'm Waleed. I'm a 5th year Computer Engineering student working on data systems, AI infrastructure, and autonomous robotics across the cloud and real hardware.
        </p>

        <div className="pt-8 flex justify-center gap-4">
          <Link href="#workterm" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white text-black dark:bg-white dark:text-black px-8 font-medium transition-all hover:bg-gray-200">
            <span className="mr-2">See my work</span>
            <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/resume" className="inline-flex h-12 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-transparent px-8 font-medium text-gray-900 dark:text-gray-100 transition-colors hover:bg-gray-100 dark:hover:bg-white/5">
            Resume
          </Link>
        </div>
      </div>
    </section>
  );
}