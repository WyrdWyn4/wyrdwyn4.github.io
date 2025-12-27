"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    Flame,
    Crosshair,
    Wind,
    Cpu,
    Users,
    Target,
    Box,
    Radio,
    Droplets,
    History,
    Thermometer,
    ShieldAlert,
    MapPin,
    FileText,
    WifiOff,
    Camera,
    Hammer,
    X
} from "lucide-react";
import { cn } from "@/lib/utils";

type DroneType = 'valkyrie' | 'vulcan' | 'valhala';

const DRONES = {
    valkyrie: {
        name: "Valkyrie",
        role: "Legacy Platform (2025)",
        desc: "The flagship prototype from our debut year. Engineered for the 2025 Medicine Hat trials, Valkyrie served as the testbed for our core avionics and water-transport mechanisms.",
        specs: ["Legacy Platform", "Research & Dev", "Rapid Prototyping"]
    },
    vulcan: {
        name: "Vulcan",
        role: "Task 1: Urban Recon",
        desc: "Designed for heavy lift and precision drop. Tasked with delivering critical equipment (Radio, Oxygen, Ladders) to staging areas and identifying targets in Urban Canyons.",
        specs: ["Heavy Lift", "Precision Drop Mechanism", "Target Detection"]
    },
    valhala: {
        name: "Valhala",
        role: "Task 2: Urban Extinguisher",
        desc: "A specialized autonomous unit built for the 'Big City' scenario. Capable of navigating tight urban corridors and extinguishing indoor/outdoor fires inside metal structures (Faraday Cage).",
        specs: ["Indoor Navigation", "Fire Suppression", "Autonomous Targeting"]
    }
};

const TEAM = {
    exec: [
        { name: "Mohammad Awad", role: "President" },
        { name: "Abdullah Elbakry", role: "Vice President" }
    ],
    leads: [
        { name: "Waleed Mannan Khan Sherwani", role: "Software Lead", highlight: true },
        { name: "Taimur Mirza", role: "Electrical Lead" },
        { name: "Yousef", role: "Mechanical Lead" }
    ],
    software: [
        { name: "Rohan Torul", role: "Software Member" },
        { name: "Garianna Knowles", role: "Software Member" },
        { name: "Anderson Bath", role: "Software Member" }
    ]
};

const BASE_IMG_PATH = "/media/additional/valiant-aerotech/software-team-lead";

const GALLERY_2026 = [
    "2026-1.png",
    "2026-2.png",
    "2026-3.png"
];

const GALLERY_2025 = [
    "snapshot.png",
    "2025-2.png",
    "2025-3.png",
    "2025-5.png",
    "2025-4.png",
    "2025-6.png",
    "2025-7.png",
    "2025-8.png",
];

const SOFTWARE_IMGS = {
    planning: "mapping.png",
    integration: "cv_target_lock.png",
    actuation: "flight_controller_lua.png"
};

const BurningEmbers = () => {
    const [embers, setEmbers] = useState<Array<{ left: string, top: string, duration: string, delay: string, size: string, opacity: number }>>([]);

    useEffect(() => {
        const newEmbers = Array.from({ length: 60 }).map((_, i) => ({
            left: `${Math.random() * 100}%`,
            top: `${100 + Math.random() * 20}%`,
            duration: `${3 + Math.random() * 5}s`,
            delay: `${Math.random() * 5}s`,
            size: `${2 + Math.random() * 4}px`,
            opacity: 0.4 + Math.random() * 0.6
        }));
        setEmbers(newEmbers);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[60] mix-blend-screen">
            {embers.map((style, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-orange-500 animate-wind-ember"
                    style={{
                        left: style.left,
                        top: style.top,
                        width: style.size,
                        height: style.size,
                        opacity: style.opacity,
                        animationDuration: style.duration,
                        animationDelay: style.delay,
                        boxShadow: `0 0 ${parseInt(style.size) * 3}px 1px rgba(255, 100, 0, 0.8)`
                    }}
                />
            ))}
        </div>
    );
};

const ForestSilhouette = () => (
    <div className="absolute bottom-0 left-0 right-0 h-64 md:h-80 z-20 pointer-events-none select-none overflow-hidden">
        <div
            className="absolute bottom-0 w-[120%] left-[-10%] h-full bg-repeat-x opacity-30 animate-pulse-slow"
            style={{
                backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyMCI+PHBhdGggZmlsbD0iIzFhMWExYSIgZmlsbC1vcGFjaXR5PSIxIiBkPSJNMCwyODhMMjQsMjcyQzQ4LDI1Niw5NiwyMjQsMTQ0LDIxM0MxOTIsMjAyLDI0MCwyMTMsMjg4LDIyOUMzMzYsMjQ1LDM4NCwyNjcsNDMyLDI2MUM0ODAsMjU2LDUyOCwyMjQsNTc2LDIwMkM2MjQsMTgxLDY3MiwxNzEsNzIwLDE4MUM3NjgsMTkyLDgxNiwyMjQsODY0LDIyOUM5MTIsMjM1LDk2MCwyMTMsMTAwOCwxOTJDMTA1NiwxNzEsMTEwNCwxNDksMTE1MiwxNDlDMTIwMCwxNDksMTI0OCwxNzEsMTI5NiwxOTJDMTM0NCwyMTMsMTM5MiwyMzUsMTQxNiwyNDZMMTQ0MCwyNTZMMTQ0MCwzMjBMMTQxNiwzMjBDMTM5MiwzMjAsMTM0NCwzMjAsMTI5NiwzMjBDMTI0OCwzMjAsMTIwMCwzMjAsMTE1MiwzMjBDMTEwNCwzMjAsMTA1NiwzMjAsMTAwOCwzMjBDOTYwLDMyMCw5MTIsMzIwLDg2NCwzMjBDODE2LDMyMCw3NjgsMzIwLDcyMCwzMjBDNjcyLDMyMCw2MjQsMzIwLDU3NiwzMjBDNTI4LDMyMCw0ODAsMzIwLDQzMiwzMjBDMzg0LDMyMCwzMzYsMzIwLDI4OCwzMjBDMjQwLDMyMCwxOTIsMzIwLDE0NCwzMjBDOTYsMzIwLDQ4LDMyMCwyNCwzMjBMMCwzMjBaIj48L3BhdGg+PC9zdmc+')`,
                backgroundSize: '100% 100%',
                backgroundPosition: 'bottom'
            }}
        />

        <div
            className="absolute bottom-0 w-full h-3/4 opacity-70"
            style={{
                background: 'linear-gradient(to top, #0a0a0a 10%, transparent 100%)',
            }}
        />

        <div
            className="absolute bottom-0 w-full h-full bg-repeat-x opacity-90"
            style={{
                backgroundImage: `url('/media/additional/valiant-aerotech/software-team-lead/forest-silhouette.svg')`,
                backgroundSize: 'auto 100%',
                backgroundPosition: 'bottom center'
            }}
        />
    </div>
);

export default function ValiantPage() {
    const [activeDrone, setActiveDrone] = useState<DroneType>('vulcan');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-gray-300 font-sans pb-20 selection:bg-orange-500/30 overflow-x-hidden relative">

            <style jsx global>{`
        @keyframes wind-ember {
          0% { transform: translate(0, 0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translate(40vw, -120vh) scale(0.5); opacity: 0; }
        }
        .animate-wind-ember {
          animation-name: wind-ember;
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation-iteration-count: infinite;
        }
        @keyframes fire-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }
        .animate-fire-pulse {
          animation: fire-pulse 4s ease-in-out infinite;
        }
      `}</style>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <button className="absolute top-6 right-6 text-gray-400 hover:text-orange-500 transition-colors z-[110]">
                        <X size={32} />
                    </button>
                    <div
                        className="relative w-full max-w-7xl h-auto max-h-[90vh] aspect-video rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-orange-900/20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage}
                            alt="Expanded view"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}

            <BurningEmbers />

            <div className="relative w-full h-[70vh] min-h-[600px] border-b border-orange-900/20 overflow-hidden flex flex-col justify-end">
                <div className="absolute inset-0 bg-gradient-to-t from-orange-950 via-[#1a0f0f] to-black z-0" />
                <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
                    <div className="w-full h-full bg-[url('/media/additional/valiant-aerotech/software-team-lead/night-sky.png')] bg-cover bg-center grayscale contrast-125" />
                </div>
                <div className="absolute bottom-0 inset-x-0 h-3/4 bg-gradient-to-t from-orange-600/20 via-orange-900/10 to-transparent animate-fire-pulse pointer-events-none z-10" />
                <ForestSilhouette />
                <div className="relative z-30 max-w-7xl w-full mx-auto px-6 pb-20">
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 mb-8 transition-colors"
                    >
                        <ArrowLeft size={16} /> Back to Work
                    </Link>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 rounded-full bg-orange-600/20 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(249,115,22,0.3)] backdrop-blur-sm">
                                    <Flame size={12} className="animate-pulse" />
                                    WILDFIRE RESPONSE UNIT
                                </span>
                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-bold tracking-wider backdrop-blur-sm">
                                    AEAC 2026 RFP BIDDER
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl">
                                Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Team Lead</span>
                            </h1>
                            <h2 className="text-2xl md:text-3xl text-gray-400 font-light max-w-2xl drop-shadow-md">
                                Valiant Aerotech <span className="text-orange-900/50">|</span> Memorial University
                            </h2>
                        </div>

                        <div className="hidden md:block w-32 h-32 bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl shadow-orange-900/20 z-40">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/media/additional/valiant-aerotech/software-team-lead/logo.png"
                                    alt="Valiant Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-16 relative z-10">

                <div className="space-y-24">

                    <section className="space-y-6">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <MapPin className="text-orange-500" size={20} />
                            Origins & Vision
                        </h3>
                        <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl" />
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Valiant Aerotech was founded in the <strong>Fall of 2024</strong> by a group of passionate engineering students at
                                <strong> Memorial University of Newfoundland</strong>. What began as a small classroom initiative has evolved into
                                a multidisciplinary design team focused on <strong>innovation in aerial robotics</strong>.
                            </p>
                            <p className="text-gray-400 text-sm">
                                Our mission is to apply academic theory to real-world chaos - designing systems that can survive 15+ knot winds,
                                navigate GPS-denied urban canyons, and coordinate autonomously in critical infrastructure zones.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-8 border-l-2 border-orange-600 pl-6 lg:pl-0 lg:border-l-0">
                        <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                            <div className="p-3 rounded-lg bg-orange-500/10 text-orange-500">
                                <Target size={24} />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white">Project: National Student UAS Competition (2026)</h3>
                                <p className="text-sm text-gray-500 font-mono">Current Objective - Urban Firefighting RFP</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-8 hover:border-orange-500/30 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Radio size={120} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">Task 1: Reconnaissance</h4>
                                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                                    <strong>Scenario:</strong> Dense city block fire. Firefighters en route.
                                </p>
                                <ul className="text-sm text-gray-300 space-y-3">
                                    <li className="flex gap-3">
                                        <span className="text-orange-500 font-mono">01.</span>
                                        <span><strong>Precision Drop:</strong> Deliver radios, oxygen, and ladders to 1m² zones.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-orange-500 font-mono">02.</span>
                                        <span><strong>Urban Canyon:</strong> Target ID in high-rise simulation.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-8 hover:border-blue-500/30 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Droplets size={120} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Task 2: Suppression</h4>
                                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                                    <strong>Scenario:</strong> Indoor/outdoor active fire suppression.
                                </p>
                                <ul className="text-sm text-gray-300 space-y-3">
                                    <li className="flex gap-3">
                                        <span className="text-blue-500 font-mono">01.</span>
                                        <span><strong>Faraday Cage:</strong> Ops inside metal shed (GPS denied).</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-blue-500 font-mono">02.</span>
                                        <span><strong>pH Targets:</strong> Water triggers color change on target.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                <Hammer size={16} /> Status: Fabrication & Prep
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {GALLERY_2026.map((img, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setSelectedImage(`${BASE_IMG_PATH}/${img}`)}
                                        className="relative aspect-video bg-[#111] rounded-lg border border-white/10 overflow-hidden group cursor-pointer"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-orange-600/60 via-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-color-dodge z-10 pointer-events-none" />

                                        <Image
                                            src={`${BASE_IMG_PATH}/${img}`}
                                            alt={`2026 Prep - ${img}`}
                                            fill
                                            className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 z-20">
                                            <span className="text-xs font-mono text-orange-400 truncate">
                                                {img.replace('.png', '').replace(/_/g, ' ').toUpperCase()}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="space-y-8 border-l-2 border-gray-700 pl-6 lg:pl-0 lg:border-l-0 opacity-90">
                        <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                            <History className="text-gray-400" size={24} />
                            <div>
                                <h3 className="text-2xl font-bold text-white">Operational Heritage (2025)</h3>
                                <p className="text-sm text-gray-500 font-mono">Past Objective - Rural Firefighting RFP</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 bg-[#0a0a0a] rounded-xl p-8 border border-white/5">
                            <div>
                                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                    <Crosshair size={16} className="text-red-500" /> Task 1: Hotspot Detection
                                </h4>
                                <p className="text-sm text-gray-400 mb-4">
                                    Mapped search area defined by vertical lines of <strong>IR emitters</strong>.
                                </p>
                                <ul className="text-xs space-y-2 text-gray-500 font-mono">
                                    <li className="flex gap-2">
                                        <span className="text-green-500">✓</span>
                                        <span>Detected 940nm IR Emitters (hotspots)</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-500">✓</span>
                                        <span>Identified "Source" (Crashed Drone prop)</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-500">✓</span>
                                        <span>Generated KML Map with &lt; 3m accuracy</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                    <Wind size={16} className="text-blue-500" /> Task 2: Water Transport
                                </h4>
                                <p className="text-sm text-gray-400 mb-4">
                                    Heavy-lift ops involving <strong>autonomous drafting and bucket distribution.</strong>
                                </p>
                                <ul className="text-xs space-y-2 text-gray-500 font-mono">
                                    <li className="flex gap-2">
                                        <span className="text-green-500">✓</span>
                                        <span>Zero-contact water loading (Aerial Drafting)</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-500">✓</span>
                                        <span>15kg Max Takeoff Weight Compliance</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                <Camera size={16} /> Archive: Medicine Hat 2025
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {GALLERY_2025.map((img, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setSelectedImage(`${BASE_IMG_PATH}/${img}`)}
                                        className="relative aspect-square bg-[#111] rounded-lg border border-white/10 overflow-hidden group cursor-pointer"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-orange-600/60 via-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-color-dodge z-10 pointer-events-none" />

                                        <Image
                                            src={`${BASE_IMG_PATH}/${img}`}
                                            alt={`2025 Archive - ${img}`}
                                            fill
                                            className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 z-20">
                                            <span className="text-xs font-mono text-blue-400 truncate">
                                                {img.replace('.png', '').replace(/_/g, ' ').toUpperCase()}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <Box className="text-purple-500" />
                                The Fleet
                            </h3>
                            <div className="flex bg-[#0f0f0f] p-1 rounded-lg border border-white/10">
                                {(Object.keys(DRONES) as DroneType[]).map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => setActiveDrone(key)}
                                        className={cn(
                                            "px-4 py-1.5 rounded-md text-sm font-medium transition-all",
                                            activeDrone === key
                                                ? "bg-gray-800 text-white shadow-lg border border-white/5"
                                                : "text-gray-500 hover:text-gray-300"
                                        )}
                                    >
                                        {DRONES[key].name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="w-full aspect-[16/9] bg-[#050505] rounded-2xl border border-white/10 relative overflow-hidden group shadow-inner">
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600">
                                <Box size={64} className="mb-6 text-gray-800 animate-pulse" />
                                <p className="font-mono text-sm tracking-widest uppercase">Initializing 3D Viewer...</p>
                                <p className="text-2xl text-white font-bold mt-2">{DRONES[activeDrone].name}</p>
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur px-4 py-2 rounded-full text-xs text-white border border-white/10 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    Interact to Inspect
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#121212] rounded-xl p-6 border border-white/5">
                            <h4 className="text-xl font-bold text-white mb-2">{DRONES[activeDrone].role}</h4>
                            <p className="text-gray-400 mb-4">{DRONES[activeDrone].desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {DRONES[activeDrone].specs.map((spec) => (
                                    <span key={spec} className="text-xs font-mono bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-300">
                                        {spec}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="space-y-12">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-500">
                                <Cpu size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Software Architecture</h3>
                                <p className="text-sm text-gray-500 font-mono">The Tri-Layer Autonomous Stack</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-[#0f0f0f] border border-white/5 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all group">
                                <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] gap-0">
                                    <div
                                        className="relative h-64 md:h-auto bg-[#1a1a1a] cursor-pointer overflow-hidden"
                                        onClick={() => setSelectedImage(`${BASE_IMG_PATH}/${SOFTWARE_IMGS.planning}`)}
                                    >
                                        <div className="absolute top-4 left-4 z-10 bg-purple-500/20 text-purple-300 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md border border-purple-500/30">
                                            P-SECTION
                                        </div>
                                        <Image
                                            src={`${BASE_IMG_PATH}/${SOFTWARE_IMGS.planning}`}
                                            alt="Pathfinding Algorithm Visualization"
                                            fill
                                            className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0f0f0f] md:block hidden" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent md:hidden block" />
                                    </div>

                                    <div className="p-8 relative">
                                        <div className="absolute top-0 right-0 p-32 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                                        <h4 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                                            Planning & Navigation
                                        </h4>
                                        <p className="text-gray-400 mb-6 leading-relaxed">
                                            The "Brain" of the fleet. This layer handles high-level decision making, generating efficient flight paths through complex environments.
                                            For 2026, we are migrating from simple waypoint missions to dynamic <strong>Urban Canyon Pathfinding</strong> to navigate high-rise obstacles safely.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                                                <h5 className="text-purple-400 font-bold text-sm mb-2 flex items-center gap-2">
                                                    <MapPin size={14} /> 2026 Objective
                                                </h5>
                                                <ul className="text-xs text-gray-500 space-y-2">
                                                    <li>• <strong>Urban Canyon:</strong> 3D obstacle avoidance algorithms for city blocks.</li>
                                                    <li>• <strong>GPS-Denied Nav:</strong> Internal state estimation for the "Metal Shed" Faraday cage task.</li>
                                                </ul>
                                            </div>
                                            <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                                                <h5 className="text-purple-400 font-bold text-sm mb-2 flex items-center gap-2">
                                                    <Cpu size={14} /> Algorithms
                                                </h5>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="px-2 py-1 bg-purple-900/20 text-purple-300 text-[10px] rounded border border-purple-500/20">A* Search</span>
                                                    <span className="px-2 py-1 bg-purple-900/20 text-purple-300 text-[10px] rounded border border-purple-500/20">SLAM</span>
                                                    <span className="px-2 py-1 bg-purple-900/20 text-purple-300 text-[10px] rounded border border-purple-500/20">Coverage Path</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#0f0f0f] border border-white/5 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all group">
                                <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] gap-0">
                                    <div
                                        className="relative h-64 md:h-auto bg-[#1a1a1a] cursor-pointer overflow-hidden"
                                        onClick={() => setSelectedImage(`${BASE_IMG_PATH}/${SOFTWARE_IMGS.integration}`)}
                                    >
                                        <div className="absolute top-4 left-4 z-10 bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md border border-blue-500/30">
                                            I-SECTION
                                        </div>
                                        <Image
                                            src={`${BASE_IMG_PATH}/${SOFTWARE_IMGS.integration}`}
                                            alt="Computer Vision Analysis"
                                            fill
                                            className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0f0f0f] md:block hidden" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent md:hidden block" />
                                    </div>

                                    <div className="p-8 relative">
                                        <div className="absolute top-0 right-0 p-32 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                                        <h4 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                                            Integration & Sensing
                                        </h4>
                                        <p className="text-gray-400 mb-6 leading-relaxed">
                                            The "Eyes" of the system. This subsection handles raw data processing from onboard sensors (Cameras, LIDAR, IR).
                                            Crucial for Task 2, where we must identify pH-sensitive fire targets by color inside a dark structure.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                                                <h5 className="text-blue-400 font-bold text-sm mb-2 flex items-center gap-2">
                                                    <Camera size={14} /> Vision Stack
                                                </h5>
                                                <ul className="text-xs text-gray-500 space-y-2">
                                                    <li>• <strong>Target ID:</strong> OpenCV/YOLO pipelines for spotting drop zones and fire colors.</li>
                                                    <li>• <strong>Spectral Analysis:</strong> Processing 940nm IR data for hotspot confirmation (2025 Legacy).</li>
                                                </ul>
                                            </div>
                                            <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                                                <h5 className="text-blue-400 font-bold text-sm mb-2 flex items-center gap-2">
                                                    <WifiOff size={14} /> Sensor Fusion
                                                </h5>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="px-2 py-1 bg-blue-900/20 text-blue-300 text-[10px] rounded border border-blue-500/20">Optical Flow</span>
                                                    <span className="px-2 py-1 bg-blue-900/20 text-blue-300 text-[10px] rounded border border-blue-500/20">Rangefinders</span>
                                                    <span className="px-2 py-1 bg-blue-900/20 text-blue-300 text-[10px] rounded border border-blue-500/20">EKF</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#0f0f0f] border border-white/5 rounded-xl overflow-hidden hover:border-green-500/30 transition-all group">
                                <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] gap-0">
                                    <div
                                        className="relative h-64 md:h-auto bg-[#1a1a1a] cursor-pointer overflow-hidden"
                                        onClick={() => setSelectedImage(`${BASE_IMG_PATH}/${SOFTWARE_IMGS.actuation}`)}
                                    >
                                        <div className="absolute top-4 left-4 z-10 bg-green-500/20 text-green-300 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md border border-green-500/30">
                                            A-SECTION
                                        </div>
                                        <Image
                                            src={`${BASE_IMG_PATH}/${SOFTWARE_IMGS.actuation}`}
                                            alt="Flight Controller Scripting"
                                            fill
                                            className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0f0f0f] md:block hidden" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent md:hidden block" />
                                    </div>

                                    <div className="p-8 relative">
                                        <div className="absolute top-0 right-0 p-32 bg-green-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                                        <h4 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                                            Actuation & Controls

                                        </h4>
                                        <p className="text-gray-400 mb-6 leading-relaxed">
                                            The "Muscle" layer. We interface directly with the flight controller using Lua scripts to manage payload deployment and flight behavior.
                                            This ensures precision drops and pump activation happen exactly when the Integration layer detects a target.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                                                <h5 className="text-green-400 font-bold text-sm mb-2 flex items-center gap-2">
                                                    <Wind size={14} /> Mechanisms
                                                </h5>
                                                <ul className="text-xs text-gray-500 space-y-2">
                                                    <li>• <strong>Payload:</strong> Servo-driven drop racks for Task 1 (Radio/Oxygen/Ladder).</li>
                                                    <li>• <strong>Suppression:</strong> Pump modulation for pH-sensitive water delivery.</li>
                                                </ul>
                                            </div>
                                            <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                                                <h5 className="text-green-400 font-bold text-sm mb-2 flex items-center gap-2">
                                                    <FileText size={14} /> Execution Stack
                                                </h5>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="px-2 py-1 bg-green-900/20 text-green-300 text-[10px] rounded border border-green-500/20">ArduPilot</span>
                                                    <span className="px-2 py-1 bg-green-900/20 text-green-300 text-[10px] rounded border border-green-500/20">Lua Scripts</span>
                                                    <span className="px-2 py-1 bg-green-900/20 text-green-300 text-[10px] rounded border border-green-500/20">Mission Planner</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="border-t border-white/10 pt-12">
                        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] rounded-2xl border border-white/5 p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-32 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-4">Support Innovation</h3>
                                <p className="text-gray-400 max-w-2xl mb-8">
                                    Sponsoring Valiant Aerotech is an investment in the future of aerospace innovation.
                                    Our systems are developed with real-world challenges in mind.
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        { tier: "Bronze", price: "$500", color: "text-amber-700", border: "border-amber-900/30" },
                                        { tier: "Silver", price: "$1000", color: "text-gray-400", border: "border-gray-500/30" },
                                        { tier: "Gold", price: "$2000", color: "text-yellow-400", border: "border-yellow-500/30" },
                                        { tier: "Diamond", price: "$4000", color: "text-cyan-400", border: "border-cyan-500/30" },
                                    ].map((s) => (
                                        <div key={s.tier} className={`bg-black/40 rounded-lg p-4 border ${s.border} text-center hover:bg-white/5 transition-colors`}>
                                            <div className={`font-bold ${s.color} mb-1`}>{s.tier}</div>
                                            <div className="text-sm text-gray-500">{s.price}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center w-full mt-12 pb-8">
                                    <a
                                        href={`${BASE_IMG_PATH}/sponsorship.pdf`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative group px-10 py-4 bg-gradient-to-br from-orange-950 to-red-950 border border-orange-500/30 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:border-orange-400 hover:shadow-[0_0_40px_rgba(234,88,12,0.5)]"
                                    >
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-orange-600/20 via-red-500/20 to-orange-600/20 animate-fire-pulse" />

                                        <span className="relative z-10 flex items-center gap-3 font-bold text-gray-200 group-hover:text-white tracking-widest uppercase text-sm transition-colors">
                                            <Flame
                                                className="text-orange-600 group-hover:text-yellow-400 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(234,88,12,0.8)]"
                                                fill="currentColor"
                                                size={24}
                                            />

                                            <span>Sponsorship Package</span>

                                            <Flame
                                                className="text-orange-600 group-hover:text-yellow-400 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(234,88,12,0.8)]"
                                                fill="currentColor"
                                                size={24}
                                                style={{ animationDelay: '0.1s' }}
                                            />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                <div className="space-y-8">

                    <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-6">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6 flex items-center gap-2">
                            <Users size={16} /> Team Structure
                        </h4>

                        <div className="space-y-6">
                            <div>
                                <div className="text-xs font-mono text-orange-500 mb-2">EXECUTIVE</div>
                                <ul className="space-y-3">
                                    {TEAM.exec.map(m => (
                                        <li key={m.name} className="flex flex-col">
                                            <span className="text-white font-medium text-sm">{m.name}</span>
                                            <span className="text-gray-600 text-xs">{m.role}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="w-full h-px bg-white/5" />

                            <div>
                                <div className="text-xs font-mono text-blue-500 mb-2">LEADS</div>
                                <ul className="space-y-3">
                                    {TEAM.leads.map(m => (
                                        <li key={m.name} className={cn("flex flex-col p-2 -mx-2 rounded", m.highlight && "bg-white/5")}>
                                            <span className={cn("font-medium text-sm", m.highlight ? "text-purple-400" : "text-white")}>{m.name}</span>
                                            <span className="text-gray-600 text-xs">{m.role}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="w-full h-px bg-white/5" />

                            <div>
                                <div className="text-xs font-mono text-green-500 mb-2">SOFTWARE TEAM</div>
                                <ul className="space-y-2">
                                    {TEAM.software.map(m => (
                                        <li key={m.name} className="flex justify-between text-sm">
                                            <span className="text-white hover:text-white transition-colors">{m.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-6">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Deployment Stats</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-orange-900/20 text-orange-400 rounded-lg"><FileText size={18} /></div>
                                <div>
                                    <div className="text-xl font-bold text-white hover:text-red-400 transition-colors"><a href="https://tc.canada.ca/en/corporate-services/acts-regulations/list-regulations/canadian-aviation-regulations-sor-96-433">Part IX</a></div>
                                    <div className="text-xs text-gray-500">Regulations</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-900/20 text-blue-400 rounded-lg"><Wind size={18} /></div>
                                <div>
                                    <div className="text-xl font-bold text-white">15kts</div>
                                    <div className="text-xs text-gray-500">Max Wind Resist</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-900/20 text-green-400 rounded-lg"><ShieldAlert size={18} /></div>
                                <div>
                                    <div className="text-xl font-bold text-white">FTS</div>
                                    <div className="text-xs text-gray-500">Active Kill Switch</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}