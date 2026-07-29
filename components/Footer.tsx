import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-logo-blue text-gray-300 relative">
            <div className="yellow-accent" />
            <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none" />
            <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Technical divider */}
                <div className="flex items-center gap-3 mb-12 text-white/20">
                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" stroke="currentColor" strokeWidth={1}>
                        <path d="M7.5 0.5L0.5 5L7.5 9.5" />
                    </svg>
                    <span className="text-[10px] font-mono tracking-widest uppercase">Footer — Kontakt & Rechtliches</span>
                    <div className="flex-1 h-px bg-current" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                    <div className="space-y-4">
                        <div className="bg-white p-4">
                            <div className="relative w-32 h-16">
                                <Image
                                    src="/Logo.png"
                                    alt="TJ Elektrovorbereitung Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </div>
                        <p className="text-xs leading-relaxed text-gray-500 max-w-xs">
                            Elektrovorbereitung, Kernbohrungen und mehr – zuverlässig und sauber ausgeführt.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest font-mono">Kontakt</h4>
                        <div className="space-y-3 text-xs">
                            <p className="flex items-center gap-2 text-gray-400">
                                <span className="w-6 h-px bg-logo-yellow/40" />
                                <span className="font-mono text-[9px] text-white/30 mr-1">E</span>
                                info@tj-elektrovorbereitung.de
                            </p>
                            <p className="flex items-center gap-2 text-gray-400">
                                <span className="w-6 h-px bg-logo-yellow/40" />
                                <span className="font-mono text-[9px] text-white/30 mr-1">T</span>
                                +49 1573 4403463
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest font-mono">Rechtliches</h4>
                        <div className="space-y-3">
                            <Link href="/impressum" className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors group">
                                <span className="w-3 h-px bg-gray-600 group-hover:w-5 transition-all duration-200" />
                                Impressum
                            </Link>
                            <Link href="/datenschutz" className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors group">
                                <span className="w-3 h-px bg-gray-600 group-hover:w-5 transition-all duration-200" />
                                Datenschutz
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 border-t border-white/5 py-6">
                <p className="text-center text-[11px] text-gray-600 font-mono tracking-wider">
                    &copy; {new Date().getFullYear()} TJ Elektrovorbereitung · Alle Rechte vorbehalten
                </p>
            </div>
        </footer>
    );
}
