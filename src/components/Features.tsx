'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: '-80px' });
	const isReversed = index % 2 !== 0;

	return (
		<div
			ref={ref}
			className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
				isReversed ? 'lg:[direction:rtl]' : ''
			}`}
		>
			{/* Text */}
			<motion.div
				initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
				animate={isInView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
				className={`space-y-4 relative ${isReversed ? 'lg:[direction:ltr]' : ''}`}
			>
				{/* Large decorative number */}
				<span className="absolute -top-8 -left-2 font-[family-name:var(--font-mono)] text-[6rem] sm:text-[8rem] leading-none text-white/[0.03] font-bold select-none pointer-events-none">
					{feature.number}
				</span>
				<span className="font-[family-name:var(--font-mono)] text-sm text-[var(--accent-warm)] tracking-wider relative">
					{feature.number}
				</span>
				<h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl lg:text-4xl text-[var(--foreground)] leading-tight relative">
					{feature.title}
				</h3>
				<p className="text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed max-w-md relative">
					{feature.description}
				</p>
			</motion.div>

			{/* Image in glass card */}
			<motion.div
				initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
				animate={isInView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
				className={`w-full flex justify-center ${isReversed ? 'lg:[direction:ltr]' : ''}`}
			>
				<div className="relative group w-full max-w-sm">
					<Image
						src={feature.image}
						alt={feature.title}
						width={feature.width}
						height={feature.height}
						className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500"
					/>
				</div>
			</motion.div>
		</div>
	);
}

export default function Features() {
	const headerRef = useRef<HTMLDivElement>(null);
	const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

	return (
		<section className="py-24 lg:py-32 relative" id="features">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section header */}
				<div ref={headerRef} className="mb-20 lg:mb-28">
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						animate={headerInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
						className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl text-[var(--foreground)] mb-5 tracking-tight"
					>
						Powered by intelligence.
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={headerInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
						className="text-[var(--text-secondary)] text-base sm:text-lg max-w-xl"
					>
						Everything you need to navigate campus with confidence, designed around real student needs.
					</motion.p>
				</div>

				<div className="space-y-24 lg:space-y-32">
					{features.map((feature, index) => (
						<FeatureCard key={feature.id} feature={feature} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
