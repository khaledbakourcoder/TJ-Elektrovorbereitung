import { IService } from "@/Types/Service.type";

const placeholderImage: IService["mainImage"] = {
    url: "/img.png",
    alt: "Platzhalter",
    width: 800,
    height: 600,
    format: "png",
};

export const ExtraSERVICES: IService[] = [
    {
        id: "serv-1",
        title: "Schlitzen",
        subTitle: "Präzise Schlitze für Elektroinstallationen",
        shortDescription: "Präzises Einfräsen von doppelten Nut-Kanalreihen für spätere Kabelverlegungen.",
        description: "Schlitze in Mauerwerk, Ziegel und Beton. Mit der Mauernutfräse und direktem Sauger – sauber und staubarm. Die beste Grundlage für den Elektriker.",
        icon: "",
        mainImage: placeholderImage,
        sections: [],
        referenceImages: [],
    },
    {
        id: "serv-2",
        title: "Fräsen",
        subTitle: "Flächiges Abfräsen von Beton und Estrich",
        shortDescription: "Flächiges Abfräsen oder Vorbereiten von Wand- und Bodenkanälen.",
        description: "Da wo tiefere Schichten weg müssen oder breite Kanäle für Rohre und Kabelbündel ran kommen. Genau das richtige für Untergrundvorbereitungen.",
        icon: "",
        mainImage: placeholderImage,
        sections: [],
        referenceImages: [],
    },
    {
        id: "serv-3",
        title: "Stemmarbeiten",
        subTitle: "Ausstemmen von Stegen und Altinstallationen",
        shortDescription: "Ausstemmen von Stegen, Alt-Installationen und Stemmkanälen im Mauerwerk.",
        description: "Nach dem Schlitzen den Mittelsteg rausstemmen. Alte Dosen raus, Wanddurchbrüche, Aussparungen – schnell und sauber erledigt.",
        icon: "",
        mainImage: placeholderImage,
        sections: [],
        referenceImages: [],
    },
    {
        id: "serv-4",
        title: "Kernbohrung",
        subTitle: "Erschütterungsfreie Rundbohrungen",
        shortDescription: "Erschütterungsfreie Rundbohrungen für Kabel- und Rohrdurchführungen.",
        description: "Bohrungen für Elektrotrassen, Lüftungsrohre, Sanitär. Diamantbohrer, vibrationsfrei – kein Risiko für Risse.",
        icon: "",
        mainImage: placeholderImage,
        sections: [],
        referenceImages: [],
    },
];