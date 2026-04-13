'use client';

import { useRef, useEffect, useState } from 'react';


export default function About() {
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
		<section ref={sectionRef} className="relative py-24 lg:py-32 px-4" id="about">
			<div className="max-w-5xl mx-auto relative z-10">
				{/* Mission statement as editorial pull-quote */}
				<h2
					className={`font-[family-name:var(--font-serif)] text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.35] text-[var(--text-secondary)] mb-20 lg:mb-24 max-w-4xl transition-opacity duration-700 ${
						isVisible ? 'opacity-100' : 'opacity-0'
					}`}
				>
					We believe navigation should be{' '}
					<em className="text-[var(--foreground)] not-italic font-[family-name:var(--font-serif)] italic">limitless</em>. Luminary empowers every
					student at UNC Chapel Hill with{' '}
					<em className="text-[var(--foreground)] not-italic font-[family-name:var(--font-serif)] italic">
						personalized, accessible routes
					</em>
					. Because a barrier-free campus is a connected campus.
				</h2>

				</div>
		</section>
	);
}
