import { MainSERVICES } from "@/Data/MainService";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import ServiceDescription from "@/components/ServiceDescription";
import ServiceSections from "@/components/ServiceSections";
import ImageGallery from "@/components/ImageGallery";
import QuoteRequestBox from "@/components/QuoteRequestBox";
import OtherServices from "@/components/OtherServices";
import ProcessTimeline from "@/components/ProcessTimeline";

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
        <div className="min-h-screen text-gray-900">
            {/* Hero mini */}
            <section className="relative bg-logo-blue text-white overflow-hidden">
                <div className="absolute inset-0 bg-blueprint" />
                <div className="absolute inset-0 bg-noise opacity-25 mix-blend-overlay" />
                <div className="yellow-accent absolute bottom-0 left-0 right-0" />

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <p className="text-[10px] font-mono text-logo-yellow/50 tracking-widest uppercase mb-3">Leistungsdetail</p>
                    <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.05]">
                        {service.title}
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl">
                        {service.subTitle}
                    </p>
                </div>
            </section>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    <div className="lg:col-span-7 space-y-12">
                        <ServiceDescription description={service.description} />
                        <ServiceSections sections={service.sections} />
                        <ProcessTimeline />
                    </div>

                    <div className="lg:col-span-5 space-y-6">
                        <div className="relative h-[280px] sm:h-[340px] w-full border border-gray-200 group overflow-hidden">
                            <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay pointer-events-none z-10" />
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
