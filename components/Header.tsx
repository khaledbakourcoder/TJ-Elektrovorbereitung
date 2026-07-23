"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MainSERVICES } from "@/Data/MainService";

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const isHomeActive = pathname === "/";
    const isKontaktActive = pathname === "/kontakt";
    const isAnyServiceActive = MainSERVICES.some((s) => pathname === `/${s.id}`);

    const toggleServices = () => setIsServicesOpen((prev) => !prev);
    const closeAllMenus = () => {
       setIsServicesOpen(false);
        setIsMenuOpen(false);
    };

    // VORBEUGUNG GEGEN MOBILE BACKGROUND SCROLLING
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    return (
        <header className="sticky top-0 z-50 w-full bg-white text-logo-blue border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24 sm:h-32">

                    {/* MAIN HEADER LINKS (Burger + Logo im geschlossenen Zustand) */}
                    <div className="flex items-center gap-4 sm:gap-12 w-full justify-between md:justify-start">

                        {/* MOBILE BURGER BUTTON */}
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="md:hidden p-1 focus:outline-none cursor-pointer"
                            aria-label="Menü öffnen"
                        >
                            <svg className="w-10 h-10 text-logo-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        {/* MAIN LOGO: Verschwindet komplett auf Mobil, wenn die Sidebar offen ist (isMenuOpen) */}
                        <Link
                            href="/"
                            onClick={closeAllMenus}
                            className={`flex items-center py-1 transition-opacity duration-200 ${
                                isMenuOpen ? "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto" : "opacity-100"
                            }`}
                        >
                            <div className="relative w-32 h-20 sm:w-48 sm:h-28 flex-shrink-0">
                                <Image
                                    src="/Logo.png"
                                    alt="TJ Elektrovorbereitung Logo"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* DESKTOP NAVIGATION */}
                        <nav className="hidden md:flex items-center space-x-8 group/nav">
                            <Link
                                href="/"
                                className="relative py-2 text-lg font-bold text-logo-blue group"
                            >
                                <span>Startseite</span>
                                <span
                                    className={`absolute left-0 bottom-0 h-0.5 bg-logo-blue transition-all duration-300 ease-out origin-left ${
                                        isHomeActive
                                            ? "w-full group-hover/nav:w-0 group-hover:!w-full"
                                            : "w-0 group-hover:w-full"
                                    }`}
                                />
                            </Link>

                            <div
                                className="relative"
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                            >
                                <button
                                    onClick={toggleServices}
                                    className="relative py-2 text-lg font-bold text-logo-blue focus:outline-none cursor-pointer group flex items-center gap-2"
                                    aria-expanded={isServicesOpen}
                                >
                                    <span>Leistungen</span>
                                    <span
                                        className={`absolute left-0 bottom-0 h-0.5 bg-logo-blue transition-all duration-300 ease-out origin-left ${
                                            isAnyServiceActive
                                                ? "w-full group-hover/nav:w-0 group-hover:!w-full"
                                                : "w-0 group-hover:w-full"
                                        }`}
                                    />
                                </button>

                                {isServicesOpen && (
                                    <div className="absolute top-full left-0 w-64 pt-3 z-50">
                                        <div className="bg-white border border-gray-200 rounded-xl shadow-xl p-2 space-y-1">
                                            {MainSERVICES.map((service) => {
                                                const isServiceActive = pathname === `/${service.id}`;
                                                return (
                                                    <Link
                                                        key={service.id}
                                                        href={`/${service.id}`}
                                                        onClick={closeAllMenus}
                                                        className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                                                            isServiceActive
                                                                ? "bg-gray-100 font-bold text-logo-blue"
                                                                : "text-logo-blue hover:bg-gray-50"
                                                        }`}
                                                    >
                                                        {service.title}
                                                    </Link>
                                                );
                                            })}
                                            <div className="border-t border-gray-100 my-1" />
                                            <Link
                                                href="/leistungen"
                                                onClick={closeAllMenus}
                                                className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                                                    pathname === "/leistungen"
                                                        ? "bg-gray-100 font-bold text-logo-blue"
                                                        : "text-logo-blue hover:bg-gray-50"
                                                }`}
                                            >
                                                Weitere Angebote →
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link
                                href="/kontakt"
                                className="relative py-2 text-lg font-bold text-logo-blue group"
                            >
                                <span>Kontakt</span>
                                <span
                                    className={`absolute left-0 bottom-0 h-0.5 bg-logo-blue transition-all duration-300 ease-out origin-left ${
                                        isKontaktActive
                                            ? "w-full group-hover/nav:w-0 group-hover:!w-full"
                                            : "w-0 group-hover:w-full"
                                    }`}
                                />
                            </Link>
                        </nav>
                    </div>

                </div>
            </div>

            {/* MOBILE SIDEBAR DRAWER */}
            <div
                className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden ${
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={closeAllMenus}
            >
                {/* DAS GELBE "X"-ZEICHEN RECHTS AUSSERHALB DER SIDEBAR AUF HEADER-HÖHE */}
                <button
                    onClick={closeAllMenus}
                    className="absolute top-6 right-5 p-2 text-logo-yellow focus:outline-none cursor-pointer hover:scale-110 transition-transform z-50"
                    aria-label="Menü schließen"
                >
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <aside
                className={`fixed top-0 left-0 h-dvh w-[72%] max-w-[320px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-start overflow-hidden ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div>
                    {/* DAS EINZIG SICHTBARE LOGO BEI GEÖFFNETER SIDEBAR */}
                    <div className="flex items-center justify-center p-4 min-h-[100px] border-b border-gray-100">
                        <Link href="/" onClick={closeAllMenus} className="flex items-center justify-center">
                            <div className="relative w-36 h-24 flex-shrink-0">
                                <Image
                                    src="/Logo.png"
                                    alt="TJ Elektrovorbereitung Logo"
                                    fill
                                    className="object-contain object-center"
                                />
                            </div>
                        </Link>
                    </div>

                    <nav className="p-8 text-left space-y-6">
                        <Link
                            href="/"
                            onClick={closeAllMenus}
                            className={`block text-base font-extrabold uppercase tracking-widest transition-colors ${
                                isHomeActive ? "text-logo-yellow" : "text-gray-900 hover:text-logo-yellow"
                            }`}
                        >
                            HOME
                        </Link>

                        <div className="space-y-3">
                            <button
                                onClick={toggleServices}
                                className={`flex items-center justify-between w-full text-base font-extrabold uppercase tracking-widest cursor-pointer ${
                                    isAnyServiceActive ? "text-logo-yellow" : "text-gray-900 hover:text-logo-yellow"
                                }`}
                            >
                                <span>UNSER ANGEBOT</span>
                                <svg
                                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                                        isServicesOpen ? "rotate-180" : ""
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isServicesOpen && (
                                <div className="pl-4 space-y-3 pt-1">
                                    {MainSERVICES.map((service) => {
                                        const isServiceActive = pathname === `/${service.id}`;
                                        return (
                                            <Link
                                                key={service.id}
                                                href={`/${service.id}`}
                                                onClick={closeAllMenus}
                                                className={`block text-xs font-bold uppercase tracking-wider transition-colors ${
                                                    isServiceActive
                                                        ? "text-logo-yellow"
                                                        : "text-gray-500 hover:text-gray-900"
                                                }`}
                                            >
                                                {service.title}
                                            </Link>
                                        );
                                    })}
                                    <div className="border-t border-gray-100/50 pt-3 mt-3" />
                                    <Link
                                        href="/leistungen"
                                        onClick={closeAllMenus}
                                        className={`block text-xs font-bold uppercase tracking-wider transition-colors ${
                                            pathname === "/leistungen"
                                                ? "text-logo-yellow"
                                                : "text-gray-500 hover:text-gray-900"
                                        }`}
                                    >
                                        Weitere Angebote →
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/kontakt"
                            onClick={closeAllMenus}
                            className={`block text-base font-extrabold uppercase tracking-widest transition-colors ${
                                isKontaktActive ? "text-logo-yellow" : "text-gray-900 hover:text-logo-yellow"
                            }`}
                        >
                            KONTAKT
                        </Link>
                    </nav>
                </div>
            </aside>
        </header>
    );
}