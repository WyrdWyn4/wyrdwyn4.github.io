import Link from "next/link";
import { ArrowUpRight, Github, MoveRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full animate-in fade-in duration-700">

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
            <Link href="#work" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white text-black dark:bg-white dark:text-black px-8 font-medium transition-all hover:bg-gray-200">
              <span className="mr-2">See my work</span>
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/resume" className="inline-flex h-12 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-transparent px-8 font-medium text-gray-900 dark:text-gray-100 transition-colors hover:bg-gray-100 dark:hover:bg-white/5">
              Resume
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl px-4 py-30" id="work">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-white">Work Experience</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-black-50 border border-blue-500 p-8 flex flex-col justify-between hover:border-blue-800 transition-all">
            <div className="z-10">
              <h3 className="text-3xl font-bold mt-2 mb-2 text-blue-400 opacity-80 group-hover:opacity-100 transition-all">Nasdaq Verafin</h3>
              <p className="text-4xl text-white group-hover:text-5xl transition-all">AI & Automation Intern</p>
              <p className="py-3 text-xl text-blue-200">Sep. 2025 - Present</p>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-tl from-blue-500/20 to-transparent blur-3xl rounded-full" />
            <Link href="/projects/mission-planner/overview" className="absolute inset-0 z-20" />
            <div className="absolute bottom-8 right-8 bg-blue-400 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10">
              <ArrowUpRight />
            </div>
          </div>

          <div className="md:col-span-1 md:row-span-2 group relative overflow-hidden rounded-3xl bg-black-50 border border-green-500 p-8 flex flex-col justify-between hover:border-green-800 transition-all">
            <div className="z-10">
              <h3 className="text-3xl font-bold mt-2 mb-2 text-green-400 opacity-80 group-hover:opacity-100 transition-all">Nasdaq Verafin</h3>
              <p className="text-4xl text-white group-hover:text-5xl transition-all">Datalake Developer Intern</p>
              <p className="py-3 text-xl text-green-200">Jan. 2025 - Aug. 2025</p>
              <p className="text-xl text-green-200">May. 2024 - Aug. 2024</p>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-tl from-green-500/20 to-transparent blur-3xl rounded-full" />
            <Link href="/projects/mission-planner/overview" className="absolute inset-0 z-20" />
            <div className="absolute bottom-8 right-8 bg-green-400 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10">
              <ArrowUpRight />
            </div>
          </div>

          <div className="md:col-span-1 group relative overflow-hidden rounded-3xl bg-black-50 border border-yellow-500 p-8 flex flex-col justify-between hover:border-yellow-800 transition-all">
            <div className="z-10">
              <h3 className="text-3xl font-bold mt-2 mb-2 text-yellow-400 opacity-80 group-hover:opacity-100 transition-all">SDP-GP</h3>
              <p className="text-4xl text-white group-hover:text-5xl transition-all">Data Analytics & Project Control Intern</p>
              <p className="py-3 text-xl text-yellow-200">Sep. 2023 - Dec. 2023</p>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-tl from-yellow-500/20 to-transparent blur-3xl rounded-full" />
            <Link href="/projects/mission-planner/overview" className="absolute inset-0 z-20" />
            <div className="absolute bottom-8 right-8 bg-yellow-400 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10">
              <ArrowUpRight />
            </div>
          </div>

          <div className="md:col-span-1 group relative overflow-hidden rounded-3xl bg-black-50 border border-red-500 p-8 flex flex-col justify-between hover:border-red-800 transition-all">
            <div className="z-10">
              <h3 className="text-3xl font-bold mt-2 mb-2 text-red-400 opacity-80 group-hover:opacity-100 transition-all">Memorial University of Newfoundland</h3>
              <p className="text-4xl text-white group-hover:text-5xl transition-all">Robotics Research Intern</p>
              <p className="py-3 text-xl text-red-200">Jan. 2023 - May. 2023</p>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-tl from-red-500/20 to-transparent blur-3xl rounded-full" />
            <Link href="/projects/mission-planner/overview" className="absolute inset-0 z-20" />
            <div className="absolute bottom-8 right-8 bg-red-400 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10">
              <ArrowUpRight />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}