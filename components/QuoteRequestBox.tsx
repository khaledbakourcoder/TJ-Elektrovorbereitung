import Link from "next/link";

interface QuoteRequestBoxProps {
    serviceTitle: string;
}

export default function QuoteRequestBox({ serviceTitle }: QuoteRequestBoxProps) {
    return (
        <div className="p-8 bg-logo-blue text-white space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none" />
            <div className="relative z-10 space-y-2">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-px bg-logo-yellow/60" />
                    <span className="text-[10px] font-mono text-logo-yellow/60 tracking-widest uppercase">Angebot</span>
                </div>
                <h3 className="text-xl font-black">
                    Angebot anfordern
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                    Schicken Sie uns eine Anfrage für <strong className="text-white">{serviceTitle}</strong>. Wir machen Ihnen einen Festpreis – unverbindlich und ohne Schnickschnack.
                </p>
            </div>

            <Link
                href="/kontakt"
                className="relative z-10 block w-full py-3.5 text-center bg-logo-yellow text-logo-yellow-foreground font-extrabold text-xs uppercase tracking-wider hover:bg-yellow-400 transition-colors"
            >
                Jetzt Angebot einholen
            </Link>
        </div>
    );
}
