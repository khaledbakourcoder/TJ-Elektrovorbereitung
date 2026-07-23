import ImageWithFallback from "@/components/ImageWithFallback";
import { IImage } from "@/Types/Service.type";

interface ReferenceGalleryProps {
    images: IImage[];
}

export default function ReferenceGallery({ images }: ReferenceGalleryProps) {
    if (!images || images.length === 0) return null;

    return (
        <section className="space-y-6 pt-10 border-t border-gray-100">
            <h2 className="text-xl font-bold text-logo-blue tracking-tight">
                Referenzen & Einblicke
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {images.map((img, idx) => (
                    <div key={idx} className="relative h-44 rounded-xl overflow-hidden border border-gray-200">
                        <ImageWithFallback
                            src={img.url}
                            alt={img.alt}
                            title={img.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
