import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import { LEISTUNGSGRUPPEN } from "@/Data/Leistungsgruppen";
import { GRUPPE_COLORS, DEFAULT_COLORS } from "@/Data/GruppeColors";

const stats = [
    { label: "Jahre Erfahrung", value: "7" },
    { label: "Kunden", value: "35" },
    { label: "Projekte", value: "150" },
    { label: "Mitarbeiter", value: "5" },
];

const clientLogos = [
    { name: "Hock Bartelsen", src: "/clients/elektrotechnik-hock-bartelsen_logo__msi___png.webp" },
    { name: "SEH", src: "/clients/SEH-Logomit-Rand.avif" },
    { name: "Partner 1", src: "/clients/105782.svg" },
    { name: "Partner 2", src: "/clients/115247.png" },
    { name: "Partner 3", src: "/clients/Download.png" },
    { name: "Partner 4", src: "/clients/logo.png" },
    { name: "Partner 5", src: "/clients/WhatsApp Image 2026-07-28 at 16.15.54.jpeg" },
];

/* ── Industrial SVG icons per group ─────────────────────────── */
const GroupIconIndustrial = ({ id, className }: { id: string; className?: string }) => {
    if (id === "elektrovorbereitung") return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
            <rect x="8" y="14" width="32" height="20" rx="1" />
            <line x1="16" y1="14" x2="16" y2="34" strokeWidth={2} />
            <line x1="24" y1="14" x2="24" y2="34" strokeWidth={2} />
            <line x1="32" y1="14" x2="32" y2="34" strokeWidth={2} />
            <circle cx="24" cy="24" r="3" strokeWidth={1.5} />
            <path d="M4 24h6M38 24h6" strokeWidth={1} opacity={0.4} />
            <path d="M24 4v6M24 38v6" strokeWidth={1} opacity={0.4} />
        </svg>
    );
    if (id === "kernbohrung") return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
            <circle cx="24" cy="24" r="16" />
            <circle cx="24" cy="24" r="10" strokeWidth={1} opacity={0.6} />
            <circle cx="24" cy="24" r="4" />
            <line x1="24" y1="8" x2="24" y2="16" opacity={0.4} />
            <line x1="24" y1="32" x2="24" y2="40" opacity={0.4} />
            <line x1="8" y1="24" x2="16" y2="24" opacity={0.4} />
            <line x1="32" y1="24" x2="40" y2="24" opacity={0.4} />
            <path d="M30 18l8-8M18 30l-8 8" strokeWidth={1} opacity={0.3} />
        </svg>
    );
    return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
            <rect x="10" y="8" width="28" height="8" rx="1" />
            <rect x="14" y="16" width="8" height="28" rx="1" />
            <rect x="26" y="16" width="8" height="28" rx="1" />
            <line x1="6" y1="16" x2="42" y2="16" strokeWidth={2} />
            <path d="M10 12l-4 4M38 12l4 4" strokeWidth={1} opacity={0.5} />
            <line x1="18" y1="34" x2="18" y2="44" opacity={0.3} />
            <line x1="30" y1="34" x2="30" y2="44" opacity={0.3} />
        </svg>
    );
};

/* ── Technical measure line component ──────────────────────── */
const MeasureLine = ({ label, className = "" }: { label?: string; className?: string }) => (
    <div className={`flex items-center gap-2 text-[10px] font-mono tracking-wider select-none ${className}`}>
        <div className="w-2 h-px bg-current" />
        <svg width="7" height="9" viewBox="0 0 7 9" fill="none" stroke="currentColor" strokeWidth={1.2}>
            <path d="M6.5 0.5L0.5 4.5L6.5 8.5" />
        </svg>
        {label && <span className="opacity-60">{label}</span>}
        <svg width="7" height="9" viewBox="0 0 7 9" fill="none" stroke="currentColor" strokeWidth={1.2}>
            <path d="M0.5 0.5L6.5 4.5L0.5 8.5" />
        </svg>
        <div className="flex-1 h-px bg-current" />
    </div>
);

export default function Home() {
    return (
        <div className="min-h-screen text-gray-900">

            {/* ════════════════════════════════════════════════════════
                HERO — Blueprint Technical Split
            ════════════════════════════════════════════════════════ */}
            <section className="relative bg-logo-blue text-white overflow-hidden min-h-[85vh] flex items-center">
                <div className="absolute inset-0 bg-blueprint" />
                <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />

                <div className="absolute top-8 right-8 opacity-[0.06] hidden lg:block">
                    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" stroke="white" strokeWidth={0.5}>
                        <circle cx="80" cy="80" r="78" />
                        <circle cx="80" cy="80" r="50" />
                        <circle cx="80" cy="80" r="25" />
                        <line x1="80" y1="0" x2="80" y2="160" />
                        <line x1="0" y1="80" x2="160" y2="80" />
                        <text x="82" y="105" fontSize="10" fill="white" opacity="0.3" fontFamily="monospace">R 50</text>
                    </svg>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 sm:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <MeasureLine label="LEISTUNGSSPEKTRUM" className="text-logo-yellow/50 mb-2" />
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                                <span className="text-white/60 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-normal block mb-2">
                                    Saubere
                                </span>
                                <span className="text-logo-yellow">VORARBEITEN</span>
                                <br />
                                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/80 tracking-normal">
                                    darauf können Sie bauen
                                </span>
                            </h1>
                            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
                                Schlitzen, Kernbohrungen, Dosen senken – wir machen die Vorarbeit. Sie kümmern sich um den Rest.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-2">
                                <Link
                                    href="/kontakt"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-logo-yellow text-logo-yellow-foreground font-extrabold text-sm uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-lg"
                                >
                                    Unverbindlich anfragen
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/leistungen/elektrovorbereitung"
                                    className="inline-flex items-center gap-2 px-6 py-4 border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-mono text-[10px] opacity-50 mr-1">01</span>
                                    Leistungen entdecken
                                </Link>
                            </div>
                        </div>

                        <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
                            <div className="relative w-full max-w-[360px] aspect-square">
                                <svg viewBox="0 0 360 360" fill="none" className="w-full h-full opacity-70">
                                    <rect x="40" y="40" width="280" height="280" rx="2" stroke="white" strokeWidth="0.5" opacity="0.3" />
                                    <rect x="100" y="60" width="160" height="240" rx="1" stroke="white" strokeWidth="0.8" opacity="0.5" />
                                    {Array.from({ length: 14 }).map((_, i) => (
                                        <line key={i} x1={105 + i * 11} y1="60" x2={105 + i * 11} y2="300" stroke="white" strokeWidth="0.3" opacity="0.12" />
                                    ))}
                                    <rect x="145" y="90" width="70" height="180" rx="1" stroke="white" strokeWidth="0.8" opacity="0.8" />
                                    <rect x="155" y="100" width="50" height="160" rx="0.5" stroke="white" strokeWidth="0.5" opacity="0.4" />
                                    <line x1="130" y1="78" x2="230" y2="78" stroke="white" strokeWidth="0.5" opacity="0.6" />
                                    <line x1="130" y1="74" x2="130" y2="82" stroke="white" strokeWidth="0.5" opacity="0.6" />
                                    <line x1="230" y1="74" x2="230" y2="82" stroke="white" strokeWidth="0.5" opacity="0.6" />
                                    <text x="163" y="75" fontSize="8" fill="white" opacity="0.6" fontFamily="monospace">70 mm</text>
                                    <line x1="255" y1="130" x2="255" y2="230" stroke="white" strokeWidth="0.5" opacity="0.6" />
                                    <line x1="251" y1="130" x2="259" y2="130" stroke="white" strokeWidth="0.5" opacity="0.6" />
                                    <line x1="251" y1="230" x2="259" y2="230" stroke="white" strokeWidth="0.5" opacity="0.6" />
                                    <text x="258" y="185" fontSize="8" fill="white" opacity="0.6" fontFamily="monospace" transform="rotate(90, 258, 185)">30 mm</text>
                                    <circle cx="180" cy="180" r="3" stroke="white" strokeWidth="0.5" opacity="0.5" />
                                    <line x1="170" y1="180" x2="190" y2="180" stroke="white" strokeWidth="0.3" opacity="0.3" />
                                    <line x1="180" y1="170" x2="180" y2="190" stroke="white" strokeWidth="0.3" opacity="0.3" />
                                    <rect x="120" y="310" width="120" height="20" rx="1" stroke="white" strokeWidth="0.3" opacity="0.3" />
                                    <text x="126" y="323" fontSize="7" fill="white" opacity="0.4" fontFamily="monospace">Mauerwerk · Beton · Ziegel</text>
                                    <path d="M40 40 L52 40 L52 52" stroke="white" strokeWidth="0.8" opacity="0.4" />
                                    <path d="M320 40 L308 40 L308 52" stroke="white" strokeWidth="0.8" opacity="0.4" />
                                    <path d="M40 320 L52 320 L52 308" stroke="white" strokeWidth="0.8" opacity="0.4" />
                                    <path d="M320 320 L308 320 L308 308" stroke="white" strokeWidth="0.8" opacity="0.4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute -bottom-[1px] left-0 right-0 h-16 bg-white"
                    style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}>
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-logo-yellow/60" />
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════
                UNSER ANGEBOT — 3-spaltiges Image-First Grid
            ════════════════════════════════════════════════════════ */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                <div className="mb-14">
                    <MeasureLine label="LEISTUNGSBEREICHE" className="text-logo-blue/30 mb-4" />
                    <h2 className="text-3xl sm:text-4xl font-black text-logo-blue tracking-tight max-w-2xl">
                        Unser Angebot
                    </h2>
                    <p className="text-gray-500 max-w-xl mt-3 text-sm sm:text-base">
                        Drei Bereiche, einer macht's. Für Elektrounternehmen und Sanierer.
                    </p>
                </div>

                {/* Gleichberechtigtes 3-Spalten Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {LEISTUNGSGRUPPEN.map((gruppe, idx) => {
                        const colors = GRUPPE_COLORS[gruppe.id] ?? DEFAULT_COLORS;
                        return (
                        <div
                            key={gruppe.id}
                            className="group relative flex flex-col border border-gray-200 bg-white overflow-hidden transition-all duration-300 hover:border-logo-blue/30"
                        >
                            {/* ── Top Zone: Bild/Icon-Bereich ─────────── */}
                            <Link
                                href={`/leistungen/${gruppe.id}`}
                                className={`relative ${colors.header} overflow-hidden`}
                                style={{ minHeight: "200px" }}
                            >
                                <div className="absolute inset-0 bg-noise opacity-25 mix-blend-overlay" />

                                {/* Kreuz-Koordinaten Hintergrund */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
                                    <div className="w-full h-px bg-white" />
                                    <div className="absolute h-full w-px bg-white" />
                                </div>

                                {/* Gelbe Ecken-Markierung */}
                                <div className="absolute top-0 right-0 w-10 h-10 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-16 h-px bg-logo-yellow/50 origin-top-right rotate-45 translate-y-4 translate-x-4" />
                                </div>

                                {/* Zentriertes Icon */}
                                <div className={`absolute inset-0 flex items-center justify-center ${colors.icon} transform group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="w-20 h-20 sm:w-24 sm:h-24">
                                        <GroupIconIndustrial id={gruppe.id} className="w-full h-full" />
                                    </div>
                                </div>
                            </Link>

                            {/* ── Bottom Zone: Content ───────────────── */}
                            <div className="flex flex-col flex-1 p-6 gap-4">
                                <h3 className="text-xl font-black text-logo-blue tracking-tight group-hover:text-logo-yellow transition-colors">
                                    {gruppe.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {gruppe.subTitle}
                                </p>

                                {/* Sub-Services als technische Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    {gruppe.subServices.map((sub) => (
                                        <span
                                            key={sub.id}
                                            className={`px-2.5 py-1 text-[11px] font-semibold border ${colors.badge}`}
                                        >
                                            {sub.title}
                                        </span>
                                    ))}
                                </div>

                                {gruppe.hinweis && (
                                    <div className="flex items-start gap-2 p-3 bg-amber-50/80 border border-amber-200/60">
                                        <span className="text-[10px] font-mono font-bold text-amber-600 mt-[2px]">⚠</span>
                                        <p className="text-[11px] text-amber-800 leading-relaxed">{gruppe.hinweis}</p>
                                    </div>
                                )}

                                {/* Single CTA */}
                                <Link
                                    href={`/leistungen/${gruppe.id}`}
                                    className="mt-auto block w-full py-3 text-center bg-logo-yellow text-gray-900 font-extrabold text-xs uppercase tracking-wider hover:bg-yellow-400 transition-colors"
                                >
                                    Zum Leistungsbereich →
                                </Link>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════
                STATS — Dunkles Datenblatt
            ════════════════════════════════════════════════════════ */}
            <section className="bg-logo-blue/95 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay" />
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                    <div className="mb-12">
                        <MeasureLine label="KENNZAHLEN" className="text-logo-yellow/30 mb-4" />
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                            TJ Elektrovorbereitung in Zahlen
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
                            Seit 7 Jahren machen wir nichts anderes als Elektrovorbereitung. Sauber und zuverlässig.
                        </p>
                    </div>

                    <div className="border border-white/10 max-w-2xl">
                        {stats.map((stat) => (
                            <div key={stat.label} className="stat-item hover:bg-white/[0.03] transition-colors">
                                <span className="stat-label">{stat.label}</span>
                                <span className="stat-value">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════
                CTA — Stark, technisch
            ════════════════════════════════════════════════════════ */}
            <section className="bg-logo-blue text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-blueprint" />
                <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
                <div className="yellow-accent absolute bottom-0 left-0 right-0 z-10" />

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                    <div className="text-center space-y-8">
                        <MeasureLine label="KONTAKT" className="text-logo-yellow/40 mb-2 justify-center" />
                        <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1]">
                            Bereit für Ihre
                            <br />
                            <span className="text-logo-yellow">nächste Baustelle?</span>
                        </h2>
                        <p className="text-gray-400 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
                            Rufen Sie kurz an oder schreiben Sie eine Mail. Dann besprechen wir alles Weitere.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 pt-2">
                            <Link
                                href="/kontakt"
                                className="inline-flex items-center gap-2 px-10 py-4 bg-logo-yellow text-logo-yellow-foreground font-extrabold text-sm uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-lg"
                            >
                                Kontakt aufnehmen
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <a
                                href="tel:+4915734403463"
                                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/5 transition-colors"
                            >
                                <span className="font-mono text-[10px] opacity-50">T</span>
                                +49 1573 4403463
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════════
                KUNDENLOGOS
            ════════════════════════════════════════════════════════ */}
            <section className="bg-gray-50/70 border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                    <MeasureLine label="KUNDEN" className="text-logo-blue/30 mb-4" />
                    <div className="mb-10">
                        <h2 className="text-3xl sm:text-4xl font-black text-logo-blue tracking-tight">
                            Unsere Kunden
                        </h2>
                        <p className="text-gray-500 text-sm sm:text-base mt-2">
                            Ein paar Firmen, mit denen wir arbeiten
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
                        {clientLogos.map((client) => (
                            <div
                                key={client.name}
                                className={`flex items-center justify-center p-8 border h-36 sm:h-44 sm:grayscale sm:hover:grayscale-0 transition-all duration-300 ${
                                    client.src === "/clients/Download.png"
                                        ? "bg-logo-blue border-logo-blue/20"
                                        : "bg-white border-gray-200"
                                }`}
                            >
                                <div className="relative w-full h-full">
                                    <ImageWithFallback
                                        src={client.src}
                                        alt={client.name}
                                        title={client.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
