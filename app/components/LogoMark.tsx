export default function LogoMark({ className = "w-9 h-9" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" aria-label="Trustless Tech logo">
            <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0a0a0a" />
                    <stop offset="100%" stopColor="#1f2937" />
                </linearGradient>
            </defs>
            <path d="M128 12 24 72v112l104 60 104-60V72L128 12z" fill="url(#g)" />
            {/* T from both sides */}
            <path d="M86 92l42-24 42 24v20l-26-15v94l-16 9-16-9v-94L86 112V92z" fill="#fff" opacity="0.96" />
        </svg>
    );
}
