import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Trustless Tech — Ship trustless systems",
    description: "Substrate runtimes, EVM layers, XCM & assets, benchmarks and fuzzing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-white text-gray-900">{children}</body>
        </html>
    );
}
