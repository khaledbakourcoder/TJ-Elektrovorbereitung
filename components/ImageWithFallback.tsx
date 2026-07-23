"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

const FALLBACK = "/img.png";

export default function ImageWithFallback(props: ImageProps) {
    const [src, setSrc] = useState(props.src);

    return (
        <Image
            {...props}
            src={src}
            onError={() => setSrc(FALLBACK)}
        />
    );
}
