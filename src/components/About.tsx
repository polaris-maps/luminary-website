'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const quoteSegments = [
	{ text: 'We believe navigation should be ', highlight: false },
	{ text: 'limitless', highlight: true },
	{ text: '. Luminary empowers every student at UNC Chapel Hill with ', highlight: false },
	{ text: 'personalized, accessible routes', highlight: true },
	{ text: '. Because a barrier-free campus is a connected campus.', highlight: false },
];

export default function About() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

	return (
		<section ref={sectionRef} className="relative py-24 lg:py-32 px-4" id="about">
			<div className="max-w-5xl mx-auto relative z-10">
				{/* Mission pull-quote with word-by-word reveal */}
				<h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.35] max-w-4xl">
					{quoteSegments.map((segment, i) => (
						<motion.span
							key={i}
							initial={{ opacity: 0.25 }}
							animate={isInView ? { opacity: 1 } : {}}
							transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
							className={
								segment.highlight
									? 'text-[var(--foreground)] font-[family-name:var(--font-serif)] italic'
									: 'text-[var(--text-secondary)]'
							}
						>
							{segment.text}
						</motion.span>
					))}
				</h2>
			</div>
		</section>
	);
}
