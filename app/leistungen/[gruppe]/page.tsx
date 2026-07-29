import { LEISTUNGSGRUPPEN } from "@/Data/Leistungsgruppen";
import { GRUPPE_COLORS, DEFAULT_COLORS } from "@/Data/GruppeColors";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
    params: Promise<{ gruppe: string }>;
}

export async function generateStaticParams() {
    return LEISTUNGSGRUPPEN.map((g) => ({ gruppe: g.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { gruppe: gruppeId } = await params;
    const gruppe = LEISTUNGSGRUPPEN.find((g) => g.id === gruppeId);
    if (!gruppe) return { title: "Nicht gefunden" };
    return {
        title: `${gruppe.title} | TJ Elektro Vorbereitung`,
        description: gruppe.description,
    };
}

/* ── Icon map (inline SVG paths per Gruppe) ─────────────────── */
const groupIcons: Record<string, React.ReactNode> = {
    elektrovorbereitung: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
    ),
    kernbohrung: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="3" />
            <line x1="12" y1="3" x2="12" y2="6" />
            <line x1="12" y1="18" x2="12" y2="21" />
            <line x1="3" y1="12" x2="6" y2="12" />
            <line x1="18" y1="12" x2="21" y2="12" />
        </svg>
    ),
    abbrucharbeiten: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8">
            <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="10" y1="11" x2="10" y2="17" strokeLinecap="round" />
            <line x1="14" y1="11" x2="14" y2="17" strokeLinecap="round" />
        </svg>
    ),
};

/* ── Sub-Service Icons (individuell pro Einzelleistung) ───── */
const SubServiceIcon = (id: string) => {
    const icons: Record<string, React.ReactNode> = {
        schlitzen: (
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-full h-full">
                <rect x="14" y="6" width="20" height="36" rx="1" />
                <rect x="20" y="12" width="8" height="24" rx="0.5" opacity={0.5} />
                <line x1="8" y1="24" x2="14" y2="24" strokeWidth={1} opacity={0.4} />
                <line x1="8" y1="20" x2="8" y2="28" strokeWidth={1} opacity={0.4} />
                <line x1="34" y1="24" x2="40" y2="24" strokeWidth={1} opacity={0.4} />
                <line x1="40" y1="20" x2="40" y2="28" strokeWidth={1} opacity={0.4} />
                <text x="10" y="18" fontSize="6" opacity={0.3} fontFamily="monospace">B</text>
                <text x="36" y="18" fontSize="6" opacity={0.3} fontFamily="monospace">T</text>
            </svg>
        ),
        fraesen: (
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-full h-full">
                <rect x="8" y="18" width="32" height="16" rx="1" />
                <path d="M12 22 Q20 18 28 22 Q36 26 40 22" opacity={0.5} />
                <path d="M12 26 Q20 22 28 26 Q36 30 40 26" opacity={0.5} />
                <path d="M12 30 Q20 26 28 30 Q36 34 40 30" opacity={0.5} />
                <circle cx="32" cy="12" r="4" opacity={0.6} />
                <line x1="32" y1="8" x2="32" y2="18" opacity={0.4} />
            </svg>
        ),
        stemmen: (
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-full h-full">
                <rect x="21" y="6" width="6" height="24" rx="0.5" />
                <polygon points="18,30 30,30 26,36 22,36" />
                <line x1="16" y1="40" x2="32" y2="40" strokeWidth={2} />
                <line x1="14" y1="14" x2="4" y2="10" opacity={0.4} />
                <line x1="14" y1="18" x2="4" y2="20" opacity={0.4} />
                <circle cx="6" cy="6" r="3" opacity={0.3} />
            </svg>
        ),
        "leitung-verlegen": (
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-full h-full">
                <path d="M6 38 Q12 20 24 24 Q36 28 42 10" opacity={0.7} />
                <circle cx="12" cy="16" r="3" opacity={0.5} />
                <circle cx="24" cy="4" r="3" opacity={0.5} />
                <circle cx="36" cy="16" r="3" opacity={0.5} />
                <line x1="12" y1="16" x2="18" y2="28" strokeDasharray="2 2" opacity={0.3} />
                <line x1="36" y1="16" x2="28" y2="32" strokeDasharray="2 2" opacity={0.3} />
                <rect x="14" y="36" width="20" height="8" rx="1" opacity={0.3} />
                <text x="16" y="42" fontSize="5" opacity={0.4} fontFamily="monospace">EZ</text>
            </svg>
        ),
        trassenbau: (
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-full h-full">
                <line x1="6" y1="12" x2="42" y2="12" strokeWidth={2} />
                <line x1="6" y1="18" x2="42" y2="18" strokeWidth={2} />
                <line x1="10" y1="12" x2="10" y2="18" />
                <line x1="38" y1="12" x2="38" y2="18" />
                <line x1="10" y1="24" x2="38" y2="24" strokeDasharray="4 2" opacity={0.5} />
                <line x1="10" y1="30" x2="38" y2="30" strokeDasharray="4 2" opacity={0.5} />
                <path d="M24 18 L24 24 M24 30 L24 38" opacity={0.5} />
                <circle cx="24" cy="38" r="3" opacity={0.5} />
                <line x1="6" y1="36" x2="42" y2="36" opacity={0.2} />
                <text x="12" y="34" fontSize="5" opacity={0.4} fontFamily="monospace">Trasse A</text>
            </svg>
        ),
        "kernbohrung-200mm": (
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-full h-full">
                <circle cx="24" cy="28" r="14" />
                <circle cx="24" cy="28" r="8" opacity={0.5} />
                <circle cx="24" cy="28" r="2" opacity={0.7} />
                <line x1="24" y1="14" x2="24" y2="10" />
                <rect x="21" y="6" width="6" height="4" rx="0.5" />
                <line x1="10" y1="28" x2="6" y2="28" strokeWidth={1} opacity={0.4} />
                <line x1="6" y1="25" x2="6" y2="31" strokeWidth={1} opacity={0.4} />
                <line x1="38" y1="28" x2="42" y2="28" strokeWidth={1} opacity={0.4} />
                <line x1="42" y1="25" x2="42" y2="31" strokeWidth={1} opacity={0.4} />
                <text x="14" y="12" fontSize="6" opacity={0.4} fontFamily="monospace">Ø200</text>
            </svg>
        ),
        "waende-saegen": (
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-full h-full">
                <rect x="6" y="6" width="36" height="36" rx="1" opacity={0.3} />
                <rect x="14" y="14" width="20" height="20" rx="1" opacity={0.6} />
                <circle cx="24" cy="24" r="8" opacity={0.4} />
                <line x1="14" y1="14" x2="34" y2="34" strokeWidth={2} opacity={0.7} />
                <line x1="34" y1="14" x2="14" y2="34" strokeWidth={2} opacity={0.7} />
                <line x1="4" y1="14" x2="14" y2="14" opacity={0.4} />
                <line x1="34" y1="14" x2="44" y2="14" opacity={0.4} />
                <line x1="4" y1="34" x2="14" y2="34" opacity={0.4} />
                <line x1="34" y1="34" x2="44" y2="34" opacity={0.4} />
            </svg>
        ),
        "waende-abreissen": (
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-full h-full">
                <rect x="14" y="6" width="20" height="36" rx="1" />
                <path d="M14 6 L26 20 L34 6" opacity={0.5} />
                <path d="M16 10 L24 22 L32 10" opacity={0.3} />
                <line x1="4" y1="32" x2="14" y2="42" opacity={0.5} />
                <line x1="4" y1="36" x2="10" y2="42" opacity={0.3} />
                <line x1="34" y1="42" x2="44" y2="32" opacity={0.5} />
                <line x1="38" y1="42" x2="44" y2="36" opacity={0.3} />
                <circle cx="8" cy="28" r="2" opacity={0.3} />
                <circle cx="40" cy="28" r="2" opacity={0.3} />
            </svg>
        ),
        "fliesen-abstemmen": (
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-full h-full">
                <rect x="6" y="6" width="36" height="36" rx="1" />
                <line x1="6" y1="18" x2="42" y2="18" opacity={0.4} />
                <line x1="6" y1="30" x2="42" y2="30" opacity={0.4} />
                <line x1="18" y1="6" x2="18" y2="42" opacity={0.4} />
                <line x1="30" y1="6" x2="30" y2="42" opacity={0.4} />
                <polygon points="24,18 36,12 36,24" opacity={0.6} />
                <line x1="14" y1="24" x2="24" y2="42" strokeWidth={2} opacity={0.5} />
                <line x1="10" y1="38" x2="18" y2="38" opacity={0.4} />
            </svg>
        ),
        "estrich-abklopfen": (
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-full h-full">
                <rect x="6" y="30" width="36" height="12" rx="1" />
                <rect x="6" y="26" width="36" height="4" rx="0.5" opacity={0.5} />
                <rect x="6" y="22" width="36" height="4" rx="0.5" opacity={0.3} />
                <rect x="22" y="6" width="8" height="18" rx="0.5" />
                <line x1="26" y1="6" x2="26" y2="22" strokeWidth={3} opacity={0.5} />
                <line x1="18" y1="14" x2="22" y2="14" opacity={0.4} />
                <line x1="30" y1="14" x2="34" y2="14" opacity={0.4} />
                <circle cx="14" cy="34" r="2" opacity={0.4} />
                <circle cx="34" cy="36" r="1.5" opacity={0.3} />
            </svg>
        ),
    };
    return icons[id] ?? (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-full h-full">
            <circle cx="24" cy="24" r="16" />
            <line x1="8" y1="24" x2="40" y2="24" />
            <line x1="24" y1="8" x2="24" y2="40" />
        </svg>
    );
};

/* ── Technische Specs pro Sub-Service ──────────────────────── */
const subServiceSpecs: Record<string, { label: string; value: string }[]> = {
    schlitzen: [
        { label: "Verfahren", value: "Mauernutfräse" },
        { label: "Material", value: "Mauerwerk, Ziegel, Beton" },
        { label: "Absaugung", value: "Direktstaubsauger" },
    ],
    fraesen: [
        { label: "Verfahren", value: "Flächenfräse" },
        { label: "Material", value: "Beton, Estrich, Putz" },
        { label: "Einsatz", value: "Breite Kanäle, Bündel" },
    ],
    stemmen: [
        { label: "Verfahren", value: "Abbruchmeißel" },
        { label: "Merkmal", value: "Materialschonend" },
    ],
    "leitung-verlegen": [
        { label: "Leistung", value: "Leerrohre + Leitungen" },
        { label: "Übergabe", value: "Trassenfertig" },
    ],
    trassenbau: [
        { label: "Umfang", value: "Komplette Trassen" },
        { label: "Leistung", value: "Planung + Reinigung" },
    ],
    "kernbohrung-200mm": [
        { label: "Verfahren", value: "Diamantbohrung" },
        { label: "Durchmesser", value: "Bis 200 mm" },
        { label: "Erschütterung", value: "Vibrationsfrei" },
    ],
    "waende-saegen": [
        { label: "Verfahren", value: "Wandsäge" },
        { label: "Schnitt", value: "Geradlinig, sauber" },
        { label: "Material", value: "Auch Stahlbeton" },
    ],
    "waende-abreissen": [
        { label: "Typ", value: "Nichttragend" },
        { label: "Umfang", value: "Einzeln, kontrolliert" },
    ],
    "fliesen-abstemmen": [
        { label: "Bereiche", value: "Wand + Boden" },
        { label: "Vorbereitung", value: "Neuverfliesung" },
    ],
    "estrich-abklopfen": [
        { label: "Umfang", value: "Einzelflächen" },
        { label: "Vorbereitung", value: "Bodenaufbau" },
    ],
};




export default async function GruppenDetailPage({ params }: Props) {
    const { gruppe: gruppeId } = await params;
    const gruppe = LEISTUNGSGRUPPEN.find((g) => g.id === gruppeId);
    if (!gruppe) notFound();

    const colors = GRUPPE_COLORS[gruppe.id] ?? DEFAULT_COLORS;
    const otherGruppen = LEISTUNGSGRUPPEN.filter((g) => g.id !== gruppe.id);

    return (
        <div className="min-h-screen bg-white text-gray-900">

            {/* ── Hero-Banner mit Noise ──────────────────────────── */}
            <section className={`relative ${colors.header} text-white overflow-hidden`}>
                <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="flex items-start gap-5">
                        <div className={`flex-shrink-0 mt-1 ${colors.icon} hidden sm:block`}>
                            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10 opacity-80">
                                {gruppe.id === "elektrovorbereitung" ? (
                                    <>
                                        <rect x="8" y="14" width="32" height="20" rx="1" />
                                        <line x1="16" y1="14" x2="16" y2="34" strokeWidth={2} />
                                        <line x1="24" y1="14" x2="24" y2="34" strokeWidth={2} />
                                        <line x1="32" y1="14" x2="32" y2="34" strokeWidth={2} />
                                        <circle cx="24" cy="24" r="3" strokeWidth={1.5} />
                                    </>
                                ) : gruppe.id === "kernbohrung" ? (
                                    <>
                                        <circle cx="24" cy="24" r="16" />
                                        <circle cx="24" cy="24" r="10" strokeWidth={1} opacity={0.6} />
                                        <circle cx="24" cy="24" r="4" />
                                        <line x1="24" y1="8" x2="24" y2="16" opacity={0.5} />
                                        <line x1="24" y1="32" x2="24" y2="40" opacity={0.5} />
                                        <line x1="8" y1="24" x2="16" y2="24" opacity={0.5} />
                                        <line x1="32" y1="24" x2="40" y2="24" opacity={0.5} />
                                    </>
                                ) : (
                                    <>
                                        <rect x="10" y="8" width="28" height="8" rx="1" />
                                        <rect x="14" y="16" width="8" height="28" rx="1" />
                                        <rect x="26" y="16" width="8" height="28" rx="1" />
                                        <line x1="6" y1="16" x2="42" y2="16" strokeWidth={2} />
                                    </>
                                )}
                            </svg>
                        </div>
                        <div>
                            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">
                                {gruppe.title}
                            </p>
                            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-3">
                                {gruppe.title}
                            </h1>
                            <p className="text-logo-yellow font-semibold text-base mb-4">
                                {gruppe.subTitle}
                            </p>
                            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl">
                                {gruppe.description}
                            </p>
                        </div>
                    </div>

                    {/* Hinweis-Badge */}
                    {gruppe.hinweis && (
                        <div className="mt-8 flex items-start gap-3 p-4 bg-white/5 border border-white/10 max-w-2xl">
                            <span className="text-amber-300 text-lg flex-shrink-0">⚠</span>
                            <p className="text-sm text-white/90 leading-relaxed">
                                <strong>Wichtig:</strong> {gruppe.hinweis}
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* ── Einzelleistungen (alternierende Sections) ───────── */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <h2 className="text-xl sm:text-2xl font-black text-logo-blue tracking-tight mb-10">
                    Einzelleistungen
                </h2>

                <div className="space-y-6">
                    {gruppe.subServices.map((sub, i) => {
                        const specs = subServiceSpecs[sub.id] ?? [];
                        const isLeft = i % 2 === 0;
                        return (
                        <div
                            key={sub.id}
                            className="grid grid-cols-1 lg:grid-cols-12 border border-gray-200 bg-white overflow-hidden"
                        >
                            {/* Visual Panel */}
                            <div
                                className={`relative ${colors.header} overflow-hidden ${isLeft ? "lg:col-span-4" : "lg:col-span-4 lg:order-last"}`}
                                style={{ minHeight: "220px" }}
                            >
                                <div className="absolute inset-0 bg-noise opacity-25 mix-blend-overlay" />

                                {/* Crosshair */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
                                    <div className="w-3/4 h-px bg-white" />
                                    <div className="absolute h-3/4 w-px bg-white" />
                                </div>

                                {/* Sub-Service Icon */}
                                <div className={`absolute inset-0 flex items-center justify-center ${colors.icon} opacity-90`}>
                                    <div className="w-20 h-20 sm:w-24 sm:h-24">
                                        {SubServiceIcon(sub.id)}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                                <h3 className="text-xl sm:text-2xl font-black text-logo-blue tracking-tight mb-3">
                                    {sub.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed mb-5 max-w-xl">
                                    {sub.shortDescription}
                                </p>

                                {/* Technische Specs */}
                                {specs.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {specs.map((spec) => (
                                            <span
                                                key={spec.label}
                                                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold border ${colors.badge}`}
                                            >
                                                <span className={`opacity-60 font-mono`}>{spec.label}:</span>
                                                {spec.value}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* CTA */}
                                <Link
                                    href={`/kontakt?leistung=${encodeURIComponent(sub.title)}`}
                                    className="inline-flex items-center gap-2 self-start px-5 py-3 bg-logo-yellow text-gray-900 font-extrabold text-xs uppercase tracking-wider hover:bg-yellow-400 transition-colors"
                                >
                                    Angebot anfragen
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </section>

            {/* ── Andere Leistungsgruppen ─────────────────────────── */}
            <section className="bg-gray-50 border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                    <h2 className="text-lg font-black text-logo-blue tracking-tight mb-6">
                        Weitere Leistungsbereiche
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {otherGruppen.map((og) => (
                            <Link
                                key={og.id}
                                href={`/leistungen/${og.id}`}
                                className="group relative flex items-center gap-4 p-5 border border-gray-200 bg-white
                                    hover:border-logo-blue/40 transition-all duration-200"
                            >
                                <div className="text-logo-blue group-hover:text-logo-yellow transition-colors">
                                    {groupIcons[og.id]}
                                </div>
                                <div>
                                    <p className="font-black text-logo-blue text-sm group-hover:text-logo-blue">
                                        {og.title}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-0.5">{og.subTitle}</p>
                                </div>
                                <svg className="w-4 h-4 text-gray-300 group-hover:text-logo-blue ml-auto transition-colors"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ─────────────────────────────────────────────── */}
            <section className="bg-logo-blue text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                        Haben Sie ein Projekt?
                    </h2>
                    <p className="text-gray-300 text-sm max-w-lg mx-auto">
                        Kontaktieren Sie uns – kurze Beschreibung oder Foto reicht.
                        Angebot innerhalb von 24 Stunden.
                    </p>
                    <Link
                        href="/kontakt"
                        className="inline-flex items-center gap-2 mt-4 px-8 py-4 bg-logo-yellow text-gray-900
                            font-extrabold text-sm uppercase tracking-wider
                            hover:bg-yellow-400 transition-colors shadow-lg"
                    >
                        Jetzt anfragen
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
                <div className="yellow-accent" />
            </section>

        </div>
    );
}
