import ImageWithFallback from "@/components/ImageWithFallback";
import Link from "next/link";

const extraServices = [
    {
        title: "Dosen senken",
        description:
            "Präzises Senken von Schalter- und Steckdosendosen in Beton, Kalksandstein und Mauerwerk. Wir bringen Ihre Dosen auf das richtige Maß – sauber und passgenau für den späteren Einbau.",
        image: "/img.png",
    },
    {
        title: "Wandausschnitte",
        description:
            "Wir erstellen Öffnungen und Durchbrüche für Türen, Fenster und Leitungen in Beton und Mauerwerk. Mit gezielten Wandausschnitten schaffen wir Platz für Ihre Installationen.",
        image: "/img.png",
    },
    {
        title: "Fußbodenheizung fräsen",
        description:
            "Nachträgliches Fräsen von Nutkanälen für Fußbodenheizungen im Estrich. Ideal für die Modernisierung von Altbauwohnungen – sauber, schnell und ohne große Belastung der Bausubstanz.",
        image: "/img.png",
    },
    {
        title: "Wandsägen",
        description:
            "Präzise Wanddurchbrüche mit der Wandsäge für Rohre, Lüftungsschächte oder Durchgänge. Erschütterungsarm und maßgenau – auch in Stahlbeton.",
        image: "/img.png",
    },
    {
        title: "Balkonrückbau & Demontage",
        description:
            "Systematischer Rückbau von Balkonen, Vordächern und Bauteilen. Schrittweise Demontage mit Schonung angrenzender Bausubstanz – fachgerecht und kontrolliert.",
        image: "/img.png",
    },
    {
        title: "Entrümpelung & Haushaltsauflösung",
        description:
            "Komplette oder teilweise Entrümpelung von Wohnungen, Häusern und Gewerbeeinheiten. Wir packen an, sortieren, entsorgen – damit Sie sich um nichts kümmern müssen.",
        image: "/img.png",
    },
];

export default function LeistungenPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center mb-16 space-y-3">
                    <h1 className="text-3xl sm:text-5xl font-black text-logo-blue tracking-tight">
                        Weitere Angebote
                    </h1>
                    <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
                        Über unsere Kernleistungen hinaus bieten wir eine Reihe weiterer Services
                        rund um Bauvorbereitung, Rückbau und Entsorgung.
                    </p>
                </div>

                <div className="space-y-12">
                    {extraServices.map((service, i) => (
                        <div
                            key={service.title}
                            className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center`}
                        >
                            <div className="relative w-full lg:w-80 h-56 rounded-xl overflow-hidden border border-gray-200 shrink-0">
                                <ImageWithFallback
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-3 flex-1">
                                <h2 className="text-2xl font-bold text-logo-blue tracking-tight">
                                    {service.title}
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                    {service.description}
                                </p>
                                <Link
                                    href="/kontakt"
                                    className="inline-block mt-2 px-5 py-2.5 bg-logo-blue text-white font-extrabold text-xs uppercase tracking-wider rounded-lg hover:bg-logo-blue/90 transition-colors"
                                >
                                    Angebot anfragen
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center p-10 rounded-xl bg-logo-blue text-white">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                        Nicht dabei, was Sie suchen?
                    </h2>
                    <p className="text-gray-300 mt-3 max-w-lg mx-auto text-sm">
                        Fragen Sie einfach an – wir prüfen, ob wir auch Ihr Projekt umsetzen können.
                    </p>
                    <Link
                        href="/kontakt"
                        className="inline-block mt-6 px-8 py-4 bg-logo-yellow text-gray-900 font-extrabold text-sm uppercase tracking-wider rounded-lg hover:bg-yellow-400 transition-colors"
                    >
                        Jetzt anfragen
                    </Link>
                </div>
            </main>
        </div>
    );
}
