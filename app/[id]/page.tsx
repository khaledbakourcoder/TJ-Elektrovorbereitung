import { MainSERVICES } from "@/Data/MainService";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import ServiceDescription from "@/components/ServiceDescription";
import ServiceSections from "@/components/ServiceSections";
import ImageGallery from "@/components/ImageGallery";
import QuoteRequestBox from "@/components/QuoteRequestBox";
import OtherServices from "@/components/OtherServices";

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const service = MainSERVICES.find((s) => s.id === id);

    if (!service) return { title: "Service nicht gefunden" };

    return {
        title: `${service.title} | ${service.subTitle}`,
        description: service.shortDescription,
        openGraph: {
            title: service.title,
            description: service.shortDescription,
            images: [service.mainImage.url],
        },
    };
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { id } = await params;
    const service = MainSERVICES.find((s) => s.id === id);

    if (!service) {
        notFound();
    }

    const otherServices = MainSERVICES.filter((s) => s.id !== id);

    return (
        <div className="min-h-screen bg-white text-gray-900">
            <main className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-16">

                <h1 className="text-3xl sm:text-5xl font-black text-logo-blue tracking-tight">
                    {service.title}
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    <div className="lg:col-span-7 space-y-12">
                        <ServiceDescription description={service.description} />
                        <ServiceSections sections={service.sections} />
                    </div>

                    <div className="lg:col-span-5 space-y-6">
                        <div className="relative h-[280px] sm:h-[340px] w-full rounded-xl overflow-hidden border border-gray-200 shadow-xs group">
                            <ImageGallery
                                images={[
                                    { url: service.mainImage.url, alt: service.mainImage.alt },
                                    ...service.referenceImages.map((img) => ({
                                        url: img.url,
                                        alt: img.alt,
                                    })),
                                ]}
                            />
                        </div>
                        <QuoteRequestBox serviceTitle={service.title} />
                    </div>

                </div>

                <OtherServices services={otherServices} />

            </main>
        </div>
    );
}

export async function generateStaticParams() {
    return MainSERVICES.map((service) => ({
        id: service.id,
    }));
}
