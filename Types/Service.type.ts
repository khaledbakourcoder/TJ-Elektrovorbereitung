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

export type ServiceCard = Pick<IService, "id" | "title" | "mainImage" | "shortDescription">;