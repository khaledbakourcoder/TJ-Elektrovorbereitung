import Image from "next/image";
import Link from "next/link";

const leistungen = [
    { label: "Elektrovorbereitung", href: "/leistungen/elektrovorbereitung" },
    { label: "Kernbohrung", href: "/leistungen/kernbohrung" },
    { label: "Abbrucharbeiten", href: "/leistungen/abbrucharbeiten" },
];

export default function Footer() {
    return (
        <>
            {/* ── CTA-Streifen über dem Footer ───────────────────── */}
            <div className="bg-logo-blue/95 border-t border-logo-yellow/20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-white/70 font-mono tracking-wide">
                        Bereit für Ihr nächstes Projekt?
                    </p>
                    <Link
                        href="/kontakt"
                        className="group flex items-center gap-2 text-sm font-bold text-logo-yellow hover:text-white transition-colors"
                    >
                        Jetzt unverbindlich anfragen
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
                {/* Dünne gestrichelte Trennlinie in Markenfarbe */}
                <div className="border-t border-dashed border-logo-yellow/15" />
            </div>

            <footer className="bg-logo-blue text-gray-300 relative">
                <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none" />
                <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay pointer-events-none" />

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                        {/* Spalte 1 – Logo + Tagline */}
                        <div className="space-y-4 lg:col-span-1">
                            {/* Logo direkt auf dunkelblauem Hintergrund – keine weiße Box */}
                            <div className="relative w-36 h-16">
                                <Image
                                    src="/Logo.webp"
                                    alt="TJ Elektrovorbereitung Logo"
                                    fill
                                    className="object-contain object-left brightness-0 invert"
                                />
                            </div>
                            <p className="text-xs leading-relaxed text-gray-500 max-w-xs">
                                Elektrovorbereitung, Kernbohrungen und mehr – zuverlässig und sauber ausgeführt.
                            </p>
                        </div>

                        {/* Spalte 2 – Leistungen */}
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest font-mono">
                                Leistungen
                            </h4>
                            <div className="space-y-3">
                                {leistungen.map((l) => (
                                    <Link
                                        key={l.href}
                                        href={l.href}
                                        className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors group"
                                    >
                                        <span className="w-3 h-px bg-gray-600 group-hover:w-5 group-hover:bg-logo-yellow transition-all duration-200" />
                                        {l.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Spalte 3 – Kontakt */}
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest font-mono">
                                Kontakt
                            </h4>
                            <div className="space-y-3 text-xs">
                                <a
                                    href="mailto:info@tj-elektrovorbereitung.de"
                                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                                >
                                    {/* Umschlag-Icon */}
                                    <svg className="w-4 h-4 text-logo-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    info@tj-elektrovorbereitung.de
                                </a>
                                <a
                                    href="tel:+4915734403463"
                                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                                >
                                    {/* Telefonhörer-Icon */}
                                    <svg className="w-4 h-4 text-logo-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +49 1573 4403463
                                </a>
                            </div>
                        </div>

                        {/* Spalte 4 – Rechtliches */}
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest font-mono">
                                Rechtliches
                            </h4>
                            <div className="space-y-3">
                                <Link
                                    href="/impressum"
                                    className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors group"
                                >
                                    <span className="w-3 h-px bg-gray-600 group-hover:w-5 group-hover:bg-logo-yellow transition-all duration-200" />
                                    Impressum
                                </Link>
                                <Link
                                    href="/datenschutz"
                                    className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors group"
                                >
                                    <span className="w-3 h-px bg-gray-600 group-hover:w-5 group-hover:bg-logo-yellow transition-all duration-200" />
                                    Datenschutz
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Copyright-Zeile */}
                <div className="relative z-10 border-t border-white/5 py-6">
                    <p className="text-center text-[11px] text-gray-600 font-mono tracking-wider">
                        &copy; {new Date().getFullYear()} TJ Elektrovorbereitung · Alle Rechte vorbehalten
                    </p>
                </div>
            </footer>
        </>
    );
}
