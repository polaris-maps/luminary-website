'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

const features = [
	{
		id: 1,
		number: '01',
		title: 'Route Customization',
		description:
			'Customize obstacle preferences specific to your mobility needs. Avoid stairs, steep hills, or construction zones with ease.',
		image: '/features/2.png',
		width: 700,
		height: 600,
	},
	{
		id: 2,
		number: '02',
		title: 'Saved Places',
		description:
			'Save frequently visited locations for quick access. Your dorm, favorite library, or dining hall is just a tap away.',
		image: '/features/3.png',
		width: 360,
		height: 600,
	},
	{
		id: 3,
		number: '03',
		title: 'Community Alerts',
		description:
			'Get real-time alerts from other users about temporary obstacles, elevators out of service, or blocked paths.',
		image: '/features/4.png',
		width: 700,
		height: 600,
	},
	{
		id: 4,
		number: '04',
		title: 'Quick Reporting',
		description:
			'Help the community by quickly reporting issues you encounter. A barrier-free campus starts with us.',
		image: '/features/5.png',
		width: 700,
		height: 600,
	},
];

function FeatureCard({ feature }: { feature: (typeof features)[0] }) {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setIsVisible(true);
			},
			{ threshold: 0.15 }
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center"
		>
			{/* Text */}
			<div
				className={`space-y-4 transition-opacity duration-700 ${
					isVisible ? 'opacity-100' : 'opacity-0'
				}`}
			>
				<span className="font-[family-name:var(--font-mono)] text-sm text-[var(--accent-warm)] tracking-wider">
					{feature.number}
				</span>
				<h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl lg:text-4xl text-[var(--foreground)] leading-tight">
					{feature.title}
				</h3>
				<p className="text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed max-w-md">
					{feature.description}
				</p>
			</div>

			{/* Image */}
			<div
				className={`w-full flex justify-center transition-opacity duration-700 delay-150 ${
					isVisible ? 'opacity-100' : 'opacity-0'
				}`}
			>
				<div className="relative group w-full max-w-sm">
					<Image
						src={feature.image}
						alt={feature.title}
						width={feature.width}
						height={feature.height}
						className="w-full h-auto rounded-lg transform group-hover:scale-[1.01] transition-transform duration-500"
					/>
				</div>
			</div>
		</div>
	);
}

export default function Features() {
	return (
		<section className="py-24 lg:py-32 relative" id="features">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section header */}
				<div className="mb-20 lg:mb-28">
					<h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl text-[var(--foreground)] mb-5 tracking-tight">
						Powered by intelligence.
					</h2>
					<p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-xl">
						Everything you need to navigate campus with confidence, designed around real student needs.
					</p>
				</div>

				<div className="space-y-24 lg:space-y-32">
					{features.map((feature) => (
						<FeatureCard key={feature.id} feature={feature} />
					))}
				</div>
			</div>
		</section>
	);
}
