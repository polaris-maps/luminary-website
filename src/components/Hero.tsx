'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BorderGlow from './BorderGlow';

const headlineWords = ['Navigate', 'without', 'limits.'];

export default function Hero() {
	const sectionRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start start', 'end start'],
	});
	const phoneY = useTransform(scrollYProgress, [0, 1], [0, -80]);
	const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

	return (
		<section ref={sectionRef} className="relative min-h-screen flex items-center px-4 overflow-hidden">
			{/* Ambient gradient orbs */}
			<motion.div
				style={{ scale: orbScale }}
				className="absolute inset-0 pointer-events-none overflow-hidden"
			>
				<div
					className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full opacity-[0.07]"
					style={{
						background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
						animation: 'float 8s ease-in-out infinite',
					}}
				/>
				<div
					className="absolute top-[10%] -right-[5%] w-[500px] h-[500px] rounded-full opacity-[0.05]"
					style={{
						background: 'radial-gradient(circle, var(--accent-warm) 0%, transparent 70%)',
						animation: 'float-reverse 10s ease-in-out infinite',
					}}
				/>
				<div
					className="absolute bottom-[5%] left-[30%] w-[400px] h-[400px] rounded-full opacity-[0.04]"
					style={{
						background: 'radial-gradient(circle, var(--accent-green) 0%, transparent 70%)',
						animation: 'float 12s ease-in-out infinite 2s',
					}}
				/>
			</motion.div>

			<div className="absolute inset-0 topo-texture" />

			<div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center pt-24 lg:pt-0">
				{/* Text content */}
				<div className="space-y-8">
					{/* Staggered headline */}
					<h1 className="font-[family-name:var(--font-serif)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.02em]">
						{headlineWords.map((word, i) => (
							<motion.span
								key={word}
								initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
								animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
								transition={{
									duration: 0.7,
									delay: 0.3 + i * 0.15,
									ease: [0.22, 1, 0.36, 1],
								}}
								className="inline-block mr-[0.3em]"
							>
								{word}
							</motion.span>
						))}
					</h1>

					{/* Subheadline */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
						className="text-base sm:text-lg text-[var(--text-secondary)] max-w-md leading-relaxed"
					>
						The smarter, accessible way to navigate UNC Chapel Hill.
						Personalized routes tailored to your mobility needs.
					</motion.p>

					{/* CTA */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
						className="flex flex-col sm:flex-row items-start gap-4"
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
					</motion.div>
				</div>

				{/* Phone mockup with parallax and glow */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
					style={{ y: phoneY }}
					className="relative flex items-center justify-center"
				>
					{/* Radial glow behind phone */}
					<div
						className="absolute inset-0 -inset-x-12"
						style={{
							background: 'radial-gradient(ellipse at center, rgba(75, 156, 211, 0.08) 0%, transparent 65%)',
							animation: 'pulse-glow 4s ease-in-out infinite',
						}}
					/>
					<div className="relative w-full max-w-[420px] sm:max-w-[500px] md:max-w-[560px] lg:max-w-none lg:scale-[1.35] lg:origin-center">
						<Image
							src="/hero.png"
							alt="Luminary App Interface"
							width={1000}
							height={1000}
							priority
							className="w-full h-auto drop-shadow-2xl"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
