"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Drop brand SVGs into /public/logos with these names.
// You can swap colors to match official brand guides.
const LOGOS = [
    { name: "Polkadot", src: "/img/logos/polkadot.svg", color: "#E6007A", href: "https://polkadot.network" },
    { name: "Hydration", src: "/img/logos/hydration.svg", color: "#DDAFF1", href: "https://hydration.net" },
    { name: "OriginTrail", src: "/img/logos/origin-trail.svg", color: "#3D5AFE", href: "https://origintrail.io" },
    { name: "Neuroweb", src: "/img/logos/neuroweb.svg", color: "#000000", href: "https://neuroweb.ai/" },
] as const;

type Logo = (typeof LOGOS)[number];

function Card({ item }: { item: Logo }) {
    const colorWithOpacity = (color: string, opacity: number) => 
        color + Math.round(opacity * 255).toString(16).padStart(2, '0');
    
    return (
        <motion.a
            whileHover={{ 
                y: -3, 
                scale: 1.03,
                boxShadow: `0 25px 50px -12px ${colorWithOpacity(item.color, 0.3)}` 
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-xl p-3 backdrop-blur-sm transition-all duration-200 overflow-hidden"
            style={{
                background: `linear-gradient(135deg, ${colorWithOpacity(item.color, 0.05)} 0%, ${colorWithOpacity(item.color, 0.02)} 100%)`,
                border: `1px solid ${colorWithOpacity(item.color, 0.15)}`
            }}
        >
            {/* Animated gradient border on hover */}
            <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: `linear-gradient(135deg, ${colorWithOpacity(item.color, 0.1)} 0%, transparent 50%, ${colorWithOpacity(item.color, 0.1)} 100%)`,
                    backgroundSize: '200% 200%',
                    animation: 'gradient 3s ease infinite'
                }}
            />
            
            {/* Top accent line */}
            <div
                className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: item.color }}
            />
            
            <div className="relative flex h-14 items-center justify-center px-2">
                <Image
                    src={item.src}
                    alt={item.name}
                    width={140}
                    height={48}
                    className="object-contain w-full h-full max-w-[140px] filter transition-all duration-200 group-hover:brightness-110 group-hover:contrast-110"
                />
            </div>
        </motion.a>
    );
}

export default function TrustedBy() {
    return (
        <section className="mt-16 md:mt-24">
            <div className="text-xs uppercase tracking-wider text-gray-500 mb-4">Trusted by visionaries</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {LOGOS.map((item) => (
                    <Card key={item.name} item={item} />
                ))}
            </div>
        </section>
    );
}
