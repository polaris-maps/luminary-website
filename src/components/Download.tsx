'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

export default function Download() {
	const sectionRef = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setIsVisible(true);
			},
			{ threshold: 0.2 }
		);
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<section ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden" id="download">
			{/* SVG route line */}
			<svg
				className="absolute inset-0 w-full h-full pointer-events-none"
				preserveAspectRatio="none"
				viewBox="0 0 400 300"
				fill="none"
			>
				<path
					d="M 50 20 C 100 60, 150 80, 200 120 S 320 200, 350 280"
					stroke="var(--accent-warm)"
					strokeWidth="0.5"
					strokeLinecap="round"
					opacity="0.12"
					strokeDasharray="400"
					className={isVisible ? 'animate-[draw-path_2s_ease-out_0.5s_both]' : ''}
					style={{ '--path-length': '400' } as React.CSSProperties}
				/>
			</svg>

			<div className="max-w-3xl mx-auto px-4 text-center relative z-10">
				<div
					className={`transition-opacity duration-700 ${
						isVisible ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<h2 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--foreground)] mb-6 tracking-tight">
						Ready to navigate?
					</h2>

					<p className="text-base sm:text-lg text-[var(--text-secondary)] mb-12 max-w-lg mx-auto leading-relaxed">
						Join thousands of students navigating UNC with confidence. Download Luminary today — it&apos;s free.
					</p>
				</div>

				<div
					className={`transition-opacity duration-700 delay-300 ${
						isVisible ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<a
						href="https://apps.apple.com/us/app/luminary-navigation/id6754342125"
						target="_blank"
						rel="noopener noreferrer"
						className="group relative inline-flex items-center justify-center p-1"
					>
						<Image
							src="/appstore.png"
							alt="Download on the App Store"
							height={78}
							width={264}
							className="relative w-auto h-14 sm:h-16 hover:scale-[1.02] transition-transform duration-300"
						/>
					</a>
				</div>
			</div>
		</section>
	);
}
