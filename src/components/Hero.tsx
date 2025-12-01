import Image from 'next/image';

export default function Hero() {
	return (
		<section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none animate-[pulse-glow_4s_infinite]" />
            
			<div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
                <div className="mb-6">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-blue-300 tracking-wide uppercase backdrop-blur-md">
                        Navigation Reimagined
                    </span>
                </div>

                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4 sm:mb-6">
                    <span className="text-gradient text-glow">LUMINARY</span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-neutral-400 max-w-2xl mb-12 leading-relaxed">
                    The smarter, accessible way to navigate <br className="hidden sm:block" />
                    <span className="text-white">UNC Chapel Hill</span>.
                </p>

                <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] animate-[float_6s_ease-in-out_infinite]">
                    <div className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10 rounded-full transform scale-90"></div>
                    <Image
                        src="/hero.png"
                        alt="Luminary App Interface"
                        width={1000}
                        height={1000}
                        priority
                        className="w-full h-auto drop-shadow-2xl"
                    />
                </div>

                <div className="mt-12">
                    <button className="glass-button text-white px-8 py-4 rounded-full text-lg font-semibold tracking-wide group flex items-center gap-3">
                        <span>Download on App Store</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
			</div>
		</section>
	);
}
