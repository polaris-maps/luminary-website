import Image from 'next/image';

export default function Download() {
	return (
		<section className="relative py-32 sm:py-48 overflow-hidden" id="download">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>

			<div className="max-w-4xl mx-auto px-4 text-center relative z-10">
				<h2 className="text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-8 tracking-tight">
                    Ready to <br className="hidden sm:block" />
                    <span className="text-gradient">Navigate?</span>
                </h2>
                <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
                    Join thousands of students navigating UNC with confidence. Download Luminary today.
                </p>
				
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
					<button className="group relative inline-flex items-center justify-center">
                        <div className="absolute inset-0 bg-white/20 blur-xl group-hover:bg-white/30 transition-colors duration-300 rounded-xl"></div>
						<Image
							src="/appstore.png"
							alt="Download on the App Store"
							height={78}
							width={264}
							className="relative w-auto h-16 sm:h-20 hover:scale-105 transition-transform duration-300"
						/>
					</button>
				</div>
			</div>
		</section>
	);
}
