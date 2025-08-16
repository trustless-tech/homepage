"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TrustedBy from "@/app/components/TrustedBy";

function Nav() {
    return (
        <nav className="flex items-center justify-between py-5 max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-1">
                <Image src="/logo-icon.png" alt="trustless tech" width={36} height={36} className="w-9 h-9" />
                <span className="font-semibold text-xl tracking-tight">trustless tech</span>
            </div>
        </nav>
    );
}

export default function Page() {
    const [email, setEmail] = useState("");
    return (
        <main>
            <Nav />

            <div className="max-w-6xl mx-auto px-6">
                {/* Hero */}
                <section className="grid md:grid-cols-2 gap-12 items-center pt-10 md:pt-20">
                    <div>
                        <motion.h1 initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}}
                                   transition={{duration: 0.6}}
                                   className="text-4xl md:text-6xl font-semibold leading-none">
                            We ship <span className="underline decoration-black/15">trustless</span> systems.
                            <br/> <span className="text-lg md:text-2xl text-gray-700">Helping you build change you want to see.</span>
                        </motion.h1>
                        <p className="mt-5 text-gray-600 md:text-lg max-w-prose">
                            Blockchain design, implementation, and hardening.
                        </p>
                        <div id="cta" className="mt-8 flex flex-col sm:flex-row gap-3">
                            <a href="mailto:info@trustless-tech.com"
                               className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-black text-white hover:bg-gray-800 transition shadow-md">Get in Touch</a>
                        </div>
                        <div className="mt-8 flex items-center gap-6 text-xs text-gray-500">
                            <div className="flex items-center gap-2"><span
                                className="inline-block w-2 h-2 rounded-full bg-emerald-500"/>Production-grade runtimes
                            </div>
                            <div className="flex items-center gap-2"><span
                                className="inline-block w-2 h-2 rounded-full bg-indigo-500"/>Security-first delivery
                            </div>
                            <div className="flex items-center gap-2"><span
                                className="inline-block w-2 h-2 rounded-full bg-fuchsia-500"/>Open-source DNA
                            </div>
                        </div>
                    </div>

                    <div className="relative md:pl-8">
                        <motion.div initial={{opacity: 0, scale: 0.98}} animate={{opacity: 1, scale: 1}}
                                    transition={{duration: 0.6, delay: 0.1}}
                                    className="rounded-3xl p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.2)]">
                        <div className="flex items-center gap-3">
                                <Image src="/logo-icon.png" alt="trustless tech" width={48} height={48} className="w-12 h-12" />
                                <div>
                                    <h3 className="font-semibold text-lg">Blockchain Development & Security</h3>
                                    <p className="text-sm text-gray-500">Rust · Substrate · Polkadot</p>
                                </div>
                            </div>
                            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                                {
                                    [
                                        "Rust Runtimes",
                                        "Substrate Pallets",
                                        "XCM",
                                        "EVM (Frontier) integration",
                                        "Benchmarking & Weights",
                                        "Fuzzing"
                                    ].map((t) => (
                                        <div key={t} className="rounded-xl border border-gray-200 p-3 bg-white hover:bg-gray-50">{t}</div>
                                    ))
                                }
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Logos */}
                <TrustedBy />

                {/* Footer */}
                <footer id="contact" className="mt-16 md:mt-12 py-10 text-sm text-gray-600">
                    <div className="flex flex-col md:flex-row justify-between gap-6 border-t border-gray-200 pt-6">
                        <div className="flex items-center gap-3">
                            <Image src="/logo-icon.png" alt="trustless tech" width={28} height={28} className="w-7 h-7" />
                            <div>
                                <div className="font-medium">trustless tech</div>
                                <div className="text-gray-500">Sofia · Ljubljana · World</div>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div><span className="text-gray-500">Email:</span> <a className="underline" href="mailto:info@trustless-tech.com">info@trustless-tech.com</a></div>
                            <div>© {new Date().getFullYear()} Trustless Tech. All rights reserved.</div>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    );
}
