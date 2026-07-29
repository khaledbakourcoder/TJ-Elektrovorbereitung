import { IService } from "@/Types/Service.type";

export const MainSERVICES: IService[] = [
    {
        id: "schlitzen",
        title: "Schlitzen",
        subTitle: "Wand- und Bodenschlitze für die Elektroinstallation",
        shortDescription: "Doppelte Nut-Reihen fräsen. Sauber, staubarm und maßgenau.",
        description: "Schlitze in Mauerwerk, Ziegel und Beton. Mit der Mauernutfräse und direktem Sauger – sauber und staubarm. Die beste Grundlage für den Elektriker.",
        icon: "/icons/schlitzen.svg",
        mainImage: {
            url: "/images/services/wand-schlitzen-mauerwerk.svg",
            alt: "Handwerker beim Schlitzen einer Wand für Kabelverlegungen",
            title: "Wand-Schlitzarbeiten im Mauerwerk",
            caption: "Kabelkanäle fräsen im Rohbau",
            width: 1200,
            height: 800,
            format: "svg"
        },
        sections: [
            {
                title: "Einsatzbereiche",
                description: "Neubau, Altbau, nachträgliche Steckdosen und Schalter."
            },
            {
                title: "Staubarmes Verfahren",
                description: "Die Fräse hängt direkt am Industriesauger. Kaum Staub – sauberer Arbeitsbereich."
            },
            {
                title: "Vorbereitete Übergabe",
                description: "Kanäle werden gereinigt übergeben. Der Elektriker kann direkt loslegen."
            }
        ],
        referenceImages: [
            {
                url: "/images/references/schlitzen-detail-1.svg",
                alt: "Detailansicht eines ausgefrästen Leitungsschlitzes",
                width: 800,
                height: 600,
                format: "svg"
            }
        ]
    },
    {
        id: "freasen",
        title: "Fräsen",
        subTitle: "Flächiges Abfräsen auf Beton, Estrich und Putz",
        shortDescription: "Wand- und Bodenkanäle vorbereiten. Für große Flächen und breite Bündel.",
        description: "Da wo tiefere Schichten weg müssen oder breite Kanäle für Rohre und Kabelbündel ran kommen. Genau das richtige für Untergrundvorbereitungen.",
        icon: "/icons/fraesen.svg",
        mainImage: {
            url: "/images/services/beton-fraesen-boden.svg",
            alt: "Fräsarbeiten auf Estrich und Betonboden",
            title: "Beton- und Estrichfräsen",
            caption: "Vorbereitung von Bodenkanälen",
            width: 1200,
            height: 800,
            format: "svg"
        },
        sections: [
            {
                title: "Untergründe",
                description: "Beton, Estrich, Putz, harter Naturstein."
            },
            {
                title: "Flächenbearbeitung",
                description: "Unebenheiten abtragen, alte Beschichtungen entfernen – sauber und präzise."
            }
        ],
        referenceImages: []
    },
    {
        id: "stemmarbeiten",
        title: "Stemmarbeiten",
        subTitle: "Stege ausstemmen, Alt-Installationen raus, Durchbrüche",
        shortDescription: "Kanäle freistemmen, Aussparungen machen, alte Rohre raus.",
        description: "Nach dem Schlitzen den Mittelsteg rausstemmen. Alte Dosen raus, Wanddurchbrüche, Aussparungen – schnell und sauber erledigt.",
        icon: "/icons/stemmen.svg",
        mainImage: {
            url: "/images/services/stemmarbeiten-mauerwerk.svg",
            alt: "Ausstemmen von Leitungskanälen in einer Ziegelwand",
            title: "Stemmarbeiten im Mauerwerk",
            caption: "Mittelstege entfernen und Aussparungen machen",
            width: 1200,
            height: 800,
            format: "svg"
        },
        sections: [
            {
                title: "Materialschonend & Präzise",
                description: "Richtiger Meißel für jede Situation. Das Mauerwerk drumherum bleibt heil."
            }
        ],
        referenceImages: []
    },
    {
        id: "kernbohrung",
        title: "Kernbohrung",
        subTitle: "Runde Löcher für Leitungen und Rohre",
        shortDescription: "Diamantbohrungen durch Stahlbeton, Mauerwerk und Naturstein.",
        description: "Bohrungen für Elektrotrassen, Lüftungsrohre, Sanitär. Diamantbohrer, vibrationsfrei – kein Risiko für Risse.",
        icon: "/icons/kernbohrung.svg",
        mainImage: {
            url: "/images/services/kernbohrung-stahlbeton.svg",
            alt: "Diamant-Kernbohrung in eine Stahlbetonwand",
            title: "Kernbohrung für Leitungsdurchführung",
            caption: "Vibrationsfreie Wand- und Deckenbohrungen",
            width: 1200,
            height: 800,
            format: "svg"
        },
        sections: [
            {
                title: "Verschleißarm & Sicher",
                description: "Keine Erschütterungen. Auch bei empfindlicher Bausubstanz und im Altbau kein Problem."
            },
            {
                title: "Nass- und Trockenbohrung",
                description: "Trocken mit Absaugung oder wassergekühlt – kommt aufs Material an."
            }
        ],
        referenceImages: [
            {
                url: "/images/references/kernbohrung-ergebnis.svg",
                alt: "Saubere Kernbohrung durch Betonwand",
                width: 800,
                height: 600,
                format: "svg"
            }
        ]
    }
];
