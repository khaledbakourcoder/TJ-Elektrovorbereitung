"use client";

import { useState } from "react";
import ImageWithFallback from "@/components/ImageWithFallback";

interface ImageItem {
    url: string;
    alt: string;
}

interface ImageGalleryProps {
    images: ImageItem[];
    className?: string;
}

export default function ImageGallery({ images, className = "" }: ImageGalleryProps) {
    const [current, setCurrent] = useState(0);

    if (!images || images.length === 0) return null;

    const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

    return (
        <div className={`relative w-full h-full select-none ${className}`}>
            <ImageWithFallback
                src={images[current].url}
                alt={images[current].alt}
                fill
                className="object-cover transition-opacity duration-300"
            />

            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-sm transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                        aria-label="Vorheriges Bild"
                    >
                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-sm transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                        aria-label="Nächstes Bild"
                    >
                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    i === current
                                        ? "bg-white w-5"
                                        : "bg-white/50 hover:bg-white/80"
                                }`}
                                aria-label={`Bild ${i + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
