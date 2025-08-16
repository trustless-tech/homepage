import { Copy } from "lucide-react";
import { useState } from "react";

export default function ContactBox() {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        await navigator.clipboard.writeText("info@trustless-tech.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div id="cta" className="mt-8">
            <h2 className="font-semibold text-lg mb-3">Get in touch</h2>
            <div
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 shadow-sm">
                <span className="font-mono text-gray-800">info@trustless-tech.com</span>
                <button
                    onClick={copyEmail}
                    className="ml-3 p-2 rounded-lg hover:bg-gray-200 transition"
                    title="Copy email"
                >
                    <Copy className="w-5 h-5 text-gray-600"/>
                </button>
            </div>
            {/* Reserve space so layout doesn't jump */}
            <div className="h-5 mt-2 text-sm">
                {copied && <span className="text-emerald-600">Copied to clipboard!</span>}
            </div>
        </div>
    );
}
