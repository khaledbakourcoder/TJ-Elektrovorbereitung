import type { MetadataRoute } from "next";
import { LEISTUNGSGRUPPEN } from "@/Data/Leistungsgruppen";

export const dynamic = "force-static";

const BASE_URL = "https://tj-elektrovorbereitung.de";

export default function sitemap(): MetadataRoute.Sitemap {
    const leistungsSeiten: MetadataRoute.Sitemap = LEISTUNGSGRUPPEN.map(
        (gruppe) => ({
            url: `${BASE_URL}/leistungen/${gruppe.id}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        })
    );

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/kontakt`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/impressum`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.2,
        },
        {
            url: `${BASE_URL}/datenschutz`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.2,
        },
        ...leistungsSeiten,
    ];
}
