import Link from "next/link";
import { IService } from "@/Types/Service.type";

interface OtherServicesProps {
    services: IService[];
}

export default function OtherServices({ services }: OtherServicesProps) {
    if (!services || services.length === 0) return null;

    return (
        <section className="pt-10 border-t border-gray-100 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Weitere Angebote
            </h3>

            <div className="flex flex-wrap gap-2">
                {services.map((item) => (
                    <Link
                        key={item.id}
                        href={`/${item.id}`}
                        className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-logo-blue text-xs font-bold rounded-lg border border-gray-200/80 transition-all"
                    >
                        {item.title} →
                    </Link>
                ))}
            </div>
        </section>
    );
}
