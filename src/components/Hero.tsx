'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import BorderGlow from './BorderGlow';

export default function Hero() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<section className="relative min-h-screen flex items-center px-4 overflow-hidden">
			{/* Subtle topo texture on background */}
			<div className="absolute inset-0 topo-texture" />

			<div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center pt-24 lg:pt-0">
				{/* Text content */}
				<div className="space-y-8">
					{/* Headline */}
					<h1
						className={`font-[family-name:var(--font-serif)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.02em] ${
							mounted
								? 'animate-[reveal_0.8s_ease-out_0.2s_both]'
								: 'opacity-0'
						}`}
					>
						Navigate<br />
						without limits.
					</h1>

					{/* Subheadline */}
					<p
						className={`text-base sm:text-lg text-[var(--text-secondary)] max-w-md leading-relaxed transition-opacity duration-700 delay-500 ${
							mounted ? 'opacity-100' : 'opacity-0'
						}`}
					>
						The smarter, accessible way to navigate UNC Chapel Hill.
						Personalized routes tailored to your mobility needs.
					</p>

					{/* CTA */}
					<div
						className={`flex flex-col sm:flex-row items-start gap-4 transition-opacity duration-700 delay-700 ${
							mounted ? 'opacity-100' : 'opacity-0'
						}`}
					>
						<BorderGlow borderRadius={12} backgroundColor="#000000" edgeSensitivity={40} glowColor="210 100 80" animated>
							<a
								href="https://apps.apple.com/us/app/luminary-navigation/id6754342125"
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-3 text-sm sm:text-base flex items-center gap-2.5 text-[var(--foreground)] font-medium hover:text-white transition-colors"
							>
								<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
									<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
								</svg>
								Download for iOS
							</a>
						</BorderGlow>
					</div>
				</div>

				{/* Phone mockup */}
				<div
					className={`relative flex items-center justify-center transition-opacity duration-1000 delay-500 ${
						mounted ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<div className="relative w-full max-w-[420px] sm:max-w-[500px] md:max-w-[560px] lg:max-w-none lg:scale-[1.35] lg:origin-center">
						<Image
							src="/hero.png"
							alt="Luminary App Interface"
							width={1000}
							height={1000}
							priority
							className="w-full h-auto"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
