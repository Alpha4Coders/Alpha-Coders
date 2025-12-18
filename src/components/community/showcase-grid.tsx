"use client";

import Image from "next/image";
import { useRef, useMemo, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, ShieldCheck, Crown } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { members } from "@/data/team";

gsap.registerPlugin(ScrollTrigger);

export default function ShowcaseGrid() {
    const container = useRef<HTMLDivElement>(null);
    const [showAll, setShowAll] = useState(false);

    // Custom ordering for Core Team
    const coreTeamOrder = ["Dealer-09", "Vortex-16", "PixelPioneer404", "Rouvik"];

    // Sort: Custom order for Owners, then alphabetically for others
    const sortedMembers = useMemo(() => {
        return [...members].sort((a, b) => {
            const aIsOwner = a.role === "Owner";
            const bIsOwner = b.role === "Owner";

            if (aIsOwner && bIsOwner) {
                const aIndex = coreTeamOrder.indexOf(a.login);
                const bIndex = coreTeamOrder.indexOf(b.login);
                return aIndex - bIndex;
            }

            if (aIsOwner && !bIsOwner) return -1;
            if (!aIsOwner && bIsOwner) return 1;

            const aName = (a.name || a.login).toLowerCase();
            const bName = (b.name || b.login).toLowerCase();
            return aName.localeCompare(bName);
        });
    }, []);

    const displayedMembers = showAll
        ? sortedMembers
        : sortedMembers.filter(m => m.role === "Owner" || coreTeamOrder.includes(m.login));

    useGSAP(() => {
        gsap.from(".member-card", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "power2.out",
        });
    }, { scope: container });

    useGSAP(() => {
        ScrollTrigger.refresh();
    }, [showAll]);

    return (
        <div ref={container} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-1">
                {displayedMembers.map((member, i) => {
                    const isOwner = member.role === "Owner";
                    return (
                        <div
                            key={i}
                            className={`member-card group relative p-5 flex items-center gap-5 transition-all duration-500 border overflow-hidden rounded-3xl ${isOwner
                                ? "bg-white/10 dark:bg-emerald-500/5 border-emerald-500/30 hover:border-emerald-500/60 shadow-[0_0_20px_-5px_rgba(16,185,129,0.1)] hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.2)]"
                                : "bg-white/5 dark:bg-white-[0.02] border-neutral-200 dark:border-white/10 hover:border-emerald-500/30 hover:bg-neutral-50/50 dark:hover:bg-white-[0.04]"
                                }`}
                        >
                            {/* Animated Background Glow for Core Team */}
                            {isOwner && (
                                <div className="absolute -inset-24 bg-emerald-500/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            )}

                            {/* Profile Image Container */}
                            <div className="relative group/avatar">
                                <div className={`relative h-20 w-20 flex-shrink-0 overflow-hidden transition-all duration-500 z-10 ${isOwner
                                    ? "rounded-2xl ring-4 ring-emerald-500/20 group-hover:ring-emerald-500/40"
                                    : "rounded-full grayscale group-hover:grayscale-0 group-hover:scale-105"
                                    }`}>
                                    <Image
                                        src={`https://github.com/${member.login}.png`}
                                        alt={member.login}
                                        fill
                                        className="object-cover"
                                        sizes="80px"
                                    />
                                </div>
                                {isOwner && (
                                    <div className="absolute -top-2 -right-2 bg-emerald-500 text-white p-1 rounded-lg shadow-lg z-20 animate-bounce-subtle">
                                        <Crown size={14} />
                                    </div>
                                )}
                            </div>

                            {/* Member Info */}
                            <div className="flex-1 min-w-0 z-10">
                                <div className="flex items-center gap-1.5 mb-1">
                                    <h3 className={`text-lg font-bold truncate tracking-tight transition-colors ${isOwner
                                        ? "text-neutral-900 dark:text-emerald-50"
                                        : "text-neutral-700 dark:text-neutral-300 group-hover:text-emerald-500"
                                        }`}>
                                        {member.name || member.login}
                                    </h3>
                                    {member.tfa_enabled && (
                                        <ShieldCheck className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                                    )}
                                </div>
                                <p className="text-sm font-medium text-neutral-500/80 dark:text-neutral-500 mb-3">
                                    @{member.login}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    <Badge
                                        variant="outline"
                                        className={`text-[10px] uppercase tracking-wider font-bold h-6 border-0 ${isOwner
                                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                            : "bg-neutral-100 dark:bg-white/5 text-neutral-500"
                                            }`}
                                    >
                                        {isOwner ? "Core Team" : "Member"}
                                    </Badge>

                                    <Link
                                        href={`https://github.com/${member.login}`}
                                        target="_blank"
                                        className="inline-flex items-center gap-1 text-[10px] font-bold text-neutral-400 hover:text-emerald-500 transition-colors uppercase tracking-wider"
                                    >
                                        <Github size={12} />
                                        Profile
                                    </Link>
                                </div>
                            </div>

                            {/* Hover Decorative Element */}
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Github size={60} className="-mr-6 -mt-6" />
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-center pt-4">
                <Button
                    onClick={() => setShowAll(!showAll)}
                    variant="outline"
                    className="group relative h-12 px-8 rounded-full border-neutral-200 dark:border-white/10 hover:border-emerald-500/50 bg-white/50 dark:bg-white/5 backdrop-blur-md transition-all duration-300"
                >
                    <span className="relative z-10 flex items-center gap-2 font-semibold">
                        {showAll ? "Show Core Team Only" : `View All ${members.length} Members`}
                    </span>
                    <div className="absolute inset-0 rounded-full bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
            </div>

            <style jsx global>{`
                @keyframes bounce-subtle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-3px); }
                }
                .animate-bounce-subtle {
                    animation: bounce-subtle 2s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
