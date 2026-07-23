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
        description: "dasdadsasasdaasd",
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
        description: "dasdadsasasdaasd",
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
        description: "dasdadsasasdaasd",
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
        description: "dasdadsasasdaasd",
        icon: "",
        mainImage: placeholderImage,
        sections: [],
        referenceImages: [],
    },
];