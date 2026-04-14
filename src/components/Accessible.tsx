'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
		title: 'Crowdsourced hazard reporting',
		description: 'Community-driven alerts keep routes safe and current.',
	},
];

export default function Accessible() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
	const listRef = useRef<HTMLDivElement>(null);
	const listInView = useInView(listRef, { once: true, margin: '-40px' });

	return (
		<section ref={sectionRef} className="py-24 lg:py-32 relative" id="accessible">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					{/* Image with green glow */}
					<motion.div
						initial={{ opacity: 0, scale: 0.96 }}
						animate={isInView ? { opacity: 1, scale: 1 } : {}}
						transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
						className="relative"
					>
						<div
							className="absolute -inset-8 rounded-3xl opacity-0 transition-opacity duration-700"
							style={{
								background: 'radial-gradient(ellipse at center, rgba(123, 174, 127, 0.08) 0%, transparent 70%)',
								opacity: isInView ? 1 : 0,
							}}
						/>
						<Image
							src="/accessibility.png"
							alt="Luminary accessibility features screenshot"
							width={1264}
							height={580}
							className="w-full h-auto rounded-lg relative"
						/>
					</motion.div>

					{/* Content */}
					<div className="space-y-10">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
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
						</motion.div>

						<div ref={listRef} className="space-y-5">
							{capabilities.map((item, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, x: 20 }}
									animate={listInView ? { opacity: 1, x: 0 } : {}}
									transition={{
										duration: 0.5,
										delay: i * 0.1,
										ease: [0.22, 1, 0.36, 1],
									}}
									className="flex items-start gap-4 group"
								>
									<motion.div
										initial={{ scale: 0 }}
										animate={listInView ? { scale: 1 } : {}}
										transition={{
											type: 'spring',
											stiffness: 400,
											damping: 15,
											delay: 0.2 + i * 0.1,
										}}
										className="w-[6px] h-[6px] rounded-full bg-[var(--accent-green)] mt-2.5 shrink-0"
										style={{
											animation: listInView ? `dot-pulse 2s ease-in-out ${1 + i * 0.3}s` : 'none',
										}}
									/>
									<div>
										<span className="text-[var(--foreground)] font-medium text-[15px] block mb-0.5 group-hover:text-white transition-colors">
											{item.title}
										</span>
										<span className="text-[var(--text-tertiary)] text-sm">
											{item.description}
										</span>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
