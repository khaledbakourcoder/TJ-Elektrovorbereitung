import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-logo-blue text-gray-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                    <div className="space-y-4">
                        <div className="relative w-36 h-20">
                            <Image
                                src="/Logo.png"
                                alt="TJ Elektrovorbereitung Logo"
                                fill
                                className="object-contain object-left brightness-0 invert"
                            />
                        </div>
                        <p className="text-xs leading-relaxed text-gray-400">
                            Elektrovorbereitung, Kernbohrungen und mehr – zuverlässig und sauber ausgeführt.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">Kontakt</h4>
                        <div className="space-y-2 text-xs">
                            <p>info@tj-objektservice.de</p>
                            <p>+49 1573 4403463</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">Rechtliches</h4>
                        <div className="space-y-2 text-xs">
                            <Link href="/impressum" className="block hover:text-white transition-colors">
                                Impressum
                            </Link>
                            <Link href="/datenschutz" className="block hover:text-white transition-colors">
                                Datenschutz
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10 py-6">
                <p className="text-center text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} TJ Elektrovorbereitung. Alle Rechte vorbehalten.
                </p>
            </div>
        </footer>
    );
}
