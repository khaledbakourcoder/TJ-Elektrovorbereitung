import ImageWithFallback from "@/components/ImageWithFallback";
import { IImage } from "@/Types/Service.type";

interface ServiceImageProps {
    image: IImage;
}

export default function ServiceImage({ image }: ServiceImageProps) {
    return (
        <div className="relative h-[280px] sm:h-[340px] w-full rounded-xl overflow-hidden border border-gray-200 shadow-xs">
            <ImageWithFallback
                src={image.url}
                alt={image.alt}
                title={image.title}
                fill
                priority
                className="object-cover"
            />
        </div>
    );
}
