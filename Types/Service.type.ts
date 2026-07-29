export interface IImage {
    url: string;
    alt: string;
    title?: string;
    caption?: string;

    width: number;
    height: number;
    format: "webp" | "avif" | "jpg" | "png" | "svg";

    srcSet?: string;
    placeholderUrl?: string;
    ogTitle?: string;
}

export interface ISection {
    title: string;
    description: string;
}

export interface IService {
    id: string;
    title: string;
    subTitle: string;
    shortDescription: string;
    description: string;

    mainImage: IImage;

    icon: string;

    sections: ISection[];
    referenceImages: IImage[];
}

/** Eine einzelne Unterleistung innerhalb einer Leistungsgruppe */
export interface ISubService {
    id: string;
    title: string;
    shortDescription: string;
}

/**
 * Leistungsgruppe – fasst mehrere verwandte Einzelleistungen zusammen.
 * Die drei Gruppen sind:
 *  - elektrovorbereitung
 *  - kernbohrung
 *  - abbrucharbeiten
 */
export interface IServiceGroup {
    id: string;
    title: string;
    subTitle: string;
    description: string;
    /** Wichtiger Hinweis – z.B. Umfangsbeschränkung bei Abbrucharbeiten */
    hinweis?: string;
    icon: string;
    subServices: ISubService[];
}

export type ServiceCard = Pick<IService, "id" | "title" | "mainImage" | "shortDescription">;