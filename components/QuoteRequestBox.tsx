import Link from "next/link";

interface QuoteRequestBoxProps {
    serviceTitle: string;
}

export default function QuoteRequestBox({ serviceTitle }: QuoteRequestBoxProps) {
    return (
        <div className="p-8 bg-logo-blue text-white rounded-xl space-y-6 shadow-sm">
            <div className="space-y-2">
                <h3 className="text-xl font-bold">
                    Angebot anfordern
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                    Senden Sie uns Ihre Anfrage für **{serviceTitle}**. Wir erstellen Ihnen ein unverbindliches und maßgeschneidertes Angebot.
                </p>
            </div>

            <Link
                href="/kontakt"
                className="block w-full py-3.5 text-center bg-logo-yellow text-gray-900 font-extrabold text-xs uppercase tracking-wider rounded-lg hover:bg-yellow-400 transition-colors shadow-xs"
            >
                Jetzt Angebot einholen
            </Link>
        </div>
    );
}
