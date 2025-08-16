import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Trustless Tech — Rust and Substrate Development Studio",
    description: "We help you build the change you want to see in the world.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-white text-gray-900">{children}</body>
        </html>
    );
}
