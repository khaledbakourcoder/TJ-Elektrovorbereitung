import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Kontakt",
    description: "Rufen Sie an, schreiben Sie eine Mail oder kommen Sie vorbei – wir melden uns schnell.",
    openGraph: {
        title: "Kontakt | TJ Elektrovorbereitung",
        description: "Rufen Sie an, schreiben Sie eine Mail oder kommen Sie vorbei – wir melden uns schnell.",
    },
};

const contactChannels = [
    {
        label: "E-Mail",
        value: "info@tj-elektrovorbereitung.de",
        href: "mailto:info@tj-elektrovorbereitung.de",
        svg: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        ),
    },
    {
        label: "Telefon",
        value: "+49 1573 4403463",
        href: "tel:+4915734403463",
        svg: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        ),
    },
    {
        label: "WhatsApp",
        value: "Direktnachricht",
        href: "https://wa.me/4915734403463",
        target: "_blank",
        svg: (
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        ),
    },
    {
        label: "Facebook",
        value: "Folgen Sie uns",
        href: "https://facebook.com",
        target: "_blank",
        svg: (
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        ),
    },
    {
        label: "Instagram",
        value: "Einblicke in unsere Arbeit",
        href: "https://instagram.com",
        target: "_blank",
        svg: (
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        ),
    },
];

export default function KontaktPage() {
    return (
        <div className="min-h-screen text-gray-900">
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

                <div className="mb-16 max-w-3xl">
                    <p className="text-[10px] font-mono text-logo-blue/40 tracking-widest uppercase mb-3">Kontakt</p>
                    <h1 className="text-4xl sm:text-6xl font-black text-logo-blue tracking-tight leading-[1.05]">
                        Kontakt
                    </h1>
                    <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-md">
                        Schreiben Sie eine Mail, rufen Sie an oder schicken Sie uns eine WhatsApp.
                        Wir melden uns schnell.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {contactChannels.map((channel) => (
                            <a
                                key={channel.label}
                                href={channel.href}
                                target={channel.target ?? undefined}
                                rel={channel.target ? "noopener noreferrer" : undefined}
                                className="group p-6 sm:p-8 bg-white border border-gray-200 hover:border-logo-blue/30 transition-all space-y-4"
                            >
                                <div className="w-12 h-12 border border-logo-yellow/30 bg-logo-yellow/5 flex items-center justify-center group-hover:bg-logo-yellow transition-colors duration-300">
                                    <svg className="w-6 h-6 text-logo-blue group-hover:text-logo-yellow-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        {channel.svg}
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-logo-blue">{channel.label}</h3>
                                    <p className="text-xs text-gray-500 mt-1">{channel.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Divider with contact info */}
                    <div className="mt-16 flex items-center gap-4 text-logo-blue/20">
                        <div className="flex-1 h-px bg-current" />
                        <span className="text-[10px] font-mono tracking-widest">oder direkt</span>
                        <div className="flex-1 h-px bg-current" />
                    </div>

                    <div className="mt-8 text-center">
                        <div className="inline-flex items-center gap-6 p-6 border border-gray-200 bg-white">
                            <div className="text-left space-y-2">
                                <p className="flex items-center gap-2 text-xs text-gray-600">
                                    <span className="font-mono text-[9px] text-logo-yellow/60">E</span>
                                    info@tj-elektrovorbereitung.de
                                </p>
                                <p className="flex items-center gap-2 text-xs text-gray-600">
                                    <span className="font-mono text-[9px] text-logo-yellow/60">T</span>
                                    +49 1573 4403463
                                </p>
                            </div>
                            <div className="w-px h-10 bg-gray-200" />
                            <Link
                                href="/kontakt"
                                className="px-5 py-2.5 bg-logo-yellow text-logo-yellow-foreground font-extrabold text-xs uppercase tracking-wider hover:bg-yellow-400 transition-colors"
                            >
                                Anfrage senden
                            </Link>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
