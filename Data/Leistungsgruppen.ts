import { IServiceGroup } from "@/Types/Service.type";

/**
 * Die drei Leistungsgruppen von TJ Elektro Vorbereitung.
 *
 * Struktur:
 *  1. Elektrovorbereitung  – Schlitzen, Fräsen, Stemmen, Leitung verlegen, Trassenbau
 *  2. Kernbohrung          – Ø bis 1000 mm-Bohrungen, Wände sägen
 *  3. Abbrucharbeiten      – NUR Kleinformat: Wände abreißen, Fliesen abstemmen, Estrich abklopfen
 */
export const LEISTUNGSGRUPPEN: IServiceGroup[] = [
    /* ─────────────────────────────────────────────────────────
       1. ELEKTROVORBEREITUNG
    ───────────────────────────────────────────────────────── */
    {
        id: "elektrovorbereitung",
        title: "Elektrovorbereitung",
        subTitle: "Alle Vorarbeiten für die Elektroinstallation",
        description:
            "Wir machen die Vorarbeit für Elektriker. Schlitzen, fräsen, stemmen, Leerrohre verlegen – alles was vor dem Kabelziehen kommt.",
        icon: "/icons/elektrovorbereitung.svg",
        subServices: [
            {
                id: "schlitzen",
                title: "Schlitzen",
                shortDescription:
                    "Kabelkanäle in Mauerwerk, Ziegel und Beton. Mauernutfräse mit Sauger – sauber, staubarm, maßgenau.",
            },
            {
                id: "fraesen",
                title: "Fräsen",
                shortDescription:
                    "Wand- und Bodenkanäle flächig abfräsen. Auf Beton, Estrich, Putz. Für breite Leitungsbündel.",
            },
            {
                id: "stemmen",
                title: "Stemmen",
                shortDescription:
                    "Mittelstege rausstemmen nach dem Schlitzen. Alte Dosen und Leitungen freilegen. Geht schnell und sauber.",
            },
            {
                id: "leitung-verlegen",
                title: "Leitung verlegen",
                shortDescription:
                    "Leerrohre und Leitungen in vorbereitete Kanäle einziehen. Trassenfertig übergeben – der Elektriker schließt direkt an.",
            },
            {
                id: "trassenbau",
                title: "Trassenbau",
                shortDescription:
                    "Komplette Elektrotrassen. Von der Planung bis zur fertig gefrästen und gereinigten Trasse – fürs ganze Objekt.",
            },
        ],
    },

    /* ─────────────────────────────────────────────────────────
       2. KERNBOHRUNG
    ───────────────────────────────────────────────────────── */
    {
        id: "kernbohrung",
        title: "Kernbohrung",
        subTitle: "Erschütterungsfreie Bohrungen & Wandsägen",
        description:
            "Runde Löcher für Leitungen, Lüftung, Sanitär. Diamantbohrer bis 1000 mm – erschütterungsfrei, kein Rissrisiko, auch im Altbau.",
        icon: "/icons/kernbohrung.svg",
        subServices: [
            {
                id: "kernbohrung-200mm",
                title: "Kernbohrung",
                shortDescription:
                    "Bis 1000 mm durch Stahlbeton, Mauerwerk und Naturstein. Nass oder trocken – sauber und maßgenau.",
            },
            {
                id: "waende-saegen",
                title: "Wände sägen",
                shortDescription:
                    "Wände aufsägen für Türen, Lüftung, Rohre. Gerader Schnitt, saubere Kante – klappt auch in Stahlbeton.",
            },
        ],
    },

    /* ─────────────────────────────────────────────────────────
       3. ABBRUCHARBEITEN  (NUR Kleinformat)
    ───────────────────────────────────────────────────────── */
    {
        id: "abbrucharbeiten",
        title: "Abbrucharbeiten",
        subTitle: "Kontrollierter Rückbau im Kleinformat",
        description:
            "Mal eine Wand rausnehmen, Fliesen runter oder Estrich ab – das machen wir mit.",
        icon: "/icons/abbruch.svg",
        subServices: [
            {
                id: "waende-abreissen",
                title: "Wände abreißen",
                shortDescription:
                    "Nichttragende Wände im Innenbereich rausnehmen. Sauber rausgetrennt, angrenzende Bauteile bleiben heil.",
            },
            {
                id: "fliesen-abstemmen",
                title: "Fliesen abstemmen",
                shortDescription:
                    "Alte Fliesen runter in Bad, Küche und Flur. Wand und Boden – fertig für Neufliesen oder Putz.",
            },
            {
                id: "estrich-abklopfen",
                title: "Estrich abklopfen",
                shortDescription:
                    "Alten Estrich auf Einzelflächen rausholen. Für neuen Bodenaufbau oder nachträgliche Leitungen.",
            },
        ],
    },
];
