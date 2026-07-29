/**
 * Farb-Token pro Leistungsgruppe.
 * Wird in Header, Homepage-Cards, Leistungsübersicht und Detailseiten verwendet.
 *
 * Farbkonzept:
 *  Elektrovorbereitung → Logo-Blau   (elektrisch, professionell)
 *  Kernbohrung         → Stein-Grau  (Beton, Bohrer, Material)
 *  Abbrucharbeiten     → Amber-Braun (Abbruch, Warnung, Kleinformat)
 */

export interface GruppeColors {
    /** Hintergrund des Karten-Headers / Hero-Banners */
    header: string;
    /** Hover-Akzent und Bullet-Farbe */
    bullet: string;
    /** Icon-Farbe (auf dunklem Header) */
    icon: string;
    /** Badge-Stil (Hintergrund + Text + Border) */
    badge: string;
}

export const GRUPPE_COLORS: Record<string, GruppeColors> = {
    elektrovorbereitung: {
        header: "bg-[#1B3A5C]",          // dunkles Marineblau
        bullet: "bg-logo-yellow",
        icon:   "text-logo-yellow",
        badge:  "bg-blue-50 text-blue-800 border-blue-100",
    },
    kernbohrung: {
        header: "bg-stone-700",           // Beton-Stein-Grau
        bullet: "bg-stone-300",
        icon:   "text-stone-300",
        badge:  "bg-stone-50 text-stone-700 border-stone-200",
    },
    abbrucharbeiten: {
        header: "bg-amber-700",           // Abbruch-Amber
        bullet: "bg-amber-400",
        icon:   "text-amber-300",
        badge:  "bg-amber-50 text-amber-800 border-amber-200",
    },
};

/** Fallback, falls eine Gruppe keine Farbe hat */
export const DEFAULT_COLORS: GruppeColors = GRUPPE_COLORS.elektrovorbereitung;
