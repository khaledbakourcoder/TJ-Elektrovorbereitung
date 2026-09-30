"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LEISTUNGSGRUPPEN } from "@/Data/Leistungsgruppen";

/* ── Inline SVG icons per Gruppe ────────────────────────────── */
const GruppeIcon = ({ id, className }: { id: string; className?: string }) => {
    if (id === "elektrovorbereitung") return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
    );
    if (id === "kernbohrung") return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="3" />
            <line x1="12" y1="3" x2="12" y2="6" />
            <line x1="12" y1="18" x2="12" y2="21" />
            <line x1="3" y1="12" x2="6" y2="12" />
            <line x1="18" y1="12" x2="21" y2="12" />
        </svg>
    );
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
            <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="10" y1="11" x2="10" y2="17" strokeLinecap="round" />
            <line x1="14" y1="11" x2="14" y2="17" strokeLinecap="round" />
        </svg>
    );
};

/* ── Chevron ────────────────────────────────────────────────── */
const Chevron = ({ open }: { open: boolean }) => (
    <svg
        className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
);

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen,     setIsMenuOpen]     = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // Mobile: which gruppe accordion is open
    const [mobileOpen, setMobileOpen] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const isLeistungActive = pathname.startsWith("/leistungen");

    const closeAll = () => {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
        setMobileOpen(null);
    };

    /* Lock body scroll when mobile sidebar open */
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMenuOpen]);

    /* Close dropdown on outside click */
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <>
            <header className="sticky top-0 z-40 w-full bg-white text-logo-blue border-b border-gray-200 shadow-sm">
                <div className="yellow-accent absolute bottom-0 left-0 right-0" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20 sm:h-24">

                        <div className="flex items-center gap-4 sm:gap-12 w-full justify-between md:justify-start">

                            {/* Mobile burger */}
                            <button
                                onClick={() => setIsMenuOpen(true)}
                                className="md:hidden p-1 focus:outline-none cursor-pointer touch-action-manipulation"
                                aria-label="Menü öffnen"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                            {/* Logo */}
                            <Link
                                href="/"
                                onClick={closeAll}
                                className={`flex items-center py-1 transition-opacity duration-200 ${
                                    isMenuOpen ? "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto" : "opacity-100"
                                }`}
                            >
                                <div className="relative w-28 h-16 sm:w-40 sm:h-20 flex-shrink-0">
                                    <Image
                                        src="/Logo.webp"
                                        alt="TJ Elektrovorbereitung Logo"
                                        fill
                                        className="object-contain object-left"
                                        priority
                                    />
                                </div>
                            </Link>

                            {/* ── Desktop Navigation ───────────────────── */}
                            <nav className="hidden md:flex items-center space-x-8">

                                <Link href="/" className="relative py-2 text-base font-bold text-logo-blue/70 hover:text-logo-blue transition-colors group">
                                    <span>Startseite</span>
                                    <span className={`absolute left-0 bottom-0 h-0.5 bg-logo-yellow transition-all duration-300 origin-left ${
                                        pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
                                    }`} />
                                </Link>

                                <div
                                    ref={dropdownRef}
                                    className="relative"
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                >
                                    <button
                                        onClick={() => setIsDropdownOpen((p) => !p)}
                                        className="relative py-2 text-base font-bold text-logo-blue/70 hover:text-logo-blue focus:outline-none cursor-pointer flex items-center gap-1.5 transition-colors"
                                        aria-expanded={isDropdownOpen}
                                        aria-haspopup="true"
                                    >
                                        <span>Leistungen</span>
                                        <Chevron open={isDropdownOpen} />
                                        <span className={`absolute left-0 bottom-0 h-0.5 bg-logo-yellow transition-all duration-300 origin-left ${
                                            isLeistungActive ? "w-full" : "w-0 group-hover:w-full"
                                        }`} />
                                    </button>

                                    {isDropdownOpen && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[680px]">
                                            <div className="bg-white border border-gray-200 shadow-2xl">
                                                <div className="bg-logo-blue px-6 py-3 flex items-center border-b border-white/10">
                                                    <span className="text-white/80 text-xs font-bold uppercase tracking-widest font-mono">
                                                        NAV — LEISTUNGSBEREICHE
                                                    </span>
                                                    <div className="ml-auto w-12 yellow-accent" />
                                                </div>
                                                <div className="grid grid-cols-3 divide-x divide-gray-100">
                                                    {LEISTUNGSGRUPPEN.map((gruppe) => (
                                                        <div key={gruppe.id} className="p-5">
                                                            <Link href={`/leistungen/${gruppe.id}`} onClick={closeAll} className="flex items-center gap-2 mb-4 group/gl">
                                                                <div className="text-logo-blue group-hover/gl:text-logo-yellow transition-colors">
                                                                    <GruppeIcon id={gruppe.id} className="w-5 h-5" />
                                                                </div>
                                                                <span className="font-black text-logo-blue text-sm group-hover/gl:text-logo-yellow transition-colors">
                                                                    {gruppe.title}
                                                                </span>
                                                            </Link>
                                                            <ul className="space-y-1.5">
                                                                {gruppe.subServices.map((sub) => (
                                                                    <li key={sub.id}>
                                                                        <Link href={`/leistungen/${gruppe.id}#${sub.id}`} onClick={closeAll} className="flex items-start gap-2 group/sl">
                                                                            <span className="mt-[5px] w-1 h-px bg-logo-yellow flex-shrink-0" />
                                                                            <span className="text-xs text-gray-500 group-hover/sl:text-logo-blue transition-colors leading-snug">{sub.title}</span>
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                            <Link href={`/leistungen/${gruppe.id}`} onClick={closeAll} className="inline-block mt-3 text-[11px] font-bold text-logo-blue border border-logo-blue/20 px-3 py-1 hover:bg-logo-blue hover:text-white transition-all">
                                                                Bereich öffnen →
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="border-t border-gray-100 px-6 py-3 bg-gray-50 flex items-center justify-between">
                                                    <span className="text-xs text-gray-400 font-mono">Alle Leistungen kombinierbar</span>
                                                    <Link href="/kontakt" onClick={closeAll} className="px-4 py-1.5 bg-logo-yellow text-logo-yellow-foreground font-extrabold text-xs uppercase tracking-wider hover:bg-yellow-400 transition-colors">
                                                        Anfragen
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <Link href="/kontakt" className="relative py-2 text-base font-bold text-logo-blue/70 hover:text-logo-blue transition-colors group">
                                    <span>Kontakt</span>
                                    <span className={`absolute left-0 bottom-0 h-0.5 bg-logo-yellow transition-all duration-300 origin-left ${
                                        pathname === "/kontakt" ? "w-full" : "w-0 group-hover:w-full"
                                    }`} />
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            {/* ════════════════════════════════════════════════════════
                MOBILE SIDEBAR — outside <header> to avoid stacking issues
            ════════════════════════════════════════════════════════ */}

            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 md:hidden ${
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={closeAll}
            />

            {/* Sidebar panel */}
            <aside
                className={`fixed top-0 left-0 h-full w-[80%] max-w-[340px] bg-logo-blue shadow-2xl z-50
                    transform transition-transform duration-300 ease-in-out md:hidden flex flex-col overflow-y-auto ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="yellow-accent" />

                <div className="flex items-center justify-between p-4 min-h-[80px] bg-white border-b border-gray-200 flex-shrink-0">
                    <Link href="/" onClick={closeAll} className="flex items-center">
                        <div className="relative w-28 h-16">
                            <Image src="/Logo.webp" alt="TJ Elektrovorbereitung Logo" fill className="object-contain object-center" />
                        </div>
                    </Link>
                    <button onClick={closeAll} className="p-1 text-gray-500 hover:text-gray-900 focus:outline-none cursor-pointer touch-action-manipulation" aria-label="Menü schließen">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <nav className="p-6 space-y-1 flex-1">
                    <Link href="/" onClick={closeAll} className={`block py-3 text-sm font-extrabold uppercase tracking-widest transition-colors touch-action-manipulation ${
                        pathname === "/" ? "text-logo-yellow" : "text-white/70 hover:text-logo-yellow"
                    }`}>
                        HOME
                    </Link>

                    <div>
                        <button
                            onClick={() => setMobileOpen(mobileOpen === "leistungen" ? null : "leistungen")}
                            className={`flex items-center justify-between w-full py-3 text-sm font-extrabold uppercase tracking-widest cursor-pointer touch-action-manipulation ${
                                isLeistungActive ? "text-logo-yellow" : "text-white/70 hover:text-logo-yellow"
                            }`}
                        >
                            <span>LEISTUNGEN</span>
                            <Chevron open={mobileOpen === "leistungen"} />
                        </button>

                        {mobileOpen !== null && (
                            <div className="mt-4 space-y-4 pl-2">
                                {LEISTUNGSGRUPPEN.map((gruppe) => (
                                    <div key={gruppe.id}>
                                        <button
                                            onClick={() => setMobileOpen(mobileOpen === gruppe.id ? "leistungen" : gruppe.id)}
                                            className="flex items-center gap-2 w-full text-left group touch-action-manipulation cursor-pointer"
                                        >
                                            <div className="text-white/50 group-hover:text-logo-yellow transition-colors">
                                                <GruppeIcon id={gruppe.id} className="w-4 h-4" />
                                            </div>
                                            <span className={`text-xs font-bold uppercase tracking-wide transition-colors ${
                                                pathname === `/leistungen/${gruppe.id}`
                                                    ? "text-logo-yellow"
                                                    : "text-white/60 group-hover:text-logo-yellow"
                                            }`}>
                                                {gruppe.title}
                                            </span>
                                            <Chevron open={mobileOpen === gruppe.id} />
                                        </button>

                                        {mobileOpen === gruppe.id && (
                                            <div className="pl-6 mt-2 space-y-2">
                                                {gruppe.subServices.map((sub) => (
                                                    <Link key={sub.id} href={`/leistungen/${gruppe.id}#${sub.id}`} onClick={closeAll}
                                                        className="flex items-center gap-2 py-1.5 text-xs text-white/40 hover:text-logo-yellow transition-colors touch-action-manipulation">
                                                        <span className="w-1 h-px bg-logo-yellow flex-shrink-0" />
                                                        {sub.title}
                                                    </Link>
                                                ))}
                                                <Link href={`/leistungen/${gruppe.id}`} onClick={closeAll}
                                                    className="block py-1.5 text-xs font-bold text-logo-yellow mt-1 hover:text-white transition-colors touch-action-manipulation">
                                                    Seite ansehen →
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/kontakt" onClick={closeAll} className={`block py-3 text-sm font-extrabold uppercase tracking-widest transition-colors touch-action-manipulation ${
                        pathname === "/kontakt" ? "text-logo-yellow" : "text-white/70 hover:text-logo-yellow"
                    }`}>
                        KONTAKT
                    </Link>
                </nav>

                <div className="p-6 border-t border-white/10 flex-shrink-0">
                    <Link href="/kontakt" onClick={closeAll}
                        className="block w-full text-center py-3 bg-logo-yellow text-logo-yellow-foreground font-extrabold text-sm uppercase tracking-wider hover:bg-yellow-400 transition-colors">
                        Jetzt anfragen
                    </Link>
                </div>
            </aside>
        </>
    );
}