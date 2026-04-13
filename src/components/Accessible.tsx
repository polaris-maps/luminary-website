'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

const capabilities = [
	{
		title: 'Wheelchair accessible ramps & elevators',
		description: 'Every route considers physical accessibility requirements.',
	},
	{
		title: 'Detailed construction detours',
		description: 'Real-time routing around campus construction zones.',
	},
	{
		title: 'Audio guidance for visual impairments',
		description: 'Turn-by-turn voice navigation with spatial cues.',
	},
	{
		title: 'Crowdsourced hazard reporting',
		description: 'Community-driven alerts keep routes safe and current.',
	},
];

export default function Accessible() {
	const sectionRef = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setIsVisible(true);
			},
			{ threshold: 0.1 }
		);
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<section ref={sectionRef} className="py-24 lg:py-32 relative" id="accessible">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					{/* Image */}
					<div
						className={`relative transition-opacity duration-700 ${
							isVisible ? 'opacity-100' : 'opacity-0'
						}`}
					>
						<Image
							src="/accessibility.png"
							alt="Luminary accessibility features screenshot"
							width={1264}
							height={580}
							className="w-full h-auto rounded-lg"
						/>
					</div>

					{/* Content */}
					<div className="space-y-10">
						<div
							className={`transition-opacity duration-700 delay-100 ${
								isVisible ? 'opacity-100' : 'opacity-0'
							}`}
						>
							<h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl text-[var(--foreground)] mb-4 tracking-tight">
								Built for{' '}
								<em className="italic">everyone.</em>
							</h2>
							<p className="text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed">
								Accessibility isn&apos;t an afterthought — it&apos;s our
								foundation. Luminary provides detailed insights into campus
								accessibility.
							</p>
						</div>

						<div
							className={`space-y-5 transition-opacity duration-700 delay-300 ${
								isVisible ? 'opacity-100' : 'opacity-0'
							}`}
						>
							{capabilities.map((item, i) => (
								<div key={i} className="flex items-start gap-4">
									<div className="w-[6px] h-[6px] rounded-full bg-[var(--accent-green)] mt-2.5 shrink-0" />
									<div>
										<span className="text-[var(--foreground)] font-medium text-[15px] block mb-0.5">
											{item.title}
										</span>
										<span className="text-[var(--text-tertiary)] text-sm">
											{item.description}
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
