"use client";
import { useState } from "react";
import { motion } from "framer-motion";
// import LogoMark from "@/components/LogoMark";

function Nav() {
    return (
        <nav className="flex items-center justify-between py-5 max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3">
                {/*<LogoMark className="w-9 h-9" />*/}
                <span className="font-semibold text-xl tracking-tight">Trustless Tech</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm">
                <a href="#features" className="hover:opacity-80">Features</a>
                <a href="#solutions" className="hover:opacity-80">Solutions</a>
                <a href="#open-source" className="hover:opacity-80">Open Source</a>
                <a href="#contact" className="hover:opacity-80">Contact</a>
                <a href="#cta" className="rounded-full px-4 py-2 bg-black text-white hover:bg-gray-800 transition">Get Started</a>
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
                        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-semibold leading-tight">
                            Ship <span className="underline decoration-black/15">trustless</span> systems.
                            <br /> Faster. Safer. Audit-ready.
                        </motion.h1>
                        <p className="mt-5 text-gray-600 md:text-lg max-w-prose">
                            We design, audit, and implement Substrate runtimes, EVM layers, and cross-chain protocols.
                            From ideation to mainnet, Trustless Tech is your senior engineering partner for Polkadot, Ethereum, and beyond.
                        </p>
                        <div id="cta" className="mt-8 flex flex-col sm:flex-row gap-3">
                            <a href="mailto:info@trustless-tech.com" className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-black text-white hover:bg-gray-800 transition shadow-md">Book a discovery call</a>
                            <a href="#open-source" className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-gray-200 hover:border-gray-300">Explore our repos</a>
                        </div>
                        <div className="mt-8 flex items-center gap-6 text-xs text-gray-500">
                            <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />Production-grade runtimes</div>
                            <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-indigo-500" />Security-first delivery</div>
                            <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-fuchsia-500" />Open-source DNA</div>
                        </div>
                    </div>

                    <div className="relative md:pl-8">
                        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-3xl p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.2)]">
                            <div className="flex items-center gap-3">
                                {/*<LogoMark className="w-12 h-12" />*/}
                                <div>
                                    <h3 className="font-semibold text-lg">Unified Asset & XCM Engineering</h3>
                                    <p className="text-sm text-gray-500">Bridges · Assets · XCM v4 · Governance</p>
                                </div>
                            </div>
                            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                                {["Runtime migrations","Weight/fees tuning","Foreign & Local assets","Multi-currency escrow","EVM (Frontier) integration","Benchmarking & fuzzing"].map((t) => (
                                    <div key={t} className="rounded-xl border border-gray-200 p-3 bg-white hover:bg-gray-50">{t}</div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Logos */}
                <section className="mt-16 md:mt-24">
                    <div className="text-xs uppercase tracking-wider text-gray-500 mb-4">Trusted by builders from</div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-70">
                        {["Polkadot","Hydration","OriginTrail","Parity","Asset Hub","EVM"].map((n) => (
                            <div key={n} className="border border-gray-100 rounded-xl p-3 text-center text-sm bg-white">{n}</div>
                        ))}
                    </div>
                </section>

                {/* Features */}
                <section id="features" className="mt-20 md:mt-28">
                    <h2 className="text-2xl md:text-3xl font-semibold">What we ship</h2>
                    <div className="mt-8 grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Runtime & Pallets", desc: "Custom pallets, governance tracks, vesting, and safe migrations with exhaustive tests." },
                            { title: "XCM & Assets", desc: "Unified Asset Ids, ForeignAssets, routing, and secure cross-consensus bridging." },
                            { title: "Performance & Security", desc: "Reference-machine benchmarks, fuzz harnesses, and fee curves tuned for production." }
                        ].map((f) => (
                            <div key={f.title} className="rounded-2xl border border-gray-200 p-6 bg-white hover:shadow-md transition">
                                <div className="flex items-center gap-3"><span className="inline-flex w-2.5 h-2.5 rounded-full bg-black" /><h3 className="font-semibold">{f.title}</h3></div>
                                <p className="mt-3 text-gray-600">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Solutions */}
                <section id="solutions" className="mt-20 md:mt-28">
                    <div className="rounded-3xl border border-gray-200 p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white">
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: "Advisory Sprint (2 weeks)", bullets: ["Architecture review","Security posture & threat model","Delivery roadmap & staffing"] },
                                { title: "Implementation (1–3 months)", bullets: ["Pallets & runtime upgrades","Bridging + asset routing","Observability & ops"] },
                                { title: "Hardening (ongoing)", bullets: ["Fuzzing + benchmarks","Fee/weight calibration","Incident response playbooks"] }
                            ].map((c) => (
                                <div key={c.title} className="rounded-2xl border border-gray-200 p-6 bg-white">
                                    <div className="font-semibold">{c.title}</div>
                                    <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
                                        {c.bullets.map((b) => (<li key={b}>{b}</li>))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <a href="mailto:info@trustless-tech.com?subject=Discovery%20Call" className="rounded-xl px-5 py-3 bg-black text-white hover:bg-gray-800 transition">Start a discovery call</a>
                            <a href="#contact" className="rounded-xl px-5 py-3 border border-gray-200 hover:border-gray-300">Request a proposal</a>
                        </div>
                    </div>
                </section>

                {/* Open Source */}
                <section id="open-source" className="mt-20 md:mt-28">
                    <h2 className="text-2xl md:text-3xl font-semibold">Open-source & research</h2>
                    <p className="mt-3 text-gray-600 max-w-prose">We publish specs, reference pallets, and fuzz harnesses you can adopt today. Follow our work and contribute.</p>
                    <div className="mt-6 grid md:grid-cols-2 gap-6">
                        {[
                            { title: "GOAT – Generalized Ownership Assignment Transfer", tag: "Pallet spec & reference implementation" },
                            { title: "Unified Asset Id (Native/Local/Foreign)", tag: "Traits + XCM routing adapters" }
                        ].map((p, i) => (
                            <div key={i} className="rounded-2xl border border-gray-200 p-6 bg-white">
                                <div className="text-sm text-gray-500">{p.tag}</div>
                                <div className="font-semibold mt-1">{p.title}</div>
                                <a href="#" className="inline-block mt-4 text-sm underline underline-offset-4 decoration-black/20 hover:decoration-black">View on GitHub</a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Newsletter */}
                <section className="mt-20 md:mt-28 rounded-3xl border border-gray-200 p-6 md:p-8 bg-white">
                    <div className="grid md:grid-cols-3 gap-6 items-center">
                        <div className="md:col-span-2">
                            <h3 className="text-xl font-semibold">Join the Trustless Brief</h3>
                            <p className="text-gray-600 mt-1">A lightweight monthly note on runtime security, bridging patterns, and R&D drops.</p>
                        </div>
                        <form onSubmit={(e) => e.preventDefault()} className="flex gap-3">
                            <input type="email" required placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10" />
                            <button className="rounded-xl px-5 py-3 bg-black text-white hover:bg-gray-800 transition">Subscribe</button>
                        </form>
                    </div>
                </section>

                {/* Footer */}
                <footer id="contact" className="mt-16 md:mt-24 py-10 text-sm text-gray-600">
                    <div className="flex flex-col md:flex-row justify-between gap-6 border-t border-gray-200 pt-6">
                        <div className="flex items-center gap-3">
                            {/*<LogoMark className="w-7 h-7" />*/}
                            <div>
                                <div className="font-medium">Trustless Tech</div>
                                <div className="text-gray-500">Sofia · Ljubljana · Remote</div>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div><span className="text-gray-500">Email:</span> <a className="underline" href="mailto:info@trustless-tech.com">info@trustless-tech.com</a></div>
                            <div><span className="text-gray-500">ENS:</span> trustless-tech.eth (optional)</div>
                            <div>© {new Date().getFullYear()} Trustless Tech. All rights reserved.</div>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    );
}
