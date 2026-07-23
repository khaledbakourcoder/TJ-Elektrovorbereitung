import { IService } from "@/Types/Service.type";

export const MainSERVICES: IService[] = [
    {
        id: "schlitzen",
        title: "Schlitzen",
        subTitle: "Präzise Wand- und Bodenschlitze für Elektroinstallationen",
        shortDescription: "Sauberes Einfräsen von doppelten Nut-Kanalreihen für die fachgerechte Kabelverlegung.",
        description: "Professionelle Schlitzarbeiten im Mauerwerk, Ziegel und Beton. Mit modernsten Mauernutfräsen schaffen wir die perfekte Grundlage für Elektriker und Sanierungsbetriebe – staubarm und maßgenau.",
        icon: "/icons/schlitzen.svg",
        mainImage: {
            url: "/images/services/wand-schlitzen-mauerwerk.webp",
            alt: "Handwerker beim Schlitzen einer Wand für Kabelverlegungen",
            title: "Wand-Schlitzarbeiten im Mauerwerk",
            caption: "Präzise Kabelkanäle fräsen im Rohbau",
            width: 1200,
            height: 800,
            format: "webp"
        },
        sections: [
            {
                title: "Einsatzbereiche",
                description: "Ideal für Neubauten, Altbausanierungen und nachträgliche Erweiterungen von Steckdosen oder Lichtschaltern."
            },
            {
                title: "Staubarmes Verfahren",
                description: "Durch den Einsatz direkter Industriestaubsauger-Kopplung bleibt der Arbeitsbereich größtenteils staubfrei."
            }
        ],
        referenceImages: [
            {
                url: "/images/references/schlitzen-detail-1.webp",
                alt: "Detailansicht eines ausgefrästen Leitungsschlitzes",
                width: 800,
                height: 600,
                format: "webp"
            }
        ]
    },
    {
        id: "fräsen",
        title: "Fräsen",
        subTitle: "Flächiges Abfräsen von Beton, Estrich und Putzschichten",
        shortDescription: "Effizientes Vorbereiten und Anpassen von Wand- und Bodenkanälen auf großen Flächen.",
        description: "Unsere Fräsarbeiten kommen dort zum Einsatz, wo tiefere Oberflächen abgetragen oder breitere Kanäle für Rohre und Leitungsbündel vorbereitet werden müssen. Ideal für Untergrundvorbereitungen.",
        icon: "/icons/fraesen.svg",
        mainImage: {
            url: "/images/services/beton-fraesen-boden.webp",
            alt: "Fräsarbeiten auf Estrich und Betonboden",
            title: "Beton- und Estrichfräsen",
            caption: "Vorbereitung von Bodenkanälen",
            width: 1200,
            height: 800,
            format: "webp"
        },
        sections: [
            {
                title: "Untergründe",
                description: "Geeignet für Beton, Estrich, Putz und harten Naturstein."
            },
            {
                title: "Flächenbearbeitung",
                description: "Ermöglicht das präzise Abtragen von Unebenheiten oder alten Beschichtungen."
            }
        ],
        referenceImages: []
    },
    {
        id: "stemmarbeiten",
        title: "Stemmarbeiten",
        subTitle: "Ausstemmen von Stegen, Alt-Installationen & Mauerdurchbrüchen",
        shortDescription: "Kraftvolles Freistemmen von Kanälen, Aussparungen und alten Rohrsystemen.",
        description: "Nach dem Schlitzfräsen wird der Mittelsteg sauber herausgestemmt. Auch für Abbrucharbeiten von alten Verlegedosen, Wanddurchbrüchen oder Maueraussparungen bieten wir schnelle Stemmleistungen.",
        icon: "/icons/stemmen.svg",
        mainImage: {
            url: "/images/services/stemmarbeiten-mauerwerk.webp",
            alt: "Ausstemmen von Leitungskanälen in einer Ziegelwand",
            title: "Stemmarbeiten im Mauerwerk",
            caption: "Entfernen von Mittelstegen und Aussparungen",
            width: 1200,
            height: 800,
            format: "webp"
        },
        sections: [
            {
                title: "Materialschonend & Präzise",
                description: "Wir arbeiten gezielt mit passenden Abbruchmeißeln, um das umliegende Mauerwerk nicht unnötig zu schädigen."
            }
        ],
        referenceImages: []
    },
    {
        id: "kernbohrung",
        title: "Kernbohrung",
        subTitle: "Erschütterungsfreie Rundbohrungen für Leitungen und Rohre",
        shortDescription: "Exakte Diamant-Kernbohrungen durch Stahlbeton, Mauerwerk und Naturstein.",
        description: "Punktgenaue Bohrungen für Elektrotrassen, Lüftungsrohre oder Sanitäranschlüsse. Durch den vibrationsfreien Diamantbohrkopf bleibt die Bausubstanz völlig rissefrei.",
        icon: "/icons/kernbohrung.svg",
        mainImage: {
            url: "/images/services/kernbohrung-stahlbeton.webp",
            alt: "Diamant-Kernbohrung in eine Stahlbetonwand",
            title: "Kernbohrung für Leitungsdurchführung",
            caption: "Vibrationsfreie Wand- und Deckenbohrungen",
            width: 1200,
            height: 800,
            format: "webp"
        },
        sections: [
            {
                title: "Verschleißarm & Sicher",
                description: "Funktioniert erschütterungsfrei – ideal auch bei empfindlicher Bausubstanz im Altbau."
            },
            {
                title: "Nass- und Trockenbohrung",
                description: "Je nach Material führen wir Bohrungen trocken mit Absaugung oder wassergekühlt aus."
            }
        ],
        referenceImages: [
            {
                url: "/images/references/kernbohrung-ergebnis.webp",
                alt: "Saubere Kernbohrung durch Betonwand",
                width: 800,
                height: 600,
                format: "webp"
            }
        ]
    }
];