import ImageWithFallback from "@/components/ImageWithFallback";
import Link from "next/link";
import { MainSERVICES } from "@/Data/MainService";

const stats = [
    { label: "Jahre Erfahrung", value: "2" },
    { label: "Kunden", value: "15+" },
    { label: "Projekte", value: "25+" },
    { label: "Mitarbeiter", value: "3" },
];

const clientLogos = [
    { name: "Elektro Keller", src: "/clients/client-1.svg" },
    { name: "Bauprojekt GmbH", src: "/clients/client-2.svg" },
    { name: "Haustechnik Wagner", src: "/clients/client-3.svg" },
    { name: "Sanierungsbetrieb Müller", src: "/clients/client-4.svg" },
    { name: "Wohnbau Nord", src: "/clients/client-5.svg" },
    { name: "Elektrotechnik Hanke", src: "/clients/client-6.svg" },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-white text-gray-900">

            {/* HERO */}
            <section className="relative bg-logo-blue text-white overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
                    <div className="max-w-3xl space-y-6">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                            Saubere Vorarbeiten –<br />
                            <span className="text-logo-yellow">darauf können Sie bauen</span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
                            Egal ob Schlitzen, Kernbohrungen oder Dosen senken –
                            wir kümmern uns um die Vorbereitung, damit Sie
                            sich auf das Wesentliche konzentrieren können.
                        </p>
                        <div className="pt-2">
                            <Link
                                href="/kontakt"
                                className="inline-block px-8 py-4 bg-logo-yellow text-gray-900 font-extrabold text-sm uppercase tracking-wider rounded-lg hover:bg-yellow-400 transition-colors shadow-lg"
                            >
                                Unverbindlich anfragen
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute -bottom-2 left-0 right-0 h-16 bg-white" style={{ clipPath: "ellipse(70% 100% at 50% 100%)" }} />
            </section>

            {/* SERVICES */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                <div className="text-center mb-14 space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-black text-logo-blue tracking-tight">
                        Unser Angebot
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
                        Vom Schlitzen bis zur Kernbohrung – wir machen den Weg frei für Ihre Elektroinstallation.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {MainSERVICES.map((service) => (
                        <Link
                            key={service.id}
                            href={`/${service.id}`}
                            className="group rounded-xl overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                                <ImageWithFallback
                                    src={service.mainImage.url}
                                    alt={service.mainImage.alt}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-5 space-y-2">
                                <h3 className="text-base font-bold text-logo-blue group-hover:text-logo-yellow transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                                    {service.shortDescription}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-logo-blue text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                        Haben Sie ein Projekt?<br />
                        <span className="text-logo-yellow">Wir sind bereit.</span>
                    </h2>
                    <p className="text-gray-300 max-w-lg mx-auto text-sm sm:text-base">
                        Rufen Sie an oder schreiben Sie uns – wir besprechen alles Weitere persönlich mit Ihnen.
                    </p>
                    <div className="pt-2">
                        <Link
                            href="/kontakt"
                            className="inline-block px-8 py-4 bg-logo-yellow text-gray-900 font-extrabold text-sm uppercase tracking-wider rounded-lg hover:bg-yellow-400 transition-colors shadow-lg"
                        >
                                Kontakt aufnehmen
                        </Link>
                    </div>
                </div>
            </section>

            {/* GOOGLE BEWERTUNGEN */}
            <section className="bg-gray-50/70 border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">

                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
                        <div className="flex items-center gap-3">
                            <svg className="w-8 h-8" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                                <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
                                <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                                <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
                            </svg>
                            <div>
                                <div className="text-lg font-bold text-gray-900">Google Bewertungen</div>
                                <div className="flex items-center gap-1.5">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 text-logo-yellow" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-500">5.0</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                name: "Matteo Friedrich",
                                text: "Echt klasse! Super schnelle Reaktionszeit und sehr charismatischer Geschäftsführer. Würde ich definitiv weiterempfehlen.",
                                date: "17. Oktober 2023",
                            },
                            {
                                name: "HANKE Elektrotechnik & Anlagenbau",
                                text: "Super saubere und schnelle Arbeit. Gerne wieder.",
                                date: "14. März 2023",
                            },
                            {
                                name: "Juergen Plischke",
                                text: "Zuverlässig, kompetent, uneingeschränkt zu empfehlen.",
                                date: "20. Februar 2023",
                            },
                            {
                                name: "Christian Naundorf",
                                text: "Pünktlich, saubere Arbeit, Absprachen werden eingehalten, kompetente Mitarbeiter.",
                                date: "16. Juni 2022",
                            },
                        ].map((review) => (
                            <div
                                key={review.name}
                                className="p-6 rounded-xl bg-white border border-gray-100 shadow-xs space-y-3"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-logo-blue/10 flex items-center justify-center text-logo-blue font-bold text-sm shrink-0">
                                        {review.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-sm font-bold text-gray-900 truncate">{review.name}</div>
                                        <div className="text-xs text-gray-400">{review.date}</div>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    &ldquo;{review.text}&rdquo;
                                </p>
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-logo-yellow" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <a
                            href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-logo-blue transition-colors"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
                            </svg>
                            Bei Google bewerten
                        </a>
                    </div>
                </div>
            </section>

            {/* STATISTICS */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center space-y-2">
                            <div className="text-4xl sm:text-5xl font-black text-logo-yellow">
                                {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* KUNDENLOGOS */}
            <section className="bg-gray-50/70 border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                    <div className="text-center mb-14 space-y-3">
                        <h2 className="text-3xl sm:text-4xl font-black text-logo-blue tracking-tight">
                            Unsere Kunden
                        </h2>
                        <p className="text-gray-500 text-sm sm:text-base">
                            Einige der Unternehmen, mit denen wir zusammenarbeiten durften
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                        {clientLogos.map((client) => (
                            <div
                                key={client.name}
                                className="flex items-center justify-center p-6 rounded-xl bg-white border border-gray-100 h-24 grayscale hover:grayscale-0 transition-all duration-300"
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
