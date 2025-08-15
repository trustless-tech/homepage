"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Drop brand SVGs into /public/logos with these names.
// You can swap colors to match official brand guides.
const LOGOS = [
    { name: "Polkadot", src: "/logos/polkadot.svg", color: "#E6007A", href: "https://polkadot.network" },
    { name: "Hydration", src: "/logos/polkadot.svg", color: "#00E0B8", href: "https://hydration.net" },
    { name: "OriginTrail", src: "/logos/polkadot.svg", color: "#3D5AFE", href: "https://origintrail.io" },
    { name: "Neuroweb", src: "/logos/polkadot.svg", color: "#3D5AFE", href: "https://origintrail.io" },
] as const;

type Logo = (typeof LOGOS)[number];

function Card({ item }: { item: Logo }) {
    return (
        <motion.a
            whileHover={{ y: -3, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.35)" }}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-2xl border bg-white p-4 transition"
            style={{ borderColor: item.color }}
        >
            {/* Color bar */}
            <div
                className="absolute inset-x-0 -top-px h-1 rounded-t-2xl"
                style={{ background: item.color }}
            />
            {/* Soft tint */}
            <div
                aria-hidden
                className="absolute inset-0 rounded-2xl"
                style={{
                    background:
                        `radial-gradient(40% 55% at 20% -10%, ${item.color}15 0%, transparent 60%)`,
                }}
            />
            <div className="relative flex h-14 items-center justify-center">
                <Image
                    src={item.src}
                    alt={item.name}
                    width={130}
                    height={44}
                    className="object-contain"
                />
            </div>
            <div className="relative mt-3 text-center text-sm font-medium" style={{ color: item.color }}>
                {item.name}
            </div>
        </motion.a>
    );
}

export default function TrustedBy() {
    return (
        <section className="mt-16 md:mt-24">
            <div className="text-xs uppercase tracking-wider text-gray-500 mb-4">Trusted by builders from</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {LOGOS.map((item) => (
                    <Card key={item.name} item={item} />
                ))}
            </div>
            <p className="mt-3 text-xs text-gray-500">
                Place partner logos at <code>/public/logos</code> (SVG preferred). Filenames: <code>polkadot.svg</code>,
                <code>hydration.svg</code>, <code>origintrail.svg</code>, <code>parity.svg</code>, <code>assethub.svg</code>, <code>evm.svg</code>.
            </p>
        </section>
    );
}
