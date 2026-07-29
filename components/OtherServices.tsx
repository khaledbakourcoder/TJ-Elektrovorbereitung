import Link from "next/link";
import { IService } from "@/Types/Service.type";

interface OtherServicesProps {
    services: IService[];
}

export default function OtherServices({ services }: OtherServicesProps) {
    if (!services || services.length === 0) return null;

    return (
        <section className="pt-10 border-t border-gray-200 space-y-4">
            <div className="flex items-center gap-3 text-logo-blue/30">
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" stroke="currentColor" strokeWidth={1}>
                    <path d="M7.5 0.5L0.5 5L7.5 9.5" />
                </svg>
                <span className="text-[10px] font-mono tracking-widest uppercase">Weitere Angebote</span>
                <div className="flex-1 h-px bg-current" />
            </div>

            <div className="flex flex-wrap gap-2">
                {services.map((item) => (
                    <Link
                        key={item.id}
                        href={`/${item.id}`}
                        className="px-4 py-2.5 bg-white hover:bg-logo-blue text-gray-700 hover:text-white text-xs font-bold border border-gray-200 hover:border-logo-blue transition-all"
                    >
                        {item.title} →
                    </Link>
                ))}
            </div>
        </section>
    );
}
