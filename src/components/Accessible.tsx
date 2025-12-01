import Image from 'next/image';

export default function Accessible() {
	return (
		<section className="py-24 relative overflow-hidden" id="accessible">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
					<div className="relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[100px] rounded-full -z-10 animate-[pulse-glow_5s_infinite]"></div>
						<Image
							src="/accessibility.png"
							alt="Luminary accessibility features screenshot"
							width={1264}
							height={580}
							className="w-full h-auto drop-shadow-2xl rounded-xl border border-white/10 glass-panel"
						/>
					</div>

                    {/* Text Side */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                                Built for <span className="text-gradient">Everyone.</span>
                            </h2>
                            <p className="text-lg text-neutral-400 leading-relaxed">
                                Accessibility isn&apos;t an afterthought—it&apos;s our foundation. Luminary provides detailed insights into campus accessibility.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                "Wheelchair accessible ramps & elevators",
                                "Detailed construction detours",
                                "Audio guidance for visual impairments",
                                "Crowdsourced hazard reporting"
                            ].map((item, i) => (
                                <div key={i} className="glass-panel p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-white font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
				</div>
			</div>
		</section>
	);
}
