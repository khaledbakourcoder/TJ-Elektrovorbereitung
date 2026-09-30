import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Impressum",
    description: "Angaben gemäß § 5 DDG – TJ Elektrovorbereitung, Inhaber Taha Alabd.",
};

export default function ImpressumPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <h1 className="text-3xl sm:text-4xl font-black text-logo-blue tracking-tight mb-2">
                    Impressum
                </h1>
                <div className="w-12 h-px bg-gray-300 mb-12" />

                <section className="mb-10">
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                        Angaben gemäß § 5 DDG
                    </p>
                    <div className="space-y-1 text-gray-700 leading-relaxed">
                        <p>Taha Alabd</p>
                        <p>TJ Elektrovorbereitung</p>
                        <p>Thomas Mann Straße 12</p>
                        <p>24937 Flensburg</p>
                    </div>
                </section>

                <div className="w-full h-px bg-gray-200 mb-10" />

                <section className="mb-10">
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                        Kontakt
                    </p>
                    <div className="space-y-2 text-gray-700">
                        <p>
                            <span className="text-gray-400 mr-3">Tel.</span>
                            <a href="tel:+4915734403463" className="hover:text-logo-blue transition-colors">
                                +49 1573 4403463
                            </a>
                        </p>
                        <p>
                            <span className="text-gray-400 mr-3">E-Mail</span>
                            <a href="mailto:info@tj-elektrovorbereitung.de" className="hover:text-logo-blue transition-colors">
                                info@tj-elektrovorbereitung.de
                            </a>
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
